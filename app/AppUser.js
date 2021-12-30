"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppTheme = exports.appUser = exports.APP_USER = void 0;
var recoil_1 = require("recoil");
exports.APP_USER = 'appUser';
exports.appUser = (0, recoil_1.atom)({
    key: exports.APP_USER,
    default: {}, // default value (aka initial value)
});
var useAppTheme = function () { return (0, recoil_1.useRecoilValue)(exports.appUser); };
exports.useAppTheme = useAppTheme;
