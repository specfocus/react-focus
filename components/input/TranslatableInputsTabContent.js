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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableInputsTabContent = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var core_1 = require("../../core");
var form_1 = require("../form");
var core_2 = require("../../core");
var PREFIX = 'RaTranslatableInputsTabContent';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            flexGrow: 1,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            borderRadius: 0,
            borderBottomLeftRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            border: "1px solid ".concat(theme.palette.divider),
            borderTop: 0,
        },
        _b);
});
/**
 * Default container for a group of translatable inputs inside a TranslatableInputs component.
 * @see TranslatableInputs
 */
var TranslatableInputsTabContent = function (props) {
    var basePath = props.basePath, children = props.children, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, locale = props.locale, margin = props.margin, variant = props.variant, other = __rest(props, ["basePath", "children", "groupKey", "locale", "margin", "variant"]);
    var _b = (0, core_1.useTranslatableContext)(), selectedLocale = _b.selectedLocale, getLabel = _b.getLabel, getSource = _b.getSource;
    var record = (0, core_1.useRecordContext)(props);
    var resource = (0, core_2.useResourceContext)(props);
    return (React.createElement(core_1.FormGroupContextProvider, { name: "".concat(groupKey).concat(locale) },
        React.createElement(Root, __assign({ role: "tabpanel", hidden: selectedLocale !== locale, id: "translatable-content-".concat(groupKey).concat(locale), "aria-labelledby": "translatable-header-".concat(groupKey).concat(locale), className: classes.root }, other), react_1.Children.map(children, function (child) {
            return (0, react_1.isValidElement)(child) ? (React.createElement(form_1.FormInput, { basePath: basePath, input: (0, react_1.cloneElement)(child, __assign(__assign({}, child.props), { label: getLabel(child.props.source, child.props.label), source: getSource(child.props.source, locale) })), record: record, resource: resource, variant: child.props.variant || variant, margin: child.props.margin || margin })) : null;
        }))));
};
exports.TranslatableInputsTabContent = TranslatableInputsTabContent;
