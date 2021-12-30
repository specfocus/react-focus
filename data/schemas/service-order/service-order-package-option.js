"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var ObjectSchema_1 = require("../../../lib/ObjectSchema");
var StringSchema_1 = require("../../../lib/StringSchema");
exports.schema = {
    domain: 'PACKAGE_INFO',
    fields: {
        type: {
            domain: 'PACKAGE_TYPE_CODE',
            type: StringSchema_1.STRING_TYPE
        },
        code: {
            type: StringSchema_1.STRING_TYPE
        },
        label: {
            type: StringSchema_1.STRING_TYPE
        }
    },
    type: ObjectSchema_1.OBJECT_TYPE,
};
exports.default = exports.schema;
