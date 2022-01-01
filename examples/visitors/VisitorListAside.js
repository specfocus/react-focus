"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const AccessTime_1 = __importDefault(require("@mui/icons-material/AccessTime"));
const MonetizationOnOutlined_1 = __importDefault(require("@mui/icons-material/MonetizationOnOutlined"));
const MailOutline_1 = __importDefault(require("@mui/icons-material/MailOutline"));
const LocalOfferOutlined_1 = __importDefault(require("@mui/icons-material/LocalOfferOutlined"));
const app_1 = require("../../app");
const date_fns_1 = require("date-fns");
const data_1 = __importDefault(require("../segments/data"));
const PREFIX = 'Aside';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledCard = (0, styles_1.styled)(material_1.Card)(({ theme }) => ({
    [`& .${classes.root}`]: {
        [theme.breakpoints.up('sm')]: {
            order: -1,
            width: '15em',
            marginRight: '1em',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));
const Aside = () => ((0, jsx_runtime_1.jsx)(StyledCard, { children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterLiveSearch, {}, void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterList, Object.assign({ label: "resources.customers.filters.last_visited", icon: (0, jsx_runtime_1.jsx)(AccessTime_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.customers.filters.today", value: {
                            last_seen_gte: (0, date_fns_1.endOfYesterday)().toISOString(),
                            last_seen_lte: undefined,
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.customers.filters.this_week", value: {
                            last_seen_gte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                            last_seen_lte: undefined,
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.customers.filters.last_week", value: {
                            last_seen_gte: (0, date_fns_1.subWeeks)((0, date_fns_1.startOfWeek)(new Date()), 1).toISOString(),
                            last_seen_lte: (0, date_fns_1.startOfWeek)(new Date()).toISOString(),
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.customers.filters.this_month", value: {
                            last_seen_gte: (0, date_fns_1.startOfMonth)(new Date()).toISOString(),
                            last_seen_lte: undefined,
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.customers.filters.last_month", value: {
                            last_seen_gte: (0, date_fns_1.subMonths)((0, date_fns_1.startOfMonth)(new Date()), 1).toISOString(),
                            last_seen_lte: (0, date_fns_1.startOfMonth)(new Date()).toISOString(),
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.customers.filters.earlier", value: {
                            last_seen_gte: undefined,
                            last_seen_lte: (0, date_fns_1.subMonths)((0, date_fns_1.startOfMonth)(new Date()), 1).toISOString(),
                        } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterList, Object.assign({ label: "resources.customers.filters.has_ordered", icon: (0, jsx_runtime_1.jsx)(MonetizationOnOutlined_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "ra.boolean.true", value: {
                            nb_commands_gte: 1,
                            nb_commands_lte: undefined,
                        } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "ra.boolean.false", value: {
                            nb_commands_gte: undefined,
                            nb_commands_lte: 0,
                        } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterList, Object.assign({ label: "resources.customers.filters.has_newsletter", icon: (0, jsx_runtime_1.jsx)(MailOutline_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "ra.boolean.true", value: { has_newsletter: true } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "ra.boolean.false", value: { has_newsletter: false } }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.FilterList, Object.assign({ label: "resources.customers.filters.group", icon: (0, jsx_runtime_1.jsx)(LocalOfferOutlined_1.default, {}, void 0) }, { children: data_1.default.map(segment => ((0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: segment.name, value: { groups: segment.id } }, segment.id))) }), void 0)] }, void 0) }, void 0));
exports.default = Aside;
