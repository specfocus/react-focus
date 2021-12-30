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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactEdit = void 0;
var material_1 = require("@mui/material");
var omit_1 = __importDefault(require("lodash/omit"));
var React = __importStar(require("react"));
var app_1 = require("../../app");
var Avatar_1 = require("./Avatar");
var ContactAside_1 = require("./ContactAside");
var Spacer = function () { return React.createElement(material_1.Box, { width: 20, component: "span" }); };
var ContactEditContent = function () {
    var _a = (0, app_1.useEditContext)(), record = _a.record, loaded = _a.loaded, save = _a.save;
    if (!loaded || !record)
        return null;
    return (React.createElement(material_1.Box, { mt: 2, display: "flex" },
        React.createElement(material_1.Box, { flex: "1" },
            React.createElement(app_1.FormWithRedirect, { record: record, redirect: "show", save: save, render: function (formProps) { return (React.createElement(material_1.Card, null,
                    React.createElement(material_1.CardContent, null,
                        React.createElement(material_1.Box, null,
                            React.createElement(material_1.Box, { display: "flex" },
                                React.createElement(material_1.Box, { mr: 2 },
                                    React.createElement(Avatar_1.Avatar, { record: record })),
                                React.createElement(material_1.Box, { flex: "1", mt: -1 },
                                    React.createElement(material_1.Box, { display: "flex" },
                                        React.createElement(app_1.TextInput, { source: "first_name" }),
                                        React.createElement(Spacer, null),
                                        React.createElement(app_1.TextInput, { source: "last_name" })),
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
                    React.createElement(app_1.Toolbar, __assign({}, (0, omit_1.default)(formProps, [
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
                    ]))))); } })),
        React.createElement(ContactAside_1.ContactAside, { record: record, link: "show" })));
};
var ContactEdit = function (props) { return (React.createElement(app_1.EditBase, __assign({}, props),
    React.createElement(ContactEditContent, null))); };
exports.ContactEdit = ContactEdit;
