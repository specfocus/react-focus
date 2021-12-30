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
var styles_1 = require("@mui/styles");
var Receipt_1 = __importDefault(require("@mui/icons-material/Receipt"));
var React = __importStar(require("react"));
var app_1 = require("../../app");
var Pagination_1 = __importDefault(require("../../components/list/pagination/Pagination"));
var datagrid_1 = require("../../components/table/datagrid");
var DataFrame_1 = __importDefault(require("../../containers/Layout/DataFrame"));
var AddressField_1 = __importDefault(require("../visitors/AddressField"));
var FullNameField_1 = __importDefault(require("../visitors/FullNameField"));
var InvoiceShow_1 = __importDefault(require("./InvoiceShow"));
var listFilters = [
    React.createElement(app_1.DateInput, { source: "date_gte", alwaysOn: true }),
    React.createElement(app_1.DateInput, { source: "date_lte", alwaysOn: true }),
];
var useStyles = (0, styles_1.makeStyles)(function (theme) {
    var _a;
    return ({
        hiddenOnSmallScreens: (_a = {
                display: 'table-cell'
            },
            _a[theme.breakpoints.down('md')] = {
                display: 'none',
            },
            _a),
    });
});
var InvoiceList = function (props) {
    var classes = useStyles();
    var popups = {
        filter: listFilters
    };
    return (React.createElement(DataFrame_1.default, __assign({ icon: Receipt_1.default, title: "Invoice", panes: popups, footer: React.createElement(Pagination_1.default, null) }, props, { filters: listFilters, perPage: 25, sort: { field: 'date', order: 'desc' } }),
        React.createElement(datagrid_1.Datagrid, { rowClick: "expand", expand: React.createElement(InvoiceShow_1.default, null) },
            React.createElement(app_1.TextField, { source: "id" }),
            React.createElement(app_1.DateField, { source: "date" }),
            React.createElement(app_1.ReferenceField, { source: "customer_id", reference: "customers" },
                React.createElement(FullNameField_1.default, null)),
            React.createElement(app_1.ReferenceField, { source: "customer_id", reference: "customers", link: false, label: "resources.invoices.fields.address", cellClassName: classes.hiddenOnSmallScreens, headerClassName: classes.hiddenOnSmallScreens },
                React.createElement(AddressField_1.default, null)),
            React.createElement(app_1.ReferenceField, { source: "command_id", reference: "commands" },
                React.createElement(app_1.TextField, { source: "reference" })),
            React.createElement(app_1.NumberField, { source: "total_ex_taxes" }),
            React.createElement(app_1.NumberField, { source: "delivery_fees" }),
            React.createElement(app_1.NumberField, { source: "taxes" }),
            React.createElement(app_1.NumberField, { source: "total" }))));
};
exports.default = InvoiceList;
