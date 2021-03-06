"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useMutation_1 = __importDefault(require("./useMutation"));
/**
 * Get a callback to call the dataProvider.create() method, the result and the loading state.
 *
 * The return value updates according to the request state:
 *
 * - initial: [create, { loading: false, loaded: false }]
 * - start:   [create, { loading: true, loaded: false }]
 * - success: [create, { data: [data from response], loading: false, loaded: true }]
 * - error:   [create, { error: [error from response], loading: false, loaded: false }]
 *
 * @param resource The resource name, e.g. 'posts'
 * @param data The data to initialize the new record with, e.g. { title: 'hello, world' }
 * @param options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as [create, { data, error, loading, loaded }].
 *
 * The create() function can be called in 3 different ways:
 *  - with the same parameters as the useCreate() hook: create(resource, data, options)
 *  - with the same syntax as useMutation: create({ resource, payload: { data } }, options)
 *  - with no parameter (if they were already passed to useCreate()): create()
 *
 * @example // set params when calling the update callback
 *
 * import { useCreate } from '../app';
 *
 * const LikeButton = ({ record }) => {
 *     const like = { postId: record.id };
 *     const [create, { loading, error }] = useCreate();
 *     const handleClick = () => {
 *         create('likes', like)
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={handleClick}>Like</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useCreate } from '../app';
 *
 * const LikeButton = ({ record }) => {
 *     const like = { postId: record.id };
 *     const [create, { loading, error }] = useCreate('likes', like);
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={create}>Like</button>;
 * };
 */
const useCreate = (resource, data, options) => {
    const [mutate, state] = (0, useMutation_1.default)({ type: 'create', resource, payload: { data } }, options);
    const create = (0, react_1.useCallback)((resource, data, options) => {
        if (typeof resource === 'string') {
            const query = {
                type: 'create',
                resource,
                payload: {
                    data,
                },
            };
            return mutate(query, options);
        }
        else {
            return mutate(resource, data);
        }
    }, [mutate] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return [create, state];
};
exports.default = useCreate;
