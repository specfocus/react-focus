interface State<Permissions, Error> {
    loading: boolean;
    loaded: boolean;
    permissions?: Permissions;
    error?: Error;
}
/**
 * Hook for getting user permissions
 *
 * Calls the authProvider.getPermissions() method asynchronously.
 * If the authProvider returns a rejected promise, returns empty permissions.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false }
 * - success: { permissions: [any], loading: false, loaded: true }
 * - error: { error: [error from provider], loading: false, loaded: true }
 *
 * Useful to enable features based on user permissions
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @returns The current auth check state. Destructure as { permissions, error, loading, loaded }.
 *
 * @example
 *     import { usePermissions } from '../app';
 *
 *     const PostDetail = props => {
 *         const { loaded, permissions } = usePermissions();
 *         if (loaded && permissions == 'editor') {
 *             return <PostEdit {...props} />
 *         } else {
 *             return <PostShow {...props} />
 *         }
 *     };
 */
declare const usePermissions: <Permissions_1 = any, Error_1 = any>(params?: {}) => State<Permissions_1, Error_1>;
export default usePermissions;
