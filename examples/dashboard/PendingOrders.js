"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemSecondaryAction_1 = __importDefault(require("@mui/material/ListItemSecondaryAction"));
const ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const PREFIX = 'PendingOrders';
const classes = {
    root: `${PREFIX}-root`,
    cost: `${PREFIX}-cost`,
};
const StyledCard = (0, styles_1.styled)(Card_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {
        flex: 1,
    },
    [`& .${classes.cost}`]: {
        marginRight: '1em',
        color: theme.palette.text.primary,
    },
}));
const PendingOrders = (props) => {
    const { orders = [], customers = {} } = props;
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsxs)(StyledCard, Object.assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: translate('pos.dashboard.pending_orders') }, void 0), (0, jsx_runtime_1.jsx)(List_1.default, Object.assign({ dense: true }, { children: orders.map(record => ((0, jsx_runtime_1.jsxs)(ListItem_1.default, Object.assign({ button: true, component: react_router_dom_1.Link, to: `/commands/${record.id}` }, { children: [(0, jsx_runtime_1.jsx)(ListItemAvatar_1.default, { children: customers[record.customer_id] ? ((0, jsx_runtime_1.jsx)(Avatar_1.default, { src: `${customers[record.customer_id].avatar}?size=32x32` }, void 0)) : ((0, jsx_runtime_1.jsx)(Avatar_1.default, {}, void 0)) }, void 0), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: new Date(record.date).toLocaleString('en-GB'), secondary: translate('pos.dashboard.order.items', {
                                smart_count: record.basket.length,
                                nb_items: record.basket.length,
                                customer_name: customers[record.customer_id]
                                    ? `${customers[record.customer_id]
                                        .first_name} ${customers[record.customer_id]
                                        .last_name}`
                                    : '',
                            }) }, void 0), (0, jsx_runtime_1.jsx)(ListItemSecondaryAction_1.default, { children: (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: classes.cost }, { children: [record.total, "$"] }), void 0) }, void 0)] }), record.id))) }), void 0)] }), void 0));
};
exports.default = PendingOrders;
