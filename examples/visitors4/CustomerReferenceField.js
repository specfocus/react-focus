"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const FullNameField_1 = __importDefault(require("./FullNameField"));
const CustomerReferenceField = (props) => ((0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers" }, props, { children: (0, jsx_runtime_1.jsx)(FullNameField_1.default, {}, void 0) }), void 0));
CustomerReferenceField.defaultProps = {
    source: 'customer_id',
    addLabel: true,
};
exports.default = CustomerReferenceField;
