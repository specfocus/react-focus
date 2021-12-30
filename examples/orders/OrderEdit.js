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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var app_1 = require("../../app");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var Basket_1 = __importDefault(require("./Basket"));
var Totals_1 = __importDefault(require("./Totals"));
var PREFIX = 'OrderEdit';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var StyledEdit = (0, styles_1.styled)(app_1.Edit)((_a = {},
    _a["& .".concat(classes.root)] = { alignItems: 'flex-start' },
    _a));
var OrderTitle = function (_a) {
    var record = _a.record;
    var translate = (0, app_1.useTranslate)();
    return record ? (React.createElement("span", null, translate('resources.commands.title', {
        reference: record.reference,
    }))) : null;
};
var CustomerDetails = function (_a) {
    var record = _a.record;
    return (React.createElement(material_1.Box, { display: "flex", flexDirection: "column" },
        React.createElement(material_1.Typography, { component: react_router_dom_1.Link, color: "primary", to: "/customers/".concat(record === null || record === void 0 ? void 0 : record.id), style: { textDecoration: 'none' } }, record === null || record === void 0 ? void 0 :
            record.first_name,
            " ", record === null || record === void 0 ? void 0 :
            record.last_name),
        React.createElement(material_1.Typography, { component: material_1.Link, color: "primary", href: "mailto:".concat(record === null || record === void 0 ? void 0 : record.email), style: { textDecoration: 'none' } }, record === null || record === void 0 ? void 0 : record.email)));
};
var CustomerAddress = function (_a) {
    var record = _a.record;
    return (React.createElement(material_1.Box, null,
        React.createElement(material_1.Typography, null, record === null || record === void 0 ? void 0 :
            record.first_name,
            " ", record === null || record === void 0 ? void 0 :
            record.last_name),
        React.createElement(material_1.Typography, null, record === null || record === void 0 ? void 0 : record.address),
        React.createElement(material_1.Typography, null, record === null || record === void 0 ? void 0 :
            record.city,
            ", ", record === null || record === void 0 ? void 0 :
            record.stateAbbr,
            " ", record === null || record === void 0 ? void 0 :
            record.zipcode)));
};
var Spacer = function () { return React.createElement(material_1.Box, { m: 1 }, "\u00A0"); };
var OrderForm = function (props) {
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(app_1.FormWithRedirect, __assign({}, props, { render: function (formProps) { return (React.createElement(material_1.Box, { maxWidth: "50em" },
            React.createElement(material_1.Card, null,
                React.createElement(material_1.CardContent, null,
                    React.createElement(material_1.Grid, { container: true, spacing: 1 },
                        React.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 8 },
                            React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.commands.section.order')),
                            React.createElement(material_1.Grid, { container: true },
                                React.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 6 },
                                    React.createElement(app_1.Labeled, { source: "date", resource: "commands" },
                                        React.createElement(app_1.DateField, { source: "date", resource: "commands", record: formProps.record }))),
                                React.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 6 },
                                    React.createElement(app_1.Labeled, { source: "reference", resource: "commands" },
                                        React.createElement(app_1.TextField, { source: "reference", resource: "commands", record: formProps.record })))),
                            React.createElement(material_1.Grid, { container: true },
                                React.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 6 },
                                    React.createElement(app_1.SelectInput, { resource: "commands", source: "status", choices: [
                                            {
                                                id: 'delivered',
                                                name: 'delivered',
                                            },
                                            {
                                                id: 'ordered',
                                                name: 'ordered',
                                            },
                                            {
                                                id: 'cancelled',
                                                name: 'cancelled',
                                            },
                                            {
                                                id: 'unknown',
                                                name: 'unknown',
                                                disabled: true,
                                            },
                                        ] })),
                                React.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 6 },
                                    React.createElement(material_1.Box, { mt: 2 },
                                        React.createElement(app_1.BooleanInput, { row: true, resource: "commands", source: "returned" }))))),
                        React.createElement(material_1.Grid, { item: true, xs: 12, sm: 12, md: 4 },
                            React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.commands.section.customer')),
                            React.createElement(app_1.ReferenceField, { source: "customer_id", resource: "commands", reference: "customers", basePath: "/customers", record: formProps.record, link: false },
                                React.createElement(CustomerDetails, null)),
                            React.createElement(Spacer, null),
                            React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.commands.section.shipping_address')),
                            React.createElement(app_1.ReferenceField, { source: "customer_id", resource: "commands", reference: "customers", basePath: "/customers", record: formProps.record, link: false },
                                React.createElement(CustomerAddress, null)))),
                    React.createElement(Spacer, null),
                    React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.commands.section.items')),
                    React.createElement(material_1.Box, null,
                        React.createElement(Basket_1.default, { record: formProps.record })),
                    React.createElement(Spacer, null),
                    React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.commands.section.total')),
                    React.createElement(material_1.Box, null,
                        React.createElement(Totals_1.default, { record: formProps.record }))),
                React.createElement(app_1.Toolbar, { record: formProps.record, basePath: formProps.basePath, undoable: true, invalid: formProps.invalid, handleSubmit: formProps.handleSubmit, saving: formProps.saving, resource: "commands" })))); } })));
};
var OrderEdit = function (props) { return (React.createElement(StyledEdit, __assign({ title: React.createElement(OrderTitle, null), classes: classes }, props, { component: "div" }),
    React.createElement(OrderForm, null))); };
exports.default = OrderEdit;
