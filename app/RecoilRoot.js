"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var recoil_devtools_1 = require("recoil-devtools");
var recoil_devtools_logger_1 = require("recoil-devtools-logger");
var a = (0, recoil_1.atom)({
    key: 'a',
    default: 1
});
var b = (0, recoil_1.selector)({
    key: 'b',
    get: function () { return 1; }
});
var c = (0, recoil_1.atom)({
    key: 'c',
    default: 1
});
var values = [a, b, c];
var Root = function (_a) {
    var children = _a.children, values = _a.values;
    return (react_1.default.createElement(recoil_1.RecoilRoot, null,
        react_1.default.createElement(recoil_devtools_1.RecoilDevtools, { values: values },
            react_1.default.createElement(recoil_devtools_logger_1.RecoilLogger, null)),
        children));
};
exports.default = Root;
