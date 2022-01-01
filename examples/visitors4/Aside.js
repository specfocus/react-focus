"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const AccessTime_1 = __importDefault(require("@mui/icons-material/AccessTime"));
const styles_1 = require("@mui/styles");
const orders_1 = __importDefault(require("../orders"));
const reviews_1 = __importDefault(require("../reviews"));
const StarRatingField_1 = __importDefault(require("../reviews/StarRatingField"));
const useAsideStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        width: 400,
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));
const Aside = ({ record, basePath }) => {
    const classes = useAsideStyles();
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.root }, { children: record && (0, jsx_runtime_1.jsx)(EventList, { record: record, basePath: basePath }, void 0) }), void 0));
};
Aside.propTypes = {
    record: prop_types_1.default.any,
    basePath: prop_types_1.default.string,
};
const useEventStyles = (0, styles_1.makeStyles)({
    stepper: {
        background: 'none',
        border: 'none',
        marginLeft: '0.3em',
    },
});
const EventList = ({ record, basePath }) => {
    const translate = (0, app_1.useTranslate)();
    const classes = useEventStyles();
    const locale = (0, app_1.useLocale)();
    const { data: orders, ids: orderIds } = (0, app_1.useGetList)('commands', { page: 1, perPage: 100 }, { field: 'date', order: 'DESC' }, { customer_id: record && record.id });
    const { data: reviews, ids: reviewIds } = (0, app_1.useGetList)('reviews', { page: 1, perPage: 100 }, { field: 'date', order: 'DESC' }, { customer_id: record && record.id });
    const events = mixOrdersAndReviews(orders, orderIds, reviews, reviewIds);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ m: "0 0 1em 1em" }, { children: (0, jsx_runtime_1.jsx)(material_1.Card, { children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h6", gutterBottom: true }, { children: translate('resources.customers.fieldGroups.history') }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mb: "1em" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mr: "1em" }, { children: (0, jsx_runtime_1.jsx)(AccessTime_1.default, { fontSize: "small", color: "disabled" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: translate('resources.customers.fields.first_seen') }, void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { record: record, source: "first_seen" }, void 0)] }), void 0)] }), void 0), orderIds && orderIds.length > 0 && ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mr: "1em" }, { children: (0, jsx_runtime_1.jsx)(orders_1.default.icon, { fontSize: "small", color: "disabled" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, { children: translate('resources.commands.amount', {
                                                                smart_count: orderIds.length,
                                                            }) }, void 0) }), void 0)] }), void 0))] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mb: "1em" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mr: "1em" }, { children: (0, jsx_runtime_1.jsx)(AccessTime_1.default, { fontSize: "small", color: "disabled" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { children: translate('resources.customers.fields.last_seen') }, void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { record: record, source: "last_seen" }, void 0)] }), void 0)] }), void 0), reviewIds && reviewIds.length > 0 && ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mr: "1em" }, { children: (0, jsx_runtime_1.jsx)(reviews_1.default.icon, { fontSize: "small", color: "disabled" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flexGrow: 1 }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, { children: translate('resources.reviews.amount', {
                                                                smart_count: reviewIds.length,
                                                            }) }, void 0) }), void 0)] }), void 0))] }), void 0)] }), void 0)] }, void 0) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Stepper, Object.assign({ orientation: "vertical", classes: { root: classes.stepper } }, { children: events.map(event => ((0, jsx_runtime_1.jsxs)(material_1.Step, Object.assign({ expanded: true, active: true, completed: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.StepLabel, Object.assign({ StepIconComponent: () => {
                                const Component = event.type === 'order'
                                    ? orders_1.default.icon
                                    : reviews_1.default.icon;
                                return ((0, jsx_runtime_1.jsx)(Component, { fontSize: "small", color: "disabled", style: { paddingLeft: 3 } }, void 0));
                            } }, { children: new Date(event.date).toLocaleString(locale, {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            }) }), void 0), (0, jsx_runtime_1.jsx)(material_1.StepContent, { children: event.type === 'order' ? ((0, jsx_runtime_1.jsx)(Order, { record: event.data, basePath: basePath }, `event_${event.data.id}`)) : ((0, jsx_runtime_1.jsx)(Review, { record: event.data, basePath: basePath }, `review_${event.data.id}`)) }, void 0)] }), `${event.type}-${event.data.id}`))) }), void 0)] }, void 0));
};
const mixOrdersAndReviews = (orders, orderIds, reviews, reviewIds) => {
    const eventsFromOrders = orderIds && orders
        ? orderIds.map(id => ({
            type: 'order',
            date: orders[id].date,
            data: orders[id],
        }))
        : [];
    const eventsFromReviews = reviewIds && reviews
        ? reviewIds.map(id => ({
            type: 'review',
            date: reviews[id].date,
            data: reviews[id],
        }))
        : [];
    const events = eventsFromOrders.concat(eventsFromReviews);
    events.sort((e1, e2) => new Date(e2.date).getTime() - new Date(e1.date).getTime());
    return events;
};
const Order = ({ record, basePath }) => {
    const translate = (0, app_1.useTranslate)();
    return record ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", gutterBottom: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Link, Object.assign({ to: `/commands/${record.id}`, component: react_router_dom_1.Link }, { children: [translate('resources.commands.name', {
                            smart_count: 1,
                        }), ' ', "#", record.reference] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary" }, { children: [translate('resources.commands.nb_items', {
                        smart_count: record.basket.length,
                        _: '1 item |||| %{smart_count} items',
                    }), "\u00A0-\u00A0", (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total", options: {
                            style: 'currency',
                            currency: 'USD',
                        }, record: record, basePath: basePath }, void 0), "\u00A0-\u00A0", (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "status", record: record, basePath: basePath }, void 0)] }), void 0)] }, void 0)) : null;
};
const useReviewStyles = (0, styles_1.makeStyles)({
    clamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
});
const Review = ({ record, basePath }) => {
    const classes = useReviewStyles();
    const translate = (0, app_1.useTranslate)();
    return record ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", gutterBottom: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Link, Object.assign({ to: `/reviews/${record.id}`, component: react_router_dom_1.Link }, { children: [translate('resources.reviews.relative_to_poster'), " \"", (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "product_id", reference: "products", resource: "reviews", record: record, basePath: basePath, link: false }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference", component: "span" }, void 0) }), void 0), "\""] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", gutterBottom: true }, { children: (0, jsx_runtime_1.jsx)(StarRatingField_1.default, { record: record }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", className: classes.clamp }, { children: record.comment }), void 0)] }, void 0)) : null;
};
exports.default = Aside;
