"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAside = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const app_1 = require("../../app");
const CompanyAside = ({ record, link = 'edit', }) => record ? ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ ml: 4, width: 250, minWidth: 250 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ textAlign: "center", mb: 2 }, { children: link === 'edit' ? ((0, jsx_runtime_1.jsx)(app_1.EditButton, { basePath: "/companies", record: record, label: "Edit Company" }, void 0)) : ((0, jsx_runtime_1.jsx)(app_1.ShowButton, { basePath: "/companies", record: record, label: "Show Company" }, void 0)) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2" }, { children: "Company info" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 2 }, { children: ["Website: ", (0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ href: record.website }, { children: record.website }), void 0), (0, jsx_runtime_1.jsx)("br", {}, void 0), "LinkedIn: ", (0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ href: record.linkedIn }, { children: "LinkedIn" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 1 }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextField, { source: "phone_number", record: record }, void 0), ' ', (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", component: "span" }, { children: "Main" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 1, mb: 3 }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextField, { source: "address" }, void 0), (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "city" }, void 0), " ", (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "zipcode" }, void 0), ' ', (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "stateAbbr" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2" }, { children: "Background" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 1 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", component: "span" }, { children: "Added on" }), void 0), ' ', (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "created_at", options: { year: 'numeric', month: 'long', day: 'numeric' }, color: "textSecondary" }, void 0), (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", color: "textSecondary" }, { children: "Followed by" }), void 0), ' ', (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ resource: "companies", source: "sales_id", reference: "sales" }, { children: (0, jsx_runtime_1.jsx)(app_1.FunctionField, { source: "last_name", render: record => record
                            ? `${record.first_name} ${record.last_name}`
                            : '' }, void 0) }), void 0)] }), void 0)] }), void 0)) : null;
exports.CompanyAside = CompanyAside;
