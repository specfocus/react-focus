"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFilters = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const app_1 = require("../../app");
const Aside_1 = __importDefault(require("./Aside"));
const GridList_1 = __importDefault(require("./GridList"));
const useQuickFilterStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
    },
}));
const QuickFilter = ({ label }) => {
    const translate = (0, app_1.useTranslate)();
    const classes = useQuickFilterStyles();
    return (0, jsx_runtime_1.jsx)(material_1.Chip, { className: classes.root, label: translate(label) }, void 0);
};
exports.productFilters = [
    (0, jsx_runtime_1.jsx)(app_1.SearchInput, { source: "q", alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "category_id", reference: "categories", sort: { field: 'id', order: 'ASC' } }, { children: (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "name" }, void 0) }), void 0),
    (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "width_gte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "width_lte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "height_gte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "height_lte" }, void 0),
    (0, jsx_runtime_1.jsx)(QuickFilter, { label: "resources.products.fields.stock_lte", source: "stock_lte", defaultValue: 10 }, void 0),
];
const ListActions = ({ isSmall }) => ((0, jsx_runtime_1.jsxs)(app_1.TopToolbar, { children: [isSmall && (0, jsx_runtime_1.jsx)(app_1.FilterButton, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.SortButton, { fields: ['reference', 'sales', 'stock'] }, void 0), (0, jsx_runtime_1.jsx)(app_1.CreateButton, { basePath: "/products" }, void 0), (0, jsx_runtime_1.jsx)(app_1.ExportButton, {}, void 0)] }, void 0));
const ProductList = (props) => {
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    return ((0, jsx_runtime_1.jsx)(app_1.ListBase, Object.assign({ perPage: 20, sort: { field: 'reference', order: 'ASC' } }, props, { children: (0, jsx_runtime_1.jsx)(ProductListView, { isSmall: isSmall }, void 0) }), void 0));
};
const ProductListView = ({ isSmall }) => {
    const { defaultTitle } = (0, app_1.useListContext)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(app_1.Title, { defaultTitle: defaultTitle }, void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterContext.Provider, Object.assign({ value: exports.productFilters }, { children: [(0, jsx_runtime_1.jsx)(ListActions, { isSmall: isSmall }, void 0), isSmall && ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ m: 1 }, { children: (0, jsx_runtime_1.jsx)(app_1.FilterForm, {}, void 0) }), void 0))] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(Aside_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ width: isSmall ? 'auto' : 'calc(100% - 16em)' }, { children: [(0, jsx_runtime_1.jsx)(GridList_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.Pagination, { rowsPerPageOptions: [10, 20, 40] }, void 0)] }), void 0)] }), void 0)] }, void 0));
};
exports.default = ProductList;
