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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyShow = void 0;
var material_1 = require("@mui/material");
var PersonAdd_1 = __importDefault(require("@mui/icons-material/PersonAdd"));
var date_fns_1 = require("date-fns");
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var Status_1 = require("../../components/misc/Status");
var Avatar_1 = require("../contacts/Avatar");
var TagsList_1 = require("../contacts/TagsList");
var stages_1 = require("../deals/stages");
var CompanyAside_1 = require("./CompanyAside");
var LogoField_1 = require("./LogoField");
var sizes_1 = require("./sizes");
var CompanyShow = function (props) { return (React.createElement(app_1.ShowBase, __assign({}, props),
    React.createElement(CompanyShowContent, null))); };
exports.CompanyShow = CompanyShow;
var CompanyShowContent = function () {
    var _a = (0, app_1.useShowContext)(), record = _a.record, loaded = _a.loaded;
    var _b = (0, react_1.useState)(0), value = _b[0], setValue = _b[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    if (!loaded || !record)
        return null;
    return (React.createElement(material_1.Box, { mt: 2, display: "flex" },
        React.createElement(material_1.Box, { flex: "1" },
            React.createElement(material_1.Card, null,
                React.createElement(material_1.CardContent, null,
                    React.createElement(material_1.Box, { display: "flex", mb: 1 },
                        React.createElement(LogoField_1.LogoField, { record: record }),
                        React.createElement(material_1.Box, { ml: 2, flex: "1" },
                            React.createElement(material_1.Typography, { variant: "h5" }, record.name),
                            React.createElement(material_1.Typography, { variant: "body2" },
                                React.createElement(app_1.TextField, { source: "sector" }),
                                ",",
                                ' ',
                                React.createElement(app_1.SelectField, { source: "size", choices: sizes_1.sizes })))),
                    React.createElement(material_1.Tabs, { value: value, indicatorColor: "primary", textColor: "primary", onChange: handleChange },
                        record.nb_contacts && (React.createElement(material_1.Tab, { label: record.nb_contacts === 1
                                ? '1 Contact'
                                : "".concat(record.nb_contacts, " Contacts") })),
                        record.nb_deals && (React.createElement(material_1.Tab, { label: record.nb_deals === 1
                                ? '1 deal'
                                : "".concat(record.nb_deals, " Deals") }))),
                    React.createElement(material_1.Divider, null),
                    React.createElement(TabPanel, { value: value, index: 0 },
                        React.createElement(app_1.ReferenceManyField, { reference: "contacts", target: "company_id", sort: { field: 'last_name', order: 'ASC' } },
                            React.createElement(ContactsIterator, null))),
                    React.createElement(TabPanel, { value: value, index: 1 },
                        React.createElement(app_1.ReferenceManyField, { reference: "deals", target: "company_id", sort: { field: 'name', order: 'ASC' } },
                            React.createElement(DealsIterator, null)))))),
        React.createElement(CompanyAside_1.CompanyAside, { record: record })));
};
var TabPanel = function (props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (React.createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "wrapped-tabpanel-".concat(index), "aria-labelledby": "wrapped-tab-".concat(index) }, other), children));
};
var ContactsIterator = function () {
    var _a = (0, app_1.useListContext)(), data = _a.data, ids = _a.ids, loaded = _a.loaded;
    var record = (0, app_1.useRecordContext)();
    var now = Date.now();
    if (!loaded)
        return null;
    return (React.createElement(material_1.Box, null,
        React.createElement(material_1.List, null, ids.map(function (id) {
            var contact = data[id];
            return (React.createElement(material_1.ListItem, { button: true, key: id, component: react_router_dom_1.Link, to: "/contacts/".concat(id, "/show") },
                React.createElement(material_1.ListItemAvatar, null,
                    React.createElement(Avatar_1.Avatar, { record: contact })),
                React.createElement(material_1.ListItemText, { primary: "".concat(contact.first_name, " ").concat(contact.last_name), secondary: React.createElement(React.Fragment, null,
                        contact.title,
                        ' ',
                        React.createElement(TagsList_1.TagsList, { record: contact })) }),
                React.createElement(material_1.ListItemSecondaryAction, null,
                    React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", component: "span" },
                        "last activity",
                        ' ',
                        (0, date_fns_1.formatDistance)(new Date(contact.last_seen), now),
                        ' ',
                        "ago ",
                        React.createElement(Status_1.Status, { status: contact.status })))));
        })),
        React.createElement(material_1.Box, { textAlign: "center", mt: 1 },
            React.createElement(CreateRelatedContactButton, { record: record }))));
};
var CreateRelatedContactButton = function (_a) {
    var record = _a.record;
    return (React.createElement(material_1.Button, { component: react_router_dom_1.Link, to: {
            pathname: '/contacts/create',
            state: { record: { company_id: record.id } },
        }, color: "primary", variant: "contained", size: "small", startIcon: React.createElement(PersonAdd_1.default, null) }, "Add contact"));
};
var DealsIterator = function () {
    var _a = (0, app_1.useListContext)(), data = _a.data, ids = _a.ids, loaded = _a.loaded;
    var now = Date.now();
    if (!loaded)
        return null;
    return (React.createElement(material_1.Box, null,
        React.createElement(material_1.List, null, ids.map(function (id) {
            var deal = data[id];
            return (React.createElement(material_1.ListItem, { button: true, key: id, component: react_router_dom_1.Link, to: "/deals/".concat(id, "/show") },
                React.createElement(material_1.ListItemText, { primary: deal.name, secondary: React.createElement(React.Fragment, null,
                        stages_1.stageNames[deal.stage],
                        ",",
                        ' ',
                        deal.amount.toLocaleString('en-US', {
                            notation: 'compact',
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'narrowSymbol',
                            minimumSignificantDigits: 3,
                        }),
                        ", ",
                        deal.type) }),
                React.createElement(material_1.ListItemSecondaryAction, null,
                    React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", component: "span" },
                        "last activity",
                        ' ',
                        (0, date_fns_1.formatDistance)(new Date(deal.updated_at), now),
                        ' ',
                        "ago",
                        ' '))));
        }))));
};
