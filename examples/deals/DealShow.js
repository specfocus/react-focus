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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealShow = void 0;
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var date_fns_1 = require("date-fns");
var CompanyAvatar_1 = require("../companies/CompanyAvatar");
var notes_1 = require("../notes");
var ContactList_1 = require("./ContactList");
var stages_1 = require("./stages");
var useStyles = (0, styles_1.makeStyles)({
    dialog: {
        position: 'absolute',
        top: 50,
    },
});
var DealShow = function (_a) {
    var open = _a.open, id = _a.id;
    var redirect = (0, app_1.useRedirect)();
    var classes = useStyles();
    var handleClose = function () {
        redirect('/deals');
    };
    return (React.createElement(material_1.Dialog, { open: open, onClose: handleClose, fullWidth: true, maxWidth: "md", classes: { paper: classes.dialog } },
        React.createElement(material_1.DialogContent, null,
            React.createElement(app_1.ShowBase, { resource: "deals", basePath: "/deals", id: id },
                React.createElement(DealShowContent, null)))));
};
exports.DealShow = DealShow;
var DealShowContent = function () {
    var record = (0, app_1.useRecordContext)();
    if (!record)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { display: "flex" },
            React.createElement(material_1.Box, { width: 100, display: "flex", flexDirection: "column", alignItems: "center" },
                React.createElement(app_1.ReferenceField, { source: "company_id", reference: "companies", link: "show" },
                    React.createElement(CompanyAvatar_1.CompanyAvatar, null)),
                React.createElement(app_1.ReferenceField, { source: "company_id", reference: "companies", link: "show" },
                    React.createElement(app_1.TextField, { source: "name", align: "center", component: "div" }))),
            React.createElement(material_1.Box, { ml: 2, flex: "1" },
                React.createElement(material_1.Typography, { variant: "h5" }, record.name),
                React.createElement(material_1.Box, { display: "flex", mt: 2 },
                    React.createElement(material_1.Box, { display: "flex", mr: 5, flexDirection: "column" },
                        React.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, "Start"),
                        React.createElement(material_1.Typography, { variant: "subtitle1" }, (0, date_fns_1.format)(new Date(record.start_at), 'PP'))),
                    React.createElement(material_1.Box, { display: "flex", mr: 5, flexDirection: "column" },
                        React.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, "Budget"),
                        React.createElement(material_1.Typography, { variant: "subtitle1" }, record.amount.toLocaleString('en-US', {
                            notation: 'compact',
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'narrowSymbol',
                            minimumSignificantDigits: 3,
                        }))),
                    React.createElement(material_1.Box, { display: "flex", mr: 5, flexDirection: "column" },
                        React.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, "Type"),
                        React.createElement(material_1.Typography, { variant: "subtitle1" }, record.type)),
                    React.createElement(material_1.Box, { display: "flex", mr: 5, flexDirection: "column" },
                        React.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, "Stage"),
                        React.createElement(material_1.Typography, { variant: "subtitle1" }, stages_1.stageNames[record.stage]))),
                React.createElement(material_1.Box, { mt: 2, mb: 2 },
                    React.createElement(material_1.Box, { display: "flex", mr: 5, flexDirection: "column", minHeight: 48 },
                        React.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, "Contacts"),
                        React.createElement(app_1.ReferenceArrayField, { source: "contact_ids", reference: "contacts" },
                            React.createElement(ContactList_1.ContactList, null)))),
                React.createElement(material_1.Box, { mt: 2, mb: 2, style: { whiteSpace: 'pre-line' } },
                    React.createElement(material_1.Typography, { color: "textSecondary", variant: "body2" }, "Description"),
                    React.createElement(material_1.Typography, null, record.description)),
                React.createElement(material_1.Divider, null),
                React.createElement(material_1.Box, { mt: 2 },
                    React.createElement(app_1.ReferenceManyField, { target: "deal_id", reference: "dealNotes", sort: { field: 'date', order: 'DESC' } },
                        React.createElement(notes_1.NotesIterator, { reference: "deals" })))))));
};
