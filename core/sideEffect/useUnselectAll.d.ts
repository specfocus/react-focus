/**
 * Hook for Unselect All Side Effect
 *
 * @example
 *
 * const unselectAll = useUnselectAll('posts');
 * unselectAll();
 */
declare const useUnselectAll: (resource1?: string | undefined) => (resource2?: string | undefined) => void;
export default useUnselectAll;
