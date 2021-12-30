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
exports.TranslatableInputsTab = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var Tab_1 = __importDefault(require("@mui/material/Tab"));
var core_1 = require("../../core");
var inflection_1 = require("inflection");
var classnames_1 = __importDefault(require("classnames"));
var PREFIX = 'RaTranslatableInputsTab';
var classes = {
    root: "".concat(PREFIX, "-root"),
    error: "".concat(PREFIX, "-error"),
};
var StyledTab = (0, styles_1.styled)(Tab_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            fontSize: '0.8em',
            minHeight: theme.spacing(3),
            minWidth: theme.spacing(6),
        },
        _b["& .".concat(classes.error)] = { color: theme.palette.error.main },
        _b);
});
/**
 * Single tab that selects a locale in a TranslatableInputs component.
 * @see TranslatableInputs
 */
var TranslatableInputsTab = function (props) {
    var _a;
    var _b = props.groupKey, groupKey = _b === void 0 ? '' : _b, locale = props.locale, rest = __rest(props, ["groupKey", "locale"]);
    var _c = (0, core_1.useFormGroup)("".concat(groupKey).concat(locale)), invalid = _c.invalid, touched = _c.touched;
    var translate = (0, core_1.useTranslate)();
    return (react_1.default.createElement(StyledTab, __assign({ id: "translatable-header-".concat(groupKey).concat(locale), label: translate("ra.locales.".concat(locale), {
            _: (0, inflection_1.capitalize)(locale),
        }), className: (0, classnames_1.default)(classes.root, (_a = {},
            _a[classes.error] = invalid && touched,
            _a)) }, rest)));
};
exports.TranslatableInputsTab = TranslatableInputsTab;
