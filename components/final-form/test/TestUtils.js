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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customRender = void 0;
var react_1 = __importDefault(require("react"));
/**
 * It is lame this file is in the src directory. It doesn't belong here...
 * https://github.com/jaredpalmer/tsdx/issues/638
 */
var styles_1 = require("@mui/material/styles");
var react_2 = require("@testing-library/react");
function MyStyles(_a) {
    var children = _a.children;
    // make a copy of the data because the state is mutated below in one of the tests for clicks
    // then the state is used again for comparison later, which causes tests to be dependent on execution
    // order and fail.
    var generateClassName = (0, styles_1.createGenerateClassName)({
        disableGlobal: true,
        productionPrefix: 'test',
    });
    return react_1.default.createElement(styles_1.StylesProvider, { generateClassName: generateClassName }, children);
}
var customRender = function (ui, options) { return (0, react_2.render)(ui, __assign({ wrapper: MyStyles }, options)); };
exports.customRender = customRender;
// re-export everything
__exportStar(require("@testing-library/react"), exports);
