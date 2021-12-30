"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useMutation_1 = __importDefault(require("./useMutation"));
/**
 * Get a callback to call the dataProvider.updateMany() method, the result
 * of the call (the list of updated record ids), and the loading state.
 *
 * The return value updates according to the request state:
 *
 * - initial: [updateMany, { loading: false, loaded: false }]
 * - start:   [updateMany, { loading: true, loaded: false }]
 * - success: [updateMany, { data: [data from response], loading: false, loaded: true }]
 * - error:   [updateMany, { error: [error from response], loading: false, loaded: false }]
 *
 * @param resource The resource name, e.g. 'posts'
 * @param ids The resource identifiers, e.g. [123, 456]
 * @param data The updates to merge into all records, e.g. { views: 10 }
 * @param options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as [updateMany, { data, error, loading, loaded }].
 *
 * The updateMany() function can be called in 3 different ways:
 *  - with the same parameters as the useUpdateMany() hook: update(resource, ids, data, options)
 *  - with the same syntax as useMutation: update({ resource, payload: { ids, data } }, options)
 *  - with no parameter (if they were already passed to useUpdateMany()): updateMany()
 *
 * @example // set params when calling the updateMany callback
 *
 * import { useUpdateMany } from '../app';
 *
 * const BulkResetViewsButton = ({ selectedIds }) => {
 *     const [updateMany, { loading, error }] = useUpdateMany();
 *     const handleClick = () => {
 *         updateMany('posts', selectedIds, { views: 0 });
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={handleClick}>Reset views</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useUpdateMany } from '../app';
 *
 * const BulkResetViewsButton = ({ selectedIds }) => {
 *     const [updateMany, { loading, error }] = useUpdateMany('posts', selectedIds, { views: 0 });
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={updateMany}>Reset views</button>;
 * };
 */
var useUpdateMany = function (resource, ids, data, options) {
    var _a = (0, useMutation_1.default)({ type: 'updateMany', resource: resource, payload: { ids: ids, data: data } }, options), mutate = _a[0], state = _a[1];
    var updateMany = (0, react_1.useCallback)(function (resource, ids, data, options) {
        if (typeof resource === 'string') {
            var query = {
                type: 'updateMany',
                resource: resource,
                payload: {
                    ids: ids,
                    data: data,
                },
            };
            return mutate(query, options);
        }
        else {
            return mutate(resource, ids);
        }
    }, [mutate] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return [updateMany, state];
};
exports.default = useUpdateMany;