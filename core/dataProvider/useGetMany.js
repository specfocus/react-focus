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
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var react_redux_1 = require("react-redux");
var reselect_1 = require("reselect");
var debounce_1 = __importDefault(require("lodash/debounce"));
var union_1 = __importDefault(require("lodash/union"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var get_1 = __importDefault(require("lodash/get"));
var crudGetMany_1 = require("../actions/dataActions/crudGetMany");
var hooks_1 = require("../util/hooks");
var useDataProvider_1 = __importDefault(require("./useDataProvider"));
var react_2 = require("react");
var controller_1 = require("../controller");
var queriesToCall = {};
var dataProvider;
var DataProviderOptions = { action: crudGetMany_1.CRUD_GET_MANY };
/**
 * Call the dataProvider.getMany() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false, refetch }
 * - success: { data: [data from response], loading: false, loaded: true, refetch }
 * - error: { error: [error from response], loading: false, loaded: false, refetch }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * This hook aggregates and deduplicates calls to the same resource, so for instance, if an app calls:
 *
 * useGetMany('tags', [1, 2, 3]);
 * useGetMany('tags', [3, 4]);
 *
 * during the same tick, the hook will only call the dataProvider once with the following parameters:
 *
 * dataProvider(GET_MANY, 'tags', [1, 2, 3, 4])
 *
 * @param resource The resource name, e.g. 'posts'
 * @param ids The resource identifiers, e.g. [123, 456, 789]
 * @param {Object} options Options object to pass to the dataProvider.
 * @param {boolean} options.enabled Flag to conditionally run the query. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. { onSuccess: { refresh: true } }
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. { onFailure: error => notify(error.message) }
 *
 * @returns The current request state. Destructure as { data, error, loading, loaded, refetch }.
 *
 * @example
 *
 * import { useGetMany } from '../app';
 *
 * const PostTags = ({ record }) => {
 *     const { data, loading, error } = useGetMany('tags', record.tagIds);
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return (
 *          <ul>
 *              {data.map(tag => (
 *                  <li key={tag.id}>{tag.name}</li>
 *              ))}
 *          </ul>
 *      );
 * };
 */
var useGetMany = function (resource, ids, options) {
    if (options === void 0) { options = { enabled: true }; }
    // we can't use useQueryWithStore here because we're aggregating queries first
    // therefore part of the useQueryWithStore logic will have to be repeated below
    var selectMany = (0, react_1.useMemo)(makeGetManySelector, []);
    var data = (0, react_redux_1.useSelector)(function (state) {
        return selectMany(state, resource, ids);
    });
    var version = (0, controller_1.useVersion)(); // used to allow force reload
    // used to force a refetch without relying on version
    // which might trigger other queries as well
    var _a = (0, hooks_1.useSafeSetState)(0), innerVersion = _a[0], setInnerVersion = _a[1];
    var refetch = (0, react_1.useCallback)(function () {
        setInnerVersion(function (prevInnerVersion) { return prevInnerVersion + 1; });
    }, [setInnerVersion]);
    var _b = (0, hooks_1.useSafeSetState)({
        data: data,
        error: null,
        loading: ids.length !== 0,
        loaded: data.length !== 0 && !data.includes(undefined),
        refetch: refetch,
    }), state = _b[0], setState = _b[1];
    if (!(0, isEqual_1.default)(state.data, data)) {
        setState(__assign(__assign({}, state), { data: data }));
    }
    dataProvider = (0, useDataProvider_1.default)(); // not the best way to pass the dataProvider to a function outside the hook, but I couldn't find a better one
    (0, react_2.useEffect)(function () {
        if (options.enabled === false) {
            return;
        }
        if (!queriesToCall[resource]) {
            queriesToCall[resource] = [];
        }
        /**
         * queriesToCall stores the queries to call under the following shape:
         *
         * {
         *   'posts': [
         *     { ids: [1, 2], setState }
         *     { ids: [2, 3], setState, onSuccess }
         *     { ids: [4, 5], setState }
         *   ],
         *   'comments': [
         *     { ids: [345], setState, onFailure }
         *   ]
         * }
         */
        queriesToCall[resource] = queriesToCall[resource].concat({
            ids: ids,
            setState: setState,
            onSuccess: options && options.onSuccess,
            onFailure: options && options.onFailure,
        });
        callQueries(); // debounced by lodash
    }, 
    /* eslint-disable react-hooks/exhaustive-deps */
    [
        JSON.stringify({
            resource: resource,
            ids: ids,
            options: options,
            version: version,
            innerVersion: innerVersion,
        }),
        dataProvider,
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
    );
    return state;
};
/**
 * Memoized selector for getting an array of resources based on an array of ids
 *
 * @see https://react-redux.js.org/next/api/hooks#using-memoizing-selectors
 */
var makeGetManySelector = function () {
    return (0, reselect_1.createSelector)([
        function (state, resource) {
            return (0, get_1.default)(state, ['admin', 'resources', resource, 'data']);
        },
        function (_, __, ids) { return ids; },
    ], function (resourceData, ids) {
        return resourceData
            ? ids.map(function (id) { return resourceData[id]; })
            : ids.map(function (id) { return undefined; });
    });
};
/**
 * Call the dataProvider once per resource
 */
var callQueries = (0, debounce_1.default)(function () {
    var resources = Object.keys(queriesToCall);
    resources.forEach(function (resource) {
        var queries = __spreadArray([], queriesToCall[resource], true); // cloning to avoid side effects
        /**
         * Extract ids from queries, aggregate and deduplicate them
         *
         * @example from [[1, 2], [2, null, 3], [4, null]] to [1, 2, 3, 4]
         */
        var accumulatedIds = queries
            .reduce(function (acc, _a) {
            var ids = _a.ids;
            return (0, union_1.default)(acc, ids);
        }, []) // concat + unique
            .filter(function (v) { return v != null && v !== ''; }); // remove null values
        if (accumulatedIds.length === 0) {
            // no need to call the data provider if all the ids are null
            queries.forEach(function (_a) {
                var ids = _a.ids, setState = _a.setState, onSuccess = _a.onSuccess;
                setState({
                    data: emptyArray,
                    loading: false,
                    loaded: true,
                });
                if (onSuccess) {
                    onSuccess({ data: emptyArray });
                }
            });
            return;
        }
        dataProvider
            .getMany(resource, { ids: accumulatedIds }, DataProviderOptions)
            .then(function (response) {
            // Forces batching, see https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973
            return react_dom_1.default.unstable_batchedUpdates(function () {
                return queries.forEach(function (_a) {
                    var ids = _a.ids, setState = _a.setState, onSuccess = _a.onSuccess;
                    setState(function (prevState) { return (__assign(__assign({}, prevState), { error: null, loading: false, loaded: true })); });
                    if (onSuccess) {
                        var subData = ids.map(function (id) {
                            return response.data.find(function (datum) { return datum.id == id; });
                        } // eslint-disable-line eqeqeq
                        );
                        onSuccess({ data: subData });
                    }
                });
            });
        })
            .catch(function (error) {
            return react_dom_1.default.unstable_batchedUpdates(function () {
                return queries.forEach(function (_a) {
                    var setState = _a.setState, onFailure = _a.onFailure;
                    setState({ error: error, loading: false, loaded: false });
                    onFailure && onFailure(error);
                });
            });
        });
        delete queriesToCall[resource];
    });
});
var emptyArray = [];
exports.default = useGetMany;