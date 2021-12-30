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
var Button_1 = __importDefault(require("@mui/material/Button"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var styles_1 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var react_final_form_1 = require("react-final-form");
var Validation_1 = require("../../components/final-form/Validation");
var AutoForm_1 = __importDefault(require("./AutoForm"));
var useFormStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        paper: {
            marginTop: theme.spacing(3),
            padding: theme.spacing(3),
            marginBottom: theme.spacing(5),
        },
        paperInner: {
            marginLeft: theme.spacing(3),
            marginTop: theme.spacing(3),
            padding: theme.spacing(3),
        },
        buttons: {
            '& > *': {
                marginTop: theme.spacing(3),
                marginRight: theme.spacing(1),
            },
        },
    });
});
function FinalAutoForm(_a) {
    var children = _a.children, fuckyou = _a.form, initialValues = _a.initialValues, schema = _a.schema, props = __rest(_a, ["children", "form", "initialValues", "schema"]);
    var classes = useFormStyles();
    var render = // useCallback(
     function (_a) {
        var form = _a.form, handleSubmit = _a.handleSubmit, state = __rest(_a, ["form", "handleSubmit"]);
        return (react_1.default.createElement(AutoForm_1.default, __assign({}, props, { form: form, handleSubmit: handleSubmit, schema: fuckyou, state: state }),
            react_1.default.createElement("div", null,
                children,
                react_1.default.createElement(Grid_1.default, { container: true },
                    react_1.default.createElement(Grid_1.default, { item: true, className: classes.buttons },
                        react_1.default.createElement(Button_1.default, { type: "button", variant: "contained", onClick: onReset, disabled: state.submitting }, "Reset"),
                        react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", type: "submit", disabled: state.submitting }, "Submit"))))));
    };
    /**
     * Uses the optional helper makeValidate function to format the error messages
     * into something usable by final form.
     */
    var validate = (0, Validation_1.makeValidate)(schema);
    /**
     * Grabs all the required fields from the schema so that they can be passed into
     * the components without having to declare them in both the schema and the component.
     */
    var required = (0, Validation_1.makeRequired)(schema);
    var subscription = { submitting: true };
    var _b = (0, react_1.useState)(subscription), subscriptionState = _b[0], setSubscriptionState = _b[1];
    var _c = (0, react_1.useState)(undefined), submittedValues = _c[0], setSubmittedValues = _c[1];
    var onChange = function () {
        setSubscriptionState(subscriptionState === undefined ? subscription : undefined);
    };
    var onSubmit = function (values) {
        setSubmittedValues(values);
    };
    var onReset = function () {
        setSubmittedValues(undefined);
    };
    return (react_1.default.createElement(react_final_form_1.Form, { key: subscription, onSubmit: onSubmit, initialValues: submittedValues || initialValues, validate: validate, render: render, subscription: subscription }));
}
exports.default = FinalAutoForm;
