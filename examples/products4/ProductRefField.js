"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const ProductRefField = ({ record }) => record ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: `products/${record.id}` }, { children: record.reference }), void 0)) : null;
ProductRefField.defaultProps = {
    source: 'id',
    label: 'Reference',
};
exports.default = ProductRefField;
