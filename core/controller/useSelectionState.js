"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var util_1 = require("../util");
var defaultSelection = [];
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
var useSelectionState = function (initialSelection) {
    if (initialSelection === void 0) { initialSelection = defaultSelection; }
    var _a = (0, util_1.useSafeSetState)(initialSelection), selectedIds = _a[0], setSelectedIds = _a[1];
    var isFirstRender = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setSelectedIds(initialSelection);
    }, [initialSelection, setSelectedIds]);
    var onSelect = (0, react_1.useCallback)(function (newIds) {
        setSelectedIds(newIds);
    }, [setSelectedIds]);
    var onToggleItem = (0, react_1.useCallback)(function (id) {
        setSelectedIds(function (previousState) {
            var index = previousState.indexOf(id);
            if (index > -1) {
                return __spreadArray(__spreadArray([], previousState.slice(0, index), true), previousState.slice(index + 1), true);
            }
            else {
                return __spreadArray(__spreadArray([], previousState, true), [id], false);
            }
        });
    }, [setSelectedIds]);
    var onUnselectItems = (0, react_1.useCallback)(function () {
        setSelectedIds([]);
    }, [setSelectedIds]);
    return {
        selectedIds: selectedIds,
        onSelect: onSelect,
        onToggleItem: onToggleItem,
        onUnselectItems: onUnselectItems,
    };
};
exports.default = useSelectionState;
