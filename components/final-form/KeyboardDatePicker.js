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
exports.KeyboardDatePicker = void 0;
var DatePicker_1 = __importDefault(require("@mui/lab/DatePicker"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var react_1 = __importDefault(require("react"));
var react_final_form_1 = require("react-final-form");
var ErrorMessage_1 = require("./ErrorMessage");
function KeyboardDatePicker(props) {
    var name = props.name, fieldProps = props.fieldProps, rest = __rest(props, ["name", "fieldProps"]);
    return (react_1.default.createElement(react_final_form_1.Field, __assign({ name: name, render: function (fieldRenderProps) { return react_1.default.createElement(KeyboardDatePickerWrapper, __assign({}, fieldRenderProps, rest)); } }, fieldProps)));
}
exports.KeyboardDatePicker = KeyboardDatePicker;
function KeyboardDatePickerWrapper(props) {
    var _a = props.input, name = _a.name, onChange = _a.onChange, value = _a.value, restInput = __rest(_a, ["name", "onChange", "value"]), meta = props.meta, dateFunsUtils = props.dateFunsUtils, locale = props.locale, _b = props.showError, showError = _b === void 0 ? ErrorMessage_1.showErrorOnChange : _b, rest = __rest(props, ["input", "meta", "dateFunsUtils", "locale", "showError"]);
    var error = meta.error, submitError = meta.submitError;
    var isError = showError({ meta: meta });
    var helperText = rest.helperText, lessrest = __rest(rest, ["helperText"]);
    var renderInput = function (params) { return (react_1.default.createElement(TextField_1.default, __assign({ autoOk: true, error: isError, fullWidth: true, helperText: isError ? error || submitError : helperText, InputProps: restInput, name: name }, params))); };
    return (react_1.default.createElement(DatePicker_1.default, __assign({ onChange: onChange, value: value === '' ? null : value, InputProps: restInput, renderInput: renderInput }, lessrest)));
}
