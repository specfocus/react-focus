"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const app_1 = require("app");
const Basket_1 = __importDefault(require("../orders/Basket"));
const PREFIX = 'InvoiceShow';
const classes = {
    root: `${PREFIX}-root`,
    spacer: `${PREFIX}-spacer`,
    invoices: `${PREFIX}-invoices`,
};
const StyledCard = (0, styles_1.styled)(Card_1.default)({
    [`&.${classes.root}`]: { width: 600, margin: 'auto' },
    [`& .${classes.spacer}`]: { height: 20 },
    [`& .${classes.invoices}`]: { margin: '10px 0' },
});
const CustomerField = ({ record }) => record ? ((0, jsx_runtime_1.jsxs)(Typography_1.default, { children: [record.first_name, " ", record.last_name, (0, jsx_runtime_1.jsx)("br", {}, void 0), record.address, (0, jsx_runtime_1.jsx)("br", {}, void 0), record.city, ", ", record.zipcode] }, void 0)) : null;
const InvoiceShow = (props) => {
    const { record } = (0, app_1.useShowController)(props);
    if (!record)
        return null;
    return ((0, jsx_runtime_1.jsx)(StyledCard, Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsxs)(CardContent_1.default, { children: [(0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 6 }, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ variant: "h6", gutterBottom: true }, { children: "Posters Galore" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 6 }, { children: (0, jsx_runtime_1.jsxs)(Typography_1.default, Object.assign({ variant: "h6", gutterBottom: true, align: "right" }, { children: ["Invoice ", record.id] }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true, spacing: 2 }, { children: (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, container: true, alignContent: "flex-end" }, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ resource: "invoices", reference: "customers", source: "customer_id", basePath: "/invoices", record: record, link: false }, { children: (0, jsx_runtime_1.jsx)(CustomerField, {}, void 0) }), void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.spacer }, { children: "\u00A0" }), void 0), (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, spacing: 2 }, { children: [(0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ item: true, xs: 6 }, { children: [(0, jsx_runtime_1.jsxs)(Typography_1.default, Object.assign({ variant: "h6", gutterBottom: true, align: "center" }, { children: ["Date", ' '] }), void 0), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ gutterBottom: true, align: "center" }, { children: new Date(record.date).toLocaleDateString() }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ item: true, xs: 5 }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ variant: "h6", gutterBottom: true, align: "center" }, { children: "Order" }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ resource: "invoices", reference: "commands", source: "command_id", basePath: "/invoices", record: record, link: false }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference", align: "center", component: "p", gutterBottom: true }, void 0) }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.invoices }, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ resource: "invoices", reference: "commands", source: "command_id", basePath: "/invoices", record: record, link: false }, { children: (0, jsx_runtime_1.jsx)(Basket_1.default, {}, void 0) }), void 0) }), void 0)] }, void 0) }), void 0));
};
exports.default = InvoiceShow;
