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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var List_1 = __importDefault(require("@mui/material/List"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemSecondaryAction_1 = __importDefault(require("@mui/material/ListItemSecondaryAction"));
var ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var PREFIX = 'PendingOrders';
var classes = {
    root: "".concat(PREFIX, "-root"),
    cost: "".concat(PREFIX, "-cost"),
};
var StyledCard = (0, styles_1.styled)(Card_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            flex: 1,
        },
        _b["& .".concat(classes.cost)] = {
            marginRight: '1em',
            color: theme.palette.text.primary,
        },
        _b);
});
var PendingOrders = function (props) {
    var _a = props.orders, orders = _a === void 0 ? [] : _a, _b = props.customers, customers = _b === void 0 ? {} : _b;
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(StyledCard, { className: classes.root },
        React.createElement(CardHeader_1.default, { title: translate('pos.dashboard.pending_orders') }),
        React.createElement(List_1.default, { dense: true }, orders.map(function (record) { return (React.createElement(ListItem_1.default, { key: record.id, button: true, component: react_router_dom_1.Link, to: "/commands/".concat(record.id) },
            React.createElement(ListItemAvatar_1.default, null, customers[record.customer_id] ? (React.createElement(Avatar_1.default, { src: "".concat(customers[record.customer_id].avatar, "?size=32x32") })) : (React.createElement(Avatar_1.default, null))),
            React.createElement(ListItemText_1.default, { primary: new Date(record.date).toLocaleString('en-GB'), secondary: translate('pos.dashboard.order.items', {
                    smart_count: record.basket.length,
                    nb_items: record.basket.length,
                    customer_name: customers[record.customer_id]
                        ? "".concat(customers[record.customer_id]
                            .first_name, " ").concat(customers[record.customer_id]
                            .last_name)
                        : '',
                }) }),
            React.createElement(ListItemSecondaryAction_1.default, null,
                React.createElement("span", { className: classes.cost },
                    record.total,
                    "$")))); }))));
};
exports.default = PendingOrders;
