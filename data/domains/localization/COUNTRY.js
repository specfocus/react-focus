"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COUNTRY = exports.CountryInfoSchema = exports.COUNTRY_CODE = exports.COUNTRY_CODES = void 0;
var ObjectSchema_1 = require("../../../lib/ObjectSchema");
var StringSchema_1 = require("../../../lib/StringSchema");
var countries_1 = __importDefault(require("./countries"));
var icon_1 = require("./icon");
exports.COUNTRY_CODES = Object.keys(countries_1.default);
exports.COUNTRY_CODE = {
    enum: exports.COUNTRY_CODES,
    label: 'Country Code',
    type: StringSchema_1.STRING_TYPE,
};
exports.CountryInfoSchema = {
    domain: 'COUNTRY_INFO',
    fields: {
        code: {
            domain: 'COUNTRY_CODE',
            type: StringSchema_1.STRING_TYPE
        },
        name: {
            type: StringSchema_1.STRING_TYPE
        },
        phone: {
            type: StringSchema_1.STRING_TYPE
        }
    },
    type: ObjectSchema_1.OBJECT_TYPE,
};
exports.COUNTRY = {
    enum: true,
    valueDomain: 'COUNTRY_CODE',
    optionSchema: exports.CountryInfoSchema,
    getOptionIcon: function (option) { return (0, icon_1.convertCountryCodeToFlag)(option === null || option === void 0 ? void 0 : option.code); },
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.name) || ''; },
    getOptions: function () { return Promise.resolve(Object.values(countries_1.default)); },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === value; },
    getOptionText: function (option, t) { return option ? "".concat(t(option.name), " (").concat(option.code, ") +").concat(option.phone) : ''; },
    help: 'Choose a country',
    label: 'Country',
    type: StringSchema_1.STRING_TYPE
};
