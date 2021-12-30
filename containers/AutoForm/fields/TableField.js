"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TableField = function (_a) {
    var data = _a.data, name = _a.name;
    console.log('ARRAY field', name);
    return (react_1.default.createElement("ul", null, (data || []).map(function (item) { return (react_1.default.createElement("li", null, JSON.stringify(item))); })));
};
exports.default = TableField;
