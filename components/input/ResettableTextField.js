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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResettableTextFieldStyles = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var material_1 = require("@mui/material");
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var core_1 = require("../../core");
var PREFIX = 'RaResettableTextField';
var classes = {
    clearIcon: "".concat(PREFIX, "-clearIcon"),
    visibleClearIcon: "".concat(PREFIX, "-visibleClearIcon"),
    clearButton: "".concat(PREFIX, "-clearButton"),
    selectAdornment: "".concat(PREFIX, "-selectAdornment"),
    inputAdornedEnd: "".concat(PREFIX, "-inputAdornedEnd"),
};
exports.ResettableTextFieldStyles = (_a = {},
    _a["& .".concat(classes.clearIcon)] = {
        height: 16,
        width: 0,
    },
    _a["& .".concat(classes.visibleClearIcon)] = {
        width: 16,
    },
    _a["& .".concat(classes.clearButton)] = {
        height: 24,
        width: 24,
        padding: 0,
    },
    _a["& .".concat(classes.selectAdornment)] = {
        position: 'absolute',
        right: 24,
    },
    _a["& .".concat(classes.inputAdornedEnd)] = {
        paddingRight: 0,
    },
    _a);
var StyledTextField = (0, styles_1.styled)(material_1.TextField)(exports.ResettableTextFieldStyles);
/**
 * An override of the default Material-UI TextField which is resettable
 */
var ResettableTextField = function (props) {
    var clearAlwaysVisible = props.clearAlwaysVisible, InputProps = props.InputProps, value = props.value, resettable = props.resettable, disabled = props.disabled, _a = props.variant, variant = _a === void 0 ? 'filled' : _a, _b = props.margin, margin = _b === void 0 ? 'dense' : _b, rest = __rest(props, ["clearAlwaysVisible", "InputProps", "value", "resettable", "disabled", "variant", "margin"]);
    var translate = (0, core_1.useTranslate)();
    var onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur;
    var handleClickClearButton = (0, react_1.useCallback)(function (event) {
        event.preventDefault();
        onChange('');
    }, [onChange]);
    var handleFocus = (0, react_1.useCallback)(function (event) {
        onFocus && onFocus(event);
    }, [onFocus]);
    var handleBlur = (0, react_1.useCallback)(function (event) {
        onBlur && onBlur(event);
    }, [onBlur]);
    var clearButton = classes.clearButton, clearIcon = classes.clearIcon, inputAdornedEnd = classes.inputAdornedEnd, selectAdornment = classes.selectAdornment, visibleClearIcon = classes.visibleClearIcon, restClasses = __rest(classes, ["clearButton", "clearIcon", "inputAdornedEnd", "selectAdornment", "visibleClearIcon"]);
    var _c = InputProps || {}, endAdornment = _c.endAdornment, InputPropsWithoutEndAdornment = __rest(_c, ["endAdornment"]);
    if (clearAlwaysVisible && endAdornment) {
        throw new Error('ResettableTextField cannot display both an endAdornment and a clear button always visible');
    }
    var getEndAdornment = function () {
        var _a;
        if (!resettable) {
            return endAdornment;
        }
        else if (!value) {
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return (React.createElement(material_1.InputAdornment, { position: "end", classes: {
                        root: props.select ? selectAdornment : null,
                    } },
                    React.createElement(material_1.IconButton, { className: clearButton, "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'), disableRipple: true, disabled: true, size: "large" },
                        React.createElement(Clear_1.default, { className: (0, classnames_1.default)(clearIcon, visibleClearIcon) }))));
            }
            else {
                if (endAdornment) {
                    return endAdornment;
                }
                else {
                    // show spacer
                    return (React.createElement(material_1.InputAdornment, { position: "end", classes: {
                            root: props.select ? selectAdornment : null,
                        } },
                        React.createElement("span", { className: clearButton }, "\u00A0")));
                }
            }
        }
        else {
            // show clear
            return (React.createElement(material_1.InputAdornment, { position: "end", classes: {
                    root: props.select ? selectAdornment : null,
                } },
                React.createElement(material_1.IconButton, { className: clearButton, "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'), disableRipple: true, onClick: handleClickClearButton, onMouseDown: handleMouseDownClearButton, disabled: disabled, size: "large" },
                    React.createElement(Clear_1.default, { className: (0, classnames_1.default)(clearIcon, (_a = {},
                            _a[visibleClearIcon] = clearAlwaysVisible || value,
                            _a)) }))));
        }
    };
    return (React.createElement(StyledTextField, __assign({ classes: restClasses, value: value, InputProps: __assign({ classes: props.select && variant === 'filled'
                ? { adornedEnd: inputAdornedEnd }
                : {}, endAdornment: getEndAdornment() }, InputPropsWithoutEndAdornment), disabled: disabled, variant: variant, margin: margin }, rest, { onFocus: handleFocus, onBlur: handleBlur })));
};
var handleMouseDownClearButton = function (event) {
    event.preventDefault();
};
ResettableTextField.propTypes = {
    clearAlwaysVisible: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    InputProps: prop_types_1.default.object,
    onBlur: prop_types_1.default.func,
    onChange: prop_types_1.default.func.isRequired,
    onFocus: prop_types_1.default.func,
    resettable: prop_types_1.default.bool,
    value: prop_types_1.default.any.isRequired,
};
exports.default = ResettableTextField;
