"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const PersonAdd_1 = __importDefault(require("@mui/icons-material/PersonAdd"));
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const date_fns_1 = require("date-fns");
const CardWithIcon_1 = __importDefault(require("./CardWithIcon"));
const PREFIX = 'NewCustomers';
const classes = {
    link: `${PREFIX}-link`,
    linkContent: `${PREFIX}-linkContent`,
};
const StyledCardWithIcon = (0, styles_1.styled)(CardWithIcon_1.default)(({ theme }) => ({
    [`& .${classes.link}`]: {
        borderRadius: 0,
    },
    [`& .${classes.linkContent}`]: {
        color: theme.palette.primary.main,
    },
}));
const NewCustomers = () => {
    const translate = (0, app_1.useTranslate)();
    const aMonthAgo = (0, date_fns_1.subDays)(new Date(), 30);
    aMonthAgo.setDate(aMonthAgo.getDate() - 30);
    aMonthAgo.setHours(0);
    aMonthAgo.setMinutes(0);
    aMonthAgo.setSeconds(0);
    aMonthAgo.setMilliseconds(0);
    const { loaded, data: visitors } = (0, app_1.useQueryWithStore)({
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
    });
    if (!loaded)
        return null;
    const nb = visitors ? visitors.reduce((nb) => ++nb, 0) : 0;
    return ((0, jsx_runtime_1.jsxs)(StyledCardWithIcon, Object.assign({ to: "/customers", icon: PersonAdd_1.default, title: translate('pos.dashboard.new_customers'), subtitle: nb }, { children: [(0, jsx_runtime_1.jsx)(material_1.List, { children: visitors
                    ? visitors.map((record) => ((0, jsx_runtime_1.jsxs)(material_1.ListItem, Object.assign({ button: true, to: `/customers/${record.id}`, component: react_router_dom_1.Link }, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { src: `${record.avatar}?size=32x32` }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: `${record.first_name} ${record.last_name}` }, void 0)] }), record.id)))
                    : null }, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: "\u00A0" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ className: classes.link, component: react_router_dom_1.Link, to: "/customers", size: "small", color: "primary" }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ p: 1, className: classes.linkContent }, { children: translate('pos.dashboard.all_customers') }), void 0) }), void 0)] }), void 0));
};
exports.default = NewCustomers;
