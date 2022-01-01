"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const recoil_devtools_1 = require("recoil-devtools");
const recoil_devtools_logger_1 = require("recoil-devtools-logger");
__exportStar(require("recoil"), exports);
const Debug = ({ values }) => ((0, jsx_runtime_1.jsx)(recoil_devtools_1.RecoilDevtools, Object.assign({ values: values }, { children: (0, jsx_runtime_1.jsx)(recoil_devtools_logger_1.RecoilLogger, {}, void 0) }), void 0));
exports.Debug = Debug;
