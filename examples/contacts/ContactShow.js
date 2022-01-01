"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactShow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const app_1 = require("../../app");
const LogoField_1 = require("../companies/LogoField");
const notes_1 = require("../notes");
const Avatar_1 = require("./Avatar");
const ContactAside_1 = require("./ContactAside");
const ContactShow = (props) => ((0, jsx_runtime_1.jsx)(app_1.ShowBase, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(ContactShowContent, {}, void 0) }), void 0));
exports.ContactShow = ContactShow;
const ContactShowContent = () => {
    const { record, loaded } = (0, app_1.useShowContext)();
    if (!loaded || !record)
        return null;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 2, display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "1" }, { children: (0, jsx_runtime_1.jsx)(material_1.Card, { children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { record: record }, void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ ml: 2, flex: "1" }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "h5" }, { children: [record.first_name, " ", record.last_name] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2" }, { children: [record.title, " at", ' ', (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "company_id", reference: "companies", link: "show" }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "name" }, void 0) }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "company_id", reference: "companies", link: "show" }, { children: (0, jsx_runtime_1.jsx)(LogoField_1.LogoField, {}, void 0) }), void 0) }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceManyField, Object.assign({ target: "contact_id", reference: "contactNotes", sort: { field: 'date', order: 'DESC' } }, { children: (0, jsx_runtime_1.jsx)(notes_1.NotesIterator, { showStatus: true, reference: "contacts" }, void 0) }), void 0)] }, void 0) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(ContactAside_1.ContactAside, { record: record }, void 0)] }), void 0));
};
