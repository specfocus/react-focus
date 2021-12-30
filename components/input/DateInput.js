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
var prop_types_1 = __importDefault(require("prop-types"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var core_1 = require("../../core");
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
/**
 * Convert Date object to String
 *
 * @param {Date} value value to convert
 * @returns {String} A standardized date (yyyy-MM-dd), to be passed to an <input type="date" />
 */
var convertDateToString = function (value) {
    if (!(value instanceof Date) || isNaN(value.getDate()))
        return '';
    var pad = '00';
    var yyyy = value.getFullYear().toString();
    var MM = (value.getMonth() + 1).toString();
    var dd = value.getDate().toString();
    return "".concat(yyyy, "-").concat((pad + MM).slice(-2), "-").concat((pad + dd).slice(-2));
};
var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
var defaultInputLabelProps = { shrink: true };
var getStringFromDate = function (value) {
    // null, undefined and empty string values should not go through dateFormatter
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }
    if (value instanceof Date) {
        return convertDateToString(value);
    }
    // valid dates should not be converted
    if (dateRegex.test(value)) {
        return value;
    }
    return convertDateToString(new Date(value));
};
/**
 * Form input to edit a Date string value in the "YYYY-MM-DD" format (e.g. '2021-06-23').
 *
 * Renders a date picker (the exact UI depends on the browser).
 *
 * @example
 * import { Edit, SimpleForm, DateInput } from '../../app';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <DateInput source="published_at" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * // If the initial value is a Date object, DateInput converts it to a string
 * // but you must pass a custom parse method to convert the form value
 * // (which is always a date string) back to a Date object.
 * <DateInput source="published_at" parse={val => new Date(val)} />
 */
var DateInput = function (_a) {
    var defaultValue = _a.defaultValue, _b = _a.format, format = _b === void 0 ? getStringFromDate : _b, initialValue = _a.initialValue, label = _a.label, name = _a.name, options = _a.options, source = _a.source, resource = _a.resource, helperText = _a.helperText, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, parse = _a.parse, validate = _a.validate, _d = _a.variant, variant = _d === void 0 ? 'filled' : _d, rest = __rest(_a, ["defaultValue", "format", "initialValue", "label", "name", "options", "source", "resource", "helperText", "margin", "onBlur", "onChange", "onFocus", "parse", "validate", "variant"]);
    var _e = (0, core_1.useInput)(__assign({ defaultValue: defaultValue, format: format, formatOnBlur: true, initialValue: initialValue, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, parse: parse, resource: resource, source: source, validate: validate }, rest)), id = _e.id, input = _e.input, isRequired = _e.isRequired, meta = _e.meta;
    var error = meta.error, submitError = meta.submitError, touched = meta.touched;
    return (React.createElement(TextField_1.default, __assign({ id: id }, input, { 
        // Workaround https://github.com/final-form/react-final-form/issues/529
        // & https://github.com/final-form/react-final-form/issues/431
        value: format(input.value) || '', variant: variant, margin: margin, type: "date", error: !!(touched && (error || submitError)), helperText: React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }), label: React.createElement(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), InputLabelProps: defaultInputLabelProps }, options, (0, sanitizeInputRestProps_1.default)(rest))));
};
DateInput.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
DateInput.defaultProps = {
    options: {},
};
exports.default = DateInput;
