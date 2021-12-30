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
exports.Menu = exports.CLOSED_MENU_WIDTH = exports.MENU_WIDTH = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var get_1 = __importDefault(require("lodash/get"));
// @ts-ignore
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var classnames_1 = __importDefault(require("classnames"));
var app_1 = require("../../app");
var NewResourceMenuItem_1 = require("./NewResourceMenuItem");
var ResourceConfiguration_1 = require("../ResourceConfiguration");
var ResourceMenuItem_1 = require("./ResourceMenuItem");
exports.MENU_WIDTH = 240;
exports.CLOSED_MENU_WIDTH = 55;
var Menu = function (props) {
    var _a;
    var classesOverride = props.classes, className = props.className, dense = props.dense, hasDashboard = props.hasDashboard, onMenuClick = props.onMenuClick, logout = props.logout, rest = __rest(props, ["classes", "className", "dense", "hasDashboard", "onMenuClick", "logout"]);
    var classes = useStyles(props);
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('xs');
    });
    var open = (0, react_redux_1.useSelector)(function (state) { return state.admin.ui.sidebarOpen; });
    var resources = (0, ResourceConfiguration_1.useResourcesConfiguration)()[0];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", __assign({ className: (0, classnames_1.default)(classes.main, (_a = {},
                _a[classes.open] = open,
                _a[classes.closed] = !open,
                _a), className) }, rest),
            hasDashboard && (React.createElement(app_1.DashboardMenuItem, { onClick: onMenuClick, dense: dense, sidebarIsOpen: open })),
            Object.keys(resources).map(function (resource) { return (React.createElement(ResourceMenuItem_1.ResourceMenuItem, { key: resource, resource: resources[resource], onClick: onMenuClick, dense: dense, sidebarIsOpen: open })); }),
            React.createElement(NewResourceMenuItem_1.NewResourceMenuItem, { onClick: onMenuClick, dense: dense, sidebarIsOpen: open }),
            isXSmall && logout)));
};
exports.Menu = Menu;
var useStyles = (0, styles_1.makeStyles)(function (theme) {
    var _a;
    return ({
        main: (_a = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop: '0.5em'
            },
            _a[theme.breakpoints.only('xs')] = {
                marginTop: 0,
            },
            _a[theme.breakpoints.up('md')] = {
                marginTop: '1.5em',
            },
            _a),
        open: {
            width: (0, get_1.default)(theme, 'menu.width', exports.MENU_WIDTH),
        },
        closed: {
            width: (0, get_1.default)(theme, 'menu.closedWidth', exports.CLOSED_MENU_WIDTH),
        },
    });
}, { name: 'RaMenu' });
exports.Menu.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    dense: prop_types_1.default.bool,
    hasDashboard: prop_types_1.default.bool,
    logout: prop_types_1.default.element,
    onMenuClick: prop_types_1.default.func,
};
exports.Menu.defaultProps = {
    onMenuClick: function () { return null; },
};
