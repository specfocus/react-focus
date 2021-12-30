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
var prop_types_1 = __importDefault(require("prop-types"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var AccessTime_1 = __importDefault(require("@mui/icons-material/AccessTime"));
var styles_1 = require("@mui/styles");
var orders_1 = __importDefault(require("../orders"));
var reviews_1 = __importDefault(require("../reviews"));
var StarRatingField_1 = __importDefault(require("../reviews/StarRatingField"));
var useAsideStyles = (0, styles_1.makeStyles)(function (theme) {
    var _a;
    return ({
        root: (_a = {
                width: 400
            },
            _a[theme.breakpoints.down('md')] = {
                display: 'none',
            },
            _a),
    });
});
var Aside = function (_a) {
    var record = _a.record, basePath = _a.basePath;
    var classes = useAsideStyles();
    return (React.createElement("div", { className: classes.root }, record && React.createElement(EventList, { record: record, basePath: basePath })));
};
Aside.propTypes = {
    record: prop_types_1.default.any,
    basePath: prop_types_1.default.string,
};
var useEventStyles = (0, styles_1.makeStyles)({
    stepper: {
        background: 'none',
        border: 'none',
        marginLeft: '0.3em',
    },
});
var EventList = function (_a) {
    var record = _a.record, basePath = _a.basePath;
    var translate = (0, app_1.useTranslate)();
    var classes = useEventStyles();
    var locale = (0, app_1.useLocale)();
    var _b = (0, app_1.useGetList)('commands', { page: 1, perPage: 100 }, { field: 'date', order: 'DESC' }, { customer_id: record && record.id }), orders = _b.data, orderIds = _b.ids;
    var _c = (0, app_1.useGetList)('reviews', { page: 1, perPage: 100 }, { field: 'date', order: 'DESC' }, { customer_id: record && record.id }), reviews = _c.data, reviewIds = _c.ids;
    var events = mixOrdersAndReviews(orders, orderIds, reviews, reviewIds);
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { m: "0 0 1em 1em" },
            React.createElement(material_1.Card, null,
                React.createElement(material_1.CardContent, null,
                    React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate('resources.customers.fieldGroups.history')),
                    React.createElement(material_1.Box, { display: "flex" },
                        React.createElement(material_1.Box, { flexGrow: 1 },
                            React.createElement(material_1.Box, { display: "flex", mb: "1em" },
                                React.createElement(material_1.Box, { mr: "1em" },
                                    React.createElement(AccessTime_1.default, { fontSize: "small", color: "disabled" })),
                                React.createElement(material_1.Box, { flexGrow: 1 },
                                    React.createElement(material_1.Typography, null, translate('resources.customers.fields.first_seen')),
                                    React.createElement(app_1.DateField, { record: record, source: "first_seen" }))),
                            orderIds && orderIds.length > 0 && (React.createElement(material_1.Box, { display: "flex" },
                                React.createElement(material_1.Box, { mr: "1em" },
                                    React.createElement(orders_1.default.icon, { fontSize: "small", color: "disabled" })),
                                React.createElement(material_1.Box, { flexGrow: 1 },
                                    React.createElement(material_1.Typography, null, translate('resources.commands.amount', {
                                        smart_count: orderIds.length,
                                    })))))),
                        React.createElement(material_1.Box, { flexGrow: 1 },
                            React.createElement(material_1.Box, { display: "flex", mb: "1em" },
                                React.createElement(material_1.Box, { mr: "1em" },
                                    React.createElement(AccessTime_1.default, { fontSize: "small", color: "disabled" })),
                                React.createElement(material_1.Box, { flexGrow: 1 },
                                    React.createElement(material_1.Typography, null, translate('resources.customers.fields.last_seen')),
                                    React.createElement(app_1.DateField, { record: record, source: "last_seen" }))),
                            reviewIds && reviewIds.length > 0 && (React.createElement(material_1.Box, { display: "flex" },
                                React.createElement(material_1.Box, { mr: "1em" },
                                    React.createElement(reviews_1.default.icon, { fontSize: "small", color: "disabled" })),
                                React.createElement(material_1.Box, { flexGrow: 1 },
                                    React.createElement(material_1.Typography, null, translate('resources.reviews.amount', {
                                        smart_count: reviewIds.length,
                                    })))))))))),
        React.createElement(material_1.Stepper, { orientation: "vertical", classes: { root: classes.stepper } }, events.map(function (event) { return (React.createElement(material_1.Step, { key: "".concat(event.type, "-").concat(event.data.id), expanded: true, active: true, completed: true },
            React.createElement(material_1.StepLabel, { StepIconComponent: function () {
                    var Component = event.type === 'order'
                        ? orders_1.default.icon
                        : reviews_1.default.icon;
                    return (React.createElement(Component, { fontSize: "small", color: "disabled", style: { paddingLeft: 3 } }));
                } }, new Date(event.date).toLocaleString(locale, {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            })),
            React.createElement(material_1.StepContent, null, event.type === 'order' ? (React.createElement(Order, { record: event.data, key: "event_".concat(event.data.id), basePath: basePath })) : (React.createElement(Review, { record: event.data, key: "review_".concat(event.data.id), basePath: basePath }))))); }))));
};
var mixOrdersAndReviews = function (orders, orderIds, reviews, reviewIds) {
    var eventsFromOrders = orderIds && orders
        ? orderIds.map(function (id) { return ({
            type: 'order',
            date: orders[id].date,
            data: orders[id],
        }); })
        : [];
    var eventsFromReviews = reviewIds && reviews
        ? reviewIds.map(function (id) { return ({
            type: 'review',
            date: reviews[id].date,
            data: reviews[id],
        }); })
        : [];
    var events = eventsFromOrders.concat(eventsFromReviews);
    events.sort(function (e1, e2) { return new Date(e2.date).getTime() - new Date(e1.date).getTime(); });
    return events;
};
var Order = function (_a) {
    var record = _a.record, basePath = _a.basePath;
    var translate = (0, app_1.useTranslate)();
    return record ? (React.createElement(React.Fragment, null,
        React.createElement(material_1.Typography, { variant: "body2", gutterBottom: true },
            React.createElement(material_1.Link, { to: "/commands/".concat(record.id), component: react_router_dom_1.Link },
                translate('resources.commands.name', {
                    smart_count: 1,
                }),
                ' ',
                "#",
                record.reference)),
        React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" },
            translate('resources.commands.nb_items', {
                smart_count: record.basket.length,
                _: '1 item |||| %{smart_count} items',
            }),
            "\u00A0-\u00A0",
            React.createElement(app_1.NumberField, { source: "total", options: {
                    style: 'currency',
                    currency: 'USD',
                }, record: record, basePath: basePath }),
            "\u00A0-\u00A0",
            React.createElement(app_1.TextField, { source: "status", record: record, basePath: basePath })))) : null;
};
var useReviewStyles = (0, styles_1.makeStyles)({
    clamp: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
});
var Review = function (_a) {
    var record = _a.record, basePath = _a.basePath;
    var classes = useReviewStyles();
    var translate = (0, app_1.useTranslate)();
    return record ? (React.createElement(React.Fragment, null,
        React.createElement(material_1.Typography, { variant: "body2", gutterBottom: true },
            React.createElement(material_1.Link, { to: "/reviews/".concat(record.id), component: react_router_dom_1.Link },
                translate('resources.reviews.relative_to_poster'),
                " \"",
                React.createElement(app_1.ReferenceField, { source: "product_id", reference: "products", resource: "reviews", record: record, basePath: basePath, link: false },
                    React.createElement(app_1.TextField, { source: "reference", component: "span" })),
                "\"")),
        React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", gutterBottom: true },
            React.createElement(StarRatingField_1.default, { record: record })),
        React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary", className: classes.clamp }, record.comment))) : null;
};
exports.default = Aside;
