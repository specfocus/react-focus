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
exports.CLOSED_DRAWER_WIDTH = exports.DRAWER_WIDTH = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var get_1 = __importDefault(require("lodash/get"));
var core_1 = require("../../core");
var PREFIX = 'RaSidebar';
var classes = {
    root: "".concat(PREFIX, "-root"),
    docked: "".concat(PREFIX, "-docked"),
    paper: "".concat(PREFIX, "-paper"),
    paperAnchorLeft: "".concat(PREFIX, "-paperAnchorLeft"),
    paperAnchorRight: "".concat(PREFIX, "-paperAnchorRight"),
    paperAnchorTop: "".concat(PREFIX, "-paperAnchorTop"),
    paperAnchorBottom: "".concat(PREFIX, "-paperAnchorBottom"),
    paperAnchorDockedLeft: "".concat(PREFIX, "-paperAnchorDockedLeft"),
    paperAnchorDockedTop: "".concat(PREFIX, "-paperAnchorDockedTop"),
    paperAnchorDockedRight: "".concat(PREFIX, "-paperAnchorDockedRight"),
    paperAnchorDockedBottom: "".concat(PREFIX, "-paperAnchorDockedBottom"),
    modal: "".concat(PREFIX, "-modal"),
    fixed: "".concat(PREFIX, "-fixed"),
};
var StyledDrawer = (0, styles_1.styled)(material_1.Drawer)(function (_a) {
    var _b, _c;
    var open = _a.open, theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            height: 'calc(100vh - 3em)',
        },
        _b["& .".concat(classes.docked)] = {},
        _b["& .".concat(classes.paper)] = {},
        _b["& .".concat(classes.paperAnchorLeft)] = {},
        _b["& .".concat(classes.paperAnchorRight)] = {},
        _b["& .".concat(classes.paperAnchorTop)] = {},
        _b["& .".concat(classes.paperAnchorBottom)] = {},
        _b["& .".concat(classes.paperAnchorDockedLeft)] = {},
        _b["& .".concat(classes.paperAnchorDockedTop)] = {},
        _b["& .".concat(classes.paperAnchorDockedRight)] = {},
        _b["& .".concat(classes.paperAnchorDockedBottom)] = {},
        _b["& .".concat(classes.modal)] = {},
        _b["& .".concat(classes.fixed)] = {
            position: 'fixed',
            height: 'calc(100vh - 3em)',
            overflowX: 'hidden',
            // hide scrollbar
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
        _b["& .MuiPaper-root"] = (_c = {
                position: 'relative',
                width: open
                    ? (0, get_1.default)(theme, 'sidebar.width', exports.DRAWER_WIDTH)
                    : (0, get_1.default)(theme, 'sidebar.closedWidth', exports.CLOSED_DRAWER_WIDTH),
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                backgroundColor: 'transparent',
                borderRight: 'none'
            },
            _c[theme.breakpoints.only('xs')] = {
                marginTop: 0,
                height: '100vh',
                position: 'inherit',
                backgroundColor: theme.palette.background.default,
            },
            _c[theme.breakpoints.up('md')] = {
                border: 'none',
            },
            _c.zIndex = 'inherit',
            _c),
        _b);
});
exports.DRAWER_WIDTH = 240;
exports.CLOSED_DRAWER_WIDTH = 55;
var Sidebar = function (props) {
    var children = props.children, closedSize = props.closedSize, size = props.size, rest = __rest(props, ["children", "closedSize", "size"]);
    var dispatch = (0, react_redux_1.useDispatch)();
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var isSmall = (0, material_1.useMediaQuery)(function (theme) { return theme.breakpoints.down('md'); });
    var open = (0, react_redux_1.useSelector)(function (state) { return state.admin.ui.sidebarOpen; });
    (0, core_1.useLocale)(); // force redraw on locale change
    var toggleSidebar = function () { return dispatch((0, core_1.setSidebarVisibility)(!open)); };
    return isXSmall ? (React.createElement(StyledDrawer, __assign({ variant: "temporary", open: open, onClose: toggleSidebar, classes: classes }, rest), children)) : isSmall ? (React.createElement(StyledDrawer, __assign({ variant: "permanent", open: open, onClose: toggleSidebar, classes: classes }, rest),
        React.createElement("div", { className: classes.fixed }, children))) : (React.createElement(StyledDrawer, __assign({ variant: "permanent", open: open, onClose: toggleSidebar, classes: classes }, rest),
        React.createElement("div", { className: classes.fixed }, children)));
};
Sidebar.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
exports.default = Sidebar;
