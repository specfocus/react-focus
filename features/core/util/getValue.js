"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("lodash/get"));
exports.default = (value, path) => {
    if (typeof value === 'object') {
        return (0, get_1.default)(value, path);
    }
    return value;
};
