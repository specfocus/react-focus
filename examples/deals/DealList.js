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
exports.DealList = void 0;
var styles_1 = require("@mui/styles");
var React = __importStar(require("react"));
var react_router_1 = require("react-router");
var app_1 = require("../../app");
var layout_1 = require("../../components/layout");
var DealCreate_1 = require("./DealCreate");
var DealListContent_1 = require("./DealListContent");
var DealShow_1 = require("./DealShow");
var OnlyMineInput_1 = require("./OnlyMineInput");
var types_1 = require("./types");
var DealList = function (props) {
    var identity = (0, app_1.useGetIdentity)().identity;
    return identity ? (React.createElement(React.Fragment, null,
        React.createElement(app_1.List, __assign({}, props, { perPage: 100, sort: { field: 'index', order: 'ASC' }, filters: dealFilters, filterDefaultValues: { sales_id: identity && (identity === null || identity === void 0 ? void 0 : identity.id) }, actions: React.createElement(DealActions, null), pagination: false, component: "div" }),
            React.createElement(DealListContent_1.DealListContent, null)),
        React.createElement(react_router_1.Route, { path: "/deals/create" }, function (_a) {
            var match = _a.match;
            return React.createElement(DealCreate_1.DealCreate, { open: !!match });
        }),
        React.createElement(react_router_1.Route, { path: "/deals/:id/show" }, function (_a) {
            var _b;
            var match = _a.match;
            return !!match ? (React.createElement(DealShow_1.DealShow, { open: !!match, id: (_b = match === null || match === void 0 ? void 0 : match.params) === null || _b === void 0 ? void 0 : _b.id })) : null;
        }))) : null;
};
exports.DealList = DealList;
var dealFilters = [
    React.createElement(app_1.SearchInput, { source: "q", alwaysOn: true }),
    React.createElement(OnlyMineInput_1.OnlyMineInput, { alwaysOn: true }),
    React.createElement(app_1.SelectInput, { source: "type", choices: types_1.typeChoices }),
];
var useActionStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    createButton: {
        marginLeft: theme.spacing(2),
    },
}); });
var DealActions = function () {
    var classes = useActionStyles();
    return (React.createElement(layout_1.TopToolbar, null,
        React.createElement(app_1.FilterButton, null),
        React.createElement(app_1.ExportButton, null),
        React.createElement(app_1.CreateButton, { basePath: "/deals", variant: "contained", label: "New Deal", className: classes.createButton })));
};
