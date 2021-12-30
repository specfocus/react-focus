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
var leftPad = function (nb) {
    if (nb === void 0) { nb = 2; }
    return function (value) { return ('0'.repeat(nb) + value).slice(-nb); };
};
var leftPad4 = leftPad(4);
var leftPad2 = leftPad(2);
/**
 * @param {Date} value value to convert
 * @returns {String} A standardized datetime (yyyy-MM-ddThh:mm), to be passed to an <input type="datetime-local" />
 */
var convertDateToString = function (value) {
    if (!(value instanceof Date) || isNaN(value.getDate()))
        return '';
    var yyyy = leftPad4(value.getFullYear());
    var MM = leftPad2(value.getMonth() + 1);
    var dd = leftPad2(value.getDate());
    var hh = leftPad2(value.getHours());
    var mm = leftPad2(value.getMinutes());
    return "".concat(yyyy, "-").concat(MM, "-").concat(dd, "T").concat(hh, ":").concat(mm);
};
// yyyy-MM-ddThh:mm
var dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
var defaultInputLabelProps = { shrink: true };
/**
 * Converts a date from the Redux store, with timezone, to a date string
 * without timezone for use in an <input type="datetime-local" />.
 *
 * @param {Date | String} value date string or object
 */
var formatDateTime = function (value) {
    // null, undefined and empty string values should not go through convertDateToString
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }
    if (value instanceof Date) {
        return convertDateToString(value);
    }
    // valid dates should not be converted
    if (dateTimeRegex.test(value)) {
        return value;
    }
    return convertDateToString(new Date(value));
};
/**
 * Converts a datetime string without timezone to a date object
 * with timezone, using the browser timezone.
 *
 * @param {string} value Date string, formatted as yyyy-MM-ddThh:mm
 * @return {Date}
 */
var parseDateTime = function (value) { return new Date(value); };
/**
 * Input component for entering a date and a time with timezone, using the browser locale
 */
var DateTimeInput = function (_a) {
    var defaultValue = _a.defaultValue, _b = _a.format, format = _b === void 0 ? formatDateTime : _b, initialValue = _a.initialValue, label = _a.label, helperText = _a.helperText, _c = _a.margin, margin = _c === void 0 ? 'dense' : _c, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, source = _a.source, resource = _a.resource, _d = _a.parse, parse = _d === void 0 ? parseDateTime : _d, validate = _a.validate, _e = _a.variant, variant = _e === void 0 ? 'filled' : _e, rest = __rest(_a, ["defaultValue", "format", "initialValue", "label", "helperText", "margin", "onBlur", "onChange", "onFocus", "options", "source", "resource", "parse", "validate", "variant"]);
    var _f = (0, core_1.useInput)(__assign({ defaultValue: defaultValue, format: format, initialValue: initialValue, onBlur: onBlur, onChange: onChange, onFocus: onFocus, parse: parse, resource: resource, source: source, type: 'datetime-local', validate: validate }, rest)), id = _f.id, input = _f.input, isRequired = _f.isRequired, meta = _f.meta;
    var error = meta.error, submitError = meta.submitError, touched = meta.touched;
    return (React.createElement(TextField_1.default, __assign({ id: id }, input, { 
        // Workaround https://github.com/final-form/react-final-form/issues/529
        // and https://github.com/final-form/react-final-form/issues/431
        value: format(input.value) || '', variant: variant, margin: margin, error: !!(touched && (error || submitError)), helperText: React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }), label: React.createElement(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), InputLabelProps: defaultInputLabelProps }, options, (0, sanitizeInputRestProps_1.default)(rest))));
};
DateTimeInput.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
DateTimeInput.defaultProps = {
    options: {},
};
exports.default = DateTimeInput;