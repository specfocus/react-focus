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
exports.CLOSED_MENU_WIDTH = exports.MENU_WIDTH = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var get_1 = __importDefault(require("lodash/get"));
var ViewList_1 = __importDefault(require("@mui/icons-material/ViewList"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var DashboardMenuItem_1 = __importDefault(require("./DashboardMenuItem"));
var MenuItemLink_1 = __importDefault(require("./MenuItemLink"));
var PREFIX = 'RaMenu';
var classes = {
    main: "".concat(PREFIX, "-main"),
    open: "".concat(PREFIX, "-open"),
    closed: "".concat(PREFIX, "-closed"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.main)] = (_c = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop: '0.5em',
                marginBottom: '1em'
            },
            _c[theme.breakpoints.only('xs')] = {
                marginTop: 0,
            },
            _c.transition = theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            _c),
        _b["&.".concat(classes.open)] = {
            width: (0, get_1.default)(theme, 'menu.width', exports.MENU_WIDTH),
        },
        _b["&.".concat(classes.closed)] = {
            width: (0, get_1.default)(theme, 'menu.closedWidth', exports.CLOSED_MENU_WIDTH),
        },
        _b);
});
exports.MENU_WIDTH = 240;
exports.CLOSED_MENU_WIDTH = 55;
var Menu = function (props) {
    var _a;
    var resources = (0, react_redux_1.useSelector)(core_1.getResources, react_redux_1.shallowEqual);
    var getResourceLabel = (0, core_1.useGetResourceLabel)();
    var hasDashboard = props.hasDashboard, dense = props.dense, _b = props.children, children = _b === void 0 ? (React.createElement(React.Fragment, null,
        hasDashboard && React.createElement(DashboardMenuItem_1.default, { dense: dense }),
        resources
            .filter(function (r) { return r.hasList; })
            .map(function (resource) { return (React.createElement(MenuItemLink_1.default, { key: resource.name, to: {
                pathname: "/".concat(resource.name),
                state: { _scrollToTop: true },
            }, primaryText: getResourceLabel(resource.name, 2), leftIcon: resource.icon ? (React.createElement(resource.icon, null)) : (React.createElement(ViewList_1.default, null)), dense: dense })); }))) : _b, className = props.className, onMenuClick = props.onMenuClick, logout = props.logout, rest = __rest(props, ["hasDashboard", "dense", "children", "className", "onMenuClick", "logout"]);
    var open = (0, react_redux_1.useSelector)(function (state) { return state.admin.ui.sidebarOpen; });
    return (React.createElement(Root, __assign({ className: (0, classnames_1.default)(classes.main, (_a = {},
            _a[classes.open] = open,
            _a[classes.closed] = !open,
            _a), className) }, rest), children));
};
Menu.propTypes = {
    className: prop_types_1.default.string,
    dense: prop_types_1.default.bool,
    hasDashboard: prop_types_1.default.bool,
    logout: prop_types_1.default.element,
    onMenuClick: prop_types_1.default.func,
};
Menu.defaultProps = {
    onMenuClick: function () { return null; },
};
exports.default = Menu;
