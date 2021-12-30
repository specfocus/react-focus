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
exports.Switches = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ErrorMessage_1 = require("./ErrorMessage");
var react_final_form_1 = require("react-final-form");
function Switches(props) {
    var name = props.name, data = props.data, label = props.label, required = props.required, helperText = props.helperText, fieldProps = props.fieldProps, formControlProps = props.formControlProps, formGroupProps = props.formGroupProps, formLabelProps = props.formLabelProps, formControlLabelProps = props.formControlLabelProps, formHelperTextProps = props.formHelperTextProps, _a = props.showError, showError = _a === void 0 ? ErrorMessage_1.showErrorOnChange : _a, restSwitches = __rest(props, ["name", "data", "label", "required", "helperText", "fieldProps", "formControlProps", "formGroupProps", "formLabelProps", "formControlLabelProps", "formHelperTextProps", "showError"]);
    var itemsData = Array.isArray(data) ? data : [data];
    var single = Array.isArray(data) ? false : true;
    var field = (0, ErrorMessage_1.useFieldForErrors)(name);
    var isError = showError(field);
    return (react_1.default.createElement(material_1.FormControl, __assign({ required: required, error: isError }, formControlProps),
        label ? react_1.default.createElement(material_1.FormLabel, __assign({}, formLabelProps), label) : react_1.default.createElement(react_1.default.Fragment, null),
        react_1.default.createElement(material_1.FormGroup, __assign({}, formGroupProps), itemsData.map(function (item, idx) { return (react_1.default.createElement(material_1.FormControlLabel, __assign({ key: idx, name: name, label: item.label, value: single ? undefined : item.value, disabled: item.disabled, control: react_1.default.createElement(react_final_form_1.Field, __assign({ type: "checkbox", name: name, render: function (_a) {
                    var _b = _a.input, name = _b.name, value = _b.value, onChange = _b.onChange, checked = _b.checked, restInput = __rest(_b, ["name", "value", "onChange", "checked"]);
                    return (react_1.default.createElement(material_1.Switch, __assign({ name: name, value: value, onChange: onChange, checked: checked, disabled: item.disabled, required: required, inputProps: __assign({ required: required }, restInput) }, restSwitches)));
                } }, fieldProps)) }, formControlLabelProps))); })),
        react_1.default.createElement(ErrorMessage_1.ErrorMessage, { showError: isError, meta: field.meta, formHelperTextProps: formHelperTextProps, helperText: helperText })));
}
exports.Switches = Switches;
