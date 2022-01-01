"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const inflection_1 = __importDefault(require("inflection"));
const material_1 = require("@mui/material");
const LinkToRelatedProducts_1 = __importDefault(require("./LinkToRelatedProducts"));
const PREFIX = 'CategoryList';
const classes = {
    root: `${PREFIX}-root`,
    media: `${PREFIX}-media`,
    title: `${PREFIX}-title`,
    actionSpacer: `${PREFIX}-actionSpacer`,
};
const StyledGrid = (0, styles_1.styled)(material_1.Grid)({
    [`&.${classes.root}`]: {
        marginTop: '1em',
    },
    [`& .${classes.media}`]: {
        height: 140,
    },
    [`& .${classes.title}`]: {
        paddingBottom: '0.5em',
    },
    [`& .${classes.actionSpacer}`]: {
        display: 'flex',
        justifyContent: 'space-around',
    },
});
const CategoryGrid = (props) => {
    const { data, ids } = (0, app_1.useListContext)();
    return ids ? ((0, jsx_runtime_1.jsx)(StyledGrid, Object.assign({ container: true, spacing: 2, className: classes.root }, { children: ids.map(id => ((0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ xs: 12, sm: 6, md: 4, lg: 3, xl: 2, item: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Card, { children: [(0, jsx_runtime_1.jsx)(material_1.CardMedia, { image: `https://marmelab.com/posters/${data[id].name}-1.jpeg`, className: classes.media }, void 0), (0, jsx_runtime_1.jsx)(material_1.CardContent, Object.assign({ className: classes.title }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h5", component: "h2", align: "center" }, { children: inflection_1.default.humanize(data[id].name) }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.CardActions, Object.assign({ classes: { spacing: classes.actionSpacer } }, { children: [(0, jsx_runtime_1.jsx)(LinkToRelatedProducts_1.default, { record: data[id] }, void 0), (0, jsx_runtime_1.jsx)(app_1.EditButton, { basePath: "/categories", record: data[id] }, void 0)] }), void 0)] }, void 0) }), id))) }), void 0)) : null;
};
const CategoryList = (props) => ((0, jsx_runtime_1.jsx)(app_1.List, Object.assign({}, props, { sort: { field: 'name', order: 'ASC' }, perPage: 20, pagination: false, component: "div", actions: false }, { children: (0, jsx_runtime_1.jsx)(CategoryGrid, {}, void 0) }), void 0));
exports.default = CategoryList;
