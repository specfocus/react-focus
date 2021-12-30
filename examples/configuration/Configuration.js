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
var react_redux_1 = require("react-redux");
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var app_1 = require("../../app");
var styles_1 = require("@mui/styles");
var actions_1 = require("./actions");
var useStyles = (0, styles_1.makeStyles)({
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
});
var Configuration = function () {
    var translate = (0, app_1.useTranslate)();
    var locale = (0, app_1.useLocale)();
    var setLocale = (0, app_1.useSetLocale)();
    var classes = useStyles();
    var theme = (0, react_redux_1.useSelector)(function (state) { return state.theme; });
    var dispatch = (0, react_redux_1.useDispatch)();
    return (React.createElement(Card_1.default, null,
        React.createElement(app_1.Title, { title: translate('pos.configuration') }),
        React.createElement(CardContent_1.default, null,
            React.createElement("div", { className: classes.label }, translate('pos.theme.name')),
            React.createElement(Button_1.default, { variant: "contained", className: classes.button, color: theme === 'light' ? 'primary' : 'default', onClick: function () { return dispatch((0, actions_1.changeTheme)('light')); } }, translate('pos.theme.light')),
            React.createElement(Button_1.default, { variant: "contained", className: classes.button, color: theme === 'dark' ? 'primary' : 'default', onClick: function () { return dispatch((0, actions_1.changeTheme)('dark')); } }, translate('pos.theme.dark'))),
        React.createElement(CardContent_1.default, null,
            React.createElement("div", { className: classes.label }, translate('pos.language')),
            React.createElement(Button_1.default, { variant: "contained", className: classes.button, color: locale === 'en' ? 'primary' : 'default', onClick: function () { return setLocale('en'); } }, "en"),
            React.createElement(Button_1.default, { variant: "contained", className: classes.button, color: locale === 'fr' ? 'primary' : 'default', onClick: function () { return setLocale('fr'); } }, "fr"))));
};
exports.default = Configuration;
