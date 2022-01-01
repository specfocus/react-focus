"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEdit = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const omit_1 = __importDefault(require("lodash/omit"));
const app_1 = require("../../app");
const Avatar_1 = require("./Avatar");
const ContactAside_1 = require("./ContactAside");
const Spacer = () => (0, jsx_runtime_1.jsx)(material_1.Box, { width: 20, component: "span" }, void 0);
const ContactEditContent = () => {
    const { record, loaded, save } = (0, app_1.useEditContext)();
    if (!loaded || !record)
        return null;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 2, display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "1" }, { children: (0, jsx_runtime_1.jsx)(app_1.FormWithRedirect, { record: record, redirect: "show", save: save, render: formProps => ((0, jsx_runtime_1.jsxs)(material_1.Card, { children: [(0, jsx_runtime_1.jsx)(material_1.CardContent, { children: (0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mr: 2 }, { children: (0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { record: record }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ flex: "1", mt: -1 }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "first_name" }, void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "last_name" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "title" }, void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "company_id", reference: "companies" }, { children: (0, jsx_runtime_1.jsx)(app_1.AutocompleteInput, { optionText: "name" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 2, width: 430 }, { children: (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "email", fullWidth: true }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "phone_number1" }, void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "phone_number2" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 2, width: 430 }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "background", multiline: true, fullWidth: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "avatar", fullWidth: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.BooleanInput, { source: "has_newsletter" }, void 0)] }), void 0)] }), void 0)] }), void 0) }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(app_1.Toolbar, Object.assign({}, (0, omit_1.default)(formProps, [
                                // FIXME Not super user firendly way to remove warnings
                                'dirtyFields',
                                'dirtyFieldsSinceLastSubmit',
                                'dirtySinceLastSubmit',
                                'hasSubmitErrors',
                                'hasValidationErrors',
                                'initialValues',
                                'modifiedSinceLastSubmit',
                                'submitError',
                                'submitErrors',
                                'submitFailed',
                                'submitSucceeded',
                                'submitting',
                                'valid',
                            ])), void 0)] }, void 0)) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(ContactAside_1.ContactAside, { record: record, link: "show" }, void 0)] }), void 0));
};
const ContactEdit = (props) => ((0, jsx_runtime_1.jsx)(app_1.EditBase, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(ContactEditContent, {}, void 0) }), void 0));
exports.ContactEdit = ContactEdit;
