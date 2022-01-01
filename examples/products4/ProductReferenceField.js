"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const ProductReferenceField = (props) => ((0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ label: "Product", source: "product_id", reference: "products" }, props, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference" }, void 0) }), void 0));
ProductReferenceField.defaultProps = {
    source: 'product_id',
    addLabel: true,
};
exports.default = ProductReferenceField;
