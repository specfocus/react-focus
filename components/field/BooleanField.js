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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var classnames_1 = __importDefault(require("classnames"));
var Done_1 = __importDefault(require("@mui/icons-material/Done"));
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var material_1 = require("@mui/material");
var core_1 = require("../../core");
var types_1 = require("./types");
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var PREFIX = 'RaBooleanField';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var StyledTypography = (0, styles_1.styled)(material_1.Typography)((_a = {},
    _a["&.".concat(classes.root)] = {
        display: 'flex',
    },
    _a));
var BooleanField = (0, react_1.memo)(function (props) {
    var className = props.className, classesOverride = props.classes, emptyText = props.emptyText, source = props.source, valueLabelTrue = props.valueLabelTrue, valueLabelFalse = props.valueLabelFalse, TrueIcon = props.TrueIcon, FalseIcon = props.FalseIcon, looseValue = props.looseValue, rest = __rest(props, ["className", "classes", "emptyText", "source", "valueLabelTrue", "valueLabelFalse", "TrueIcon", "FalseIcon", "looseValue"]);
    var record = (0, core_1.useRecordContext)(props);
    var translate = (0, core_1.useTranslate)();
    var value = (0, get_1.default)(record, source);
    var isTruthyValue = value === true || (looseValue && value);
    var ariaLabel = value ? valueLabelTrue : valueLabelFalse;
    if (!ariaLabel) {
        ariaLabel = isTruthyValue ? 'ra.boolean.true' : 'ra.boolean.false';
    }
    if (looseValue || value === false || value === true) {
        return (React.createElement(StyledTypography, __assign({ component: "span", variant: "body2", className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest)),
            React.createElement(material_1.Tooltip, { title: translate(ariaLabel, { _: ariaLabel }) }, isTruthyValue ? (React.createElement("span", null,
                React.createElement(TrueIcon, { "data-testid": "true", fontSize: "small" }))) : (React.createElement("span", null,
                React.createElement(FalseIcon, { "data-testid": "false", fontSize: "small" }))))));
    }
    return (React.createElement(material_1.Typography, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest)), emptyText));
});
BooleanField.defaultProps = {
    addLabel: true,
    TrueIcon: Done_1.default,
    FalseIcon: Clear_1.default,
    looseValue: false,
};
BooleanField.propTypes = __assign(__assign(__assign({}, material_1.Typography.propTypes), types_1.fieldPropTypes), { valueLabelFalse: prop_types_1.default.string, valueLabelTrue: prop_types_1.default.string, TrueIcon: prop_types_1.default.elementType, FalseIcon: prop_types_1.default.elementType, looseValue: prop_types_1.default.bool });
BooleanField.displayName = 'BooleanField';
exports.default = BooleanField;
