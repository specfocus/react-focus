"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Button_1 = __importDefault(require("@mui/material/Button"));
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const query_string_1 = require("query-string");
const products_1 = __importDefault(require("../products"));
const PREFIX = 'LinkToRelatedProducts';
const classes = {
    icon: `${PREFIX}-icon`,
    link: `${PREFIX}-link`,
};
const StyledButton = (0, styles_1.styled)(Button_1.default)({
    [`& .${classes.icon}`]: { paddingRight: '0.5em' },
    [`&.${classes.link}`]: {
        display: 'inline-flex',
        alignItems: 'center',
    },
});
const LinkToRelatedProducts = (props) => {
    const { record } = props;
    const translate = (0, app_1.useTranslate)();
    return record ? ((0, jsx_runtime_1.jsxs)(StyledButton, Object.assign({ size: "small", color: "primary", 
        // @ts-ignore
        component: react_router_dom_1.Link, to: {
            pathname: '/products',
            search: (0, query_string_1.stringify)({
                filter: JSON.stringify({ category_id: record.id }),
            }),
        }, className: classes.link }, { children: [(0, jsx_runtime_1.jsx)(products_1.default.icon, { className: classes.icon }, void 0), translate('resources.categories.fields.products')] }), void 0)) : null;
};
exports.default = LinkToRelatedProducts;
