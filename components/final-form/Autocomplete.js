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
exports.Autocomplete = void 0;
var Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
var react_final_form_1 = require("react-final-form");
var ErrorMessage_1 = require("./ErrorMessage");
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
function Autocomplete(props) {
    var name = props.name, fieldProps = props.fieldProps, rest = __rest(props, ["name", "fieldProps"]);
    return (react_1.default.createElement(react_final_form_1.Field, __assign({ name: name, render: function (fieldRenderProps) { return react_1.default.createElement(AutocompleteWrapper, __assign({}, fieldRenderProps, rest)); } }, fieldProps)));
}
exports.Autocomplete = Autocomplete;
function AutocompleteWrapper(props) {
    var _a = props.input, name = _a.name, value = _a.value, onChange = _a.onChange, meta = props.meta, options = props.options, label = props.label, required = props.required, multiple = props.multiple, textFieldProps = props.textFieldProps, getOptionValue = props.getOptionValue, _b = props.showError, showError = _b === void 0 ? ErrorMessage_1.showErrorOnChange : _b, placeholder = props.placeholder, onChangeCallback = props.onChange, rest = __rest(props, ["input", "meta", "options", "label", "required", "multiple", "textFieldProps", "getOptionValue", "showError", "placeholder", "onChange"]);
    function getValue(values) {
        if (!getOptionValue) {
            return values;
        }
        // ternary hell...
        return multiple ? (values ? values.map(getOptionValue) : null) : values ? getOptionValue(values) : null;
    }
    var helperText = rest.helperText, lessrest = __rest(rest, ["helperText"]);
    var _c = textFieldProps || {}, variant = _c.variant, restTextFieldProps = __rest(_c, ["variant"]);
    // yuck...
    var defaultValue;
    if (!getOptionValue) {
        defaultValue = value;
    }
    else if (value) {
        options.forEach(function (option) {
            var optionValue = getOptionValue(option);
            if (multiple) {
                if (!defaultValue) {
                    defaultValue = [];
                }
                value.forEach(function (v) {
                    if (v === optionValue) {
                        defaultValue.push(option);
                    }
                });
            }
            else {
                if (value === optionValue) {
                    defaultValue = option;
                }
            }
        });
    }
    var onChangeFunc = function (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event, value, reason, details) {
        var gotValue = getValue(value);
        onChange(gotValue);
        if (onChangeCallback) {
            onChangeCallback(event, value, reason, details);
        }
    };
    var error = meta.error, submitError = meta.submitError;
    var isError = showError({ meta: meta });
    return (react_1.default.createElement(Autocomplete_1.default, __assign({ multiple: multiple, onChange: onChangeFunc, options: options, value: defaultValue, renderInput: function (params) {
            var _a, _b, _c, _d, _e;
            return (react_1.default.createElement(TextField_1.default, __assign({ label: label, required: required, helperText: isError ? error || submitError : helperText, error: isError, name: name, placeholder: placeholder, variant: variant }, params, restTextFieldProps, { InputProps: __assign(__assign(__assign(__assign({}, params.InputProps), restTextFieldProps.InputProps), (((_a = restTextFieldProps.InputProps) === null || _a === void 0 ? void 0 : _a.startAdornment) && {
                    startAdornment: (react_1.default.createElement(react_1.default.Fragment, null,
                        restTextFieldProps.InputProps.startAdornment, (_b = params.InputProps) === null || _b === void 0 ? void 0 :
                        _b.startAdornment)),
                })), (((_c = restTextFieldProps.InputProps) === null || _c === void 0 ? void 0 : _c.endAdornment) && {
                    endAdornment: (react_1.default.createElement(react_1.default.Fragment, null, (_d = params.InputProps) === null || _d === void 0 ? void 0 :
                        _d.endAdornment, (_e = restTextFieldProps.InputProps) === null || _e === void 0 ? void 0 :
                        _e.endAdornment)),
                })), fullWidth: true })));
        } }, lessrest)));
}
