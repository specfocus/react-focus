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
exports.getTabFullPath = exports.TabbedShowLayoutTabs = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Tabs_1 = __importDefault(require("@mui/material/Tabs"));
var react_router_dom_1 = require("react-router-dom");
var TabbedShowLayoutTabs = function (_a) {
    var children = _a.children, syncWithLocation = _a.syncWithLocation, value = _a.value, rest = __rest(_a, ["children", "syncWithLocation", "value"]);
    var location = (0, react_router_dom_1.useLocation)();
    var match = (0, react_router_dom_1.useRouteMatch)();
    // The location pathname will contain the page path including the current tab path
    // so we can use it as a way to determine the current tab
    var tabValue = location.pathname;
    return (React.createElement(Tabs_1.default, __assign({ indicatorColor: "primary", value: syncWithLocation ? tabValue : value }, rest), react_1.Children.map(children, function (tab, index) {
        if (!tab || !(0, react_1.isValidElement)(tab))
            return null;
        // Builds the full tab which is the concatenation of the last matched route in the
        // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
        // and the tab path.
        // This will be used as the Tab's value
        var tabPath = (0, exports.getTabFullPath)(tab, index, match.url);
        return (0, react_1.cloneElement)(tab, {
            context: 'header',
            value: syncWithLocation ? tabPath : index,
            syncWithLocation: syncWithLocation,
        });
    })));
};
exports.TabbedShowLayoutTabs = TabbedShowLayoutTabs;
var getTabFullPath = function (tab, index, baseUrl) {
    return "".concat(baseUrl).concat(tab.props.path ? "/".concat(tab.props.path) : index > 0 ? "/".concat(index) : '').replace('//', '/');
}; // Because baseUrl can be a single / when on the first tab
exports.getTabFullPath = getTabFullPath;
exports.TabbedShowLayoutTabs.propTypes = {
    children: prop_types_1.default.node,
};
