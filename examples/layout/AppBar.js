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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var app_1 = require("../../app");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Settings_1 = __importDefault(require("@mui/icons-material/Settings"));
var Logo_1 = __importDefault(require("./Logo"));
var PREFIX = 'CustomAppBar';
var classes = {
    title: "".concat(PREFIX, "-title"),
    spacer: "".concat(PREFIX, "-spacer"),
};
var StyledAppBar = (0, styles_1.styled)(app_1.AppBar)((_a = {},
    _a["& .".concat(classes.title)] = {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    _a["& .".concat(classes.spacer)] = {
        flex: 1,
    },
    _a));
var ConfigurationMenu = (0, react_1.forwardRef)(function (props, ref) {
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(app_1.MenuItemLink, { ref: ref, to: "/configuration", primaryText: translate('pos.configuration'), leftIcon: React.createElement(Settings_1.default, null), onClick: props.onClick, sidebarIsOpen: true }));
});
var CustomUserMenu = function (props) { return (React.createElement(app_1.UserMenu, __assign({}, props),
    React.createElement(ConfigurationMenu, null))); };
var CustomAppBar = function (props) {
    return (React.createElement(StyledAppBar, __assign({}, props, { elevation: 1, userMenu: React.createElement(CustomUserMenu, null) }),
        React.createElement(Typography_1.default, { variant: "h6", color: "inherit", className: classes.title, id: "../../app-title" }),
        React.createElement(Logo_1.default, null),
        React.createElement("span", { className: classes.spacer })));
};
exports.default = CustomAppBar;
