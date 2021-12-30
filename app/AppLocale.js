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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppLocaleState = exports.appLocale = exports.APP_LOCALE = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var AppTheme_1 = require("./AppTheme");
exports.APP_LOCALE = 'appLocale';
exports.appLocale = (0, recoil_1.atom)({
    key: exports.APP_LOCALE,
    default: {
        languageTag: 'enUS'
    }
});
var useAppLocaleState = function (props) {
    var _a = (0, recoil_1.useRecoilState)(exports.appLocale), state = _a[0], setState = _a[1];
    (0, react_1.useEffect)(function () {
        var languageTag = props.languageTag;
        setState(__assign(__assign({}, state), { languageTag: languageTag }));
    }, [props]);
    (0, AppTheme_1.useThemeLocaleState)(props);
};
exports.useAppLocaleState = useAppLocaleState;
