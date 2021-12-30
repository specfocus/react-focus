"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ready = void 0;
var react_1 = __importDefault(require("react"));
var app_1 = require("../../app");
var ImportResourceDialog_1 = require("./ImportResourceDialog");
var Ready = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(app_1.Ready, null),
    react_1.default.createElement(ImportResourceDialog_1.ImportResourceDialog, { open: true }))); };
exports.Ready = Ready;
