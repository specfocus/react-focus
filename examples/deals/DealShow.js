"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealShow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const date_fns_1 = require("date-fns");
const CompanyAvatar_1 = require("../companies/CompanyAvatar");
const notes_1 = require("../notes");
const ContactList_1 = require("./ContactList");
const stages_1 = require("./stages");
const useStyles = (0, styles_1.makeStyles)({
    dialog: {
        position: 'absolute',
        top: 50,
    },
});
const DealShow = ({ open, id }) => {
    const redirect = (0, app_1.useRedirect)();
    const classes = useStyles();
    const handleClose = () => {
        redirect('/deals');
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Dialog, Object.assign({ open: open, onClose: handleClose, fullWidth: true, maxWidth: "md", classes: { paper: classes.dialog } }, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(app_1.ShowBase, Object.assign({ resource: "deals", basePath: "/deals", id: id }, { children: (0, jsx_runtime_1.jsx)(DealShowContent, {}, void 0) }), void 0) }, void 0) }), void 0));
};
exports.DealShow = DealShow;
const DealShowContent = () => {
    const record = (0, app_1.useRecordContext)();
    if (!record)
        return null;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ width: 100, display: "flex", flexDirection: "column", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "company_id", reference: "companies", link: "show" }, { children: (0, jsx_runtime_1.jsx)(CompanyAvatar_1.CompanyAvatar, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "company_id", reference: "companies", link: "show" }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "name", align: "center", component: "div" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ ml: 2, flex: "1" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h5" }, { children: record.name }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mt: 2 }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mr: 5, flexDirection: "column" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ color: "textSecondary", variant: "body2" }, { children: "Start" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle1" }, { children: (0, date_fns_1.format)(new Date(record.start_at), 'PP') }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mr: 5, flexDirection: "column" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ color: "textSecondary", variant: "body2" }, { children: "Budget" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle1" }, { children: record.amount.toLocaleString('en-US', {
                                                notation: 'compact',
                                                style: 'currency',
                                                currency: 'USD',
                                                currencyDisplay: 'narrowSymbol',
                                                minimumSignificantDigits: 3,
                                            }) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mr: 5, flexDirection: "column" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ color: "textSecondary", variant: "body2" }, { children: "Type" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle1" }, { children: record.type }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mr: 5, flexDirection: "column" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ color: "textSecondary", variant: "body2" }, { children: "Stage" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle1" }, { children: stages_1.stageNames[record.stage] }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 2, mb: 2 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mr: 5, flexDirection: "column", minHeight: 48 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ color: "textSecondary", variant: "body2" }, { children: "Contacts" }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceArrayField, Object.assign({ source: "contact_ids", reference: "contacts" }, { children: (0, jsx_runtime_1.jsx)(ContactList_1.ContactList, {}, void 0) }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 2, mb: 2, style: { whiteSpace: 'pre-line' } }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ color: "textSecondary", variant: "body2" }, { children: "Description" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, { children: record.description }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 2 }, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceManyField, Object.assign({ target: "deal_id", reference: "dealNotes", sort: { field: 'date', order: 'DESC' } }, { children: (0, jsx_runtime_1.jsx)(notes_1.NotesIterator, { reference: "deals" }, void 0) }), void 0) }), void 0)] }), void 0)] }), void 0) }, void 0));
};
