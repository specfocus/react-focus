"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_ORDER_TYPE = exports.SERVICE_ORDER_TYPE_CODE = exports.SERVICE_ORDER_TYPE_CODES = exports.SERVICE_ORDER_TYPE_MODIFY_PORT = exports.SERVICE_ORDER_TYPE_RELEASE = exports.SERVICE_ORDER_TYPE_CANCELATION = exports.SERVICE_ORDER_TYPE_CONFIRMATION = exports.SERVICE_ORDER_TYPE_QUERY_PORT = exports.SERVICE_ORDER_TYPE_WITHHOLD = void 0;
var StringSchema_1 = require("../../../lib/StringSchema");
exports.SERVICE_ORDER_TYPE_WITHHOLD = 'WITHHOLD';
exports.SERVICE_ORDER_TYPE_QUERY_PORT = 'QUERY_PORT';
exports.SERVICE_ORDER_TYPE_CONFIRMATION = 'CONFIRMATION';
exports.SERVICE_ORDER_TYPE_CANCELATION = 'CANCELATION';
exports.SERVICE_ORDER_TYPE_RELEASE = 'RELEASE';
exports.SERVICE_ORDER_TYPE_MODIFY_PORT = 'MODIFY_PORT';
exports.SERVICE_ORDER_TYPE_CODES = [
    exports.SERVICE_ORDER_TYPE_WITHHOLD,
    exports.SERVICE_ORDER_TYPE_QUERY_PORT,
    exports.SERVICE_ORDER_TYPE_CONFIRMATION,
    exports.SERVICE_ORDER_TYPE_CANCELATION,
    exports.SERVICE_ORDER_TYPE_RELEASE,
    exports.SERVICE_ORDER_TYPE_MODIFY_PORT
];
exports.SERVICE_ORDER_TYPE_CODE = {
    enum: exports.SERVICE_ORDER_TYPE_CODES,
    label: 'Service Order Type',
    type: StringSchema_1.STRING_TYPE
};
exports.SERVICE_ORDER_TYPE = {
    enum: true,
    label: 'Service Order Type',
    type: StringSchema_1.STRING_TYPE,
    valueDomain: 'SERVICE_ORDER_TYPE_CODE',
    getOptionLabel: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptions: function () { return Promise.resolve([
        { code: exports.SERVICE_ORDER_TYPE_WITHHOLD, label: 'Withhold' },
        { code: exports.SERVICE_ORDER_TYPE_QUERY_PORT, label: 'Query Port' },
        { code: exports.SERVICE_ORDER_TYPE_CONFIRMATION, label: 'Confirmation' },
        { code: exports.SERVICE_ORDER_TYPE_CANCELATION, label: 'Cancelation' },
        { code: exports.SERVICE_ORDER_TYPE_RELEASE, label: 'Release' },
        { code: exports.SERVICE_ORDER_TYPE_MODIFY_PORT, label: 'Modify Port' }
    ]); },
    getOptionSelected: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === value; },
    getOptionText: function (option) { return (option === null || option === void 0 ? void 0 : option.label) || ''; },
    getOptionValue: function (option) { return (option === null || option === void 0 ? void 0 : option.code) || ''; },
    isOptionEqualToValue: function (option, value) { return (option === null || option === void 0 ? void 0 : option.code) === value; }
};
