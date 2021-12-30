"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var useQueryWithStore_1 = require("./useQueryWithStore");
var defaultPagination = { page: 1, perPage: 25 };
var defaultSort = { field: 'id', order: 'DESC' };
var defaultFilter = {};
var defaultIds = [];
var defaultData = {};
/**
 * Call the dataProvider.getList() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false, refetch }
 * - success: { data: [data from store], ids: [ids from response], total: [total from response], loading: false, loaded: true, refetch }
 * - error: { error: [error from response], loading: false, loaded: false, refetch }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { title: 'hello, world' }
 * @param {Object} options Options object to pass to the dataProvider.
 * @param {boolean} options.enabled Flag to conditionally run the query. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. { onSuccess: { refresh: true } }
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. { onFailure: error => notify(error.message) }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded, refetch }.
 *
 * @example
 *
 * import { useGetList } from '../app';
 *
 * const LatestNews = () => {
 *     const { data, ids, loading, error } = useGetList(
 *         'posts',
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' }
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{ids.map(id =>
 *         <li key={id}>{data[id].title}</li>
 *     )}</ul>;
 * };
 */
var useGetList = function (resource, pagination, sort, filter, options) {
    if (pagination === void 0) { pagination = defaultPagination; }
    if (sort === void 0) { sort = defaultSort; }
    if (filter === void 0) { filter = defaultFilter; }
    var requestSignature = JSON.stringify({ pagination: pagination, sort: sort, filter: filter });
    var _a = (0, useQueryWithStore_1.useQueryWithStore)({ type: 'getList', resource: resource, payload: { pagination: pagination, sort: sort, filter: filter } }, options, 
    // ids and data selector
    function (state) { return ({
        ids: (0, get_1.default)(state.admin.resources, [resource, 'list', 'cachedRequests', requestSignature, 'ids'], null),
        allRecords: (0, get_1.default)(state.admin.resources, [resource, 'data'], defaultData),
    }); }, 
    // total selector (may return undefined)
    function (state) {
        return (0, get_1.default)(state.admin.resources, [
            resource,
            'list',
            'cachedRequests',
            requestSignature,
            'total',
        ]);
    }, isDataLoaded), _b = _a.data, ids = _b.ids, allRecords = _b.allRecords, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded, refetch = _a.refetch;
    var data = (0, react_1.useMemo)(function () {
        return ids === null
            ? defaultData
            : ids
                .map(function (id) { return allRecords[id]; })
                .reduce(function (acc, record) {
                if (!record)
                    return acc;
                acc[record.id] = record;
                return acc;
            }, {});
    }, [ids, allRecords]);
    return {
        data: data,
        ids: ids === null ? defaultIds : ids,
        total: total,
        error: error,
        loading: loading,
        loaded: loaded,
        refetch: refetch,
    };
};
var isDataLoaded = function (data) { return data.ids !== null; };
exports.default = useGetList;
