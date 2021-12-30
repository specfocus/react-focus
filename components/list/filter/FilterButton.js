"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FilterList_1 = __importDefault(require("@mui/icons-material/FilterList"));
var Menu_1 = __importDefault(require("@mui/material/Menu"));
var styles_1 = require("@mui/material/styles");
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash/get"));
var prop_types_1 = __importDefault(require("prop-types"));
var React = __importStar(require("react"));
var react_1 = require("react");
var core_1 = require("../../../core");
var Button_1 = __importDefault(require("../../button/Button"));
var FilterContext_1 = require("../FilterContext");
var FilterButtonMenuItem_1 = require("./FilterButtonMenuItem");
var PREFIX = 'RaFilterButton';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = { display: 'inline-block' },
        _b);
});
var FilterButton = function (props) {
    var filtersProp = props.filters, className = props.className, rest = __rest(props, ["filters", "className"]);
    var filters = (0, react_1.useContext)(FilterContext_1.FilterContext) || filtersProp;
    var resource = (0, core_1.useResourceContext)(props);
    var _a = (0, core_1.useListContext)(props), _b = _a.displayedFilters, displayedFilters = _b === void 0 ? {} : _b, filterValues = _a.filterValues, showFilter = _a.showFilter;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var anchorEl = (0, react_1.useRef)();
    var hiddenFilters = filters.filter(function (filterElement) {
        return !filterElement.props.alwaysOn &&
            !displayedFilters[filterElement.props.source] &&
            typeof (0, get_1.default)(filterValues, filterElement.props.source) ===
                'undefined';
    });
    var handleClickButton = (0, react_1.useCallback)(function (event) {
        // This prevents ghost click.
        event.preventDefault();
        setOpen(true);
        anchorEl.current = event.currentTarget;
    }, [anchorEl, setOpen]);
    var handleRequestClose = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, [setOpen]);
    var handleShow = (0, react_1.useCallback)(function (_a) {
        var source = _a.source, defaultValue = _a.defaultValue;
        showFilter(source, defaultValue);
        setOpen(false);
    }, [showFilter, setOpen]);
    if (hiddenFilters.length === 0)
        return null;
    return (React.createElement(Root, __assign({ className: (0, classnames_1.default)(classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(Button_1.default, { className: "add-filter", label: "ra.action.add_filter", onClick: handleClickButton },
            React.createElement(FilterList_1.default, null)),
        React.createElement(Menu_1.default, { open: open, anchorEl: anchorEl.current, onClose: handleRequestClose }, hiddenFilters.map(function (filterElement) { return (React.createElement(FilterButtonMenuItem_1.FilterButtonMenuItem, { key: filterElement.props.source, filter: filterElement, resource: resource, onShow: handleShow })); }))));
};
var sanitizeRestProps = function (_a) {
    var _b = _a.displayedFilters, displayedFilters = _b === void 0 ? null : _b, _c = _a.filterValues, filterValues = _c === void 0 ? null : _c, _d = _a.showFilter, showFilter = _d === void 0 ? null : _d, rest = __rest(_a, ["displayedFilters", "filterValues", "showFilter"]);
    return rest;
};
FilterButton.propTypes = {
    resource: prop_types_1.default.string,
    filters: prop_types_1.default.arrayOf(prop_types_1.default.node),
    displayedFilters: prop_types_1.default.object,
    filterValues: prop_types_1.default.object,
    showFilter: prop_types_1.default.func,
    className: prop_types_1.default.string,
};
exports.default = FilterButton;
