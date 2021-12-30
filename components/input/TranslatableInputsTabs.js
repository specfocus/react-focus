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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableInputsTabs = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var core_1 = require("../../core");
var TranslatableInputsTab_1 = require("./TranslatableInputsTab");
var PREFIX = 'RaTranslatableInputsTabs';
var classes = {
    root: "".concat(PREFIX, "-root"),
    tabs: "".concat(PREFIX, "-tabs"),
};
var StyledAppBar = (0, styles_1.styled)(material_1.AppBar)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            boxShadow: 'none',
            borderRadius: 0,
            borderTopLeftRadius: theme.shape.borderRadius,
            borderTopRightRadius: theme.shape.borderRadius,
            border: "1px solid ".concat(theme.palette.divider),
        },
        _b["& .".concat(classes.tabs)] = {
            minHeight: theme.spacing(3),
        },
        _b);
});
/**
 * Default locale selector for the TranslatableInputs component. Generates a tab for each specified locale.
 * @see TranslatableInputs
 */
var TranslatableInputsTabs = function (props) {
    var groupKey = props.groupKey, tabsProps = props.TabsProps;
    var _a = (0, core_1.useTranslatableContext)(), locales = _a.locales, selectLocale = _a.selectLocale, selectedLocale = _a.selectedLocale;
    var handleChange = function (event, newLocale) {
        selectLocale(newLocale);
    };
    return (React.createElement(StyledAppBar, { color: "default", position: "static", className: classes.root },
        React.createElement(material_1.Tabs, __assign({ value: selectedLocale, onChange: handleChange, indicatorColor: "primary", textColor: "primary", className: classes.tabs }, tabsProps), locales.map(function (locale) { return (React.createElement(TranslatableInputsTab_1.TranslatableInputsTab, { key: locale, value: locale, locale: locale, groupKey: groupKey })); }))));
};
exports.TranslatableInputsTabs = TranslatableInputsTabs;