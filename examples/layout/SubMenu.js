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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var app_1 = require("../../app");
var PREFIX = 'SubMenu';
var classes = {
    icon: "".concat(PREFIX, "-icon"),
    sidebarIsOpen: "".concat(PREFIX, "-sidebarIsOpen"),
    sidebarIsClosed: "".concat(PREFIX, "-sidebarIsClosed"),
};
// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.icon)] = { minWidth: theme.spacing(5) },
        _b["& .".concat(classes.sidebarIsOpen)] = {
            '& a': {
                transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                paddingLeft: theme.spacing(4),
            },
        },
        _b["& .".concat(classes.sidebarIsClosed)] = {
            '& a': {
                transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                paddingLeft: theme.spacing(2),
            },
        },
        _b);
});
var SubMenu = function (props) {
    var handleToggle = props.handleToggle, isOpen = props.isOpen, name = props.name, icon = props.icon, children = props.children, dense = props.dense;
    var translate = (0, app_1.useTranslate)();
    var sidebarIsOpen = (0, react_redux_1.useSelector)(function (state) { return state.admin.ui.sidebarOpen; });
    var header = (React.createElement(material_1.MenuItem, { dense: dense, onClick: handleToggle },
        React.createElement(material_1.ListItemIcon, { className: classes.icon }, isOpen ? React.createElement(ExpandMore_1.default, null) : icon),
        React.createElement(material_1.Typography, { variant: "inherit", color: "textSecondary" }, translate(name))));
    return (React.createElement(Root, null,
        sidebarIsOpen || isOpen ? (header) : (React.createElement(material_1.Tooltip, { title: translate(name), placement: "right" }, header)),
        React.createElement(material_1.Collapse, { in: isOpen, timeout: "auto", unmountOnExit: true },
            React.createElement(material_1.List, { dense: dense, component: "div", disablePadding: true, className: sidebarIsOpen
                    ? classes.sidebarIsOpen
                    : classes.sidebarIsClosed }, children))));
};
exports.default = SubMenu;
