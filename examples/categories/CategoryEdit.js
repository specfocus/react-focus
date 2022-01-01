"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const ThumbnailField_1 = __importDefault(require("../products/ThumbnailField"));
const ProductRefField_1 = __importDefault(require("../products/ProductRefField"));
const CategoryTitle = (props) => {
    const { record } = props;
    const translate = (0, app_1.useTranslate)();
    return record ? ((0, jsx_runtime_1.jsxs)("span", { children: [translate('resources.categories.name', { smart_count: 1 }), " \"", record.name, "\""] }, void 0)) : null;
};
const CategoryEdit = (props) => ((0, jsx_runtime_1.jsx)(app_1.Edit, Object.assign({ title: (0, jsx_runtime_1.jsx)(CategoryTitle, {}, void 0) }, props, { children: (0, jsx_runtime_1.jsxs)(app_1.SimpleForm, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "name" }, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceManyField, Object.assign({ reference: "products", target: "category_id", label: "resources.categories.fields.products", perPage: 20, fullWidth: true }, { children: (0, jsx_runtime_1.jsxs)(app_1.Datagrid, { children: [(0, jsx_runtime_1.jsx)(ThumbnailField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(ProductRefField_1.default, { source: "reference" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "price", options: { style: 'currency', currency: 'USD' } }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "width", options: { minimumFractionDigits: 2 } }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "height", options: { minimumFractionDigits: 2 } }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "stock" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "sales" }, void 0), (0, jsx_runtime_1.jsx)(app_1.EditButton, {}, void 0)] }, void 0) }), void 0)] }, void 0) }), void 0));
exports.default = CategoryEdit;
