"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema = {
    type: 'object',
    length: [1, 1],
    fields: {
        longitude: {
            // domain: 'NUMBER_LONGITUDE',
            label: 'Longitude',
            placeholder: 'Longitude',
            required: true,
            type: 'number'
        },
        latitude: {
            // domain: 'NUMBER_LATIDUDE',
            label: 'Latitude',
            placeholder: 'Latitude',
            required: true,
            type: 'number'
        }
    }
};
exports.default = schema;
