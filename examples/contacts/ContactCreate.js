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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactCreate = void 0;
var material_1 = require("@mui/material");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var Spacer = function () { return React.createElement(material_1.Box, { width: 20, component: "span" }); };
var ContactCreate = function (props) { return (React.createElement(app_1.CreateBase, __assign({}, props, { transform: function (data) { return (__assign(__assign({}, data), { last_seen: new Date(), tags: [] })); } }),
    React.createElement(ContactCreateContent, null))); };
exports.ContactCreate = ContactCreate;
var ContactCreateContent = function () {
    var _a = (0, app_1.useCreateContext)(), save = _a.save, record = _a.record;
    return (React.createElement(material_1.Box, { mt: 2, display: "flex" },
        React.createElement(material_1.Box, { flex: "1" },
            React.createElement(app_1.FormWithRedirect, { redirect: "show", record: record, save: save, render: function (formProps) { return (React.createElement(material_1.Card, null,
                    React.createElement(material_1.CardContent, null,
                        React.createElement(material_1.Box, null,
                            React.createElement(material_1.Box, { display: "flex" },
                                React.createElement(material_1.Box, { mr: 2 },
                                    React.createElement(material_1.Avatar, null)),
                                React.createElement(material_1.Box, { flex: "1", mt: -1 },
                                    React.createElement(material_1.Box, { display: "flex" },
                                        React.createElement(app_1.TextInput, { source: "first_name", validate: [(0, app_1.required)()] }),
                                        React.createElement(Spacer, null),
                                        React.createElement(app_1.TextInput, { source: "last_name", validate: [(0, app_1.required)()] })),
                                    React.createElement(material_1.Box, { display: "flex" },
                                        React.createElement(app_1.TextInput, { source: "title" }),
                                        React.createElement(Spacer, null),
                                        React.createElement(app_1.ReferenceInput, { source: "company_id", reference: "companies" },
                                            React.createElement(app_1.AutocompleteInput, { optionText: "name" }))),
                                    React.createElement(material_1.Divider, null),
                                    React.createElement(material_1.Box, { mt: 2, width: 430 },
                                        React.createElement(app_1.TextInput, { source: "email", fullWidth: true })),
                                    React.createElement(material_1.Box, { display: "flex" },
                                        React.createElement(app_1.TextInput, { source: "phone_number1" }),
                                        React.createElement(Spacer, null),
                                        React.createElement(app_1.TextInput, { source: "phone_number2" })),
                                    React.createElement(material_1.Divider, null),
                                    React.createElement(material_1.Box, { mt: 2, width: 430 },
                                        React.createElement(app_1.TextInput, { source: "background", multiline: true, fullWidth: true }),
                                        React.createElement(app_1.TextInput, { source: "avatar", fullWidth: true }),
                                        React.createElement(app_1.BooleanInput, { source: "has_newsletter" })))))),
                    React.createElement(app_1.Toolbar, __assign({}, formProps)))); } }))));
};
