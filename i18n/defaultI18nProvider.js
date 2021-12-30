"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __importDefault(require("./en"));
var polyglot_1 = __importDefault(require("./polyglot"));
exports.default = (0, polyglot_1.default)(function () { return en_1.default; }, 'en', {
    allowMissing: true,
});
