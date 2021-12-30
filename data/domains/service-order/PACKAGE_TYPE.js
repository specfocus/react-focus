"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACKAGE_TYPE = exports.PACKAGE_TYPE_CODE = exports.PACKAGE_TYPE_CODES = void 0;
var StringSchema_1 = require("../../../lib/StringSchema");
var packages_json_1 = __importDefault(require("../../db/packages.json"));
var PACKAGE_TYPE_CONNECTIVITY = 'CONNECTIVITY';
var PACKAGE_TYPE_REMOTE_HANDS = 'REMOTE_HANDS';
var PACKAGE_TYPE_OTHER = 'OTHER';
exports.PACKAGE_TYPE_CODES = [
    PACKAGE_TYPE_CONNECTIVITY,
    PACKAGE_TYPE_REMOTE_HANDS,
    PACKAGE_TYPE_OTHER
];
exports.PACKAGE_TYPE_CODE = {
    enum: exports.PACKAGE_TYPE_CODES,
    label: 'Package Type Code',
    type: StringSchema_1.STRING_TYPE
};
exports.PACKAGE_TYPE = {
    enum: true,
    label: 'Package Type',
    type: StringSchema_1.STRING_TYPE,
    valueDomain: 'PACKAGE_TYPE_CODE',
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptions: function () { return Promise.resolve(packages_json_1.default); },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === value.code; },
    getOptionValue: function (option) { return option === null || option === void 0 ? void 0 : option.code; },
    getOptionText: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; }
};
