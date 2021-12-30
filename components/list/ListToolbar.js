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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var filter_1 = require("./filter");
var FilterContext_1 = require("./FilterContext");
var PREFIX = 'RaListToolbar';
var classes = {
    toolbar: "".concat(PREFIX, "-toolbar"),
    actions: "".concat(PREFIX, "-actions"),
};
var Root = (0, styles_1.styled)(material_1.Toolbar)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.toolbar)] = (_c = {
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingRight: 0
            },
            _c[theme.breakpoints.up('xs')] = {
                paddingLeft: 0,
            },
            _c[theme.breakpoints.down('sm')] = {
                paddingLeft: theme.spacing(2),
                backgroundColor: theme.palette.background.paper,
            },
            _c),
        _b["& .".concat(classes.actions)] = (_d = {
                paddingTop: theme.spacing(3),
                minHeight: theme.spacing(5)
            },
            _d[theme.breakpoints.down('sm')] = {
                padding: theme.spacing(1),
                backgroundColor: theme.palette.background.paper,
            },
            _d),
        _b);
});
var ListToolbar = function (props) {
    var filters = props.filters, actions = props.actions, rest = __rest(props, ["filters", "actions"]);
    return Array.isArray(filters) ? (React.createElement(FilterContext_1.FilterContext.Provider, { value: filters },
        React.createElement(Root, { className: classes.toolbar },
            React.createElement(filter_1.FilterForm, null),
            React.createElement("span", null),
            actions &&
                React.cloneElement(actions, __assign(__assign(__assign({}, rest), { className: classes.actions }), actions.props))))) : (React.createElement(Root, { className: classes.toolbar },
        filters &&
            React.cloneElement(filters, __assign(__assign({}, rest), { context: 'form' })),
        React.createElement("span", null),
        actions &&
            React.cloneElement(actions, __assign(__assign(__assign({}, rest), { className: classes.actions, filters: filters }), actions.props))));
};
ListToolbar.propTypes = {
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    // @ts-ignore
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    // @ts-ignore
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
exports.default = React.memo(ListToolbar);
