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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showErrorOnBlur = exports.showErrorOnChange = exports.useFieldForErrors = exports.ErrorMessage = void 0;
var react_1 = __importDefault(require("react"));
var react_final_form_1 = require("react-final-form");
var material_1 = require("@mui/material");
function ErrorMessage(_a) {
    var showError = _a.showError, meta = _a.meta, formHelperTextProps = _a.formHelperTextProps, helperText = _a.helperText;
    if (showError) {
        return react_1.default.createElement(material_1.FormHelperText, __assign({}, formHelperTextProps), meta.error || meta.submitError);
    }
    else if (helperText) {
        return react_1.default.createElement(material_1.FormHelperText, __assign({}, formHelperTextProps), helperText);
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
}
exports.ErrorMessage = ErrorMessage;
var config = {
    subscription: {
        error: true,
        submitError: true,
        dirtySinceLastSubmit: true,
        touched: true,
        modified: true,
    },
};
var useFieldForErrors = function (name) { return (0, react_final_form_1.useField)(name, config); };
exports.useFieldForErrors = useFieldForErrors;
var showErrorOnChange = function (_a) {
    var _b = _a.meta, submitError = _b.submitError, dirtySinceLastSubmit = _b.dirtySinceLastSubmit, error = _b.error, touched = _b.touched, modified = _b.modified;
    return !!(((submitError && !dirtySinceLastSubmit) || error) && (touched || modified));
};
exports.showErrorOnChange = showErrorOnChange;
var showErrorOnBlur = function (_a) {
    var _b = _a.meta, submitError = _b.submitError, dirtySinceLastSubmit = _b.dirtySinceLastSubmit, error = _b.error, touched = _b.touched;
    return !!(((submitError && !dirtySinceLastSubmit) || error) && touched);
};
exports.showErrorOnBlur = showErrorOnBlur;
