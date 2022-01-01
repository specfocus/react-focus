"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
// import cartouche from './cartouche.png';
// import cartoucheDark from './cartoucheDark.png';
const PREFIX = 'CardWithIcon';
const classes = {
    card: `${PREFIX}-card`,
    main: `${PREFIX}-main`,
    title: `${PREFIX}-title`,
};
const StyledCard = (0, styles_1.styled)(material_1.Card)(({ theme }) => ({
    [`&.${classes.card}`]: {
        minHeight: 52,
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        '& a': {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
    [`& .${classes.main}`]: (props) => ({
        overflow: 'inherit',
        padding: 16,
        /*
        background: `url(${
            theme.palette.mode === 'dark' ? cartoucheDark : cartouche
        }) no-repeat`,
        */
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .icon': {
            color: theme.palette.mode === 'dark' ? 'inherit' : '#dc2440',
        },
    }),
    [`& .${classes.title}`]: {},
}));
const CardWithIcon = (props) => {
    const { icon, title, subtitle, to, children } = props;
    return (
    // @ts-ignore
    (0, jsx_runtime_1.jsxs)(StyledCard, Object.assign({ className: classes.card }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: to }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.main }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ width: "3em", className: "icon" }, { children: (0, react_1.createElement)(icon, { fontSize: 'large' }) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ textAlign: "right" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ className: classes.title, color: "textSecondary" }, { children: title }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h5", component: "h2" }, { children: subtitle || ' ' }), void 0)] }), void 0)] }), void 0) }), void 0), children && (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), children] }), void 0));
};
exports.default = CardWithIcon;
