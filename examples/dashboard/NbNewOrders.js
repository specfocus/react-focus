"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ShoppingCart_1 = __importDefault(require("@mui/icons-material/ShoppingCart"));
const app_1 = require("../../app");
const CardWithIcon_1 = __importDefault(require("./CardWithIcon"));
const NbNewOrders = (props) => {
    const { value } = props;
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(CardWithIcon_1.default, { to: "/commands", icon: ShoppingCart_1.default, title: translate('pos.dashboard.new_orders'), subtitle: value }, void 0));
};
exports.default = NbNewOrders;
