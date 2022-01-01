"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactAside = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const app_1 = require("../../app");
const TagsListEdit_1 = require("./TagsListEdit");
const ContactAside = ({ record, link = 'edit' }) => ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ ml: 4, width: 250, minWidth: 250 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ textAlign: "center", mb: 2 }, { children: link === 'edit' ? ((0, jsx_runtime_1.jsx)(app_1.EditButton, { basePath: "/contacts", record: record, label: "Edit Contact" }, void 0)) : ((0, jsx_runtime_1.jsx)(app_1.ShowButton, { basePath: "/contacts", record: record, label: "Show Contact" }, void 0)) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2" }, { children: "Personal info" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 2 }, { children: (0, jsx_runtime_1.jsx)(app_1.EmailField, { source: "email" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 1 }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextField, { source: "phone_number1" }, void 0), ' ', (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", component: "span" }, { children: "Work" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mb: 1 }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextField, { source: "phone_number2" }, void 0), ' ', (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", component: "span" }, { children: "Home" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mb: 3 }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2" }, { children: record.gender === 'male' ? 'He/Him' : 'She/Her' }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2" }, { children: "Background" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 2 }, { children: record && record.background }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 1, mb: 3 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", color: "textSecondary" }, { children: "Added on" }), void 0), ' ', (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "first_seen", options: { year: 'numeric', month: 'long', day: 'numeric' }, color: "textSecondary" }, void 0), (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", color: "textSecondary" }, { children: "Last seen on" }), void 0), ' ', (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "last_seen", options: { year: 'numeric', month: 'long', day: 'numeric' }, color: "textSecondary" }, void 0), (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", color: "textSecondary" }, { children: "Followed by" }), void 0), ' ', (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ resource: "contacts", source: "sales_id", reference: "sales" }, { children: (0, jsx_runtime_1.jsx)(app_1.FunctionField, { source: "last_name", render: record => record ? `${record.first_name} ${record.last_name}` : '' }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mb: 3 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2" }, { children: "Tags" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)(TagsListEdit_1.TagsListEdit, { record: record }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceManyField, Object.assign({ resource: "contacts", target: "contact_id", reference: "tasks" }, { children: (0, jsx_runtime_1.jsx)(TasksIterator, {}, void 0) }), void 0)] }), void 0));
exports.ContactAside = ContactAside;
const TasksIterator = () => {
    const { data, ids, loading } = (0, app_1.useListContext)();
    if (loading || ids.length === 0)
        return null;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2" }, { children: "Tasks" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.List, { children: ids.map(id => {
                    const task = data[id];
                    return ((0, jsx_runtime_1.jsx)(material_1.ListItem, Object.assign({ disableGutters: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2" }, { children: task.text }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary" }, { children: ["due", ' ', (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "due_date", record: task }, void 0)] }), void 0)] }, void 0) }), id));
                }) }, void 0)] }, void 0));
};
