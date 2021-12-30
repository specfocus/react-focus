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
var inflection_1 = __importDefault(require("inflection"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var LocalOfferOutlined_1 = __importDefault(require("@mui/icons-material/LocalOfferOutlined"));
var BarChart_1 = __importDefault(require("@mui/icons-material/BarChart"));
var AttachMoney_1 = __importDefault(require("@mui/icons-material/AttachMoney"));
var app_1 = require("../../app");
var useStyles = (0, styles_1.makeStyles)(function (theme) {
    var _a;
    return ({
        root: (_a = {},
            _a[theme.breakpoints.up('sm')] = {
                width: '15em',
                marginRight: '1em',
                overflow: 'initial',
            },
            _a[theme.breakpoints.down('sm')] = {
                display: 'none',
            },
            _a),
    });
});
var Aside = function () {
    var _a = (0, app_1.useGetList)('categories', { page: 1, perPage: 100 }, { field: 'name', order: 'ASC' }, {}), data = _a.data, ids = _a.ids;
    var classes = useStyles();
    return (React.createElement(material_1.Card, { className: classes.root },
        React.createElement(material_1.CardContent, null,
            React.createElement(app_1.FilterLiveSearch, null),
            React.createElement(app_1.FilterList, { label: "resources.products.filters.sales", icon: React.createElement(AttachMoney_1.default, null) },
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.best_sellers", value: {
                        sales_lte: undefined,
                        sales_gt: 25,
                        sales: undefined,
                    } }),
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.average_sellers", value: {
                        sales_lte: 25,
                        sales_gt: 10,
                        sales: undefined,
                    } }),
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.low_sellers", value: {
                        sales_lte: 10,
                        sales_gt: 0,
                        sales: undefined,
                    } }),
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.never_sold", value: {
                        sales_lte: undefined,
                        sales_gt: undefined,
                        sales: 0,
                    } })),
            React.createElement(app_1.FilterList, { label: "resources.products.filters.stock", icon: React.createElement(BarChart_1.default, null) },
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.no_stock", value: {
                        stock_lt: undefined,
                        stock_gt: undefined,
                        stock: 0,
                    } }),
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.low_stock", value: {
                        stock_lt: 10,
                        stock_gt: 0,
                        stock: undefined,
                    } }),
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.average_stock", value: {
                        stock_lt: 50,
                        stock_gt: 9,
                        stock: undefined,
                    } }),
                React.createElement(app_1.FilterListItem, { label: "resources.products.filters.enough_stock", value: {
                        stock_lt: undefined,
                        stock_gt: 49,
                        stock: undefined,
                    } })),
            React.createElement(app_1.FilterList, { label: "resources.products.filters.categories", icon: React.createElement(LocalOfferOutlined_1.default, null) }, ids &&
                data &&
                ids.map(function (id) { return (React.createElement(app_1.FilterListItem, { label: inflection_1.default.humanize(data[id].name), key: data[id].id, value: { category_id: data[id].id } })); })))));
};
exports.default = Aside;
