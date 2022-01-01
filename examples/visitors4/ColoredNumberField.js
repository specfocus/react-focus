"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const ColoredNumberField = (props) => props.record && props.source ? (props.record[props.source] > 500 ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ style: { color: 'red' } }, { children: (0, jsx_runtime_1.jsx)(app_1.NumberField, Object.assign({}, props), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(app_1.NumberField, Object.assign({}, props), void 0))) : null;
ColoredNumberField.defaultProps = app_1.NumberField.defaultProps;
exports.default = ColoredNumberField;
