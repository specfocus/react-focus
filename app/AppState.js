"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appWidget = exports.appTheme = exports.appSidebar = void 0;
var recoil_1 = require("recoil");
var isNight = function (time) { return time.getHours() > 18 || time.getHours() < 6; };
// Sidebar collapsed/expanded state
exports.appSidebar = (0, recoil_1.atom)({
    key: 'appSidebar',
    default: 'expanded', // default value (aka initial value)
});
// Active theme
exports.appTheme = (0, recoil_1.atom)({
    key: 'appTheme',
    default: isNight(new Date()) ? 'dark' : 'light', // default value (aka initial value)
});
// Active widget if any
exports.appWidget = (0, recoil_1.atom)({
    key: 'appWidget',
    default: undefined, // default value (aka initial value)
});
