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
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var Labeled_1 = __importDefault(require("../input/Labeled"));
var PREFIX = 'RaFormInput';
var classes = {
    input: "".concat(PREFIX, "-input"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.input)] = { width: theme.spacing(32) },
        _b);
});
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, record = _a.record, rest = __rest(_a, ["basePath", "record"]);
    return rest;
};
var FormInput = function (props) {
    var _a, _b;
    var input = props.input, rest = __rest(props, ["input"]);
    var _c = input
        ? input.props
        : { id: undefined, className: undefined }, id = _c.id, className = _c.className, inputProps = __rest(_c, ["id", "className"]);
    return input ? (React.createElement(Root, { className: (0, classnames_1.default)('ra-input', "ra-input-".concat(input.props.source), input.props.formClassName) }, input.props.addLabel ? (React.createElement(Labeled_1.default, __assign({ id: id || input.props.source }, inputProps, sanitizeRestProps(rest)), React.cloneElement(input, __assign(__assign({ className: (0, classnames_1.default)((_a = {},
            _a[classes.input] = !input.props.fullWidth,
            _a), className), id: input.props.id || input.props.source }, rest), inputProps)))) : (React.cloneElement(input, __assign(__assign({ className: (0, classnames_1.default)((_b = {},
            _b[classes.input] = !input.props.fullWidth,
            _b), className), id: input.props.id || input.props.source }, rest), inputProps))))) : null;
};
FormInput.propTypes = {
    classes: prop_types_1.default.object,
    // @ts-ignore
    input: prop_types_1.default.node,
};
// What? TypeScript loses the displayName if we don't set it explicitly
FormInput.displayName = 'FormInput';
exports.default = FormInput;