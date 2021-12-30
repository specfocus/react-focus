"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACKAGE = void 0;
var StringSchema_1 = require("../../../lib/StringSchema");
var service_order_package_option_1 = __importDefault(require("../../schemas/service-order/service-order-package-option"));
var packages_json_1 = __importDefault(require("../../db/packages.json"));
exports.PACKAGE = {
    enum: true,
    valueDomain: 'TEXT',
    optionSchema: service_order_package_option_1.default,
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptions: function (_a) {
        var value = _a.value;
        return Promise.resolve(value ? packages_json_1.default.filter(function (_a) {
            var code = _a.code;
            return code === value;
        }).map(function (_a) {
            var items = _a.items;
            return items;
        }).pop() : []);
    },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === (value === null || value === void 0 ? void 0 : value.code); },
    isOptionEqualToValue: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === (value === null || value === void 0 ? void 0 : value.code); },
    getOptionValue: function (option) { return option === null || option === void 0 ? void 0 : option.code; },
    getOptionText: function (info, t) { return t(info.label); },
    mask: 'Choose a package',
    label: 'Package',
    type: StringSchema_1.STRING_TYPE
};
