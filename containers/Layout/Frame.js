"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var AppStack_1 = require("../../app/AppStack");
function Frame(_a) {
    var children = _a.children, name = _a.name, title = _a.title, tools = _a.tools, widgets = _a.widgets;
    var appFrameStack = (0, AppStack_1.useAppStack)();
    // change app title and restore previous on exit
    (0, react_1.useEffect)(function () {
        appFrameStack.push(name, { title: title, tools: tools, widgets: widgets });
        return function () { appFrameStack.pop(name); };
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null, children));
}
exports.default = Frame;
