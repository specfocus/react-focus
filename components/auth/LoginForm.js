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
var prop_types_1 = __importDefault(require("prop-types"));
var react_final_form_1 = require("react-final-form");
var material_1 = require("@mui/material");
var core_1 = require("../../core");
var PREFIX = 'RaLoginForm';
var classes = {
    form: "".concat(PREFIX, "-form"),
    input: "".concat(PREFIX, "-input"),
    button: "".concat(PREFIX, "-button"),
    icon: "".concat(PREFIX, "-icon"),
};
var Root = (0, styles_1.styled)('form')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.form)] = {
            padding: '0 1em 1em 1em',
        },
        _b["& .".concat(classes.input)] = {
            marginTop: '1em',
        },
        _b["& .".concat(classes.button)] = {
            width: '100%',
        },
        _b["& .".concat(classes.icon)] = {
            marginRight: theme.spacing(1),
        },
        _b);
});
var Input = function (_a) {
    var _b = _a.meta, touched = _b.touched, error = _b.error, // eslint-disable-line react/prop-types
    inputProps = _a.input, // eslint-disable-line react/prop-types
    props = __rest(_a, ["meta", "input"]);
    return (React.createElement(material_1.TextField, __assign({ error: !!(touched && error), helperText: touched && error }, inputProps, props, { fullWidth: true })));
};
var LoginForm = function (props) {
    var redirectTo = props.redirectTo;
    var _a = (0, core_1.useSafeSetState)(false), loading = _a[0], setLoading = _a[1];
    var login = (0, core_1.useLogin)();
    var translate = (0, core_1.useTranslate)();
    var notify = (0, core_1.useNotify)();
    var validate = function (values) {
        var errors = { username: undefined, password: undefined };
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };
    var submit = function (values) {
        setLoading(true);
        login(values, redirectTo)
            .then(function () {
            setLoading(false);
        })
            .catch(function (error) {
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
    return (React.createElement(react_final_form_1.Form, { onSubmit: submit, validate: validate, render: function (_a) {
            var handleSubmit = _a.handleSubmit;
            return (React.createElement(Root, { onSubmit: handleSubmit, noValidate: true },
                React.createElement("div", { className: classes.form },
                    React.createElement("div", { className: classes.input },
                        React.createElement(react_final_form_1.Field, { autoFocus: true, id: "username", name: "username", component: Input, label: translate('ra.auth.username'), disabled: loading })),
                    React.createElement("div", { className: classes.input },
                        React.createElement(react_final_form_1.Field, { id: "password", name: "password", component: Input, label: translate('ra.auth.password'), type: "password", disabled: loading, autoComplete: "current-password" }))),
                React.createElement(material_1.CardActions, null,
                    React.createElement(material_1.Button, { variant: "contained", type: "submit", color: "primary", disabled: loading, className: classes.button },
                        loading && (React.createElement(material_1.CircularProgress, { className: classes.icon, size: 18, thickness: 2 })),
                        translate('ra.auth.sign_in')))));
        } }));
};
LoginForm.propTypes = {
    redirectTo: prop_types_1.default.string,
};
exports.default = LoginForm;
