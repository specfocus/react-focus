"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const RichTextInput_1 = __importDefault(require("../../components/RichTextInput"));
const PREFIX = 'ProductCreate';
const classes = {
    price: `${PREFIX}-price`,
    width: `${PREFIX}-width`,
    height: `${PREFIX}-height`,
    stock: `${PREFIX}-stock`,
    widthFormGroup: `${PREFIX}-widthFormGroup`,
    heightFormGroup: `${PREFIX}-heightFormGroup`,
};
const StyledCreate = (0, styles_1.styled)(app_1.Create)({
    [`& .${classes.price}`]: { width: '7em' },
    [`& .${classes.width}`]: { width: '7em' },
    [`& .${classes.height}`]: { width: '7em' },
    [`& .${classes.stock}`]: { width: '7em' },
    [`& .${classes.widthFormGroup}`]: { display: 'inline-block' },
    [`& .${classes.heightFormGroup}`]: {
        display: 'inline-block',
        marginLeft: 32,
    },
});
const ProductCreate = (props) => {
    return ((0, jsx_runtime_1.jsx)(StyledCreate, Object.assign({}, props, { children: (0, jsx_runtime_1.jsxs)(app_1.TabbedForm, { children: [(0, jsx_runtime_1.jsxs)(app_1.FormTab, Object.assign({ label: "resources.products.tabs.image" }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { autoFocus: true, source: "image", fullWidth: true, validate: (0, app_1.required)() }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "thumbnail", fullWidth: true, validate: (0, app_1.required)() }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(app_1.FormTab, Object.assign({ label: "resources.products.tabs.details", path: "details" }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "reference", validate: (0, app_1.required)() }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "price", validate: (0, app_1.required)(), className: classes.price, InputProps: {
                                startAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "start" }, { children: "\u20AC" }), void 0)),
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "width", validate: (0, app_1.required)(), className: classes.width, formClassName: classes.widthFormGroup, InputProps: {
                                endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "start" }, { children: "cm" }), void 0)),
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "height", validate: (0, app_1.required)(), className: classes.height, formClassName: classes.heightFormGroup, InputProps: {
                                endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "start" }, { children: "cm" }), void 0)),
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "category_id", reference: "categories", allowEmpty: true }, { children: (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "name" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "stock", validate: (0, app_1.required)(), className: classes.stock }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.FormTab, Object.assign({ label: "resources.products.tabs.description", path: "description" }, { children: (0, jsx_runtime_1.jsx)(RichTextInput_1.default, { source: "description", label: "" }, void 0) }), void 0)] }, void 0) }), void 0));
};
exports.default = ProductCreate;
