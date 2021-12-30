"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema = {
    type: 'object',
    length: [1, 1],
    fields: {
        polygonAlias: {
            // domain: 'NUMBER_POLYGON',
            label: 'Polygon Alias',
            placeholder: 'Polygon alias',
            required: false,
            type: 'number'
        }
    }
};
exports.default = schema;
