import { UserIdentity } from '../types';
/**
 * Return the current user identity by calling authProvider.getIdentity() on mount
 *
 * The return value updates according to the call state:
 *
 * - mount: { loading: true, loaded: false }
 * - success: { identity: Identity, loading: false, loaded: true }
 * - error: { error: Error, loading: false, loaded: true }
 *
 * The implementation is left to the authProvider.
 *
 * @returns The current user identity. Destructure as { identity, error, loading, loaded }.
 *
 * @example
 *
 * import { useGetIdentity, useGetOne } from '../app';
 *
 * const PostDetail = ({ id }) => {
 *     const { data: post, loading: postLoading } = useGetOne('posts', id);
 *     const { identity, loading: identityLoading } = useGetIdentity();
 *     if (postLoading || identityLoading) return <>Loading...</>;
 *     if (!post.lockedBy || post.lockedBy === identity.id) {
 *         // post isn't locked, or is locked by me
 *         return <PostEdit post={post} />
 *     } else {
 *         // post is locked by someone else and cannot be edited
 *         return <PostShow post={post} />
 *     }
 * }
 */
declare const useGetIdentity: () => State;
interface State {
    loading: boolean;
    loaded: boolean;
    identity?: UserIdentity;
    error?: any;
}
export default useGetIdentity;
