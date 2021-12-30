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
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var react_1 = __importDefault(require("react"));
var react_i18next_1 = require("react-i18next");
var translation_1 = require("../utilities/translation");
function default_1(_a) {
    var label = _a.label, placeholder = _a.placeholder, title = _a.title, props = __rest(_a, ["label", "placeholder", "title"]);
    var t = (0, react_i18next_1.useTranslation)().t;
    var translatedLabel = (0, translation_1.translate)(label, t);
    var translatedPlaceholder = (0, translation_1.translate)(placeholder, t);
    var translatedTitle = (0, translation_1.translate)(title, t);
    return (react_1.default.createElement(TextField_1.default, __assign({ label: translatedLabel, placeholder: translatedPlaceholder, title: translatedTitle, "aria-label": translatedTitle }, props)));
}
exports.default = default_1;
