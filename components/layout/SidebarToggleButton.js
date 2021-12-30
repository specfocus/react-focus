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
exports.SidebarToggleButton = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
var core_1 = require("../../core");
var useToggleSidebar_1 = require("./useToggleSidebar");
var PREFIX = 'RaSidebarToggleButton';
var classes = {
    menuButtonIconClosed: "".concat(PREFIX, "-menuButtonIconClosed"),
    menuButtonIconOpen: "".concat(PREFIX, "-menuButtonIconOpen"),
};
var StyledIconButton = (0, styles_1.styled)(material_1.IconButton)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.menuButtonIconClosed)] = {
            transition: theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            transform: 'rotate(0deg)',
        },
        _b["& .".concat(classes.menuButtonIconOpen)] = {
            transition: theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            transform: 'rotate(180deg)',
        },
        _b);
});
/**
 * A button that toggles the sidebar. Used by default in the <AppBar>.
 * @param props The component props
 * @param {String} props.className An optional class name to apply to the button

 */
var SidebarToggleButton = function (props) {
    var translate = (0, core_1.useTranslate)();
    var className = props.className;
    var _a = (0, useToggleSidebar_1.useToggleSidebar)(), open = _a[0], toggleSidebar = _a[1];
    return (React.createElement(material_1.Tooltip, { title: translate(open ? 'ra.action.close_menu' : 'ra.action.open_menu', {
            _: 'Open/Close menu',
        }), enterDelay: 500 },
        React.createElement(StyledIconButton, { color: "inherit", onClick: function () { return toggleSidebar(); }, className: className, size: "large" },
            React.createElement(Menu_1.default, { classes: {
                    root: open
                        ? classes.menuButtonIconOpen
                        : classes.menuButtonIconClosed,
                } }))));
};
exports.SidebarToggleButton = SidebarToggleButton;
