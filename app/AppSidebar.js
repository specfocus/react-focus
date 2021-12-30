"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSidebar = exports.appSidebar = exports.APP_SIDEBAR = void 0;
var recoil_1 = require("recoil");
var sidebar_1 = __importDefault(require("../sidebar"));
exports.APP_SIDEBAR = 'appSidebar2';
exports.appSidebar = (0, recoil_1.atom)({
    key: exports.APP_SIDEBAR,
    default: sidebar_1.default, // default value (aka initial value)
});
var useAppSidebar = function () { return (0, recoil_1.useRecoilValue)(exports.appSidebar); };
exports.useAppSidebar = useAppSidebar;
