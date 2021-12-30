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
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var react_1 = __importStar(require("react"));
var react_final_form_1 = require("react-final-form");
var ErrorMessage_1 = require("../../../components/final-form/ErrorMessage");
var useFieldset_1 = __importDefault(require("../useFieldset"));
var BooleanFieldGroup = function (props) {
    var getFieldProps = (0, useFieldset_1.default)(props).getFieldProps;
    var errorField = (0, ErrorMessage_1.useFieldForErrors)(props.name);
    var isError = false; // showError(field);
    return (
    // <FormControl required={required} error={isError} {...formControlProps}>
    // !!label && <FormLabel {...formLabelProps}>{label}</FormLabel>
    Object.entries(props.schema.fields).map(function (_a) {
        var key = _a[0], schema = _a[1];
        var props = getFieldProps(key, schema);
        return (react_1.default.createElement(react_1.Fragment, { key: props.name },
            react_1.default.createElement(FormControlLabel_1.default, { name: props.name, label: props.label, 
                // value={single ? undefined : item.value}
                disabled: props.disabled, control: react_1.default.createElement(react_final_form_1.Field, { type: "checkbox", name: props.name, render: function (_a) {
                        var _b = _a.input, name = _b.name, value = _b.value, onChange = _b.onChange, checked = _b.checked, restInput = __rest(_b, ["name", "value", "onChange", "checked"]);
                        return (react_1.default.createElement(Checkbox_1.default, { name: name, value: value, onChange: onChange, checked: checked, disabled: props.disabled, inputProps: __assign({}, restInput) }));
                    } }) })));
    }));
};
exports.default = BooleanFieldGroup;
