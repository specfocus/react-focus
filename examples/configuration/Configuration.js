"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const app_1 = require("../../app");
const styles_1 = require("@mui/styles");
const actions_1 = require("./actions");
const useStyles = (0, styles_1.makeStyles)({
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
});
const Configuration = () => {
    const translate = (0, app_1.useTranslate)();
    const locale = (0, app_1.useLocale)();
    const setLocale = (0, app_1.useSetLocale)();
    const classes = useStyles();
    const theme = (0, react_redux_1.useSelector)((state) => state.theme);
    const dispatch = (0, react_redux_1.useDispatch)();
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { children: [(0, jsx_runtime_1.jsx)(app_1.Title, { title: translate('pos.configuration') }, void 0), (0, jsx_runtime_1.jsxs)(CardContent_1.default, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.label }, { children: translate('pos.theme.name') }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "contained", className: classes.button, color: theme === 'light' ? 'primary' : 'secondary', onClick: () => dispatch((0, actions_1.changeTheme)('light')) }, { children: translate('pos.theme.light') }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "contained", className: classes.button, color: theme === 'dark' ? 'primary' : 'secondary', onClick: () => dispatch((0, actions_1.changeTheme)('dark')) }, { children: translate('pos.theme.dark') }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(CardContent_1.default, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.label }, { children: translate('pos.language') }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "contained", className: classes.button, color: locale === 'en' ? 'primary' : 'secondary', onClick: () => setLocale('en') }, { children: "en" }), void 0), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "contained", className: classes.button, color: locale === 'fr' ? 'primary' : 'secondary', onClick: () => setLocale('fr') }, { children: "fr" }), void 0)] }, void 0)] }, void 0));
};
exports.default = Configuration;
