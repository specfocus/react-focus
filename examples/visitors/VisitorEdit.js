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
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var Aside_1 = __importDefault(require("./Aside"));
var FullNameField_1 = __importDefault(require("./FullNameField"));
var SegmentsInput_1 = __importDefault(require("./SegmentsInput"));
var VisitorCreate_1 = require("./VisitorCreate");
var VisitorEdit = function (props) {
    return (React.createElement(app_1.Edit, __assign({ title: React.createElement(VisitorTitle, null), aside: React.createElement(Aside_1.default, null), component: "div" }, props),
        React.createElement(VisitorForm, null)));
};
var VisitorTitle = function (_a) {
    var record = _a.record;
    return record ? React.createElement(FullNameField_1.default, { record: record, size: "32" }) : null;
};
var VisitorForm = function (props) {
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(app_1.FormWithRedirect, __assign({}, props, { validate: VisitorCreate_1.validatePasswords, render: function (formProps) { return (React.createElement(material_1.Card, null,
            React.createElement("form", null,
                React.createElement(material_1.CardContent, null,
                    React.createElement(material_1.Box, { display: { md: 'block', lg: 'flex' } },
                        React.createElement(material_1.Box, { flex: 2, mr: { md: 0, lg: '1em' } },
                            React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.customers.fieldGroups.identity')),
                            React.createElement(material_1.Box, { display: { xs: 'block', sm: 'flex' } },
                                React.createElement(material_1.Box, { flex: 1, mr: { xs: 0, sm: '0.5em' } },
                                    React.createElement(app_1.TextInput, { source: "first_name", resource: "customers", validate: requiredValidate, fullWidth: true })),
                                React.createElement(material_1.Box, { flex: 1, ml: { xs: 0, sm: '0.5em' } },
                                    React.createElement(app_1.TextInput, { source: "last_name", resource: "customers", validate: requiredValidate, fullWidth: true }))),
                            React.createElement(app_1.TextInput, { type: "email", source: "email", resource: "customers", validate: [(0, app_1.email)(), (0, app_1.required)()], fullWidth: true }),
                            React.createElement(material_1.Box, { display: { xs: 'block', sm: 'flex' } },
                                React.createElement(material_1.Box, { flex: 1, mr: { xs: 0, sm: '0.5em' } },
                                    React.createElement(app_1.DateInput, { source: "birthday", resource: "customers", fullWidth: true, helperText: false })),
                                React.createElement(material_1.Box, { flex: 2, ml: { xs: 0, sm: '0.5em' } })),
                            React.createElement(material_1.Box, { mt: "1em" }),
                            React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.customers.fieldGroups.address')),
                            React.createElement(app_1.TextInput, { source: "address", resource: "customers", multiline: true, fullWidth: true, helperText: false }),
                            React.createElement(material_1.Box, { display: { xs: 'block', sm: 'flex' } },
                                React.createElement(material_1.Box, { flex: 2, mr: { xs: 0, sm: '0.5em' } },
                                    React.createElement(app_1.TextInput, { source: "city", resource: "customers", fullWidth: true, helperText: false })),
                                React.createElement(material_1.Box, { flex: 1, mr: { xs: 0, sm: '0.5em' } },
                                    React.createElement(app_1.TextInput, { source: "stateAbbr", resource: "customers", fullWidth: true, helperText: false })),
                                React.createElement(material_1.Box, { flex: 2 },
                                    React.createElement(app_1.TextInput, { source: "zipcode", resource: "customers", fullWidth: true, helperText: false }))),
                            React.createElement(material_1.Box, { mt: "1em" }),
                            React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.customers.fieldGroups.change_password')),
                            React.createElement(material_1.Box, { display: { xs: 'block', sm: 'flex' } },
                                React.createElement(material_1.Box, { flex: 1, mr: { xs: 0, sm: '0.5em' } },
                                    React.createElement(app_1.PasswordInput, { source: "password", resource: "customers", fullWidth: true })),
                                React.createElement(material_1.Box, { flex: 1, ml: { xs: 0, sm: '0.5em' } },
                                    React.createElement(app_1.PasswordInput, { source: "confirm_password", resource: "customers", fullWidth: true })))),
                        React.createElement(material_1.Box, { flex: 1, ml: { xs: 0, lg: '1em' }, mt: { xs: '1em', lg: 0 } },
                            React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.customers.fieldGroups.stats')),
                            React.createElement("div", null,
                                React.createElement(SegmentsInput_1.default, { fullWidth: true })),
                            React.createElement("div", null,
                                React.createElement(app_1.NullableBooleanInput, { source: "has_newsletter", resource: "customers" }))))),
                React.createElement(app_1.Toolbar, { record: formProps.record, basePath: formProps.basePath, undoable: true, invalid: formProps.invalid, handleSubmit: formProps.handleSubmit, saving: formProps.saving, resource: "customers" })))); } })));
};
var requiredValidate = [(0, app_1.required)()];
exports.default = VisitorEdit;
