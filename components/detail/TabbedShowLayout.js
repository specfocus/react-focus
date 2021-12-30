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
exports.TabbedShowLayout = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var core_1 = require("../../core");
var TabbedShowLayoutTabs_1 = require("./TabbedShowLayoutTabs");
var PREFIX = 'RaTabbedShowLayout';
var classes = {
    content: "".concat(PREFIX, "-content"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.content)] = {
            paddingTop: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        _b);
});
var sanitizeRestProps = function (_a) {
    var children = _a.children, className = _a.className, record = _a.record, resource = _a.resource, basePath = _a.basePath, version = _a.version, initialValues = _a.initialValues, staticContext = _a.staticContext, translate = _a.translate, tabs = _a.tabs, rest = __rest(_a, ["children", "className", "record", "resource", "basePath", "version", "initialValues", "staticContext", "translate", "tabs"]);
    return rest;
};
/**
 * Tabbed Layout for a Show view, showing fields grouped in tabs.
 *
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its children. Children should be Tab components.
 * The component passed as `tabs` props replaces the default material-ui's <Tabs> component.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import { Show, TabbedShowLayout, Tab, TextField } from '../../app';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content">
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata">
 *                     <TextField source="category" />
 *                </Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from '../../app';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
var TabbedShowLayout = function (props) {
    var basePath = props.basePath, children = props.children, className = props.className, record = props.record, resource = props.resource, _a = props.syncWithLocation, syncWithLocation = _a === void 0 ? true : _a, tabs = props.tabs, value = props.value, version = props.version, rest = __rest(props, ["basePath", "children", "className", "record", "resource", "syncWithLocation", "tabs", "value", "version"]);
    var match = (0, react_router_dom_2.useRouteMatch)();
    var nonNullChildren = react_1.Children.toArray(children).filter(function (child) { return child !== null; });
    var _b = (0, react_1.useState)(0), tabValue = _b[0], setTabValue = _b[1];
    var handleTabChange = function (event, value) {
        if (!syncWithLocation) {
            setTabValue(value);
        }
    };
    return (React.createElement(Root, __assign({ className: className, key: version }, sanitizeRestProps(rest)),
        (0, react_1.cloneElement)(tabs, {
            syncWithLocation: syncWithLocation,
            onChange: handleTabChange,
            value: tabValue,
        }, nonNullChildren),
        React.createElement(material_1.Divider, null),
        React.createElement("div", { className: classes.content }, react_1.Children.map(nonNullChildren, function (tab, index) {
            return tab && (0, react_1.isValidElement)(tab) ? (syncWithLocation ? (React.createElement(react_router_dom_1.Route, { exact: true, path: (0, core_1.escapePath)((0, TabbedShowLayoutTabs_1.getTabFullPath)(tab, index, match.url)), render: function () {
                    return (0, react_1.cloneElement)(tab, {
                        context: 'content',
                        resource: resource,
                        record: record,
                        basePath: basePath,
                    });
                } })) : tabValue === index ? ((0, react_1.cloneElement)(tab, {
                context: 'content',
                resource: resource,
                record: record,
                basePath: basePath,
            })) : null) : null;
        }))));
};
exports.TabbedShowLayout = TabbedShowLayout;
exports.TabbedShowLayout.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    location: prop_types_1.default.object,
    match: prop_types_1.default.object,
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    syncWithLocation: prop_types_1.default.bool,
    tabs: prop_types_1.default.element,
    value: prop_types_1.default.number,
    version: prop_types_1.default.number,
};
exports.TabbedShowLayout.defaultProps = {
    tabs: React.createElement(TabbedShowLayoutTabs_1.TabbedShowLayoutTabs, null),
};
