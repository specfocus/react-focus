"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BooleanDomain_1 = require("../../../lib/BooleanDomain");
var schema = {
    domain: BooleanDomain_1.BOOLEAN_DOMAIN,
    type: 'object',
    length: [1, 1],
    fields: {
        fiber: {
            type: 'boolean',
            group: 'configuration',
            label: 'Fiber Access',
        },
        response: {
            type: 'boolean',
            group: 'configuration',
            label: 'Response Access',
        },
        data: {
            type: 'boolean',
            dependency: 'products.service',
            group: 'configuration',
            label: 'Data'
        },
        video: {
            type: 'boolean',
            dependency: 'products.service',
            group: 'configuration',
            label: 'Video'
        },
        voice: {
            type: 'boolean',
            dependency: 'products.service',
            group: 'configuration',
            label: 'Voice'
        },
    }
};
exports.default = schema;
