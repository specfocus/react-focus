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
var styles_1 = require("@mui/styles");
var react_1 = __importDefault(require("react"));
var translation_1 = require("../utilities/translation");
var Paper_1 = __importDefault(require("./Paper"));
var TranslatedTypography_1 = __importDefault(require("./TranslatedTypography"));
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    subtitle: {
        fontSize: 14,
        // padding: 6px 12px;
        // overflow: hidden;
        // position: relative;
        // font-size: 0.875rem;
        // max-width: 264px;
        // min-width: 72px;
        // box-sizing: border-box;
        // min-height: 48px;
        textAlign: 'center',
        // flex-shrink: 0;
        // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        // font-weight: 500;
        // line-height: 1.75;
        // white-space: normal;
        // letter-spacing: 0.02857em;
        textTransform: 'uppercase'
    },
}); });
function Fieldset(_a) {
    var children = _a.children, subtitle = _a.subtitle, otherProps = __rest(_a, ["children", "subtitle"]);
    var classes = useStyles();
    var i18nKey = (0, translation_1.formattedKey)(subtitle);
    return (react_1.default.createElement(Paper_1.default, __assign({}, otherProps),
        subtitle && (react_1.default.createElement(TranslatedTypography_1.default, { i18nKey: i18nKey, className: classes.subtitle, color: "textSecondary", gutterBottom: true }, subtitle)),
        children));
}
exports.default = Fieldset;
