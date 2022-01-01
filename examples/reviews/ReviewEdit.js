"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const ProductReferenceField_1 = __importDefault(require("../products/ProductReferenceField"));
const CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
const StarRatingField_1 = __importDefault(require("./StarRatingField"));
const ReviewEditToolbar_1 = __importDefault(require("./ReviewEditToolbar"));
const PREFIX = 'ReviewEdit';
const classes = {
    root: `${PREFIX}-root`,
    title: `${PREFIX}-title`,
    form: `${PREFIX}-form`,
    inlineField: `${PREFIX}-inlineField`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        paddingTop: 40,
    },
    [`& .${classes.title}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1em',
    },
    [`& .${classes.form}`]: {
        [theme.breakpoints.up('xs')]: {
            width: 400,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            marginTop: -30,
        },
    },
    [`& .${classes.inlineField}`]: {
        display: 'inline-block',
        width: '50%',
    },
}));
const ReviewEdit = (_a) => {
    var { onCancel } = _a, props = __rest(_a, ["onCancel"]);
    const controllerProps = (0, app_1.useEditController)(props);
    const translate = (0, app_1.useTranslate)();
    if (!controllerProps.record) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.title }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6" }, { children: translate('resources.reviews.detail') }), void 0), (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ onClick: onCancel, size: "large" }, { children: (0, jsx_runtime_1.jsx)(Close_1.default, {}, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.EditContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsxs)(app_1.SimpleForm, Object.assign({ className: classes.form, basePath: controllerProps.basePath, record: controllerProps.record, save: controllerProps.save, version: controllerProps.version, redirect: "list", resource: "reviews", toolbar: (0, jsx_runtime_1.jsx)(ReviewEditToolbar_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(CustomerReferenceField_1.default, { formClassName: classes.inlineField }, void 0), (0, jsx_runtime_1.jsx)(ProductReferenceField_1.default, { formClassName: classes.inlineField }, void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date", formClassName: classes.inlineField }, void 0), (0, jsx_runtime_1.jsx)(StarRatingField_1.default, { formClassName: classes.inlineField }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "comment", rowsMax: 15, multiline: true, fullWidth: true }, void 0)] }), void 0) }), void 0)] }), void 0));
};
exports.default = ReviewEdit;
