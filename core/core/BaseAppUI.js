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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var BaseAppRouter_1 = __importDefault(require("./BaseAppRouter"));
var util_1 = require("../util");
var DefaultLayout = function (_a) {
    var children = _a.children;
    return React.createElement(React.Fragment, null, children);
};
var BaseAppUI = function (props) {
    var _a = props.catchAll, catchAll = _a === void 0 ? Noop : _a, children = props.children, _b = props.customRoutes, customRoutes = _b === void 0 ? [] : _b, dashboard = props.dashboard, _c = props.disableTelemetry, disableTelemetry = _c === void 0 ? false : _c, _d = props.layout, layout = _d === void 0 ? DefaultLayout : _d, _e = props.loading, loading = _e === void 0 ? Noop : _e, _f = props.loginPage, loginPage = _f === void 0 ? false : _f, logout = props.logout, menu = props.menu, // deprecated, use a custom layout instead
    _g = props.ready, // deprecated, use a custom layout instead
    ready = _g === void 0 ? util_1.Ready : _g, theme = props.theme, _h = props.title, title = _h === void 0 ? 'React Admin' : _h;
    var logoutElement = (0, react_1.useMemo)(function () { return logout && (0, react_1.createElement)(logout); }, [
        logout,
    ]);
    (0, react_1.useEffect)(function () {
        if (disableTelemetry ||
            process.env.NODE_ENV !== 'production' ||
            typeof window === 'undefined' ||
            typeof window.location === 'undefined' ||
            typeof Image === 'undefined') {
            return;
        }
        var img = new Image();
        img.src = "https://../../app-telemetry.marmelab.com/../../app-telemetry?domain=".concat(window.location.hostname);
    }, [disableTelemetry]);
    return (React.createElement(react_router_dom_1.Switch, null,
        loginPage !== false && loginPage !== true ? (React.createElement(react_router_dom_1.Route, { exact: true, path: "/login", render: function (props) {
                return (0, react_1.createElement)(loginPage, __assign(__assign({}, props), { title: title, theme: theme }));
            } })) : null,
        React.createElement(react_router_dom_1.Route, { path: "/", render: function (props) { return (React.createElement(BaseAppRouter_1.default, __assign({ catchAll: catchAll, customRoutes: customRoutes, dashboard: dashboard, layout: layout, loading: loading, logout: logoutElement, menu: menu, ready: ready, theme: theme, title: title }, props), children)); } })));
};
var Noop = function () { return null; };
exports.default = BaseAppUI;