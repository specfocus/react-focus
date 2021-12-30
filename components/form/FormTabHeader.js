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
exports.FormTabHeader = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var react_router_dom_1 = require("react-router-dom");
var Tab_1 = __importDefault(require("@mui/material/Tab"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var react_final_form_1 = require("react-final-form");
var TabbedFormView_1 = require("./TabbedFormView");
var FormTabHeader = function (_a) {
    var _b;
    var label = _a.label, value = _a.value, icon = _a.icon, className = _a.className, syncWithLocation = _a.syncWithLocation, rest = __rest(_a, ["label", "value", "icon", "className", "syncWithLocation"]);
    var translate = (0, core_1.useTranslate)();
    var location = (0, react_router_dom_1.useLocation)();
    var submitFailed = (0, react_final_form_1.useFormState)(UseFormStateOptions).submitFailed;
    var formGroup = (0, core_1.useFormGroup)(value.toString());
    var propsForLink = {
        component: react_router_dom_1.Link,
        to: __assign(__assign({}, location), { pathname: value }),
    };
    return (React.createElement(Tab_1.default, __assign({ label: (0, react_1.isValidElement)(label) ? label : translate(label, { _: label }), value: value, icon: icon, className: (0, classnames_1.default)('form-tab', className, (_b = {},
            _b[TabbedFormView_1.TabbedFormClasses.errorTabButton] = formGroup.invalid && (formGroup.touched || submitFailed),
            _b.error = formGroup.invalid && (formGroup.touched || submitFailed),
            _b)) }, (syncWithLocation ? propsForLink : {}), { id: "tabheader-".concat(value), "aria-controls": "tabpanel-".concat(value) }, rest)));
};
exports.FormTabHeader = FormTabHeader;
var UseFormStateOptions = {
    subscription: {
        submitFailed: true,
    },
};
exports.FormTabHeader.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    children: prop_types_1.default.node,
    intent: prop_types_1.default.oneOf(['header', 'content']),
    hidden: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element])
        .isRequired,
    margin: prop_types_1.default.oneOf(['none', 'dense', 'normal']),
    path: prop_types_1.default.string,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    variant: prop_types_1.default.oneOf(['standard', 'outlined', 'filled']),
};