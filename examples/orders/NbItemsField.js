"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const render = (record) => record && record.basket.length;
const NbItemsField = ({ record }) => ((0, jsx_runtime_1.jsx)(app_1.FunctionField, { record: record, render: render }, void 0));
NbItemsField.defaultProps = {
    label: 'resources.commands.fields.nb_items',
    textAlign: 'right',
};
exports.default = NbItemsField;
