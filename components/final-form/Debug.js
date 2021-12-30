"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
var react_final_form_1 = require("react-final-form");
var react_1 = __importDefault(require("react"));
function Debug() {
    return (react_1.default.createElement(react_final_form_1.FormSpy, { subscription: { values: true } }, function (_a) {
        var values = _a.values;
        return react_1.default.createElement("pre", null, JSON.stringify(values, undefined, 2));
    }));
}
exports.Debug = Debug;
