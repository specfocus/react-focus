"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealsChart = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const AttachMoney_1 = __importDefault(require("@mui/icons-material/AttachMoney"));
const bar_1 = require("@nivo/bar");
const date_fns_1 = require("date-fns");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const multiplier = {
    opportunity: 0.2,
    'proposal-sent': 0.5,
    'in-negociation': 0.8,
    delayed: 0.3,
};
const DealsChart = () => {
    const { data, ids, loaded } = (0, app_1.useGetList)('deals', { perPage: 100, page: 1 }, {
        field: 'start_at',
        order: 'ASC',
    });
    const [months, setMonths] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const deals = ids.map(id => data[id]);
        const dealsByMonth = deals.reduce((acc, deal) => {
            const month = (0, date_fns_1.startOfMonth)(new Date(deal.start_at)).toISOString();
            if (!acc[month]) {
                acc[month] = [];
            }
            acc[month].push(deal);
            return acc;
        }, {});
        const amountByMonth = Object.keys(dealsByMonth).map(month => {
            return {
                date: (0, date_fns_1.format)(new Date(month), 'MMM'),
                won: dealsByMonth[month]
                    .filter((deal) => deal.stage === 'won')
                    .reduce((acc, deal) => {
                    acc += deal.amount;
                    return acc;
                }, 0),
                pending: dealsByMonth[month]
                    .filter((deal) => !['won', 'lost'].includes(deal.stage))
                    .reduce((acc, deal) => {
                    // @ts-ignore
                    acc += deal.amount * multiplier[deal.stage];
                    return acc;
                }, 0),
                lost: dealsByMonth[month]
                    .filter((deal) => deal.stage === 'lost')
                    .reduce((acc, deal) => {
                    acc -= deal.amount;
                    return acc;
                }, 0),
            };
        });
        setMonths(amountByMonth);
    }, [ids, data]);
    if (!loaded)
        return null; // FIXME return skeleton instead
    const range = months.reduce((acc, month) => {
        acc.min = Math.min(acc.min, month.lost);
        acc.max = Math.max(acc.max, month.won + month.pending);
        return acc;
    }, { min: 0, max: 0 });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ ml: 2, mr: 2, display: "flex" }, { children: (0, jsx_runtime_1.jsx)(AttachMoney_1.default, { color: "disabled", fontSize: "large" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ underline: "none", variant: "h5", color: "textSecondary", component: react_router_dom_1.Link, to: "/deals" }, { children: "Upcoming Deal Revenue" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ height: 500 }, { children: (0, jsx_runtime_1.jsx)(bar_1.ResponsiveBar, { data: months, indexBy: "date", keys: ['won', 'pending', 'lost'], colors: ['#61cdbb', '#97e3d5', '#e25c3b'], margin: { top: 50, right: 50, bottom: 50, left: 0 }, padding: 0.3, valueScale: {
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
                        format: (v) => `${Math.abs(v / 1000)}k`,
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
                    ] }, void 0) }), void 0)] }, void 0));
};
exports.DealsChart = DealsChart;
