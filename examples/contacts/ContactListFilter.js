"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactListFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const AccessTime_1 = __importDefault(require("@mui/icons-material/AccessTime"));
const TrendingUp_1 = __importDefault(require("@mui/icons-material/TrendingUp"));
const LocalOffer_1 = __importDefault(require("@mui/icons-material/LocalOffer"));
const SupervisorAccount_1 = __importDefault(require("@mui/icons-material/SupervisorAccount"));
const date_fns_1 = require("date-fns");
const Status_1 = require("../../components/misc/Status");
const ContactListFilter = () => {
    const { identity } = (0, app_1.useGetIdentity)();
    const { data, ids } = (0, app_1.useGetList)('tags', { page: 1, perPage: 10 }, { field: 'name', order: 'ASC' });
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ width: "15em", order: "-1", marginRight: "1em" }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterLiveSearch, {}, void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterList, Object.assign({ label: "Last seen", icon: (0, jsx_runtime_1.jsx)(AccessTime_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "Today", value: {
                            last_seen_gte: (0, date_fns_1.endOfYesterday)().toISOString(),
                            last_seen_lte: undefined,
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "This week", value: {
                            last_seen_gte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                            last_seen_lte: undefined,
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "Before this week", value: {
                            last_seen_gte: undefined,
                            last_seen_lte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "Before this month", value: {
                            last_seen_gte: undefined,
                            last_seen_lte: (0, date_fns_1.startOfMonth)(new Date()).toISOString(),
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "Before last month", value: {
                            last_seen_gte: undefined,
                            last_seen_lte: (0, date_fns_1.subMonths)((0, date_fns_1.startOfMonth)(new Date()), 1).toISOString(),
                        } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterList, Object.assign({ label: "Status", icon: (0, jsx_runtime_1.jsx)(TrendingUp_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Cold ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "cold" }, void 0)] }, void 0), value: {
                            status: 'cold',
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Warm ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "warm" }, void 0)] }, void 0), value: {
                            status: 'warm',
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Hot ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "hot" }, void 0)] }, void 0), value: {
                            status: 'hot',
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["In contract ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "in-contract" }, void 0)] }, void 0), value: {
                            status: 'in-contract',
                        } }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.FilterList, Object.assign({ label: "Tags", icon: (0, jsx_runtime_1.jsx)(LocalOffer_1.default, {}, void 0) }, { children: ids &&
                    data &&
                    ids.map(id => {
                        var _a, _b;
                        return ((0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: (0, jsx_runtime_1.jsx)(material_1.Chip, { label: (_a = data[id]) === null || _a === void 0 ? void 0 : _a.name, size: "small", style: {
                                    backgroundColor: (_b = data[id]) === null || _b === void 0 ? void 0 : _b.color,
                                    border: 0,
                                    cursor: 'pointer',
                                } }, void 0), value: { tags: [id] } }, id));
                    }) }), void 0), (0, jsx_runtime_1.jsx)(app_1.FilterList, Object.assign({ label: "Account manager", icon: (0, jsx_runtime_1.jsx)(SupervisorAccount_1.default, {}, void 0) }, { children: (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "Me", value: {
                        sales_id: identity && identity.id,
                    } }, void 0) }), void 0)] }), void 0));
};
exports.ContactListFilter = ContactListFilter;
