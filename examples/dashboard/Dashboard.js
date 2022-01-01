"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const date_fns_1 = require("date-fns");
const Welcome_1 = __importDefault(require("./Welcome"));
const MonthlyRevenue_1 = __importDefault(require("./MonthlyRevenue"));
const NbNewOrders_1 = __importDefault(require("./NbNewOrders"));
const PendingOrders_1 = __importDefault(require("./PendingOrders"));
const PendingReviews_1 = __importDefault(require("./PendingReviews"));
const NewCustomers_1 = __importDefault(require("./NewCustomers"));
const OrderChart_1 = __importDefault(require("./OrderChart"));
const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};
const Spacer = () => (0, jsx_runtime_1.jsx)("span", { style: { width: '1em' } }, void 0);
const VerticalSpacer = () => (0, jsx_runtime_1.jsx)("span", { style: { height: '1em' } }, void 0);
const Dashboard = () => {
    const [state, setState] = (0, react_1.useState)({});
    const version = (0, app_1.useVersion)();
    const dataProvider = (0, app_1.useDataProvider)();
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('lg'));
    const fetchOrders = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        const aMonthAgo = (0, date_fns_1.subDays)(new Date(), 30);
        const { data: recentOrders } = yield dataProvider.getList('commands', {
            filter: { date_gte: aMonthAgo.toISOString() },
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 50 },
        });
        const aggregations = recentOrders
            .filter(order => order.status !== 'cancelled')
            .reduce((stats, order) => {
            if (order.status !== 'cancelled') {
                stats.revenue += order.total;
                stats.nbNewOrders++;
            }
            if (order.status === 'ordered') {
                stats.pendingOrders.push(order);
            }
            return stats;
        }, {
            revenue: 0,
            nbNewOrders: 0,
            pendingOrders: [],
        });
        setState(state => (Object.assign(Object.assign({}, state), { recentOrders, revenue: aggregations.revenue.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }), nbNewOrders: aggregations.nbNewOrders, pendingOrders: aggregations.pendingOrders })));
        const { data: customers } = yield dataProvider.getMany('customers', {
            ids: aggregations.pendingOrders.map((order) => order.customer_id),
        });
        setState(state => (Object.assign(Object.assign({}, state), { pendingOrdersCustomers: customers.reduce((prev, customer) => {
                prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                return prev;
            }, {}) })));
    }), [dataProvider]);
    const fetchReviews = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        const { data: reviews } = yield dataProvider.getList('reviews', {
            filter: { status: 'pending' },
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 100 },
        });
        const nbPendingReviews = reviews.reduce((nb) => ++nb, 0);
        const pendingReviews = reviews.slice(0, Math.min(10, reviews.length));
        setState(state => (Object.assign(Object.assign({}, state), { pendingReviews, nbPendingReviews })));
        const { data: customers } = yield dataProvider.getMany('customers', {
            ids: pendingReviews.map(review => review.customer_id),
        });
        setState(state => (Object.assign(Object.assign({}, state), { pendingReviewsCustomers: customers.reduce((prev, customer) => {
                prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                return prev;
            }, {}) })));
    }), [dataProvider]);
    (0, react_1.useEffect)(() => {
        fetchOrders();
        fetchReviews();
    }, [version]); // eslint-disable-line react-hooks/exhaustive-deps
    const { nbNewOrders, nbPendingReviews, pendingOrders, pendingOrdersCustomers, pendingReviews, pendingReviewsCustomers, revenue, recentOrders, } = state;
    return isXSmall ? ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.flexColumn }, { children: [(0, jsx_runtime_1.jsx)(Welcome_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(MonthlyRevenue_1.default, { value: revenue }, void 0), (0, jsx_runtime_1.jsx)(VerticalSpacer, {}, void 0), (0, jsx_runtime_1.jsx)(NbNewOrders_1.default, { value: nbNewOrders }, void 0), (0, jsx_runtime_1.jsx)(VerticalSpacer, {}, void 0), (0, jsx_runtime_1.jsx)(PendingOrders_1.default, { orders: pendingOrders, customers: pendingOrdersCustomers }, void 0)] }), void 0) }, void 0)) : isSmall ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.flexColumn }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.singleCol }, { children: (0, jsx_runtime_1.jsx)(Welcome_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.flex }, { children: [(0, jsx_runtime_1.jsx)(MonthlyRevenue_1.default, { value: revenue }, void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(NbNewOrders_1.default, { value: nbNewOrders }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.singleCol }, { children: (0, jsx_runtime_1.jsx)(OrderChart_1.default, { orders: recentOrders }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.singleCol }, { children: (0, jsx_runtime_1.jsx)(PendingOrders_1.default, { orders: pendingOrders, customers: pendingOrdersCustomers }, void 0) }), void 0)] }), void 0)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Welcome_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.flex }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.leftCol }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.flex }, { children: [(0, jsx_runtime_1.jsx)(MonthlyRevenue_1.default, { value: revenue }, void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(NbNewOrders_1.default, { value: nbNewOrders }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.singleCol }, { children: (0, jsx_runtime_1.jsx)(OrderChart_1.default, { orders: recentOrders }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.singleCol }, { children: (0, jsx_runtime_1.jsx)(PendingOrders_1.default, { orders: pendingOrders, customers: pendingOrdersCustomers }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles.rightCol }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: styles.flex }, { children: [(0, jsx_runtime_1.jsx)(PendingReviews_1.default, { nb: nbPendingReviews, reviews: pendingReviews, customers: pendingReviewsCustomers }, void 0), (0, jsx_runtime_1.jsx)(Spacer, {}, void 0), (0, jsx_runtime_1.jsx)(NewCustomers_1.default, {}, void 0)] }), void 0) }), void 0)] }), void 0)] }, void 0));
};
exports.default = Dashboard;
