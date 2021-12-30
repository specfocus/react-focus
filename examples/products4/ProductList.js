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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFilters = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var app_1 = require("../../app");
var GridList_1 = __importDefault(require("./GridList"));
var Aside_1 = __importDefault(require("./Aside"));
var useQuickFilterStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(1),
    },
}); });
var QuickFilter = function (_a) {
    var label = _a.label;
    var translate = (0, app_1.useTranslate)();
    var classes = useQuickFilterStyles();
    return React.createElement(material_1.Chip, { className: classes.root, label: translate(label) });
};
exports.productFilters = [
    React.createElement(app_1.SearchInput, { source: "q", alwaysOn: true }),
    React.createElement(app_1.ReferenceInput, { source: "category_id", reference: "categories", sort: { field: 'id', order: 'ASC' } },
        React.createElement(app_1.SelectInput, { source: "name" })),
    React.createElement(app_1.NumberInput, { source: "width_gte" }),
    React.createElement(app_1.NumberInput, { source: "width_lte" }),
    React.createElement(app_1.NumberInput, { source: "height_gte" }),
    React.createElement(app_1.NumberInput, { source: "height_lte" }),
    React.createElement(QuickFilter, { label: "resources.products.fields.stock_lte", source: "stock_lte", defaultValue: 10 }),
];
var ListActions = function (_a) {
    var isSmall = _a.isSmall;
    return (React.createElement(app_1.TopToolbar, null,
        isSmall && React.createElement(app_1.FilterButton, null),
        React.createElement(app_1.SortButton, { fields: ['reference', 'sales', 'stock'] }),
        React.createElement(app_1.CreateButton, { basePath: "/products" }),
        React.createElement(app_1.ExportButton, null)));
};
var ProductList = function (props) {
    var isSmall = (0, material_1.useMediaQuery)(function (theme) { return theme.breakpoints.down('sm'); });
    return (React.createElement(app_1.ListBase, __assign({ perPage: 20, sort: { field: 'reference', order: 'ASC' } }, props),
        React.createElement(ProductListView, { isSmall: isSmall })));
};
var ProductListView = function (_a) {
    var isSmall = _a.isSmall;
    var defaultTitle = (0, app_1.useListContext)().defaultTitle;
    return (React.createElement(React.Fragment, null,
        React.createElement(app_1.Title, { defaultTitle: defaultTitle }),
        React.createElement(app_1.FilterContext.Provider, { value: exports.productFilters },
            React.createElement(ListActions, { isSmall: isSmall }),
            isSmall && (React.createElement(material_1.Box, { m: 1 },
                React.createElement(app_1.FilterForm, null)))),
        React.createElement(material_1.Box, { display: "flex" },
            React.createElement(Aside_1.default, null),
            React.createElement(material_1.Box, { width: isSmall ? 'auto' : 'calc(100% - 16em)' },
                React.createElement(GridList_1.default, null),
                React.createElement(app_1.Pagination, { rowsPerPageOptions: [10, 20, 40] })))));
};
exports.default = ProductList;
