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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var core_1 = require("../../core");
var SidebarToggleButton_1 = require("./SidebarToggleButton");
var LoadingIndicator_1 = __importDefault(require("./LoadingIndicator"));
var UserMenu_1 = __importDefault(require("./UserMenu"));
var HideOnScroll_1 = __importDefault(require("./HideOnScroll"));
var PREFIX = 'RaAppBar';
var classes = {
    toolbar: "".concat(PREFIX, "-toolbar"),
    menuButton: "".concat(PREFIX, "-menuButton"),
    menuButtonIconClosed: "".concat(PREFIX, "-menuButtonIconClosed"),
    menuButtonIconOpen: "".concat(PREFIX, "-menuButtonIconOpen"),
    title: "".concat(PREFIX, "-title"),
};
var StyledAppBar = (0, styles_1.styled)(material_1.AppBar)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.toolbar)] = {
            paddingRight: 24,
        },
        _b["& .".concat(classes.menuButton)] = {
            marginLeft: '0.2em',
            marginRight: '0.2em',
        },
        _b["& .".concat(classes.title)] = {
            flex: 1,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
        _b);
});
/**
 * The AppBar component renders a custom MuiAppBar.
 *
 * @param {Object} props
 * @param {ReactNode} props.children React node/s to be render as children of the AppBar
 * @param {Object} props.classes CSS class names
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.color The color of the AppBar
 * @param {Component} props.logout The logout button component that will be pass to the UserMenu component
 * @param {boolean} props.open State of the <Admin/> Sidebar
 * @param {Element | boolean} props.userMenu A custom user menu component for the AppBar. <UserMenu/> component by default. Pass false to disable.
 *
 * @example
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props}>
 *           <Typography
 *               variant="h6"
 *               color="inherit"
 *               className={classes.title}
 *               id="../../app-title"
 *           />
 *       </AppBar>
 *   );
 *};
 *
 * @example Without a user menu
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props} userMenu={false} />
 *   );
 *};
 */
var AppBar = function (props) {
    var children = props.children, className = props.className, _a = props.color, color = _a === void 0 ? 'secondary' : _a, logout = props.logout, open = props.open, title = props.title, userMenu = props.userMenu, Container = props.container, rest = __rest(props, ["children", "className", "color", "logout", "open", "title", "userMenu", "container"]);
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    return (React.createElement(Container, null,
        React.createElement(StyledAppBar, __assign({ className: className, color: color }, rest),
            React.createElement(material_1.Toolbar, { disableGutters: true, variant: isXSmall ? 'regular' : 'dense', className: classes.toolbar },
                React.createElement(SidebarToggleButton_1.SidebarToggleButton, { className: classes.menuButton }),
                react_1.Children.count(children) === 0 ? (React.createElement(material_1.Typography, { variant: "h6", color: "inherit", className: classes.title, id: "../../app-title" })) : (children),
                React.createElement(LoadingIndicator_1.default, null),
                typeof userMenu === 'boolean' ? (userMenu === true ? (React.createElement(UserMenu_1.default, { logout: logout })) : null) : ((0, react_1.cloneElement)(userMenu, { logout: logout }))))));
};
AppBar.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'transparent',
    ]),
    container: core_1.ComponentPropType,
    logout: prop_types_1.default.element,
    // @deprecated
    open: prop_types_1.default.bool,
    userMenu: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
};
AppBar.defaultProps = {
    userMenu: React.createElement(UserMenu_1.default, null),
    container: HideOnScroll_1.default,
};
exports.default = (0, react_1.memo)(AppBar);
