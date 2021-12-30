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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var PersonAdd_1 = __importDefault(require("@mui/icons-material/PersonAdd"));
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var date_fns_1 = require("date-fns");
var CardWithIcon_1 = __importDefault(require("./CardWithIcon"));
var PREFIX = 'NewCustomers';
var classes = {
    link: "".concat(PREFIX, "-link"),
    linkContent: "".concat(PREFIX, "-linkContent"),
};
var StyledCardWithIcon = (0, styles_1.styled)(CardWithIcon_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.link)] = {
            borderRadius: 0,
        },
        _b["& .".concat(classes.linkContent)] = {
            color: theme.palette.primary.main,
        },
        _b);
});
var NewCustomers = function () {
    var translate = (0, app_1.useTranslate)();
    var aMonthAgo = (0, date_fns_1.subDays)(new Date(), 30);
    aMonthAgo.setDate(aMonthAgo.getDate() - 30);
    aMonthAgo.setHours(0);
    aMonthAgo.setMinutes(0);
    aMonthAgo.setSeconds(0);
    aMonthAgo.setMilliseconds(0);
    var _a = (0, app_1.useQueryWithStore)({
        type: 'getList',
        resource: 'customers',
        payload: {
            filter: {
                has_ordered: true,
                first_seen_gte: aMonthAgo.toISOString(),
            },
            sort: { field: 'first_seen', order: 'DESC' },
            pagination: { page: 1, perPage: 100 },
        },
    }), loaded = _a.loaded, visitors = _a.data;
    if (!loaded)
        return null;
    var nb = visitors ? visitors.reduce(function (nb) { return ++nb; }, 0) : 0;
    return (React.createElement(StyledCardWithIcon, { to: "/customers", icon: PersonAdd_1.default, title: translate('pos.dashboard.new_customers'), subtitle: nb },
        React.createElement(material_1.List, null, visitors
            ? visitors.map(function (record) { return (React.createElement(material_1.ListItem, { button: true, to: "/customers/".concat(record.id), component: react_router_dom_1.Link, key: record.id },
                React.createElement(material_1.ListItemAvatar, null,
                    React.createElement(material_1.Avatar, { src: "".concat(record.avatar, "?size=32x32") })),
                React.createElement(material_1.ListItemText, { primary: "".concat(record.first_name, " ").concat(record.last_name) }))); })
            : null),
        React.createElement(material_1.Box, { flexGrow: 1 }, "\u00A0"),
        React.createElement(material_1.Button, { className: classes.link, component: react_router_dom_1.Link, to: "/customers", size: "small", color: "primary" },
            React.createElement(material_1.Box, { p: 1, className: classes.linkContent }, translate('pos.dashboard.all_customers')))));
};
exports.default = NewCustomers;
