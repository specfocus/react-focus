"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const FullNameField_1 = __importDefault(require("../visitors/FullNameField"));
const AddressField_1 = __importDefault(require("../visitors/AddressField"));
const InvoiceShow_1 = __importDefault(require("./InvoiceShow"));
const PREFIX = 'InvoiceList';
const classes = {
    hiddenOnSmallScreens: `${PREFIX}-hiddenOnSmallScreens`,
};
const StyledList = (0, styles_1.styled)(app_1.List)(({ theme }) => ({
    [`& .${classes.hiddenOnSmallScreens}`]: {
        display: 'table-cell',
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    },
}));
const listFilters = [
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_gte", alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_lte", alwaysOn: true }, void 0),
];
const InvoiceList = (props) => {
    return ((0, jsx_runtime_1.jsx)(StyledList, Object.assign({}, props, { filters: listFilters, perPage: 25, sort: { field: 'date', order: 'desc' } }, { children: (0, jsx_runtime_1.jsxs)(app_1.Datagrid, Object.assign({ rowClick: "expand", expand: (0, jsx_runtime_1.jsx)(InvoiceShow_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextField, { source: "id" }, void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date" }, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers" }, { children: (0, jsx_runtime_1.jsx)(FullNameField_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers", link: false, label: "resources.invoices.fields.address", cellClassName: classes.hiddenOnSmallScreens, headerClassName: classes.hiddenOnSmallScreens }, { children: (0, jsx_runtime_1.jsx)(AddressField_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "command_id", reference: "commands" }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total_ex_taxes" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "delivery_fees" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "taxes" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total" }, void 0)] }), void 0) }), void 0));
};
exports.default = InvoiceList;
