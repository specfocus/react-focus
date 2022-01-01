"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const recharts_1 = require("recharts");
const app_1 = require("../../app");
const date_fns_1 = require("date-fns");
const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => (0, date_fns_1.subDays)(lastDay, i));
const aMonthAgo = (0, date_fns_1.subDays)(new Date(), 30);
const dateFormatter = (date) => new Date(date).toLocaleDateString();
const aggregateOrdersByDay = (orders) => orders
    .filter((order) => order.status !== 'cancelled')
    .reduce((acc, curr) => {
    const day = (0, date_fns_1.format)(curr.date, 'YYYY-MM-DD');
    if (!acc[day]) {
        acc[day] = 0;
    }
    acc[day] += curr.total;
    return acc;
}, {});
const getRevenuePerDay = (orders) => {
    const daysWithRevenue = aggregateOrdersByDay(orders);
    return lastMonthDays.map(date => ({
        date: date.getTime(),
        total: daysWithRevenue[(0, date_fns_1.format)(date, 'YYYY-MM-DD')] || 0,
    }));
};
const OrderChart = (props) => {
    const { orders } = props;
    const translate = (0, app_1.useTranslate)();
    if (!orders)
        return null;
    return ((0, jsx_runtime_1.jsxs)(material_1.Card, { children: [(0, jsx_runtime_1.jsx)(material_1.CardHeader, { title: translate('pos.dashboard.month_history') }, void 0), (0, jsx_runtime_1.jsx)(material_1.CardContent, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { width: '100%', height: 300 } }, { children: (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.AreaChart, Object.assign({ data: getRevenuePerDay(orders) }, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: "colorUv", x1: "0", y1: "0", x2: "0", y2: "1" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "5%", stopColor: "#8884d8", stopOpacity: 0.8 }, void 0), (0, jsx_runtime_1.jsx)("stop", { offset: "95%", stopColor: "#8884d8", stopOpacity: 0 }, void 0)] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "date", name: "Date", type: "number", scale: "time", domain: [
                                        (0, date_fns_1.addDays)(aMonthAgo, 1).getTime(),
                                        new Date().getTime(),
                                    ], tickFormatter: dateFormatter }, void 0), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, { dataKey: "total", name: "Revenue", unit: "\u20AC" }, void 0), (0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }, void 0), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, { cursor: { strokeDasharray: '3 3' }, formatter: value => new Intl.NumberFormat(undefined, {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(value), labelFormatter: (label) => dateFormatter(label) }, void 0), (0, jsx_runtime_1.jsx)(recharts_1.Area, { type: "monotone", dataKey: "total", stroke: "#8884d8", strokeWidth: 2, fill: "url(#colorUv)" }, void 0)] }), void 0) }, void 0) }), void 0) }, void 0)] }, void 0));
};
exports.default = OrderChart;
