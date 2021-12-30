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
var AccessTime_1 = __importDefault(require("@mui/icons-material/AccessTime"));
var MonetizationOnOutlined_1 = __importDefault(require("@mui/icons-material/MonetizationOnOutlined"));
var MailOutline_1 = __importDefault(require("@mui/icons-material/MailOutline"));
var LocalOfferOutlined_1 = __importDefault(require("@mui/icons-material/LocalOfferOutlined"));
var app_1 = require("../../app");
var date_fns_1 = require("date-fns");
var data_1 = __importDefault(require("../segments/data"));
var PREFIX = 'Aside';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var StyledCard = (0, styles_1.styled)(material_1.Card)(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.root)] = (_c = {},
            _c[theme.breakpoints.up('sm')] = {
                order: -1,
                width: '15em',
                marginRight: '1em',
            },
            _c[theme.breakpoints.down('md')] = {
                display: 'none',
            },
            _c),
        _b);
});
var Aside = function () { return (React.createElement(StyledCard, null,
    React.createElement(material_1.CardContent, null,
        React.createElement(app_1.FilterLiveSearch, null),
        React.createElement(app_1.FilterList, { label: "resources.customers.filters.last_visited", icon: React.createElement(AccessTime_1.default, null) },
            React.createElement(app_1.FilterListItem, { label: "resources.customers.filters.today", value: {
                    last_seen_gte: (0, date_fns_1.endOfYesterday)().toISOString(),
                    last_seen_lte: undefined,
                } }),
            React.createElement(app_1.FilterListItem, { label: "resources.customers.filters.this_week", value: {
                    last_seen_gte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                    last_seen_lte: undefined,
                } }),
            React.createElement(app_1.FilterListItem, { label: "resources.customers.filters.last_week", value: {
                    last_seen_gte: (0, date_fns_1.subWeeks)((0, date_fns_1.startOfWeek)(new Date()), 1).toISOString(),
                    last_seen_lte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                } }),
            React.createElement(app_1.FilterListItem, { label: "resources.customers.filters.this_month", value: {
                    last_seen_gte: (0, date_fns_1.startOfMonth)(new Date()).toISOString(),
                    last_seen_lte: undefined,
                } }),
            React.createElement(app_1.FilterListItem, { label: "resources.customers.filters.last_month", value: {
                    last_seen_gte: (0, date_fns_1.subMonths)((0, date_fns_1.startOfMonth)(new Date()), 1).toISOString(),
                    last_seen_lte: (0, date_fns_1.startOfMonth)(new Date()).toISOString(),
                } }),
            React.createElement(app_1.FilterListItem, { label: "resources.customers.filters.earlier", value: {
                    last_seen_gte: undefined,
                    last_seen_lte: (0, date_fns_1.subMonths)((0, date_fns_1.startOfMonth)(new Date()), 1).toISOString(),
                } })),
        React.createElement(app_1.FilterList, { label: "resources.customers.filters.has_ordered", icon: React.createElement(MonetizationOnOutlined_1.default, null) },
            React.createElement(app_1.FilterListItem, { label: "ra.boolean.true", value: {
                    nb_commands_gte: 1,
                    nb_commands_lte: undefined,
                } }),
            React.createElement(app_1.FilterListItem, { label: "ra.boolean.false", value: {
                    nb_commands_gte: undefined,
                    nb_commands_lte: 0,
                } })),
        React.createElement(app_1.FilterList, { label: "resources.customers.filters.has_newsletter", icon: React.createElement(MailOutline_1.default, null) },
            React.createElement(app_1.FilterListItem, { label: "ra.boolean.true", value: { has_newsletter: true } }),
            React.createElement(app_1.FilterListItem, { label: "ra.boolean.false", value: { has_newsletter: false } })),
        React.createElement(app_1.FilterList, { label: "resources.customers.filters.group", icon: React.createElement(LocalOfferOutlined_1.default, null) }, data_1.default.map(function (segment) { return (React.createElement(app_1.FilterListItem, { label: segment.name, key: segment.id, value: { groups: segment.id } })); }))))); };
exports.default = Aside;
