"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const FullNameField_1 = __importDefault(require("./FullNameField"));
const CustomerLinkField = (props) => props.record ? ((0, jsx_runtime_1.jsx)(app_1.Link, Object.assign({ to: `/customers/${props.record.id}` }, { children: (0, jsx_runtime_1.jsx)(FullNameField_1.default, Object.assign({}, props), void 0) }), void 0)) : null;
CustomerLinkField.defaultProps = {
    source: 'customer_id',
    addLabel: true,
};
exports.default = CustomerLinkField;
