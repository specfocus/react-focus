"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyEdit = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const clsx_1 = __importDefault(require("clsx"));
const CompanyAside_1 = require("./CompanyAside");
const LogoField_1 = require("./LogoField");
const sectors_1 = require("./sectors");
const sizes_1 = require("./sizes");
const useStyles = (0, styles_1.makeStyles)({
    inline: {
        display: 'inline-block',
        marginLeft: '1em',
        '&.first-child': {
            marginLeft: 0,
        },
    },
});
const CompanyEdit = (props) => {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(app_1.Edit, Object.assign({}, props, { aside: (0, jsx_runtime_1.jsx)(CompanyAside_1.CompanyAside, { link: "show" }, void 0), actions: false }, { children: (0, jsx_runtime_1.jsxs)(app_1.SimpleForm, Object.assign({ component: CustomLayout, redirect: "show" }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "name", validate: (0, app_1.required)(), fullWidth: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "sector", choices: sectors_1.sectors, formClassName: (0, clsx_1.default)(classes.inline, 'first-child') }, void 0), (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "size", choices: sizes_1.sizes, formClassName: classes.inline }, void 0), (0, jsx_runtime_1.jsx)(CustomDivider, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "address", fullWidth: true, helperText: false }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "city", formClassName: (0, clsx_1.default)(classes.inline, 'first-child') }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "zipcode", formClassName: classes.inline }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "stateAbbr", formClassName: classes.inline }, void 0), (0, jsx_runtime_1.jsx)(CustomDivider, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "website", fullWidth: true, helperText: false }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "linkedIn", fullWidth: true, helperText: false }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "logo", fullWidth: true }, void 0), (0, jsx_runtime_1.jsx)(CustomDivider, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "phone_number", formClassName: (0, clsx_1.default)(classes.inline, 'first-child'), helperText: false }, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "sales_id", reference: "sales", label: "Account manager", formClassName: classes.inline, helperText: false }, { children: (0, jsx_runtime_1.jsx)(app_1.SelectInput, { optionText: (sales) => `${sales.first_name} ${sales.last_name}` }, void 0) }), void 0)] }), void 0) }), void 0));
};
exports.CompanyEdit = CompanyEdit;
const CustomLayout = (props) => {
    const record = (0, app_1.useRecordContext)(props);
    return ((0, jsx_runtime_1.jsx)(material_1.CardContent, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(LogoField_1.LogoField, { record: record }, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ ml: 2, flex: "1", maxWidth: 796 }, { children: props.children }), void 0)] }), void 0) }, void 0));
};
const CustomDivider = () => ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mb: 2 }, { children: (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0) }), void 0));
