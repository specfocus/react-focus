/**
 * Hook for Refresh Side Effect
 *
 * Returns a callback that triggers a page refresh. The callback causes a
 * version increase, which forces a re-execution all queries based on the
 * useDataProvider() hook, and a rerender of all components using the version
 * as key.
 *
 * @param hard If true, the callback empties the cache, too
 *
 * @example
 *
 * const refresh = useRefresh();
 * // soft refresh
 * refresh();
 * // hard refresh
 * refresh(true)
 */
declare const useRefresh: () => (hard?: boolean) => void;
export default useRefresh;
