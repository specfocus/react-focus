"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var app_1 = require("../../app");
var ThumbnailField_1 = __importDefault(require("../products/ThumbnailField"));
var ProductRefField_1 = __importDefault(require("../products/ProductRefField"));
var CategoryTitle = function (props) {
    var record = props.record;
    var translate = (0, app_1.useTranslate)();
    return record ? (React.createElement("span", null,
        translate('resources.categories.name', { smart_count: 1 }),
        " \"",
        record.name,
        "\"")) : null;
};
var CategoryEdit = function (props) { return (React.createElement(app_1.Edit, __assign({ title: React.createElement(CategoryTitle, null) }, props),
    React.createElement(app_1.SimpleForm, null,
        React.createElement(app_1.TextInput, { source: "name" }),
        React.createElement(app_1.ReferenceManyField, { reference: "products", target: "category_id", label: "resources.categories.fields.products", perPage: 20, fullWidth: true },
            React.createElement(app_1.Datagrid, null,
                React.createElement(ThumbnailField_1.default, null),
                React.createElement(ProductRefField_1.default, { source: "reference" }),
                React.createElement(app_1.NumberField, { source: "price", options: { style: 'currency', currency: 'USD' } }),
                React.createElement(app_1.NumberField, { source: "width", options: { minimumFractionDigits: 2 } }),
                React.createElement(app_1.NumberField, { source: "height", options: { minimumFractionDigits: 2 } }),
                React.createElement(app_1.NumberField, { source: "stock" }),
                React.createElement(app_1.NumberField, { source: "sales" }),
                React.createElement(app_1.EditButton, null)))))); };
exports.default = CategoryEdit;
