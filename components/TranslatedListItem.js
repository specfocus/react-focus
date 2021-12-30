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
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var react_1 = __importDefault(require("react"));
var react_i18next_1 = require("react-i18next");
var translation_1 = require("../utilities/translation");
function TranslatedListItem(_a) {
    var icon = _a.icon, primary = _a.primary, secondary = _a.secondary, otherProps = __rest(_a, ["icon", "primary", "secondary"]);
    var t = (0, react_i18next_1.useTranslation)().t;
    var primaryText = (0, translation_1.translate)(primary, t);
    var secondaryText = (0, translation_1.translate)(secondary, t);
    return (react_1.default.createElement(ListItem_1.default, __assign({}, otherProps),
        react_1.default.createElement(ListItemIcon_1.default, null, icon),
        react_1.default.createElement(ListItemText_1.default, { primary: primaryText, secondary: secondaryText })));
}
exports.default = TranslatedListItem;
