"use strict";
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
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_final_form_1 = require("react-final-form");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const styles_2 = require("@mui/material/styles");
const Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
const app_1 = require("../../app");
const themes_1 = require("./themes");
const PREFIX = 'LoginWithTheme';
const classes = {
    main: `${PREFIX}-main`,
    card: `${PREFIX}-card`,
    avatar: `${PREFIX}-avatar`,
    icon: `${PREFIX}-icon`,
    hint: `${PREFIX}-hint`,
    form: `${PREFIX}-form`,
    input: `${PREFIX}-input`,
    actions: `${PREFIX}-actions`,
};
const StyledForm = (0, styles_1.styled)('form')(({ theme }) => ({
    [`& .${classes.main}`]: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    [`& .${classes.card}`]: {
        minWidth: 300,
        marginTop: '6em',
    },
    [`& .${classes.avatar}`]: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    [`& .${classes.icon}`]: {
        backgroundColor: theme.palette.secondary.main,
    },
    [`& .${classes.hint}`]: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    [`& .${classes.form}`]: {
        padding: '0 1em 1em 1em',
    },
    [`& .${classes.input}`]: {
        marginTop: '1em',
    },
    [`& .${classes.actions}`]: {
        padding: '0 1em 1em 1em',
    },
}));
const renderInput = (_a) => {
    var { meta: { touched, error } = { touched: false, error: undefined } } = _a, inputProps = __rest(_a.input, []), props = __rest(_a, ["meta", "input"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TextField, Object.assign({ error: !!(touched && error), helperText: touched && error }, inputProps, props, { fullWidth: true }), void 0));
};
const { Form } = (0, react_final_form_1.withTypes)();
const Login = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const translate = (0, app_1.useTranslate)();
    const notify = (0, app_1.useNotify)();
    const login = (0, app_1.useLogin)();
    const location = (0, react_router_dom_1.useLocation /*<{ nextPathname: string } | null>*/)();
    const state = location.state;
    const handleSubmit = (auth) => {
        setLoading(true);
        login(auth, state ? state.nextPathname : '/').catch((error) => {
            setLoading(false);
            notify(typeof error === 'string'
                ? error
                : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message, 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        });
    };
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };
    return ((0, jsx_runtime_1.jsx)(Form, { onSubmit: handleSubmit, validate: validate, render: ({ handleSubmit }) => ((0, jsx_runtime_1.jsx)(StyledForm, Object.assign({ onSubmit: handleSubmit, noValidate: true }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.main }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Card, Object.assign({ className: classes.card }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.avatar }, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, Object.assign({ className: classes.icon }, { children: (0, jsx_runtime_1.jsx)(Lock_1.default, {}, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.hint }, { children: "Hint: demo / demo" }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.form }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.input }, { children: (0, jsx_runtime_1.jsx)(react_final_form_1.Field, { autoFocus: true, name: "username", 
                                            // @ts-ignore
                                            component: renderInput, label: translate('ra.auth.username'), disabled: loading }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.input }, { children: (0, jsx_runtime_1.jsx)(react_final_form_1.Field, { name: "password", 
                                            // @ts-ignore
                                            component: renderInput, label: translate('ra.auth.password'), type: "password", disabled: loading }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.CardActions, Object.assign({ className: classes.actions }, { children: (0, jsx_runtime_1.jsxs)(material_1.Button, Object.assign({ variant: "contained", type: "submit", color: "primary", disabled: loading, fullWidth: true }, { children: [loading && ((0, jsx_runtime_1.jsx)(material_1.CircularProgress, { size: 25, thickness: 2 }, void 0)), translate('ra.auth.sign_in')] }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.Notification, {}, void 0)] }), void 0) }), void 0)) }, void 0));
};
Login.propTypes = {
    authProvider: prop_types_1.default.func,
    previousRoute: prop_types_1.default.string,
};
// We need to put the ThemeProvider decoration in another component
// the right theme
const LoginWithTheme = (props) => ((0, jsx_runtime_1.jsx)(styles_2.ThemeProvider, Object.assign({ theme: (0, styles_2.createTheme)(themes_1.lightTheme) }, { children: (0, jsx_runtime_1.jsx)(Login, Object.assign({}, props), void 0) }), void 0));
exports.default = LoginWithTheme;
