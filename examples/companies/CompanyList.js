"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyList = void 0;
var styles_1 = require("@mui/styles");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var layout_1 = require("../../components/layout");
var CompanyListFilter_1 = require("./CompanyListFilter");
var GridList_1 = require("./GridList");
var CompanyList = function (props) {
    var identity = (0, app_1.useGetIdentity)().identity;
    return identity ? (React.createElement(app_1.List, __assign({}, props, { actions: React.createElement(CompanyListActions, null), aside: React.createElement(CompanyListFilter_1.CompanyListFilter, null), filterDefaultValues: { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, pagination: React.createElement(app_1.Pagination, { rowsPerPageOptions: [15, 25, 50, 100] }), perPage: 25, sort: { field: 'name', order: 'ASC' }, component: "div" }),
        React.createElement(GridList_1.GridList, null))) : null;
};
exports.CompanyList = CompanyList;
var useActionStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    createButton: {
        marginLeft: theme.spacing(2),
    },
}); });
var CompanyListActions = function (props) {
    var classes = useActionStyles();
    return (React.createElement(layout_1.TopToolbar, null,
        React.createElement(app_1.ExportButton, null),
        React.createElement(app_1.CreateButton, { basePath: "/companies", variant: "contained", label: "New Company", className: classes.createButton })));
};
