import { Identifier } from '../types';
export interface SelectionState {
    selectedIds: Identifier[];
    onSelect: (ids: Identifier[]) => void;
    onToggleItem: (id: Identifier) => void;
    onUnselectItems: () => void;
}
/**
 * Hooks to provide selection state.
 *
 * The names of the return values match the ListContext interface
 *
 * @example
 *
 * const { selectedIds, onSelect, onToggleItem, onUnselectItems } = useSelectionState();
 *
 */
declare const useSelectionState: (initialSelection?: any[]) => SelectionState;
export default useSelectionState;
