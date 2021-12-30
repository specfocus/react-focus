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
exports.ChipField = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var types_1 = require("./types");
var PREFIX = 'RaChipField';
var classes = {
    chip: "".concat(PREFIX, "-chip"),
};
var StyledChip = (0, styles_1.styled)(Chip_1.default)((_a = {},
    _a["&.".concat(classes.chip)] = { margin: 4, cursor: 'inherit' },
    _a));
exports.ChipField = (0, react_1.memo)(function (props) {
    var className = props.className, classesOverride = props.classes, source = props.source, emptyText = props.emptyText, rest = __rest(props, ["className", "classes", "source", "emptyText"]);
    var record = (0, core_1.useRecordContext)(props);
    var value = (0, get_1.default)(record, source);
    if (value == null && emptyText) {
        return (React.createElement(Typography_1.default, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest)), emptyText));
    }
    return (React.createElement(StyledChip, __assign({ className: (0, classnames_1.default)(classes.chip, className), label: value }, (0, sanitizeFieldRestProps_1.default)(rest))));
});
exports.ChipField.defaultProps = {
    addLabel: true,
};
exports.ChipField.propTypes = __assign(__assign({}, exports.ChipField.propTypes), types_1.fieldPropTypes);
exports.ChipField.displayName = 'ChipField';
exports.default = exports.ChipField;
