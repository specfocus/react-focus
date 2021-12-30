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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useList = void 0;
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var util_1 = require("../util");
var usePaginationState_1 = __importDefault(require("./usePaginationState"));
var useSortState_1 = __importDefault(require("./useSortState"));
var useSelectionState_1 = __importDefault(require("./useSelectionState"));
/**
 * Handle filtering, sorting and pagination on local data.
 *
 * Returns the data and callbacks expected by <ListContext>.
 *
 * @example
 * const data = [
 *     { id: 1, name: 'Arnold' },
 *     { id: 2, name: 'Sylvester' },
 *     { id: 3, name: 'Jean-Claude' },
 * ]
 * const ids = [1, 2, 3];
 *
 * const MyComponent = () => {
 *     const listContext = useList({
 *         data,
 *         ids,
 *         basePath: '/resource';
 *         resource: 'resource';
 *     });
 *     return (
 *         <ListContextProvider value={listContext}>
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="name" />
 *             </Datagrid>
 *         </ListContextProvider>
 *     );
 * };
 *
 * @param {UseListOptions} props
 * @param {Record[]} props.data An array of records
 * @param {Identifier[]} props.ids An array of the record identifiers
 * @param {Boolean} props.loaded: A boolean indicating whether the data has been loaded at least once
 * @param {Boolean} props.loading: A boolean indicating whether the data is being loaded
 * @param {Error | String} props.error: Optional. The error if any occurred while loading the data
 * @param {Object} props.filter: Optional. An object containing the filters applied on the data
 * @param {Number} props.page: Optional. The initial page index
 * @param {Number} props.perPage: Optional. The initial page size
 * @param {SortPayload} props.sort: Optional. The initial sort (field and order)
 */
