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
exports.DealsChart = void 0;
var material_1 = require("@mui/material");
var AttachMoney_1 = __importDefault(require("@mui/icons-material/AttachMoney"));
var bar_1 = require("@nivo/bar");
var date_fns_1 = require("date-fns");
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var multiplier = {
    opportunity: 0.2,
    'proposal-sent': 0.5,
    'in-negociation': 0.8,
    delayed: 0.3,
};
var DealsChart = function () {
    var _a = (0, app_1.useGetList)('deals', { perPage: 100, page: 1 }, {
        field: 'start_at',
        order: 'ASC',
    }), data = _a.data, ids = _a.ids, loaded = _a.loaded;
    var _b = (0, react_1.useState)([]), months = _b[0], setMonths = _b[1];
    (0, react_1.useEffect)(function () {
        var deals = ids.map(function (id) { return data[id]; });
        var dealsByMonth = deals.reduce(function (acc, deal) {
            var month = (0, date_fns_1.startOfMonth)(new Date(deal.start_at)).toISOString();
            if (!acc[month]) {
                acc[month] = [];
            }
            acc[month].push(deal);
            return acc;
        }, {});
        var amountByMonth = Object.keys(dealsByMonth).map(function (month) {
            return {
                date: (0, date_fns_1.format)(new Date(month), 'MMM'),
                won: dealsByMonth[month]
                    .filter(function (deal) { return deal.stage === 'won'; })
                    .reduce(function (acc, deal) {
                    acc += deal.amount;
                    return acc;
                }, 0),
                pending: dealsByMonth[month]
                    .filter(function (deal) { return !['won', 'lost'].includes(deal.stage); })
                    .reduce(function (acc, deal) {
                    // @ts-ignore
                    acc += deal.amount * multiplier[deal.stage];
                    return acc;
                }, 0),
                lost: dealsByMonth[month]
                    .filter(function (deal) { return deal.stage === 'lost'; })
                    .reduce(function (acc, deal) {
                    acc -= deal.amount;
                    return acc;
                }, 0),
            };
        });
        setMonths(amountByMonth);
    }, [ids, data]);
    if (!loaded)
        return null; // FIXME return skeleton instead
    var range = months.reduce(function (acc, month) {
        acc.min = Math.min(acc.min, month.lost);
        acc.max = Math.max(acc.max, month.won + month.pending);
        return acc;
    }, { min: 0, max: 0 });
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { display: "flex", alignItems: "center" },
            React.createElement(material_1.Box, { ml: 2, mr: 2, display: "flex" },
                React.createElement(AttachMoney_1.default, { color: "disabled", fontSize: "large" })),
            React.createElement(material_1.Link, { underline: "none", variant: "h5", color: "textSecondary", component: react_router_dom_1.Link, to: "/deals" }, "Upcoming Deal Revenue")),
        React.createElement(material_1.Box, { height: 500 },
            React.createElement(bar_1.ResponsiveBar, { data: months, indexBy: "date", keys: ['won', 'pending', 'lost'], colors: ['#61cdbb', '#97e3d5', '#e25c3b'], margin: { top: 50, right: 50, bottom: 50, left: 0 }, padding: 0.3, valueScale: {
                    type: 'linear',
                    min: range.min * 1.2,
                    max: range.max * 1.2,
                }, indexScale: { type: 'band', round: true }, enableGridX: true, enableGridY: false, enableLabel: false, axisTop: {
                    tickSize: 0,
                    tickPadding: 12,
                }, axisBottom: {
                    legendPosition: 'middle',
                    legendOffset: 50,
                    tickSize: 0,
                    tickPadding: 12,
                }, axisLeft: null, axisRight: {
                    format: function (v) { return "".concat(Math.abs(v / 1000), "k"); },
                    tickValues: 8,
                }, markers: [
                    {
                        axis: 'y',
                        value: 0,
                        lineStyle: { strokeOpacity: 0 },
                        textStyle: { fill: '#2ebca6' },
                        legend: 'Won',
                        legendPosition: 'top-left',
                        legendOrientation: 'vertical',
                    },
                    {
                        axis: 'y',
                        value: 0,
                        lineStyle: {
                            stroke: '#f47560',
                            strokeWidth: 1,
                        },
                        textStyle: { fill: '#e25c3b' },
                        legend: 'Lost',
                        legendPosition: 'bottom-left',
                        legendOrientation: 'vertical',
                    },
                ] }))));
};
exports.DealsChart = DealsChart;
