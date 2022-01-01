"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const react_router_1 = require("react-router");
const app_1 = require("../../app");
const layout_1 = require("../../components/layout");
const DealCreate_1 = require("./DealCreate");
const DealListContent_1 = require("./DealListContent");
const DealShow_1 = require("./DealShow");
const OnlyMineInput_1 = require("./OnlyMineInput");
const types_1 = require("./types");
const DealList = (props) => {
    const { identity } = (0, app_1.useGetIdentity)();
    return identity ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(app_1.List, Object.assign({}, props, { perPage: 100, sort: { field: 'index', order: 'ASC' }, filters: dealFilters, filterDefaultValues: { sales_id: identity && (identity === null || identity === void 0 ? void 0 : identity.id) }, actions: (0, jsx_runtime_1.jsx)(DealActions, {}, void 0), pagination: false, component: "div" }, { children: (0, jsx_runtime_1.jsx)(DealListContent_1.DealListContent, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_1.Route, Object.assign({ path: "/deals/create" }, { children: ({ match }) => (0, jsx_runtime_1.jsx)(DealCreate_1.DealCreate, { open: !!match }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_1.Route, Object.assign({ path: "/deals/:id/show" }, { children: ({ match }) => {
                    var _a;
                    return !!match ? ((0, jsx_runtime_1.jsx)(DealShow_1.DealShow, { open: !!match, id: (_a = match === null || match === void 0 ? void 0 : match.params) === null || _a === void 0 ? void 0 : _a.id }, void 0)) : null;
                } }), void 0)] }, void 0)) : null;
};
exports.DealList = DealList;
const dealFilters = [
    (0, jsx_runtime_1.jsx)(app_1.SearchInput, { source: "q", alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(OnlyMineInput_1.OnlyMineInput, { alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "type", choices: types_1.typeChoices }, void 0),
];
const useActionStyles = (0, styles_1.makeStyles)((theme) => ({
    createButton: {
        marginLeft: theme.spacing(2),
    },
}));
const DealActions = () => {
    const classes = useActionStyles();
    return ((0, jsx_runtime_1.jsxs)(layout_1.TopToolbar, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterButton, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.ExportButton, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.CreateButton, { basePath: "/deals", variant: "contained", label: "New Deal", className: classes.createButton }, void 0)] }, void 0));
};
