"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringSchema_1 = require("../../../lib/StringSchema");
var schema = {
    type: 'object',
    config: [5, [2, 1], [2, 1], [1, 1]],
    fields: {
        packageType: {
            canFreeSolo: false,
            domain: 'PACKAGE_TYPE',
            label: 'Package Type',
            type: StringSchema_1.STRING_TYPE
        },
        package: {
            action: {
                type: 'ADD_PACKAGE',
                payload: {
                    source: 'packages.package.code',
                    target: 'packages.selection'
                }
            },
            canFreeSolo: false,
            dependency: 'products.packageType',
            domain: 'PACKAGE',
            label: 'Package Code',
            type: StringSchema_1.STRING_TYPE
        },
        /*
        add: {
          domain: 'ACTION_TRANSFORM_DOMAIN',
          label: 'Add Package',
          payload: {
            type: 'ADD_PACKAGE'
          },
          type: 'action'
        },
        */
        selection: {
            type: 'array',
            items: {
                type: StringSchema_1.STRING_TYPE
            }
        }
    },
};
exports.default = schema;
