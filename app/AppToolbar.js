"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppToolbar = exports.appToolbar = exports.APP_TOOLBAR = void 0;
var recoil_1 = require("recoil");
exports.APP_TOOLBAR = 'appToolbar';
exports.appToolbar = (0, recoil_1.atom)({
    key: exports.APP_TOOLBAR,
    default: {}, // default value (aka initial value)
});
var useAppToolbar = function () { return (0, recoil_1.useRecoilValue)(exports.appToolbar); };
exports.useAppToolbar = useAppToolbar;
