"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatagridHeader = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("../../../core");
var material_1 = require("@mui/material");
var classnames_1 = __importDefault(require("classnames"));
var DatagridHeaderCell_1 = __importDefault(require("./DatagridHeaderCell"));
/**
 * The default Datagrid Header component.
 *
 * Renders select all checkbox as well as column header buttons used for sorting.
 */
var DatagridHeader = function (props) {
    var children = props.children, classes = props.classes, className = props.className, _a = props.hasExpand, hasExpand = _a === void 0 ? false : _a, _b = props.hasBulkActions, hasBulkActions = _b === void 0 ? false : _b, isRowSelectable = props.isRowSelectable;
    var resource = (0, core_1.useResourceContext)(props);
    var _c = (0, core_1.useListContext)(props), currentSort = _c.currentSort, data = _c.data, ids = _c.ids, onSelect = _c.onSelect, selectedIds = _c.selectedIds, setSort = _c.setSort;
    var updateSortCallback = (0, react_1.useCallback)(function (event) {
        event.stopPropagation();
        var newField = event.currentTarget.dataset.field;
        var newOrder = currentSort.field === newField
            ? currentSort.order === 'ASC'
                ? 'DESC'
                : 'ASC'
            : event.currentTarget.dataset.order;
        setSort(newField, newOrder);
    }, [currentSort.field, currentSort.order, setSort]);
    var updateSort = setSort ? updateSortCallback : null;
    var handleSelectAll = (0, react_1.useCallback)(function (event) {
        if (event.target.checked) {
            var all = ids.concat(selectedIds.filter(function (id) { return !ids.includes(id); }));
            onSelect(isRowSelectable
                ? all.filter(function (id) { return isRowSelectable(data[id]); })
                : all);
        }
        else {
            onSelect([]);
        }
    }, [data, ids, onSelect, isRowSelectable, selectedIds]);
    var selectableIds = isRowSelectable
        ? ids.filter(function (id) { return isRowSelectable(data[id]); })
        : ids;
    return (React.createElement(material_1.TableHead, { className: (0, classnames_1.default)(className, classes.thead) },
        React.createElement(material_1.TableRow, { className: (0, classnames_1.default)(classes.row, classes.headerRow) },
            hasExpand && (React.createElement(material_1.TableCell, { padding: "none", className: (0, classnames_1.default)(classes.headerCell, classes.expandHeader) })),
            hasBulkActions && selectedIds && (React.createElement(material_1.TableCell, { padding: "checkbox", className: classes.headerCell },
                React.createElement(material_1.Checkbox, { className: "select-all", color: "primary", checked: selectedIds.length > 0 &&
                        selectableIds.length > 0 &&
                        selectableIds.every(function (id) {
                            return selectedIds.includes(id);
                        }), onChange: handleSelectAll }))),
            react_1.Children.map(children, function (field, index) {
                return (0, react_1.isValidElement)(field) ? (React.createElement(DatagridHeaderCell_1.default, { className: classes.headerCell, currentSort: currentSort, field: field, isSorting: currentSort.field ===
                        (field.props.sortBy ||
                            field.props.source), key: field.props.source || index, resource: resource, updateSort: updateSort })) : null;
            }))));
};
exports.DatagridHeader = DatagridHeader;
exports.DatagridHeader.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.any,
    hasExpand: prop_types_1.default.bool,
    hasBulkActions: prop_types_1.default.bool,
    ids: prop_types_1.default.arrayOf(prop_types_1.default.any),
    isRowSelectable: prop_types_1.default.func,
    isRowExpandable: prop_types_1.default.func,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    setSort: prop_types_1.default.func,
};
exports.DatagridHeader.displayName = 'DatagridHeader';