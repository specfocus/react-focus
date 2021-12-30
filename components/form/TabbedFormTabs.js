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
exports.getTabFullPath = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Tabs_1 = __importDefault(require("@mui/material/Tabs"));
var react_router_dom_1 = require("react-router-dom");
var TabbedFormTabs = function (props) {
    var children = props.children, classes = props.classes, url = props.url, syncWithLocation = props.syncWithLocation, value = props.value, rest = __rest(props, ["children", "classes", "url", "syncWithLocation", "value"]);
    var location = (0, react_router_dom_1.useLocation)();
    var validTabPaths = react_1.Children.map(children, function (tab, index) {
        if (!(0, react_1.isValidElement)(tab))
            return undefined;
        return (0, exports.getTabFullPath)(tab, index, url);
    });
    // This ensures we don't get warnings from material-ui Tabs component when
    // the current location pathname targets a dynamically added Tab
    // In the case the targeted Tab is not present at first render (when
    // using permissions for example) we temporarily switch to the first
    // available tab. The current location will be applied again on the
    // first render containing the targeted tab. This is almost transparent
    // for the user who may just see a short tab selection animation
    var tabValue = validTabPaths.includes(location.pathname)
        ? location.pathname
        : validTabPaths[0];
    return (React.createElement(Tabs_1.default, __assign({ value: syncWithLocation ? tabValue : value, indicatorColor: "primary" }, rest), react_1.Children.map(children, function (tab, index) {
        if (!(0, react_1.isValidElement)(tab))
            return null;
        // Builds the full tab which is the concatenation of the last matched route in the
        // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
        // and the tab path.
        // This will be used as the Tab's value
        var tabPath = (0, exports.getTabFullPath)(tab, index, url);
        return (0, react_1.cloneElement)(tab, {
            intent: 'header',
            value: syncWithLocation ? tabPath : index,
            classes: classes,
            syncWithLocation: syncWithLocation,
        });
    })));
};
TabbedFormTabs.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    url: prop_types_1.default.string,
    tabsWithErrors: prop_types_1.default.arrayOf(prop_types_1.default.string),
};
var getTabFullPath = function (tab, index, baseUrl) {
    return "".concat(baseUrl).concat(tab.props.path ? "/".concat(tab.props.path) : index > 0 ? "/".concat(index) : '').replace('//', '/');
}; // Because baseUrl can be a single / when on the first tab
exports.getTabFullPath = getTabFullPath;
exports.default = TabbedFormTabs;
