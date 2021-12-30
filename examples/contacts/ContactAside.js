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
exports.ContactAside = void 0;
var material_1 = require("@mui/material");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var TagsListEdit_1 = require("./TagsListEdit");
var ContactAside = function (_a) {
    var record = _a.record, _b = _a.link, link = _b === void 0 ? 'edit' : _b;
    return (React.createElement(material_1.Box, { ml: 4, width: 250, minWidth: 250 },
        React.createElement(material_1.Box, { textAlign: "center", mb: 2 }, link === 'edit' ? (React.createElement(app_1.EditButton, { basePath: "/contacts", record: record, label: "Edit Contact" })) : (React.createElement(app_1.ShowButton, { basePath: "/contacts", record: record, label: "Show Contact" }))),
        React.createElement(material_1.Typography, { variant: "subtitle2" }, "Personal info"),
        React.createElement(material_1.Divider, null),
        React.createElement(material_1.Box, { mt: 2 },
            React.createElement(app_1.EmailField, { source: "email" })),
        React.createElement(material_1.Box, { mt: 1 },
            React.createElement(app_1.TextField, { source: "phone_number1" }),
            ' ',
            React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", component: "span" }, "Work")),
        React.createElement(material_1.Box, { mb: 1 },
            React.createElement(app_1.TextField, { source: "phone_number2" }),
            ' ',
            React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", component: "span" }, "Home")),
        React.createElement(material_1.Box, { mb: 3 },
            React.createElement(material_1.Typography, { variant: "body2" }, record.gender === 'male' ? 'He/Him' : 'She/Her')),
        React.createElement(material_1.Typography, { variant: "subtitle2" }, "Background"),
        React.createElement(material_1.Divider, null),
        React.createElement(material_1.Box, { mt: 2 }, record && record.background),
        React.createElement(material_1.Box, { mt: 1, mb: 3 },
            React.createElement(material_1.Typography, { component: "span", variant: "body2", color: "textSecondary" }, "Added on"),
            ' ',
            React.createElement(app_1.DateField, { source: "first_seen", options: { year: 'numeric', month: 'long', day: 'numeric' }, color: "textSecondary" }),
            React.createElement("br", null),
            React.createElement(material_1.Typography, { component: "span", variant: "body2", color: "textSecondary" }, "Last seen on"),
            ' ',
            React.createElement(app_1.DateField, { source: "last_seen", options: { year: 'numeric', month: 'long', day: 'numeric' }, color: "textSecondary" }),
            React.createElement("br", null),
            React.createElement(material_1.Typography, { component: "span", variant: "body2", color: "textSecondary" }, "Followed by"),
            ' ',
            React.createElement(app_1.ReferenceField, { resource: "contacts", source: "sales_id", reference: "sales" },
                React.createElement(app_1.FunctionField, { source: "last_name", render: function (record) {
                        return record ? "".concat(record.first_name, " ").concat(record.last_name) : '';
                    } }))),
        React.createElement(material_1.Box, { mb: 3 },
            React.createElement(material_1.Typography, { variant: "subtitle2" }, "Tags"),
            React.createElement(material_1.Divider, null),
            React.createElement(TagsListEdit_1.TagsListEdit, { record: record })),
        React.createElement(app_1.ReferenceManyField, { resource: "contacts", target: "contact_id", reference: "tasks" },
            React.createElement(TasksIterator, null))));
};
exports.ContactAside = ContactAside;
var TasksIterator = function () {
    var _a = (0, app_1.useListContext)(), data = _a.data, ids = _a.ids, loading = _a.loading;
    if (loading || ids.length === 0)
        return null;
    return (React.createElement(material_1.Box, null,
        React.createElement(material_1.Typography, { variant: "subtitle2" }, "Tasks"),
        React.createElement(material_1.Divider, null),
        React.createElement(material_1.List, null, ids.map(function (id) {
            var task = data[id];
            return (React.createElement(material_1.ListItem, { key: id, disableGutters: true },
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Typography, { variant: "body2" }, task.text),
                    React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" },
                        "due",
                        ' ',
                        React.createElement(app_1.DateField, { source: "due_date", record: task })))));
        }))));
};
