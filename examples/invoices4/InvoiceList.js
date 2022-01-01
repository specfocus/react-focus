"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const Receipt_1 = __importDefault(require("@mui/icons-material/Receipt"));
const app_1 = require("../../app");
const Pagination_1 = __importDefault(require("../../components/list/pagination/Pagination"));
const datagrid_1 = require("../../components/table/datagrid");
const DataFrame_1 = __importDefault(require("../../containers/Layout/DataFrame"));
const AddressField_1 = __importDefault(require("../visitors/AddressField"));
const FullNameField_1 = __importDefault(require("../visitors/FullNameField"));
const InvoiceShow_1 = __importDefault(require("./InvoiceShow"));
const listFilters = [
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_gte", alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_lte", alwaysOn: true }, void 0),
];
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    hiddenOnSmallScreens: {
        display: 'table-cell',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));
const InvoiceList = (props) => {
    const classes = useStyles();
    const popups = {
        filter: listFilters
    };
    return ((0, jsx_runtime_1.jsx)(DataFrame_1.default, Object.assign({ name: "invoice-list", icon: Receipt_1.default, title: "Invoice", panes: popups, footer: (0, jsx_runtime_1.jsx)(Pagination_1.default, {}, void 0) }, props, { filters: listFilters, perPage: 25, sort: { field: 'date', order: 'desc' } }, { children: (0, jsx_runtime_1.jsxs)(datagrid_1.Datagrid, Object.assign({ rowClick: "expand", expand: (0, jsx_runtime_1.jsx)(InvoiceShow_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextField, { source: "id" }, void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date" }, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers" }, { children: (0, jsx_runtime_1.jsx)(FullNameField_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers", link: false, label: "resources.invoices.fields.address", cellClassName: classes.hiddenOnSmallScreens, headerClassName: classes.hiddenOnSmallScreens }, { children: (0, jsx_runtime_1.jsx)(AddressField_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "command_id", reference: "commands" }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total_ex_taxes" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "delivery_fees" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "taxes" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total" }, void 0)] }), void 0) }), void 0));
};
exports.default = InvoiceList;
