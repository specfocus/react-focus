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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var dataProvider_1 = require("../../dataProvider");
var sideEffect_1 = require("../../sideEffect");
var core_1 = require("../../core");
var useList_1 = require("../useList");
var emptyArray = [];
var defaultFilter = {};
var defaultSort = { field: null, order: null };
/**
 * Hook that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * @example
 *
 * const { ids, data, error, loaded, loading, referenceBasePath } = useReferenceArrayFieldController({
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
 * @returns {ReferenceArrayProps} The reference props
 */
var useReferenceArrayFieldController = function (props) {
    var basePath = props.basePath, _a = props.filter, filter = _a === void 0 ? defaultFilter : _a, _b = props.page, page = _b === void 0 ? 1 : _b, _c = props.perPage, perPage = _c === void 0 ? 1000 : _c, record = props.record, reference = props.reference, _d = props.sort, sort = _d === void 0 ? defaultSort : _d, source = props.source;
    var resource = (0, core_1.useResourceContext)(props);
    var notify = (0, sideEffect_1.useNotify)();
    var ids = (0, get_1.default)(record, source) || emptyArray;
    var _e = (0, dataProvider_1.useGetMany)(reference, ids, {
        onFailure: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        },
    }), data = _e.data, error = _e.error, loading = _e.loading, loaded = _e.loaded, refetch = _e.refetch;
    var listProps = (0, useList_1.useList)({
        data: data,
        error: error,
        filter: filter,
        ids: ids,
        loaded: loaded,
        loading: loading,
        page: page,
        perPage: perPage,
        sort: sort,
    });
    return __assign(__assign({ basePath: basePath
            ? basePath.replace(resource, reference)
            : "/".concat(reference) }, listProps), { defaultTitle: null, hasCreate: false, refetch: refetch, resource: reference });
};
exports.default = useReferenceArrayFieldController;