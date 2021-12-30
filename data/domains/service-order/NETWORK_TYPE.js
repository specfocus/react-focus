"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NETWORK_TYPE = exports.NETWORK_TYPE_CODE = exports.NETWORK_TYPE_CODES = void 0;
var StringSchema_1 = require("../../../lib/StringSchema");
var RES_PON_ACCESS = 'RES_PON_ACCESS';
var RES_HSD = 'RES_HSD';
var RES_VIDEO = 'RES_VIDEO';
exports.NETWORK_TYPE_CODES = [RES_PON_ACCESS, RES_HSD, RES_VIDEO];
exports.NETWORK_TYPE_CODE = {
    enum: exports.NETWORK_TYPE_CODES,
    label: 'Network Type',
    type: StringSchema_1.STRING_TYPE
};
exports.NETWORK_TYPE = {
    enum: true,
    label: 'Network Type',
    type: StringSchema_1.STRING_TYPE,
    valueDomain: 'NETWORK_TYPE_CODE',
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptions: function () { return Promise.resolve([
        { code: RES_PON_ACCESS, label: 'PON Access' },
        { code: RES_HSD, label: 'HSD Access' },
        { code: RES_VIDEO, label: 'Video Access' }
    ]); },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === value.code; },
    getOptionText: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptionValue: function (option) { return (option === null || option === void 0 ? void 0 : option.code) || ''; },
};
