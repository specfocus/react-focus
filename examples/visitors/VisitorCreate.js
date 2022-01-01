"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePasswords = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const PREFIX = 'VisitorCreate';
const classes = {
    first_name: `${PREFIX}-first_name`,
    last_name: `${PREFIX}-last_name`,
    email: `${PREFIX}-email`,
    address: `${PREFIX}-address`,
    zipcode: `${PREFIX}-zipcode`,
    city: `${PREFIX}-city`,
    comment: `${PREFIX}-comment`,
    password: `${PREFIX}-password`,
    confirm_password: `${PREFIX}-confirm_password`,
};
const StyledSimpleForm = (0, styles_1.styled)(app_1.SimpleForm)({
    [`& .${classes.first_name}`]: { display: 'inline-block' },
    [`& .${classes.last_name}`]: { display: 'inline-block', marginLeft: 32 },
    [`& .${classes.email}`]: { width: 544 },
    [`& .${classes.address}`]: { maxWidth: 544 },
    [`& .${classes.zipcode}`]: { display: 'inline-block' },
    [`& .${classes.city}`]: { display: 'inline-block', marginLeft: 32 },
    [`& .${classes.comment}`]: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    [`& .${classes.password}`]: { display: 'inline-block' },
    [`& .${classes.confirm_password}`]: {
        display: 'inline-block',
        marginLeft: 32,
    },
});
const validatePasswords = ({ password, confirm_password, }) => {
    const errors = {};
    if (password && confirm_password && password !== confirm_password) {
        errors.confirm_password = [
            'resources.customers.errors.password_mismatch',
        ];
    }
    return errors;
};
exports.validatePasswords = validatePasswords;
const VisitorCreate = (props) => ((0, jsx_runtime_1.jsx)(app_1.Create, Object.assign({}, props, { children: (0, jsx_runtime_1.jsxs)(StyledSimpleForm, Object.assign({ validate: exports.validatePasswords }, { children: [(0, jsx_runtime_1.jsx)(SectionTitle, { label: "resources.customers.fieldGroups.identity" }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { autoFocus: true, source: "first_name", formClassName: classes.first_name, validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "last_name", formClassName: classes.last_name, validate: requiredValidate }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { type: "email", source: "email", validation: { email: true }, fullWidth: true, formClassName: classes.email, validate: [(0, app_1.required)(), (0, app_1.email)()] }, void 0), (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "birthday" }, void 0), (0, jsx_runtime_1.jsx)(Separator, {}, void 0), (0, jsx_runtime_1.jsx)(SectionTitle, { label: "resources.customers.fieldGroups.address" }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "address", formClassName: classes.address, multiline: true, fullWidth: true, helperText: false }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "zipcode", formClassName: classes.zipcode, helperText: false }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "city", formClassName: classes.city, helperText: false }, void 0), (0, jsx_runtime_1.jsx)(Separator, {}, void 0), (0, jsx_runtime_1.jsx)(SectionTitle, { label: "resources.customers.fieldGroups.password" }, void 0), (0, jsx_runtime_1.jsx)(app_1.PasswordInput, { source: "password", formClassName: classes.password }, void 0), (0, jsx_runtime_1.jsx)(app_1.PasswordInput, { source: "confirm_password", formClassName: classes.confirm_password }, void 0)] }), void 0) }), void 0));
const requiredValidate = [(0, app_1.required)()];
const SectionTitle = ({ label }) => {
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6", gutterBottom: true }, { children: translate(label) }), void 0));
};
const Separator = () => (0, jsx_runtime_1.jsx)(material_1.Box, { pt: "1em" }, void 0);
exports.default = VisitorCreate;
