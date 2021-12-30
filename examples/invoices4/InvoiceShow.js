"use strict";
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
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("@mui/styles");
var app_1 = require("../../app");
var Basket_1 = __importDefault(require("../orders/Basket"));
var CustomerField = function (_a) {
    var record = _a.record;
    return record ? (React.createElement(Typography_1.default, null,
        record.first_name,
        " ",
        record.last_name,
        React.createElement("br", null),
        record.address,
        React.createElement("br", null),
        record.city,
        ", ",
        record.zipcode)) : null;
};
var InvoiceShow = function (props) {
    var record = (0, app_1.useShowController)(props).record;
    var classes = useStyles();
    if (!record)
        return null;
    return (React.createElement(Card_1.default, { className: classes.root },
        React.createElement(CardContent_1.default, null,
            React.createElement(Grid_1.default, { container: true, spacing: 2 },
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Typography_1.default, { variant: "h6", gutterBottom: true }, "Posters Galore")),
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Typography_1.default, { variant: "h6", gutterBottom: true, align: "right" },
                        "Invoice ",
                        record.id))),
            React.createElement(Grid_1.default, { container: true, spacing: 2 },
                React.createElement(Grid_1.default, { item: true, xs: 12, container: true, alignContent: "flex-end" },
                    React.createElement(app_1.ReferenceField, { resource: "invoices", reference: "customers", source: "customer_id", basePath: "/invoices", record: record, link: false },
                        React.createElement(CustomerField, null)))),
            React.createElement("div", { className: classes.spacer }, "\u00A0"),
            React.createElement(Grid_1.default, { container: true, spacing: 2 },
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Typography_1.default, { variant: "h6", gutterBottom: true, align: "center" },
                        "Date",
                        ' '),
                    React.createElement(Typography_1.default, { gutterBottom: true, align: "center" }, new Date(record.date).toLocaleDateString())),
                React.createElement(Grid_1.default, { item: true, xs: 5 },
                    React.createElement(Typography_1.default, { variant: "h6", gutterBottom: true, align: "center" }, "Order"),
                    React.createElement(app_1.ReferenceField, { resource: "invoices", reference: "commands", source: "command_id", basePath: "/invoices", record: record, link: false },
                        React.createElement(app_1.TextField, { source: "reference", align: "center", component: "p", gutterBottom: true })))),
            React.createElement("div", { className: classes.invoices },
                React.createElement(app_1.ReferenceField, { resource: "invoices", reference: "commands", source: "command_id", basePath: "/invoices", record: record, link: false },
                    React.createElement(Basket_1.default, null))))));
};
exports.default = InvoiceShow;
var useStyles = (0, styles_1.makeStyles)({
    root: { width: 600, margin: 'auto' },
    spacer: { height: 20 },
    invoices: { margin: '10px 0' },
});
