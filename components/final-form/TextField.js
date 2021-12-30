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
exports.TextFieldWrapper = exports.TextField = exports.TYPE_WEEK = exports.TYPE_TIME = exports.TYPE_MONTH = exports.TYPE_DATETIME_LOCAL = exports.TYPE_DATE = exports.TYPE_TELEPHONE = exports.TYPE_URL = exports.TYPE_NUMBER = exports.TYPE_EMAIL = exports.TYPE_TEXT = exports.TYPE_PASSWORD = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var react_final_form_1 = require("react-final-form");
var ErrorMessage_1 = require("./ErrorMessage");
exports.TYPE_PASSWORD = 'password';
exports.TYPE_TEXT = 'text';
exports.TYPE_EMAIL = 'email';
exports.TYPE_NUMBER = 'number';
exports.TYPE_URL = 'url';
exports.TYPE_TELEPHONE = 'tel';
exports.TYPE_DATE = 'date';
exports.TYPE_DATETIME_LOCAL = 'datetime-local';
exports.TYPE_MONTH = 'month';
exports.TYPE_TIME = 'time';
exports.TYPE_WEEK = 'week';
function TextField(props) {
    var name = props.name, type = props.type, fieldProps = props.fieldProps, rest = __rest(props, ["name", "type", "fieldProps"]);
    return (react_1.default.createElement(react_final_form_1.Field, __assign({ name: name, type: type, render: function (_a) {
            var input = _a.input, meta = _a.meta;
            return (react_1.default.createElement(TextFieldWrapper, __assign({ input: input, meta: meta, name: name, type: type }, rest)));
        } }, fieldProps)));
}
exports.TextField = TextField;
function TextFieldWrapper(props) {
    var _a = props.input, name = _a.name, value = _a.value, type = _a.type, onChange = _a.onChange, restInput = __rest(_a, ["name", "value", "type", "onChange"]), meta = props.meta, required = props.required, _b = props.fullWidth, fullWidth = _b === void 0 ? true : _b, helperText = props.helperText, _c = props.showError, showError = _c === void 0 ? ErrorMessage_1.showErrorOnChange : _c, rest = __rest(props, ["input", "meta", "required", "fullWidth", "helperText", "showError"]);
    var error = meta.error, submitError = meta.submitError;
    var isError = showError({ meta: meta });
    return (react_1.default.createElement(material_1.TextField, __assign({ fullWidth: fullWidth, helperText: isError ? error || submitError : helperText, error: isError, onChange: onChange, name: name, value: value, type: type, required: required, inputProps: __assign({ required: required }, restInput) }, rest)));
}
exports.TextFieldWrapper = TextFieldWrapper;
