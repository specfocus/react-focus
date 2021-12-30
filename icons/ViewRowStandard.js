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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
function default_1(props) {
    return (React.createElement(SvgIcon_1.default, __assign({ focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true" }, props),
        React.createElement("path", { d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z" })));
}
exports.default = default_1;
