"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AddressField = ({ record }) => record ? ((0, jsx_runtime_1.jsxs)("span", { children: [record.address, ", ", record.city, ", ", record.stateAbbr, " ", record.zipcode] }, void 0)) : null;
exports.default = AddressField;
