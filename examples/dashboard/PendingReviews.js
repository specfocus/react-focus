"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Comment_1 = __importDefault(require("@mui/icons-material/Comment"));
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const CardWithIcon_1 = __importDefault(require("./CardWithIcon"));
const StarRatingField_1 = __importDefault(require("../reviews/StarRatingField"));
const PREFIX = 'PendingReviews';
const classes = {
    avatar: `${PREFIX}-avatar`,
    listItemText: `${PREFIX}-listItemText`,
    link: `${PREFIX}-link`,
    linkContent: `${PREFIX}-linkContent`,
};
const StyledCardWithIcon = (0, styles_1.styled)(CardWithIcon_1.default)(({ theme }) => ({
    [`& .${classes.avatar}`]: {
        background: theme.palette.background.paper,
    },
    [`& .${classes.listItemText}`]: {
        overflowY: 'hidden',
        height: '4em',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    },
    [`& .${classes.link}`]: {
        borderRadius: 0,
    },
    [`& .${classes.linkContent}`]: {
        color: theme.palette.primary.main,
    },
}));
const PendingReviews = ({ reviews = [], customers = {}, nb }) => {
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsxs)(StyledCardWithIcon, Object.assign({ to: "/reviews", icon: Comment_1.default, title: translate('pos.dashboard.pending_reviews'), subtitle: nb }, { children: [(0, jsx_runtime_1.jsx)(material_1.List, { children: reviews.map((record) => ((0, jsx_runtime_1.jsxs)(material_1.ListItem, Object.assign({ button: true, component: react_router_dom_1.Link, to: `/reviews/${record.id}`, alignItems: "flex-start" }, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: customers[record.customer_id] ? ((0, jsx_runtime_1.jsx)(material_1.Avatar, { src: `${customers[record.customer_id].avatar}?size=32x32`, className: classes.avatar }, void 0)) : ((0, jsx_runtime_1.jsx)(material_1.Avatar, {}, void 0)) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: (0, jsx_runtime_1.jsx)(StarRatingField_1.default, { record: record }, void 0), secondary: record.comment, className: classes.listItemText, style: { paddingRight: 0 } }, void 0)] }), record.id))) }, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: "\u00A0" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ className: classes.link, component: react_router_dom_1.Link, to: "/reviews", size: "small", color: "primary" }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ p: 1, className: classes.linkContent }, { children: translate('pos.dashboard.all_reviews') }), void 0) }), void 0)] }), void 0));
};
exports.default = PendingReviews;
