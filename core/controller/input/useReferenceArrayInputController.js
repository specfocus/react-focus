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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReferenceArrayInputController = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var difference_1 = __importDefault(require("lodash/difference"));
var dataProvider_1 = require("../../dataProvider");
var react_final_form_1 = require("react-final-form");
var useGetMatching_1 = __importDefault(require("../../dataProvider/useGetMatching"));
var i18n_1 = require("../../i18n");
var referenceDataStatus_1 = require("./referenceDataStatus");
var core_1 = require("../../core");
var __1 = require("..");
var util_1 = require("../../util");
/**
 * Prepare data for the ReferenceArrayInput components
 *
 * @example
 *
 * const { choices, error, loaded, loading } = useReferenceArrayInputController({
 *      basePath: 'resource';
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} props
 * @param {string} props.basePath basepath to current resource
 * @param {Object} props.record The current resource record
 * @param {string} props.reference The linked resource name
 * @param {string} props.resource The current resource name
 * @param {string} props.source The key of the linked resource identifier
 *
 * @param {Props} props
 *
 * @return {Object} controllerProps Fetched data and callbacks for the ReferenceArrayInput components
 */
var useReferenceArrayInputController = function (props) {
    var defaultFilter = props.filter, _a = props.filterToQuery, filterToQuery = _a === void 0 ? defaultFilterToQuery : _a, input = props.input, _b = props.page, initialPage = _b === void 0 ? 1 : _b, _c = props.perPage, initialPerPage = _c === void 0 ? 25 : _c, _d = props.sort, initialSort = _d === void 0 ? { field: 'id', order: 'DESC' } : _d, options = props.options, reference = props.reference, source = props.source;
    var resource = (0, core_1.useResourceContext)(props);
    var translate = (0, i18n_1.useTranslate)();
    // We store the current input value in a ref so that we are able to fetch
    // only the missing references when the input value changes
    var inputValue = (0, react_1.useRef)(input.value);
    var _e = (0, react_1.useState)(input.value), idsToFetch = _e[0], setIdsToFetch = _e[1];
    var _f = (0, react_1.useState)([]), idsToGetFromStore = _f[0], setIdsToGetFromStore = _f[1];
    var referenceRecordsFromStore = (0, react_redux_1.useSelector)(function (state) {
        return idsToGetFromStore.map(function (id) { return state.admin.resources[reference].data[id]; });
    });
    // optimization: we fetch selected items only once. When the user selects more items,
    // as we already have the past selected items in the store, we don't fetch them.
    (0, react_1.useEffect)(function () {
        // Only fetch new ids
        var newIdsToFetch = (0, difference_1.default)(input.value, inputValue.current);
        // Only get from store ids selected and already fetched
        var newIdsToGetFromStore = (0, difference_1.default)(input.value, newIdsToFetch);
        /*
            input.value (current)
                +------------------------+
                | ********************** |
                | ********************** |  inputValue.current (old)
                | ********** +-----------------------+
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                +---|--------|------|----+           |
                    |        |      |                |
                    |        |      |                |
                    |        +------|----------------+
                    |               |
            newIdsToFetch    newIdsToGetFromStore
        */
        // Change states each time input values changes to avoid keeping previous values no more selected
        if (!(0, isEqual_1.default)(idsToFetch, newIdsToFetch)) {
            setIdsToFetch(newIdsToFetch);
        }
        if (!(0, isEqual_1.default)(idsToGetFromStore, newIdsToGetFromStore)) {
            setIdsToGetFromStore(newIdsToGetFromStore);
        }
        inputValue.current = input.value;
    }, [
        idsToFetch,
        idsToGetFromStore,
        input.value,
        setIdsToFetch,
        setIdsToGetFromStore,
    ]);
    // pagination logic
    var _g = (0, __1.usePaginationState)({
        page: initialPage,
        perPage: initialPerPage,
    }), page = _g.page, setPage = _g.setPage, perPage = _g.perPage, setPerPage = _g.setPerPage, pagination = _g.pagination, setPagination = _g.setPagination;
    var form = (0, react_final_form_1.useForm)();
    var onSelect = (0, react_1.useCallback)(function (newIds) {
        var newValue = new Set(input.value);
        newIds.forEach(function (newId) {
            newValue.add(newId);
        });
        form.change(input.name, Array.from(newValue));
    }, [form, input.name, input.value]);
    var onUnselectItems = (0, react_1.useCallback)(function () {
        form.change(input.name, []);
    }, [form, input.name]);
    var onToggleItem = (0, react_1.useCallback)(function (id) {
        if (input.value.some(function (selectedId) { return selectedId === id; })) {
            form.change(input.name, input.value.filter(function (selectedId) { return selectedId !== id; }));
        }
        else {
            form.change(input.name, __spreadArray(__spreadArray([], input.value, true), [id], false));
        }
    }, [form, input.name, input.value]);
    // sort logic
    var sortRef = (0, react_1.useRef)(initialSort);
    var _h = (0, __1.useSortState)(initialSort), sort = _h.sort, setSort = _h.setSort;
    // ReferenceArrayInput.setSort had a different signature than the one from ListContext.
    // In order to not break backward compatibility, we added this temporary setSortForList in the
    // ReferenceArrayInputContext
    var setSortForList = (0, react_1.useCallback)(function (field, order) {
        if (order === void 0) { order = 'ASC'; }
        setSort({ field: field, order: order });
        setPage(1);
    }, [setPage, setSort]);
    // Ensure sort can be updated through props too, not just by using the setSort function
    (0, react_1.useEffect)(function () {
        if (!(0, isEqual_1.default)(initialSort, sortRef.current)) {
            setSort(initialSort);
        }
    }, [setSort, initialSort]);
    // Ensure pagination can be updated through props too, not just by using the setPagination function
    var paginationRef = (0, react_1.useRef)({ initialPage: initialPage, initialPerPage: initialPerPage });
    (0, react_1.useEffect)(function () {
        if (!(0, isEqual_1.default)({ initialPage: initialPage, initialPerPage: initialPerPage }, paginationRef.current)) {
            setPagination({ page: initialPage, perPage: initialPerPage });
        }
    }, [setPagination, initialPage, initialPerPage]);
    // filter logic
    var _j = (0, react_1.useState)(''), queryFilter = _j[0], setFilter = _j[1];
    var filterRef = (0, react_1.useRef)(defaultFilter);
    var _k = (0, util_1.useSafeSetState)({}), displayedFilters = _k[0], setDisplayedFilters = _k[1];
    var _l = (0, util_1.useSafeSetState)(defaultFilter), filterValues = _l[0], setFilterValues = _l[1];
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
            return (__assign(__assign({}, previousState), (_a = {}, _a[filterName] = defaultValue, _a)));
        });
    }, [setDisplayedFilters, setFilterValues]);
    var setFilters = (0, react_1.useCallback)(function (filters, displayedFilters) {
        setFilterValues((0, util_1.removeEmpty)(filters));
        setDisplayedFilters(displayedFilters);
        setPage(1);
    }, [setDisplayedFilters, setFilterValues, setPage]);
    // handle filter prop change
    (0, react_1.useEffect)(function () {
        if (!(0, isEqual_1.default)(defaultFilter, filterRef.current)) {
            filterRef.current = defaultFilter;
            setFilterValues(defaultFilter);
        }
    });
    // Merge the user filters with the default ones
    var finalFilter = (0, react_1.useMemo)(function () { return (__assign(__assign({}, defaultFilter), filterToQuery(queryFilter))); }, [queryFilter, defaultFilter, filterToQuery]);
    var _m = (0, dataProvider_1.useGetMany)(reference, idsToFetch || []), referenceRecordsFetched = _m.data, loaded = _m.loaded, refetchGetMany = _m.refetch;
    var referenceRecords = referenceRecordsFetched
        ? referenceRecordsFetched.concat(referenceRecordsFromStore)
        : referenceRecordsFromStore;
    // filter out not found references - happens when the dataProvider doesn't guarantee referential integrity
    var finalReferenceRecords = referenceRecords.filter(Boolean);
    var _o = (0, useGetMatching_1.default)(reference, pagination, sort, finalFilter, source, resource, options), matchingReferences = _o.data, matchingReferencesIds = _o.ids, total = _o.total, refetchGetMatching = _o.refetch;
    // We merge the currently selected records with the matching ones, otherwise
    // the component displaying the currently selected records may fail
    var finalMatchingReferences = matchingReferences && matchingReferences.length > 0
        ? mergeReferences(matchingReferences, finalReferenceRecords)
        : finalReferenceRecords.length > 0
            ? finalReferenceRecords
            : matchingReferences;
    var dataStatus = (0, referenceDataStatus_1.getStatusForArrayInput)({
        input: input,
        matchingReferences: finalMatchingReferences,
        referenceRecords: finalReferenceRecords,
        translate: translate,
    });
    var refetch = (0, react_1.useCallback)(function () {
        refetchGetMany();
        refetchGetMatching();
    }, [refetchGetMany, refetchGetMatching]);
    return {
        basePath: props.basePath || "/".concat(resource),
        choices: dataStatus.choices,
        currentSort: sort,
        // For the ListContext, we don't want to always display the selected items first.
        // Indeed it wouldn't work well regarding sorting and pagination
        data: matchingReferences && matchingReferences.length > 0
            ? (0, util_1.indexById)(matchingReferences)
            : {},
        displayedFilters: displayedFilters,
        error: dataStatus.error,
        filterValues: filterValues,
        hasCreate: false,
        hideFilter: hideFilter,
        // For the ListContext, we don't want to always display the selected items first.
        // Indeed it wouldn't work well regarding sorting and pagination
        ids: matchingReferencesIds || [],
        loaded: loaded,
        loading: dataStatus.waiting,
        onSelect: onSelect,
        onToggleItem: onToggleItem,
        onUnselectItems: onUnselectItems,
        page: page,
        perPage: perPage,
        refetch: refetch,
        resource: resource,
        selectedIds: input.value,
        setFilter: setFilter,
        setFilters: setFilters,
        setPage: setPage,
        setPagination: setPagination,
        setPerPage: setPerPage,
        setSort: setSort,
        setSortForList: setSortForList,
        showFilter: showFilter,
        warning: dataStatus.warning,
        total: total,
    };
};
exports.useReferenceArrayInputController = useReferenceArrayInputController;
// concatenate and deduplicate two lists of records
var mergeReferences = function (ref1, ref2) {
    var res = __spreadArray([], ref1, true);
    var ids = ref1.map(function (ref) { return ref.id; });
    ref2.forEach(function (ref) {
        if (!ids.includes(ref.id)) {
            ids.push(ref.id);
            res.push(ref);
        }
    });
    return res;
};
var defaultFilterToQuery = function (searchText) { return ({ q: searchText }); };