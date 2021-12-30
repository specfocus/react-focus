"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var counterState = (0, recoil_1.atom)({
    key: "counterState",
    default: 0
});
var x2Selector = (0, recoil_1.selector)({
    key: "x2Selector",
    get: function (_a) {
        var get = _a.get;
        var count = get(counterState);
        return count * 2;
    }
});
var Preset = function (_a) {
    var _b = (0, recoil_1.useRecoilState)(counterState), count = _b[0], setCount = _b[1];
    var doubleCount = (0, recoil_1.useRecoilValue)(x2Selector);
    var increment = function () {
        setCount(count + 1);
    };
    var decrement = function () {
        setCount(count - 1);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null,
            "Count: ",
            count),
        react_1.default.createElement("p", null,
            "Double Count: ",
            doubleCount),
        react_1.default.createElement("button", { onClick: increment }, "Increment"),
        react_1.default.createElement("button", { onClick: decrement }, "Decrement")));
};
exports.default = Preset;
