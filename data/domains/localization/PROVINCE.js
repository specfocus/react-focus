"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVINCE = exports.ProvinceInfoSchema = void 0;
var ObjectSchema_1 = require("../../../lib/ObjectSchema");
var StringSchema_1 = require("../../../lib/StringSchema");
var provinces_json_1 = __importDefault(require("./provinces.json"));
exports.ProvinceInfoSchema = {
    domain: 'COUNTRY_INFO',
    fields: {
        country: {
            domain: 'COUNTRY_CODE',
            type: StringSchema_1.STRING_TYPE
        },
        name: {
            type: StringSchema_1.STRING_TYPE
        },
        short: {
            type: StringSchema_1.STRING_TYPE
        }
    },
    type: ObjectSchema_1.OBJECT_TYPE,
};
exports.PROVINCE = {
    enum: true,
    valueDomain: 'TEXT',
    optionSchema: exports.ProvinceInfoSchema,
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.name) || ''; },
    getOptions: function (_a) {
        var value = _a.value;
        return Promise.resolve(value ? provinces_json_1.default.filter(function (_a) {
            var country = _a.country;
            return country == value;
        }) : []);
    },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.name) === value; },
    getOptionText: function (info, t) { return info.short ? "".concat(t(info.name), " (").concat(info.short, ")") : t(info.name); },
    getOptionValue: function (option) { return (option === null || option === void 0 ? void 0 : option.name) || ''; },
    mask: 'Choose a state or province',
    label: 'State or Province',
    type: StringSchema_1.STRING_TYPE
};
