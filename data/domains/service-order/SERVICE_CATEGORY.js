"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_CATEGORY = exports.SERVICE_CATEGORY_CODE = exports.SERVICE_CATEGORY_CODES = void 0;
var StringSchema_1 = require("../../../lib/StringSchema");
var RES_PON_ACCESS = 'RES_PON_ACCESS';
var RES_HSD = 'RES_HSD';
var RES_VIDEO = 'RES_VIDEO';
exports.SERVICE_CATEGORY_CODES = [RES_PON_ACCESS, RES_HSD, RES_VIDEO];
exports.SERVICE_CATEGORY_CODE = {
    enum: exports.SERVICE_CATEGORY_CODES,
    label: 'Service Category',
    type: StringSchema_1.STRING_TYPE
};
exports.SERVICE_CATEGORY = {
    enum: true,
    label: 'Service Category',
    type: StringSchema_1.STRING_TYPE,
    valueDomain: 'SERVICE_CATEGORY_CODE',
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptions: function () { return Promise.resolve([
        { code: RES_PON_ACCESS, label: 'PON Access' },
        { code: RES_HSD, label: 'HSD Access' },
        { code: RES_VIDEO, label: 'Video Access' }
    ]); },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === value; },
    getOptionText: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptionValue: function (option) { return (option === null || option === void 0 ? void 0 : option.code) || ''; },
};
