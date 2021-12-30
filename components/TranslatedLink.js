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
var Link_1 = __importDefault(require("@mui/material/Link"));
var react_1 = __importDefault(require("react"));
var react_i18next_1 = require("react-i18next");
var react_router_dom_1 = require("react-router-dom");
var translation_1 = require("../utilities/translation");
function TranslatedLink(_a) {
    var children = _a.children, _b = _a.count, count = _b === void 0 ? 1 : _b, i18nKey = _a.i18nKey, to = _a.to, otherProps = __rest(_a, ["children", "count", "i18nKey", "to"]);
    if (!i18nKey && typeof children === 'string') {
        i18nKey = (0, translation_1.formattedKey)(children);
    }
    return (react_1.default.createElement(Link_1.default, __assign({ component: react_router_dom_1.Link, to: to }, otherProps),
        react_1.default.createElement(react_i18next_1.Trans, { i18nKey: i18nKey, count: count }, children)));
}
exports.default = TranslatedLink;