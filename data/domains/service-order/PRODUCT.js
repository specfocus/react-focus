"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT = exports.PRODUCT_CODE = exports.PRODUCT_CODES = exports.PRODUCT_VIDEO = exports.PRODUCT_DATA = exports.PRODUCT_AUDIO = exports.PRODUCT_RESPONSE_ACCESS = exports.PRODUCT_FIBER_ACCESS = void 0;
var StringSchema_1 = require("../../../lib/StringSchema");
exports.PRODUCT_FIBER_ACCESS = 'FIBER_ACCESS';
exports.PRODUCT_RESPONSE_ACCESS = 'RESPONSE_ACCESS';
exports.PRODUCT_AUDIO = 'AUDIO';
exports.PRODUCT_DATA = 'DATA';
exports.PRODUCT_VIDEO = 'VIDEO';
exports.PRODUCT_CODES = [
    exports.PRODUCT_FIBER_ACCESS,
    exports.PRODUCT_RESPONSE_ACCESS,
    exports.PRODUCT_AUDIO,
    exports.PRODUCT_DATA,
    exports.PRODUCT_VIDEO
];
exports.PRODUCT_CODE = {
    enum: exports.PRODUCT_CODES,
    label: 'Product',
    type: StringSchema_1.STRING_TYPE
};
exports.PRODUCT = {
    enum: true,
    label: 'Product',
    type: StringSchema_1.STRING_TYPE,
    valueDomain: 'PRODUCT_CODE',
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptions: function () { return Promise.resolve([
        { code: exports.PRODUCT_FIBER_ACCESS, label: 'Fiber Access' },
        { code: exports.PRODUCT_RESPONSE_ACCESS, label: 'Respose Access' },
        { code: exports.PRODUCT_AUDIO, label: 'Audio' },
        { code: exports.PRODUCT_DATA, label: 'Data' },
        { code: exports.PRODUCT_VIDEO, label: 'Video' }
    ]); },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === value; },
    getOptionText: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptionValue: function (option) { return (option === null || option === void 0 ? void 0 : option.code) || ''; },
};
