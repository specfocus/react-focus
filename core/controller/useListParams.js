"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOrDefault = exports.getQuery = exports.hasCustomParams = exports.parseQueryFromLocation = exports.validQueryParams = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var query_string_1 = require("query-string");
var debounce_1 = __importDefault(require("lodash/debounce"));
var pickBy_1 = __importDefault(require("lodash/pickBy"));
var react_router_dom_1 = require("react-router-dom");
var queryReducer_1 = __importStar(require("../reducer/admin/resource/list/queryReducer"));
var listActions_1 = require("../actions/listActions");
var removeEmpty_1 = __importDefault(require("../util/removeEmpty"));
var emptyObject = {};
var defaultSort = {
    field: 'id',
    order: queryReducer_1.SORT_ASC,
};
var defaultParams = {};
/**
 * Get the list parameters (page, sort, filters) and modifiers.
 *
 * These parameters are merged from 3 sources:
 *   - the query string from the URL
 *   - the params stored in the state (from previous navigation)
 *   - the options passed to the hook (including the filter defaultValues)
 *
 * @returns {Array} A tuple [parameters, modifiers].
 * Destructure as [
 *    { page, perPage, sort, order, filter, filterValues, displayedFilters, requestSignature },
 *    { setFilters, hideFilter, showFilter, setPage, setPerPage, setSort }
 * ]
 *
 * @example
 *
 * const [listParams, listParamsActions] = useListParams({
 *      resource: 'posts',
 *      location: location // From react-router. Injected to your component by ../../app inside a List
 *      filterDefaultValues: {
 *          published: true
 *      },
 *      sort: {
 *          field: 'published_at',
 *          order: 'DESC'
 *      },
 *      perPage: 25
 * });
 *
 * const {
 *      page,
 *      perPage,
 *      sort,
 *      order,
 *      filter,
 *      filterValues,
 *      displayedFilters,
 *      requestSignature
 * } = listParams;
 *
 * const {
 *      setFilters,
 *      hideFilter,
 *      showFilter,
 *      setPage,
 *      setPerPage,
 *      setSort,
 * } = listParamsActions;
 */
