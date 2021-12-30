"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_ORDER_TYPE_CODE = exports.SERVICE_CATEGORY_CODE = exports.PACKAGE_TYPE_CODE = exports.NETWORK_TYPE_CODE = exports.PRODUCT_CODE = exports.COUNTRY_CODE = exports.PHONE_NUMBER = exports.GUID = exports.EMAIL = exports.TEXT = exports.DATE_TIME = exports.DATE = void 0;
var StringSchema_1 = require("../../lib/StringSchema");
exports.DATE = {
    format: 'date',
    label: 'Date',
    type: StringSchema_1.STRING_TYPE,
};
exports.DATE_TIME = {
    format: 'datetime',
    label: 'Date and Time',
    type: StringSchema_1.STRING_TYPE,
};
exports.TEXT = {
    label: 'Text',
    type: StringSchema_1.STRING_TYPE,
};
exports.EMAIL = {
    format: 'email',
    label: 'Email',
    type: StringSchema_1.STRING_TYPE,
};
exports.GUID = {
    format: 'uuid',
    label: 'Guid',
    type: StringSchema_1.STRING_TYPE,
};
exports.PHONE_NUMBER = {
    format: 'phone',
    label: 'Phone Number',
    type: StringSchema_1.STRING_TYPE,
};
var COUNTRY_1 = require("./localization/COUNTRY");
Object.defineProperty(exports, "COUNTRY_CODE", { enumerable: true, get: function () { return COUNTRY_1.COUNTRY_CODE; } });
var PRODUCT_1 = require("./service-order/PRODUCT");
Object.defineProperty(exports, "PRODUCT_CODE", { enumerable: true, get: function () { return PRODUCT_1.PRODUCT_CODE; } });
var NETWORK_TYPE_1 = require("./service-order/NETWORK_TYPE");
Object.defineProperty(exports, "NETWORK_TYPE_CODE", { enumerable: true, get: function () { return NETWORK_TYPE_1.NETWORK_TYPE_CODE; } });
var PACKAGE_TYPE_1 = require("./service-order/PACKAGE_TYPE");
Object.defineProperty(exports, "PACKAGE_TYPE_CODE", { enumerable: true, get: function () { return PACKAGE_TYPE_1.PACKAGE_TYPE_CODE; } });
var SERVICE_CATEGORY_1 = require("./service-order/SERVICE_CATEGORY");
Object.defineProperty(exports, "SERVICE_CATEGORY_CODE", { enumerable: true, get: function () { return SERVICE_CATEGORY_1.SERVICE_CATEGORY_CODE; } });
var SERVICE_ORDER_TYPE_1 = require("./service-order/SERVICE_ORDER_TYPE");
Object.defineProperty(exports, "SERVICE_ORDER_TYPE_CODE", { enumerable: true, get: function () { return SERVICE_ORDER_TYPE_1.SERVICE_ORDER_TYPE_CODE; } });