var useList = function (props) {
    var data = props.data, error = props.error, _a = props.filter, filter = _a === void 0 ? defaultFilter : _a, ids = props.ids, loaded = props.loaded, loading = props.loading, _b = props.page, initialPage = _b === void 0 ? 1 : _b, _c = props.perPage, initialPerPage = _c === void 0 ? 1000 : _c, _d = props.sort, initialSort = _d === void 0 ? defaultSort : _d;
    var _e = (0, util_1.useSafeSetState)(loading), loadingState = _e[0], setLoadingState = _e[1];
    var _f = (0, util_1.useSafeSetState)(loaded), loadedState = _f[0], setLoadedState = _f[1];
    var _g = (0, util_1.useSafeSetState)(function () { return ({
        data: (0, util_1.indexById)(data),
        ids: ids,
        total: ids.length,
    }); }), finalItems = _g[0], setFinalItems = _g[1];
    // pagination logic
    var _h = (0, usePaginationState_1.default)({
        page: initialPage,
        perPage: initialPerPage,
    }), page = _h.page, setPage = _h.setPage, perPage = _h.perPage, setPerPage = _h.setPerPage;
    // sort logic
    var _j = (0, useSortState_1.default)(initialSort), sort = _j.sort, setSortObject = _j.setSort;
    var setSort = (0, react_1.useCallback)(function (field, order) {
        if (order === void 0) { order = 'ASC'; }
        setSortObject({ field: field, order: order });
        setPage(1);
    }, [setPage, setSortObject]);
    // selection logic
    var _k = (0, useSelectionState_1.default)(), selectedIds = _k.selectedIds, onSelect = _k.onSelect, onToggleItem = _k.onToggleItem, onUnselectItems = _k.onUnselectItems;
    // filter logic
    var filterRef = (0, react_1.useRef)(filter);
    var _l = (0, util_1.useSafeSetState)({}), displayedFilters = _l[0], setDisplayedFilters = _l[1];
    var _m = (0, util_1.useSafeSetState)(filter), filterValues = _m[0], setFilterValues = _m[1];
    var hideFilter = (0, react_1.useCallback)(function (filterName) {
        setDisplayedFilters(function (previousState) {
            var _a = previousState, _b = filterName, _ = _a[_b], newState = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return newState;
        });
        setFilterValues(function (previousState) {
            var _a = previousState, _b = filterName, _ = _a[_b], newState = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return newState;
        });
    }, [setDisplayedFilters, setFilterValues]);
    var showFilter = (0, react_1.useCallback)(function (filterName, defaultValue) {
        setDisplayedFilters(function (previousState) {
            var _a;
            return (__assign(__assign({}, previousState), (_a = {}, _a[filterName] = true, _a)));
        });
        setFilterValues(function (previousState) {
            var _a;
            return (0, util_1.removeEmpty)(__assign(__assign({}, previousState), (_a = {}, _a[filterName] = defaultValue, _a)));
        });
    }, [setDisplayedFilters, setFilterValues]);
    var setFilters = (0, react_1.useCallback)(function (filters, displayedFilters) {
        setFilterValues((0, util_1.removeEmpty)(filters));
        if (displayedFilters) {
            setDisplayedFilters(displayedFilters);
        }
        setPage(1);
    }, [setDisplayedFilters, setFilterValues, setPage]);
    // handle filter prop change
    (0, react_1.useEffect)(function () {
        if (!(0, isEqual_1.default)(filter, filterRef.current)) {
            filterRef.current = filter;
            setFilterValues(filter);
        }
    });
    // We do all the data processing (filtering, sorting, paginating) client-side
    (0, react_1.useEffect)(function () {
        if (!loaded)
            return;
        // 1. filter
        var tempData = data.filter(function (record) {
            return Object.entries(filterValues).every(function (_a) {
                var filterName = _a[0], filterValue = _a[1];
                var recordValue = (0, get_1.default)(record, filterName);
                var result = Array.isArray(recordValue)
                    ? Array.isArray(filterValue)
                        ? recordValue.some(function (item) { return filterValue.includes(item); })
                        : recordValue.includes(filterValue)
                    : Array.isArray(filterValue)
                        ? filterValue.includes(recordValue)
                        : filterValue == recordValue; // eslint-disable-line eqeqeq
                return result;
            });
        });
        var filteredLength = tempData.length;
        // 2. sort
        if (sort.field) {
            tempData = tempData.sort(function (a, b) {
                if ((0, get_1.default)(a, sort.field) > (0, get_1.default)(b, sort.field)) {
                    return sort.order === 'ASC' ? 1 : -1;
                }
                if ((0, get_1.default)(a, sort.field) < (0, get_1.default)(b, sort.field)) {
                    return sort.order === 'ASC' ? -1 : 1;
                }
                return 0;
            });
        }
        // 3. paginate
        tempData = tempData.slice((page - 1) * perPage, page * perPage);
        var finalData = (0, util_1.indexById)(tempData);
        var finalIds = tempData
            .filter(function (data) { return typeof data !== 'undefined'; })
            .map(function (data) { return data.id; });
        setFinalItems({
            data: finalData,
            ids: finalIds,
            total: filteredLength,
        });
    }, [
        data,
        filterValues,
        loaded,
        page,
        perPage,
        setFinalItems,
        sort.field,
        sort.order,
    ]);
    (0, react_1.useEffect)(function () {
        if (loaded !== loadedState) {
            setLoadedState(loaded);
        }
    }, [loaded, loadedState, setLoadedState]);
    (0, react_1.useEffect)(function () {
        if (loading !== loadingState) {
            setLoadingState(loading);
        }
    }, [loading, loadingState, setLoadingState]);
    return {
        currentSort: sort,
        data: finalItems.data,
        error: error,
        displayedFilters: displayedFilters,
        filterValues: filterValues,
        hideFilter: hideFilter,
        ids: finalItems.ids,
        loaded: loadedState,
        loading: loadingState,
        onSelect: onSelect,
        onToggleItem: onToggleItem,
        onUnselectItems: onUnselectItems,
        page: page,
        perPage: perPage,
        selectedIds: selectedIds,
        setFilters: setFilters,
        setPage: setPage,
        setPerPage: setPerPage,
        setSort: setSort,
        showFilter: showFilter,
        total: finalItems.total,
    };
};
exports.useList = useList;
var defaultFilter = {};
var defaultSort = { field: null, order: null };