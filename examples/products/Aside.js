"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const inflection_1 = __importDefault(require("inflection"));
const material_1 = require("@mui/material");
const LocalOfferOutlined_1 = __importDefault(require("@mui/icons-material/LocalOfferOutlined"));
const BarChart_1 = __importDefault(require("@mui/icons-material/BarChart"));
const AttachMoney_1 = __importDefault(require("@mui/icons-material/AttachMoney"));
const app_1 = require("../../app");
const PREFIX = 'Aside';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledCard = (0, styles_1.styled)(material_1.Card)(({ theme }) => ({
    [`&.${classes.root}`]: {
        [theme.breakpoints.up('sm')]: {
            width: '15em',
            marginRight: '1em',
            overflow: 'initial',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));
const Aside = () => {
    const { data, ids } = (0, app_1.useGetList)('categories', { page: 1, perPage: 100 }, { field: 'name', order: 'ASC' }, {});
    return ((0, jsx_runtime_1.jsx)(StyledCard, Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterLiveSearch, {}, void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterList, Object.assign({ label: "resources.products.filters.sales", icon: (0, jsx_runtime_1.jsx)(AttachMoney_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.best_sellers", value: {
                                sales_lte: undefined,
                                sales_gt: 25,
                                sales: undefined,
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.average_sellers", value: {
                                sales_lte: 25,
                                sales_gt: 10,
                                sales: undefined,
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.low_sellers", value: {
                                sales_lte: 10,
                                sales_gt: 0,
                                sales: undefined,
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.never_sold", value: {
                                sales_lte: undefined,
                                sales_gt: undefined,
                                sales: 0,
                            } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(app_1.FilterList, Object.assign({ label: "resources.products.filters.stock", icon: (0, jsx_runtime_1.jsx)(BarChart_1.default, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.no_stock", value: {
                                stock_lt: undefined,
                                stock_gt: undefined,
                                stock: 0,
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.low_stock", value: {
                                stock_lt: 10,
                                stock_gt: 0,
                                stock: undefined,
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.average_stock", value: {
                                stock_lt: 50,
                                stock_gt: 9,
                                stock: undefined,
                            } }, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "resources.products.filters.enough_stock", value: {
                                stock_lt: undefined,
                                stock_gt: 49,
                                stock: undefined,
                            } }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.FilterList, Object.assign({ label: "resources.products.filters.categories", icon: (0, jsx_runtime_1.jsx)(LocalOfferOutlined_1.default, {}, void 0) }, { children: ids &&
                        data &&
                        ids.map((id) => ((0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: inflection_1.default.humanize(data[id].name), value: { category_id: data[id].id } }, data[id].id))) }), void 0)] }, void 0) }), void 0));
};
exports.default = Aside;
