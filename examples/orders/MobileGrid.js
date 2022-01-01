"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const app_1 = require("../../app");
const CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
const PREFIX = 'MobileGrid';
const classes = {
    card: `${PREFIX}-card`,
    cardTitleContent: `${PREFIX}-cardTitleContent`,
    cardContent: `${PREFIX}-cardContent`,
    cardContentRow: `${PREFIX}-cardContentRow`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.card}`]: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5rem 0',
    },
    [`& .${classes.cardTitleContent}`]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    [`& .${classes.cardContent}`]: theme.typography.body1,
    [`& .${classes.cardContentRow}`]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0.5rem 0',
    },
}));
const MobileGrid = (props) => {
    const { ids, data, basePath } = props;
    const translate = (0, app_1.useTranslate)();
    if (!ids || !data || !basePath) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ style: { margin: '1em' } }, { children: ids.map(id => ((0, jsx_runtime_1.jsxs)(material_1.Card, Object.assign({ className: classes.card }, { children: [(0, jsx_runtime_1.jsx)(material_1.CardHeader, { title: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.cardTitleContent }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: [translate('resources.commands.name', 1), ":\u00A0", (0, jsx_runtime_1.jsx)(app_1.TextField, { record: data[id], source: "reference" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(app_1.EditButton, { resource: "commands", basePath: basePath, record: data[id] }, void 0)] }), void 0) }, void 0), (0, jsx_runtime_1.jsxs)(material_1.CardContent, Object.assign({ className: classes.cardContent }, { children: [(0, jsx_runtime_1.jsxs)("span", Object.assign({ className: classes.cardContentRow }, { children: [translate('resources.customers.name', 1), ":\u00A0", (0, jsx_runtime_1.jsx)(CustomerReferenceField_1.default, { record: data[id], basePath: basePath }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: classes.cardContentRow }, { children: [translate('resources.reviews.fields.date'), ":\u00A0", (0, jsx_runtime_1.jsx)(app_1.DateField, { record: data[id], source: "date", showTime: true }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: classes.cardContentRow }, { children: [translate('resources.commands.fields.basket.total'), ":\u00A0", (0, jsx_runtime_1.jsx)(app_1.NumberField, { record: data[id], source: "total", options: { style: 'currency', currency: 'USD' } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: classes.cardContentRow }, { children: [translate('resources.commands.fields.status'), ":\u00A0", (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "status", record: data[id] }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: classes.cardContentRow }, { children: [translate('resources.commands.fields.returned'), ":\u00A0", (0, jsx_runtime_1.jsx)(app_1.BooleanField, { record: data[id], source: "returned" }, void 0)] }), void 0)] }), void 0)] }), id))) }), void 0));
};
MobileGrid.defaultProps = {
    data: {},
    ids: [],
};
exports.default = MobileGrid;
