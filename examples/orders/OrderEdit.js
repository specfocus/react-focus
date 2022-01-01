"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const Basket_1 = __importDefault(require("./Basket"));
const Totals_1 = __importDefault(require("./Totals"));
const PREFIX = 'OrderEdit';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledEdit = (0, styles_1.styled)(app_1.Edit)({
    [`& .${classes.root}`]: { alignItems: 'flex-start' },
});
const OrderTitle = ({ record }) => {
    const translate = (0, app_1.useTranslate)();
    return record ? ((0, jsx_runtime_1.jsx)("span", { children: translate('resources.commands.title', {
            reference: record.reference,
        }) }, void 0)) : null;
};
const CustomerDetails = ({ record }) => ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", flexDirection: "column" }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ component: react_router_dom_1.Link, color: "primary", to: `/customers/${record === null || record === void 0 ? void 0 : record.id}`, style: { textDecoration: 'none' } }, { children: [record === null || record === void 0 ? void 0 : record.first_name, " ", record === null || record === void 0 ? void 0 : record.last_name] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: material_1.Link, color: "primary", href: `mailto:${record === null || record === void 0 ? void 0 : record.email}`, style: { textDecoration: 'none' } }, { children: record === null || record === void 0 ? void 0 : record.email }), void 0)] }), void 0));
const CustomerAddress = ({ record }) => ((0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, { children: [record === null || record === void 0 ? void 0 : record.first_name, " ", record === null || record === void 0 ? void 0 : record.last_name] }, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, { children: record === null || record === void 0 ? void 0 : record.address }, void 0), (0, jsx_runtime_1.jsxs)(material_1.Typography, { children: [record === null || record === void 0 ? void 0 : record.city, ", ", record === null || record === void 0 ? void 0 : record.stateAbbr, " ", record === null || record === void 0 ? void 0 : record.zipcode] }, void 0)] }, void 0));
const Spacer = () => (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ m: 1 }, { children: "\u00A0" }), void 0);
const OrderForm = (props) => {
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(app_1.FormWithRedirect, Object.assign({}, props, { render: (formProps) => ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ maxWidth: "50em" }, { children: (0, jsx_runtime_1.jsxs)(material_1.Card, { children: [(0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ container: true, spacing: 1 }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 12, md: 8 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6", gutterBottom: true }, { children: translate('resources.commands.section.order') }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ container: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 12, md: 6 }, { children: (0, jsx_runtime_1.jsx)(app_1.Labeled, Object.assign({ source: "date", resource: "commands" }, { children: (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date", resource: "commands", record: formProps.record }, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 12, md: 6 }, { children: (0, jsx_runtime_1.jsx)(app_1.Labeled, Object.assign({ source: "reference", resource: "commands" }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference", resource: "commands", record: formProps.record }, void 0) }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ container: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 12, md: 6 }, { children: (0, jsx_runtime_1.jsx)(app_1.SelectInput, { resource: "commands", source: "status", choices: [
                                                                {
                                                                    id: 'delivered',
                                                                    name: 'delivered',
                                                                },
                                                                {
                                                                    id: 'ordered',
                                                                    name: 'ordered',
                                                                },
                                                                {
                                                                    id: 'cancelled',
                                                                    name: 'cancelled',
                                                                },
                                                                {
                                                                    id: 'unknown',
                                                                    name: 'unknown',
                                                                    disabled: true,
                                                                },
                                                            ] }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 12, md: 6 }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 2 }, { children: (0, jsx_runtime_1.jsx)(app_1.BooleanInput, { row: true, resource: "commands", source: "returned" }, void 0) }), void 0) }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: 12, md: 4 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6", gutterBottom: true }, { children: translate('resources.commands.section.customer') }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", resource: "commands", reference: "customers", basePath: "/customers", record: formProps.record, link: false }, { children: (0, jsx_runtime_1.jsx)(CustomerDetails, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6", gutterBottom: true }, { children: translate('resources.commands.section.shipping_address') }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", resource: "commands", reference: "customers", basePath: "/customers", record: formProps.record, link: false }, { children: (0, jsx_runtime_1.jsx)(CustomerAddress, {}, void 0) }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6", gutterBottom: true }, { children: translate('resources.commands.section.items') }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(Basket_1.default, { record: formProps.record }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6", gutterBottom: true }, { children: translate('resources.commands.section.total') }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(Totals_1.default, { record: formProps.record }, void 0) }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(app_1.Toolbar, { record: formProps.record, basePath: formProps.basePath, undoable: true, invalid: formProps.invalid, handleSubmit: formProps.handleSubmit, saving: formProps.saving, resource: "commands" }, void 0)] }, void 0) }), void 0)) }), void 0));
};
const OrderEdit = (props) => ((0, jsx_runtime_1.jsx)(StyledEdit, Object.assign({ title: (0, jsx_runtime_1.jsx)(OrderTitle, {}, void 0), classes: classes }, props, { component: "div" }, { children: (0, jsx_runtime_1.jsx)(OrderForm, {}, void 0) }), void 0));
exports.default = OrderEdit;
