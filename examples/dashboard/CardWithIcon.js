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
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var cartouche_png_1 = __importDefault(require("./cartouche.png"));
var cartoucheDark_png_1 = __importDefault(require("./cartoucheDark.png"));
var PREFIX = 'CardWithIcon';
var classes = {
    card: "".concat(PREFIX, "-card"),
    main: "".concat(PREFIX, "-main"),
    title: "".concat(PREFIX, "-title"),
};
var StyledCard = (0, styles_1.styled)(material_1.Card)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.card)] = {
            minHeight: 52,
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
            },
        },
        _b["& .".concat(classes.main)] = function (props) { return ({
            overflow: 'inherit',
            padding: 16,
            background: "url(".concat(theme.palette.mode === 'dark' ? cartoucheDark_png_1.default : cartouche_png_1.default, ") no-repeat"),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .icon': {
                color: theme.palette.mode === 'dark' ? 'inherit' : '#dc2440',
            },
        }); },
        _b["& .".concat(classes.title)] = {},
        _b);
});
var CardWithIcon = function (props) {
    var icon = props.icon, title = props.title, subtitle = props.subtitle, to = props.to, children = props.children;
    return (
    // @ts-ignore
    React.createElement(StyledCard, { className: classes.card },
        React.createElement(react_router_dom_1.Link, { to: to },
            React.createElement("div", { className: classes.main },
                React.createElement(material_1.Box, { width: "3em", className: "icon" }, (0, react_1.createElement)(icon, { fontSize: 'large' })),
                React.createElement(material_1.Box, { textAlign: "right" },
                    React.createElement(material_1.Typography, { className: classes.title, color: "textSecondary" }, title),
                    React.createElement(material_1.Typography, { variant: "h5", component: "h2" }, subtitle || ' ')))),
        children && React.createElement(material_1.Divider, null),
        children));
};
exports.default = CardWithIcon;