var useListParams = function (_a) {
    var resource = _a.resource, filterDefaultValues = _a.filterDefaultValues, _b = _a.sort, sort = _b === void 0 ? defaultSort : _b, _c = _a.perPage, perPage = _c === void 0 ? 10 : _c, _d = _a.debounce, debounce = _d === void 0 ? 500 : _d, _e = _a.syncWithLocation, syncWithLocation = _e === void 0 ? false : _e;
    var dispatch = (0, react_redux_1.useDispatch)();
    var location = (0, react_router_dom_1.useLocation)();
    var history = (0, react_router_dom_1.useHistory)();
    var _f = (0, react_1.useState)(defaultParams), localParams = _f[0], setLocalParams = _f[1];
    var params = (0, react_redux_1.useSelector)(function (reduxState) {
        return reduxState.admin.resources[resource]
            ? reduxState.admin.resources[resource].list.params
            : defaultParams;
    }, react_redux_1.shallowEqual);
    var tempParams = (0, react_1.useRef)();
    var requestSignature = [
        location.search,
        resource,
        syncWithLocation ? params : localParams,
        filterDefaultValues,
        JSON.stringify(sort),
        perPage,
        syncWithLocation,
    ];
    var queryFromLocation = syncWithLocation
        ? (0, exports.parseQueryFromLocation)(location)
        : {};
    var query = (0, react_1.useMemo)(function () {
        return (0, exports.getQuery)({
            queryFromLocation: queryFromLocation,
            params: syncWithLocation ? params : localParams,
            filterDefaultValues: filterDefaultValues,
            sort: sort,
            perPage: perPage,
        });
    }, requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    // if the location includes params (for example from a link like
    // the categories products on the demo), we need to persist them in the
    // redux state as well so that we don't lose them after a redirection back
    // to the list
    (0, react_1.useEffect)(function () {
        if (Object.keys(queryFromLocation).length > 0) {
            dispatch((0, listActions_1.changeListParams)(resource, query));
        }
    }, [location.search]); // eslint-disable-line
    var changeParams = (0, react_1.useCallback)(function (action) {
        if (!tempParams.current) {
            // no other changeParams action dispatched this tick
            tempParams.current = (0, queryReducer_1.default)(query, action);
            // schedule side effects for next tick
            setTimeout(function () {
                if (syncWithLocation) {
                    history.push({
                        search: "?".concat((0, query_string_1.stringify)(__assign(__assign({}, tempParams.current), { filter: JSON.stringify(tempParams.current.filter), displayedFilters: JSON.stringify(tempParams.current.displayedFilters) }))),
                        state: { _scrollToTop: action.type === queryReducer_1.SET_PAGE },
                    });
                    // the useEffect above will apply the changes to the params in the redux state
                }
                else {
                    setLocalParams(tempParams.current);
                }
                tempParams.current = undefined;
            }, 0);
        }
        else {
            // side effects already scheduled, just change the params
            tempParams.current = (0, queryReducer_1.default)(tempParams.current, action);
        }
    }, requestSignature); // eslint-disable-line react-hooks/exhaustive-deps
    var setSort = (0, react_1.useCallback)(function (sort, order) {
        return changeParams({
            type: queryReducer_1.SET_SORT,
            payload: { sort: sort, order: order },
        });
    }, requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    var setPage = (0, react_1.useCallback)(function (newPage) { return changeParams({ type: queryReducer_1.SET_PAGE, payload: newPage }); }, requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    var setPerPage = (0, react_1.useCallback)(function (newPerPage) {
        return changeParams({ type: queryReducer_1.SET_PER_PAGE, payload: newPerPage });
    }, requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    var filterValues = query.filter || emptyObject;
    var displayedFilterValues = query.displayedFilters || emptyObject;
    var debouncedSetFilters = (0, debounce_1.default)(function (filter, displayedFilters) {
        changeParams({
            type: queryReducer_1.SET_FILTER,
            payload: {
                filter: (0, removeEmpty_1.default)(filter),
                displayedFilters: displayedFilters,
            },
        });
    }, debounce);
    var setFilters = (0, react_1.useCallback)(function (filter, displayedFilters, debounce) {
        if (debounce === void 0) { debounce = true; }
        return debounce
            ? debouncedSetFilters(filter, displayedFilters)
            : changeParams({
                type: queryReducer_1.SET_FILTER,
                payload: {
                    filter: (0, removeEmpty_1.default)(filter),
                    displayedFilters: displayedFilters,
                },
            });
    }, requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    var hideFilter = (0, react_1.useCallback)(function (filterName) {
        changeParams({
            type: queryReducer_1.HIDE_FILTER,
            payload: filterName,
        });
    }, requestSignature); // eslint-disable-line react-hooks/exhaustive-deps
    var showFilter = (0, react_1.useCallback)(function (filterName, defaultValue) {
        changeParams({
            type: queryReducer_1.SHOW_FILTER,
            payload: {
                filterName: filterName,
                defaultValue: defaultValue,
            },
        });
    }, requestSignature); // eslint-disable-line react-hooks/exhaustive-deps
    return [
        __assign({ displayedFilters: displayedFilterValues, filterValues: filterValues, requestSignature: requestSignature }, query),
        {
            changeParams: changeParams,
            setPage: setPage,
            setPerPage: setPerPage,
            setSort: setSort,
            setFilters: setFilters,
            hideFilter: hideFilter,
            showFilter: showFilter,
        },
    ];
};
exports.validQueryParams = [
    'page',
    'perPage',
    'sort',
    'order',
    'filter',
    'displayedFilters',
];
var parseObject = function (query, field) {
    if (query[field] && typeof query[field] === 'string') {
        try {
            query[field] = JSON.parse(query[field]);
        }
        catch (err) {
            delete query[field];
        }
    }
};
var parseQueryFromLocation = function (_a) {
    var search = _a.search;
    var query = (0, pickBy_1.default)((0, query_string_1.parse)(search), function (v, k) { return exports.validQueryParams.indexOf(k) !== -1; });
    parseObject(query, 'filter');
    parseObject(query, 'displayedFilters');
    return query;
};
exports.parseQueryFromLocation = parseQueryFromLocation;
/**
 * Check if user has already set custom sort, page, or filters for this list
 *
 * User params come from the Redux store as the params props. By default,
 * this object is:
 *
 * { filter: {}, order: null, page: 1, perPage: null, sort: null }
 *
 * To check if the user has custom params, we must compare the params
 * to these initial values.
 *
 * @param {Object} params
 */
var hasCustomParams = function (params) {
    return (params &&
        params.filter &&
        (Object.keys(params.filter).length > 0 ||
            params.order != null ||
            params.page !== 1 ||
            params.perPage != null ||
            params.sort != null));
};
exports.hasCustomParams = hasCustomParams;
/**
 * Merge list params from 3 different sources:
 *   - the query string
 *   - the params stored in the state (from previous navigation)
 *   - the props passed to the List component (including the filter defaultValues)
 */
var getQuery = function (_a) {
    var queryFromLocation = _a.queryFromLocation, params = _a.params, filterDefaultValues = _a.filterDefaultValues, sort = _a.sort, perPage = _a.perPage;
    var query = Object.keys(queryFromLocation).length > 0
        ? queryFromLocation
        : (0, exports.hasCustomParams)(params)
            ? __assign({}, params) : { filter: filterDefaultValues || {} };
    if (!query.sort) {
        query.sort = sort.field;
        query.order = sort.order;
    }
    if (query.perPage == null) {
        query.perPage = perPage;
    }
    if (query.page == null) {
        query.page = 1;
    }
    return __assign(__assign({}, query), { page: (0, exports.getNumberOrDefault)(query.page, 1), perPage: (0, exports.getNumberOrDefault)(query.perPage, 10) });
};
exports.getQuery = getQuery;
var getNumberOrDefault = function (possibleNumber, defaultValue) {
    var parsedNumber = typeof possibleNumber === 'string'
        ? parseInt(possibleNumber, 10)
        : possibleNumber;
    return isNaN(parsedNumber) ? defaultValue : parsedNumber;
};
exports.getNumberOrDefault = getNumberOrDefault;
exports.default = useListParams;
