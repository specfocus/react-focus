import { Identifier } from '../types';
/**
 * Get the list of selected items for a resource, and callbacks to change the selection
 *
 * @param resource The resource name, e.g. 'posts'
 *
 * @returns {Object} Destructure as [selectedIds, { select, toggle, clearSelection }].
 */
declare const useRecordSelection: (resource: string) => [Identifier[], {
    select: (newIds: Identifier[]) => void;
    toggle: (id: Identifier) => void;
    clearSelection: () => void;
}];
export default useRecordSelection;
