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
var react_final_form_1 = require("react-final-form");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var styles_2 = require("@mui/material/styles");
var Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
var app_1 = require("../../app");
var themes_1 = require("./themes");
var PREFIX = 'LoginWithTheme';
var classes = {
    main: "".concat(PREFIX, "-main"),
    card: "".concat(PREFIX, "-card"),
    avatar: "".concat(PREFIX, "-avatar"),
    icon: "".concat(PREFIX, "-icon"),
    hint: "".concat(PREFIX, "-hint"),
    form: "".concat(PREFIX, "-form"),
    input: "".concat(PREFIX, "-input"),
    actions: "".concat(PREFIX, "-actions"),
};
var StyledForm = (0, styles_1.styled)('form')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.main)] = {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'flex-start',
            background: 'url(https://source.unsplash.com/random/1600x900)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        _b["& .".concat(classes.card)] = {
            minWidth: 300,
            marginTop: '6em',
        },
        _b["& .".concat(classes.avatar)] = {
            margin: '1em',
            display: 'flex',
            justifyContent: 'center',
        },
        _b["& .".concat(classes.icon)] = {
            backgroundColor: theme.palette.secondary.main,
        },
        _b["& .".concat(classes.hint)] = {
            marginTop: '1em',
            display: 'flex',
            justifyContent: 'center',
            color: theme.palette.grey[500],
        },
        _b["& .".concat(classes.form)] = {
            padding: '0 1em 1em 1em',
        },
        _b["& .".concat(classes.input)] = {
            marginTop: '1em',
        },
        _b["& .".concat(classes.actions)] = {
            padding: '0 1em 1em 1em',
        },
        _b);
});
var renderInput = function (_a) {
    var _b = _a.meta, _c = _b === void 0 ? { touched: false, error: undefined } : _b, touched = _c.touched, error = _c.error, inputProps = __rest(_a.input, []), props = __rest(_a, ["meta", "input"]);
    return (React.createElement(material_1.TextField, __assign({ error: !!(touched && error), helperText: touched && error }, inputProps, props, { fullWidth: true })));
};
var Form = (0, react_final_form_1.withTypes)().Form;
var Login = function () {
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var translate = (0, app_1.useTranslate)();
    var notify = (0, app_1.useNotify)();
    var login = (0, app_1.useLogin)();
    var location = (0, react_router_dom_1.useLocation)();
    var handleSubmit = function (auth) {
        setLoading(true);
        login(auth, location.state ? location.state.nextPathname : '/').catch(function (error) {
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
    var validate = function (values) {
        var errors = {};
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };
    return (React.createElement(Form, { onSubmit: handleSubmit, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit;
            return (React.createElement(StyledForm, { onSubmit: handleSubmit, noValidate: true },
                React.createElement("div", { className: classes.main },
                    React.createElement(material_1.Card, { className: classes.card },
                        React.createElement("div", { className: classes.avatar },
                            React.createElement(material_1.Avatar, { className: classes.icon },
                                React.createElement(Lock_1.default, null))),
                        React.createElement("div", { className: classes.hint }, "Hint: demo / demo"),
                        React.createElement("div", { className: classes.form },
                            React.createElement("div", { className: classes.input },
                                React.createElement(react_final_form_1.Field, { autoFocus: true, name: "username", 
                                    // @ts-ignore
                                    component: renderInput, label: translate('ra.auth.username'), disabled: loading })),
                            React.createElement("div", { className: classes.input },
                                React.createElement(react_final_form_1.Field, { name: "password", 
                                    // @ts-ignore
                                    component: renderInput, label: translate('ra.auth.password'), type: "password", disabled: loading }))),
                        React.createElement(material_1.CardActions, { className: classes.actions },
                            React.createElement(material_1.Button, { variant: "contained", type: "submit", color: "primary", disabled: loading, fullWidth: true },
                                loading && (React.createElement(material_1.CircularProgress, { size: 25, thickness: 2 })),
                                translate('ra.auth.sign_in')))),
                    React.createElement(app_1.Notification, null))));
        } }));
};
Login.propTypes = {
    authProvider: prop_types_1.default.func,
    previousRoute: prop_types_1.default.string,
};
// We need to put the ThemeProvider decoration in another component
// the right theme
var LoginWithTheme = function (props) { return (React.createElement(styles_2.ThemeProvider, { theme: (0, styles_2.createTheme)(themes_1.lightTheme) },
    React.createElement(Login, __assign({}, props)))); };
exports.default = LoginWithTheme;
