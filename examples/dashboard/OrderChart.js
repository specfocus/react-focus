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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var recharts_1 = require("recharts");
var app_1 = require("../../app");
var date_fns_1 = require("date-fns");
var lastDay = new Date();
var lastMonthDays = Array.from({ length: 30 }, function (_, i) { return (0, date_fns_1.subDays)(lastDay, i); });
var aMonthAgo = (0, date_fns_1.subDays)(new Date(), 30);
var dateFormatter = function (date) {
    return new Date(date).toLocaleDateString();
};
var aggregateOrdersByDay = function (orders) {
    return orders
        .filter(function (order) { return order.status !== 'cancelled'; })
        .reduce(function (acc, curr) {
        var day = (0, date_fns_1.format)(curr.date, 'YYYY-MM-DD');
        if (!acc[day]) {
            acc[day] = 0;
        }
        acc[day] += curr.total;
        return acc;
    }, {});
};
var getRevenuePerDay = function (orders) {
    var daysWithRevenue = aggregateOrdersByDay(orders);
    return lastMonthDays.map(function (date) { return ({
        date: date.getTime(),
        total: daysWithRevenue[(0, date_fns_1.format)(date, 'YYYY-MM-DD')] || 0,
    }); });
};
var OrderChart = function (props) {
    var orders = props.orders;
    var translate = (0, app_1.useTranslate)();
    if (!orders)
        return null;
    return (React.createElement(material_1.Card, null,
        React.createElement(material_1.CardHeader, { title: translate('pos.dashboard.month_history') }),
        React.createElement(material_1.CardContent, null,
            React.createElement("div", { style: { width: '100%', height: 300 } },
                React.createElement(recharts_1.ResponsiveContainer, null,
                    React.createElement(recharts_1.AreaChart, { data: getRevenuePerDay(orders) },
                        React.createElement("defs", null,
                            React.createElement("linearGradient", { id: "colorUv", x1: "0", y1: "0", x2: "0", y2: "1" },
                                React.createElement("stop", { offset: "5%", stopColor: "#8884d8", stopOpacity: 0.8 }),
                                React.createElement("stop", { offset: "95%", stopColor: "#8884d8", stopOpacity: 0 }))),
                        React.createElement(recharts_1.XAxis, { dataKey: "date", name: "Date", type: "number", scale: "time", domain: [
                                (0, date_fns_1.addDays)(aMonthAgo, 1).getTime(),
                                new Date().getTime(),
                            ], tickFormatter: dateFormatter }),
                        React.createElement(recharts_1.YAxis, { dataKey: "total", name: "Revenue", unit: "\u20AC" }),
                        React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                        React.createElement(recharts_1.Tooltip, { cursor: { strokeDasharray: '3 3' }, formatter: function (value) {
                                return new Intl.NumberFormat(undefined, {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(value);
                            }, labelFormatter: function (label) {
                                return dateFormatter(label);
                            } }),
                        React.createElement(recharts_1.Area, { type: "monotone", dataKey: "total", stroke: "#8884d8", strokeWidth: 2, fill: "url(#colorUv)" })))))));
};
exports.default = OrderChart;
