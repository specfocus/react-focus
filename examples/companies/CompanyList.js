"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const app_1 = require("../../app");
const layout_1 = require("../../components/layout");
const CompanyListFilter_1 = require("./CompanyListFilter");
const GridList_1 = require("./GridList");
const CompanyList = (props) => {
    const { identity } = (0, app_1.useGetIdentity)();
    return identity ? ((0, jsx_runtime_1.jsx)(app_1.List, Object.assign({}, props, { actions: (0, jsx_runtime_1.jsx)(CompanyListActions, {}, void 0), aside: (0, jsx_runtime_1.jsx)(CompanyListFilter_1.CompanyListFilter, {}, void 0), filterDefaultValues: { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, pagination: (0, jsx_runtime_1.jsx)(app_1.Pagination, { rowsPerPageOptions: [15, 25, 50, 100] }, void 0), perPage: 25, sort: { field: 'name', order: 'ASC' }, component: "div" }, { children: (0, jsx_runtime_1.jsx)(GridList_1.GridList, {}, void 0) }), void 0)) : null;
};
exports.CompanyList = CompanyList;
const useActionStyles = (0, styles_1.makeStyles)((theme) => ({
    createButton: {
        marginLeft: theme.spacing(2),
    },
}));
const CompanyListActions = (props) => {
    const classes = useActionStyles();
    return ((0, jsx_runtime_1.jsxs)(layout_1.TopToolbar, { children: [(0, jsx_runtime_1.jsx)(app_1.ExportButton, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.CreateButton, { basePath: "/companies", variant: "contained", label: "New Company", className: classes.createButton }, void 0)] }, void 0));
};
