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
exports.ContactListFilter = void 0;
/* eslint-disable import/no-anonymous-default-export */
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var AccessTime_1 = __importDefault(require("@mui/icons-material/AccessTime"));
var TrendingUp_1 = __importDefault(require("@mui/icons-material/TrendingUp"));
var LocalOffer_1 = __importDefault(require("@mui/icons-material/LocalOffer"));
var SupervisorAccount_1 = __importDefault(require("@mui/icons-material/SupervisorAccount"));
var date_fns_1 = require("date-fns");
var Status_1 = require("../../components/misc/Status");
var ContactListFilter = function () {
    var identity = (0, app_1.useGetIdentity)().identity;
    var _a = (0, app_1.useGetList)('tags', { page: 1, perPage: 10 }, { field: 'name', order: 'ASC' }), data = _a.data, ids = _a.ids;
    return (React.createElement(material_1.Box, { width: "15em", order: "-1", marginRight: "1em" },
        React.createElement(app_1.FilterLiveSearch, null),
        React.createElement(app_1.FilterList, { label: "Last seen", icon: React.createElement(AccessTime_1.default, null) },
            React.createElement(app_1.FilterListItem, { label: "Today", value: {
                    last_seen_gte: (0, date_fns_1.endOfYesterday)().toISOString(),
                    last_seen_lte: undefined,
                } }),
            React.createElement(app_1.FilterListItem, { label: "This week", value: {
                    last_seen_gte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                    last_seen_lte: undefined,
                } }),
            React.createElement(app_1.FilterListItem, { label: "Before this week", value: {
                    last_seen_gte: undefined,
                    last_seen_lte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                } }),
            React.createElement(app_1.FilterListItem, { label: "Before this month", value: {
                    last_seen_gte: undefined,
                    last_seen_lte: (0, date_fns_1.startOfMonth)(new Date()).toISOString(),
                } }),
            React.createElement(app_1.FilterListItem, { label: "Before last month", value: {
                    last_seen_gte: undefined,
                    last_seen_lte: (0, date_fns_1.subMonths)((0, date_fns_1.startOfMonth)(new Date()), 1).toISOString(),
                } })),
        React.createElement(app_1.FilterList, { label: "Status", icon: React.createElement(TrendingUp_1.default, null) },
            React.createElement(app_1.FilterListItem, { label: React.createElement(React.Fragment, null,
                    "Cold ",
                    React.createElement(Status_1.Status, { status: "cold" })), value: {
                    status: 'cold',
                } }),
            React.createElement(app_1.FilterListItem, { label: React.createElement(React.Fragment, null,
                    "Warm ",
                    React.createElement(Status_1.Status, { status: "warm" })), value: {
                    status: 'warm',
                } }),
            React.createElement(app_1.FilterListItem, { label: React.createElement(React.Fragment, null,
                    "Hot ",
                    React.createElement(Status_1.Status, { status: "hot" })), value: {
                    status: 'hot',
                } }),
            React.createElement(app_1.FilterListItem, { label: React.createElement(React.Fragment, null,
                    "In contract ",
                    React.createElement(Status_1.Status, { status: "in-contract" })), value: {
                    status: 'in-contract',
                } })),
        React.createElement(app_1.FilterList, { label: "Tags", icon: React.createElement(LocalOffer_1.default, null) }, ids &&
            data &&
            ids.map(function (id) {
                var _a, _b;
                return (React.createElement(app_1.FilterListItem, { key: id, label: React.createElement(material_1.Chip, { label: (_a = data[id]) === null || _a === void 0 ? void 0 : _a.name, size: "small", style: {
                            backgroundColor: (_b = data[id]) === null || _b === void 0 ? void 0 : _b.color,
                            border: 0,
                            cursor: 'pointer',
                        } }), value: { tags: [id] } }));
            })),
        React.createElement(app_1.FilterList, { label: "Account manager", icon: React.createElement(SupervisorAccount_1.default, null) },
            React.createElement(app_1.FilterListItem, { label: "Me", value: {
                    sales_id: identity && identity.id,
                } }))));
};
exports.ContactListFilter = ContactListFilter;
