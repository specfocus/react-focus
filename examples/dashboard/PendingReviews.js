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
var Comment_1 = __importDefault(require("@mui/icons-material/Comment"));
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var CardWithIcon_1 = __importDefault(require("./CardWithIcon"));
var StarRatingField_1 = __importDefault(require("../reviews/StarRatingField"));
var PREFIX = 'PendingReviews';
var classes = {
    avatar: "".concat(PREFIX, "-avatar"),
    listItemText: "".concat(PREFIX, "-listItemText"),
    link: "".concat(PREFIX, "-link"),
    linkContent: "".concat(PREFIX, "-linkContent"),
};
var StyledCardWithIcon = (0, styles_1.styled)(CardWithIcon_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.avatar)] = {
            background: theme.palette.background.paper,
        },
        _b["& .".concat(classes.listItemText)] = {
            overflowY: 'hidden',
            height: '4em',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
        },
        _b["& .".concat(classes.link)] = {
            borderRadius: 0,
        },
        _b["& .".concat(classes.linkContent)] = {
            color: theme.palette.primary.main,
        },
        _b);
});
var PendingReviews = function (_a) {
    var _b = _a.reviews, reviews = _b === void 0 ? [] : _b, _c = _a.customers, customers = _c === void 0 ? {} : _c, nb = _a.nb;
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(StyledCardWithIcon, { to: "/reviews", icon: Comment_1.default, title: translate('pos.dashboard.pending_reviews'), subtitle: nb },
        React.createElement(material_1.List, null, reviews.map(function (record) { return (React.createElement(material_1.ListItem, { key: record.id, button: true, component: react_router_dom_1.Link, to: "/reviews/".concat(record.id), alignItems: "flex-start" },
            React.createElement(material_1.ListItemAvatar, null, customers[record.customer_id] ? (React.createElement(material_1.Avatar, { src: "".concat(customers[record.customer_id].avatar, "?size=32x32"), className: classes.avatar })) : (React.createElement(material_1.Avatar, null))),
            React.createElement(material_1.ListItemText, { primary: React.createElement(StarRatingField_1.default, { record: record }), secondary: record.comment, className: classes.listItemText, style: { paddingRight: 0 } }))); })),
        React.createElement(material_1.Box, { flexGrow: 1 }, "\u00A0"),
        React.createElement(material_1.Button, { className: classes.link, component: react_router_dom_1.Link, to: "/reviews", size: "small", color: "primary" },
            React.createElement(material_1.Box, { p: 1, className: classes.linkContent }, translate('pos.dashboard.all_reviews')))));
};
exports.default = PendingReviews;
