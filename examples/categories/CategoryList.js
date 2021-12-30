"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var app_1 = require("../../app");
var inflection_1 = __importDefault(require("inflection"));
var material_1 = require("@mui/material");
var LinkToRelatedProducts_1 = __importDefault(require("./LinkToRelatedProducts"));
var PREFIX = 'CategoryList';
var classes = {
    root: "".concat(PREFIX, "-root"),
    media: "".concat(PREFIX, "-media"),
    title: "".concat(PREFIX, "-title"),
    actionSpacer: "".concat(PREFIX, "-actionSpacer"),
};
var StyledGrid = (0, styles_1.styled)(material_1.Grid)((_a = {},
    _a["&.".concat(classes.root)] = {
        marginTop: '1em',
    },
    _a["& .".concat(classes.media)] = {
        height: 140,
    },
    _a["& .".concat(classes.title)] = {
        paddingBottom: '0.5em',
    },
    _a["& .".concat(classes.actionSpacer)] = {
        display: 'flex',
        justifyContent: 'space-around',
    },
    _a));
var CategoryGrid = function (props) {
    var _a = (0, app_1.useListContext)(), data = _a.data, ids = _a.ids;
    return ids ? (React.createElement(StyledGrid, { container: true, spacing: 2, className: classes.root }, ids.map(function (id) { return (React.createElement(material_1.Grid, { key: id, xs: 12, sm: 6, md: 4, lg: 3, xl: 2, item: true },
        React.createElement(material_1.Card, null,
            React.createElement(material_1.CardMedia, { image: "https://marmelab.com/posters/".concat(data[id].name, "-1.jpeg"), className: classes.media }),
            React.createElement(material_1.CardContent, { className: classes.title },
                React.createElement(material_1.Typography, { variant: "h5", component: "h2", align: "center" }, inflection_1.default.humanize(data[id].name))),
            React.createElement(material_1.CardActions, { classes: { spacing: classes.actionSpacer } },
                React.createElement(LinkToRelatedProducts_1.default, { record: data[id] }),
                React.createElement(app_1.EditButton, { basePath: "/categories", record: data[id] }))))); }))) : null;
};
var CategoryList = function (props) { return (React.createElement(app_1.List, __assign({}, props, { sort: { field: 'name', order: 'ASC' }, perPage: 20, pagination: false, component: "div", actions: false }),
    React.createElement(CategoryGrid, null))); };
exports.default = CategoryList;
