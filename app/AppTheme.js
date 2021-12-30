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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeLocaleState = exports.useAppThemeValue = exports.useAppThemeState = exports.appTheme = exports.APP_THEME = void 0;
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var recoil_1 = require("recoil");
var default_1 = __importDefault(require("../theme/default"));
exports.APP_THEME = 'appTheme';
exports.appTheme = (0, recoil_1.atom)({
    key: exports.APP_THEME,
    default: {
        themeOptions: default_1.default
    }
});
var useAppThemeState = function (_a) {
    var themeKey = _a.themeKey;
    var _b = (0, recoil_1.useRecoilState)(exports.appTheme), state = _b[0], setState = _b[1];
    (0, react_1.useEffect)(function () {
        Promise.resolve().then(function () { return __importStar(require("../theme/".concat(themeKey))); }).then(function (themeOptions) {
            var theme = (0, styles_1.createTheme)(themeOptions, state.localization);
            setState(__assign(__assign({}, state), { theme: theme, themeKey: themeKey, themeOptions: themeOptions }));
        });
    }, [themeKey]);
};
exports.useAppThemeState = useAppThemeState;
var useAppThemeValue = function () {
    var theme = (0, recoil_1.useRecoilValue)(exports.appTheme).theme;
    return theme;
};
exports.useAppThemeValue = useAppThemeValue;
var useThemeLocaleState = function (_a) {
    var languageTag = _a.languageTag;
    var _b = (0, recoil_1.useRecoilState)(exports.appTheme), state = _b[0], setState = _b[1];
    (0, react_1.useEffect)(function () {
        Promise.resolve().then(function () { return __importStar(require('@mui/material/locale')); }).then(function (locales) {
            var localization = locales.default[languageTag.replace('-', '')];
            if (localization) {
                var theme = (0, styles_1.createTheme)(state.themeOptions, localization);
                setState(__assign(__assign({}, state), { localization: localization, theme: theme }));
            }
        });
    }, [languageTag]);
};
exports.useThemeLocaleState = useThemeLocaleState;
