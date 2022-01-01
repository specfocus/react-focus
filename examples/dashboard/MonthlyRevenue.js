"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AttachMoney_1 = __importDefault(require("@mui/icons-material/AttachMoney"));
const app_1 = require("../../app");
const CardWithIcon_1 = __importDefault(require("./CardWithIcon"));
const MonthlyRevenue = (props) => {
    const { value } = props;
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(CardWithIcon_1.default, { to: "/commands", icon: AttachMoney_1.default, title: translate('pos.dashboard.monthly_revenue'), subtitle: value }, void 0));
};
exports.default = MonthlyRevenue;
