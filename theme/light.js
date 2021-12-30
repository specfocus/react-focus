"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@mui/utils");
var default_1 = __importDefault(require("./default"));
var lightThemeOptions = (0, utils_1.deepmerge)(default_1.default, {
    palette: {
        mode: 'light',
    }
}, {
    clone: true
});
exports.default = lightThemeOptions;
