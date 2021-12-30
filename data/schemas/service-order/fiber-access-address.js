"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema = {
    type: 'object',
    length: [2, 2],
    fields: {
        country: {
            domain: 'COUNTRY',
            label: 'Country',
            placeholder: 'Country',
            required: true,
            type: 'string'
        },
        stateOrProvince: {
            dependency: 'address.country',
            domain: 'PROVINCE',
            label: 'State or Province',
            placeholder: 'State or province',
            required: true,
            type: 'string'
        },
        city: {
            // domain: 'CODE_CITY',
            label: 'City',
            placeholder: 'City',
            required: true,
            type: 'string'
        },
        locality: {
            // domain: 'CODE_LOCALITY',
            label: 'Locality',
            placeholder: 'Locality',
            required: true,
            type: 'string'
        },
        postalCode: {
            // domain: 'CODE_POSTAL',
            label: 'Zip Code',
            placeholder: 'Postal code',
            required: true,
            type: 'string'
        },
        streetName: {
            // domain: 'NAME_STREET',
            label: "Street Name",
            placeholder: 'Street name',
            required: true,
            type: 'string'
        },
        streetNumber: {
            // domain: 'CODE_STREET',
            label: 'Street Number',
            placeholder: 'Street building number',
            required: true,
            type: 'string'
        },
        coverage: {
            // domain: 'CODE_COVERAGE',
            label: 'MD Coverage',
            placeholder: 'MD coverage',
            required: true,
            type: 'string'
        }
    }
};
exports.default = schema;
