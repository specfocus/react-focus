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
exports.Select = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ErrorMessage_1 = require("./ErrorMessage");
var react_final_form_1 = require("react-final-form");
function Select(props) {
    var name = props.name, label = props.label, data = props.data, children = props.children, required = props.required, multiple = props.multiple, helperText = props.helperText, fieldProps = props.fieldProps, inputLabelProps = props.inputLabelProps, formControlProps = props.formControlProps, formHelperTextProps = props.formHelperTextProps, menuItemProps = props.menuItemProps, _a = props.showError, showError = _a === void 0 ? ErrorMessage_1.showErrorOnChange : _a, restSelectProps = __rest(props, ["name", "label", "data", "children", "required", "multiple", "helperText", "fieldProps", "inputLabelProps", "formControlProps", "formHelperTextProps", "menuItemProps", "showError"]);
    if (!data && !children) {
        throw new Error('Please specify either children or data as an attribute.');
    }
    var variant = restSelectProps.variant;
    var field = (0, ErrorMessage_1.useFieldForErrors)(name);
    var isError = showError(field);
    return (react_1.default.createElement(react_final_form_1.Field, __assign({ name: name, render: function (_a) {
            var _b = _a.input, name = _b.name, value = _b.value, onChange = _b.onChange, restInput = __rest(_b, ["name", "value", "onChange"]);
            // prevents an error that happens if you don't have initialValues defined in advance
            var finalValue = multiple && !value ? [] : value;
            var labelId = "select-input-".concat(name);
            return (react_1.default.createElement(material_1.FormControl, __assign({ required: required, error: isError, fullWidth: true, variant: variant }, formControlProps),
                !!label && (react_1.default.createElement(material_1.InputLabel, __assign({ id: labelId }, inputLabelProps), label)),
                react_1.default.createElement(material_1.Select, __assign({ name: name, value: finalValue, onChange: onChange, multiple: multiple, label: label, labelId: labelId, inputProps: __assign({ required: required }, restInput) }, restSelectProps), data
                    ? data.map(function (item) { return (react_1.default.createElement(material_1.MenuItem, __assign({ value: item.value, key: item.value, disabled: item.disabled }, menuItemProps), item.label)); })
                    : children),
                react_1.default.createElement(ErrorMessage_1.ErrorMessage, { showError: isError, meta: field.meta, formHelperTextProps: formHelperTextProps, helperText: helperText })));
        } }, fieldProps)));
}
exports.Select = Select;
