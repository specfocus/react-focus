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
exports.CompanyAside = void 0;
var material_1 = require("@mui/material");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var CompanyAside = function (_a) {
    var record = _a.record, _b = _a.link, link = _b === void 0 ? 'edit' : _b;
    return record ? (React.createElement(material_1.Box, { ml: 4, width: 250, minWidth: 250 },
        React.createElement(material_1.Box, { textAlign: "center", mb: 2 }, link === 'edit' ? (React.createElement(app_1.EditButton, { basePath: "/companies", record: record, label: "Edit Company" })) : (React.createElement(app_1.ShowButton, { basePath: "/companies", record: record, label: "Show Company" }))),
        React.createElement(material_1.Typography, { variant: "subtitle2" }, "Company info"),
        React.createElement(material_1.Divider, null),
        React.createElement(material_1.Box, { mt: 2 },
            "Website: ",
            React.createElement(material_1.Link, { href: record.website }, record.website),
            React.createElement("br", null),
            "LinkedIn: ",
            React.createElement(material_1.Link, { href: record.linkedIn }, "LinkedIn")),
        React.createElement(material_1.Box, { mt: 1 },
            React.createElement(app_1.TextField, { source: "phone_number", record: record }),
            ' ',
            React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", component: "span" }, "Main")),
        React.createElement(material_1.Box, { mt: 1, mb: 3 },
            React.createElement(app_1.TextField, { source: "address" }),
            React.createElement("br", null),
            React.createElement(app_1.TextField, { source: "city" }),
            " ",
            React.createElement(app_1.TextField, { source: "zipcode" }),
            ' ',
            React.createElement(app_1.TextField, { source: "stateAbbr" })),
        React.createElement(material_1.Typography, { variant: "subtitle2" }, "Background"),
        React.createElement(material_1.Divider, null),
        React.createElement(material_1.Box, { mt: 1 },
            React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", component: "span" }, "Added on"),
            ' ',
            React.createElement(app_1.DateField, { source: "created_at", options: { year: 'numeric', month: 'long', day: 'numeric' }, color: "textSecondary" }),
            React.createElement("br", null),
            React.createElement(material_1.Typography, { component: "span", variant: "body2", color: "textSecondary" }, "Followed by"),
            ' ',
            React.createElement(app_1.ReferenceField, { resource: "companies", source: "sales_id", reference: "sales" },
                React.createElement(app_1.FunctionField, { source: "last_name", render: function (record) {
                        return record
                            ? "".concat(record.first_name, " ").concat(record.last_name)
                            : '';
                    } }))))) : null;
};
exports.CompanyAside = CompanyAside;
