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
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var core_1 = require("../../core");
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var InputPropTypes_1 = __importDefault(require("./InputPropTypes"));
var BooleanInput = function (props) {
    var format = props.format, label = props.label, fullWidth = props.fullWidth, helperText = props.helperText, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, options = props.options, disabled = props.disabled, parse = props.parse, resource = props.resource, source = props.source, validate = props.validate, rest = __rest(props, ["format", "label", "fullWidth", "helperText", "onBlur", "onChange", "onFocus", "options", "disabled", "parse", "resource", "source", "validate"]);
    var _a = (0, core_1.useInput)(__assign({ format: format, onBlur: onBlur, onChange: onChange, onFocus: onFocus, parse: parse, resource: resource, source: source, type: 'checkbox', validate: validate }, rest)), id = _a.id, _b = _a.input, finalFormOnChange = _b.onChange, type = _b.type, value = _b.value, inputProps = __rest(_b, ["onChange", "type", "value"]), isRequired = _a.isRequired, _c = _a.meta, error = _c.error, submitError = _c.submitError, touched = _c.touched;
    var handleChange = (0, react_1.useCallback)(function (event, value) {
        finalFormOnChange(value);
    }, [finalFormOnChange]);
    return (React.createElement(FormGroup_1.default, __assign({}, (0, sanitizeInputRestProps_1.default)(rest)),
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Switch_1.default, __assign({ id: id, color: "primary", onChange: handleChange }, inputProps, options, { disabled: disabled })), label: React.createElement(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) }),
        React.createElement(FormHelperText_1.default, { error: !!(error || submitError) },
            React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }))));
};
BooleanInput.propTypes = __assign(__assign({}, InputPropTypes_1.default), { 
    // @ts-ignore
    options: prop_types_1.default.shape(Switch_1.default.propTypes), disabled: prop_types_1.default.bool });
BooleanInput.defaultProps = {
    options: {},
};
exports.default = BooleanInput;
