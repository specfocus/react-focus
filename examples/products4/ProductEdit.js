"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const RichTextInput_1 = __importDefault(require("../../components/RichTextInput"));
const CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
const StarRatingField_1 = __importDefault(require("../reviews/StarRatingField"));
const Poster_1 = __importDefault(require("./Poster"));
const ProductCreate_1 = require("./ProductCreate");
const ProductTitle = ({ record }) => record ? (0, jsx_runtime_1.jsxs)("span", { children: ["Poster #", record.reference] }, void 0) : null;
const useStyles = (0, styles_1.makeStyles)(Object.assign(Object.assign({}, ProductCreate_1.styles), { comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }, tab: {
        maxWidth: '40em',
        display: 'block',
    } }));
const ProductEdit = (props) => {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(app_1.Edit, Object.assign({}, props, { title: (0, jsx_runtime_1.jsx)(ProductTitle, {}, void 0) }, { children: (0, jsx_runtime_1.jsxs)(app_1.TabbedForm, { children: [(0, jsx_runtime_1.jsxs)(app_1.FormTab, Object.assign({ label: "resources.products.tabs.image", contentClassName: classes.tab }, { children: [(0, jsx_runtime_1.jsx)(Poster_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "image", fullWidth: true, validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "thumbnail", fullWidth: true, validate: requiredValidate }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(app_1.FormTab, Object.assign({ label: "resources.products.tabs.details", path: "details", contentClassName: classes.tab }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "reference", validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "price", className: classes.price, InputProps: {
                                startAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "start" }, { children: "\u20AC" }), void 0)),
                            }, validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "width", className: classes.width, formClassName: classes.widthFormGroup, InputProps: {
                                endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "start" }, { children: "cm" }), void 0)),
                            }, validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "height", className: classes.height, formClassName: classes.heightFormGroup, InputProps: {
                                endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "start" }, { children: "cm" }), void 0)),
                            }, validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "category_id", reference: "categories", validate: requiredValidate }, { children: (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "name" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "stock", className: classes.stock, validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "sales", className: classes.stock, validate: requiredValidate }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.FormTab, Object.assign({ label: "resources.products.tabs.description", path: "description", contentClassName: classes.tab }, { children: (0, jsx_runtime_1.jsx)(RichTextInput_1.default, { source: "description", label: "", validate: requiredValidate }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.FormTab, Object.assign({ label: "resources.products.tabs.reviews", path: "reviews" }, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceManyField, Object.assign({ reference: "reviews", target: "product_id", addLabel: false, pagination: (0, jsx_runtime_1.jsx)(app_1.Pagination, {}, void 0), fullWidth: true }, { children: (0, jsx_runtime_1.jsxs)(app_1.Datagrid, { children: [(0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date" }, void 0), (0, jsx_runtime_1.jsx)(CustomerReferenceField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(StarRatingField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "comment", cellClassName: classes.comment }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "status" }, void 0), (0, jsx_runtime_1.jsx)(app_1.EditButton, {}, void 0)] }, void 0) }), void 0) }), void 0)] }, void 0) }), void 0));
};
const requiredValidate = [(0, app_1.required)()];
exports.default = ProductEdit;
