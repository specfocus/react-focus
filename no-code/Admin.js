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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
var react_1 = __importDefault(require("react"));
var app_1 = require("../app");
var local_storage_1 = __importDefault(require("../local-storage"));
var builders_1 = require("./builders");
var ResourceConfiguration_1 = require("./ResourceConfiguration");
var ui_1 = require("./ui");
var react_router_1 = require("react-router");
var ApplicationContext_1 = require("./ApplicationContext");
var customRoutes = [
    react_1.default.createElement(react_router_1.Route, { path: "/configure/:resource", render: function (_a) {
            var match = _a.match;
            return (react_1.default.createElement(ResourceConfiguration_1.ResourceConfigurationPage, { resource: match.params.resource }));
        } }),
];
var Admin = function (props) {
    var application = (0, ApplicationContext_1.useApplication)().application;
    if (!application) {
        return null;
    }
    var dataProvider = (0, local_storage_1.default)({
        localStorageKey: "@@ra-no-code/".concat(application.name, "/data"),
    });
    return (react_1.default.createElement(ResourceConfiguration_1.ResourceConfigurationProvider, { dataProvider: dataProvider, storageKey: "@@ra-no-code/".concat(application.name) },
        react_1.default.createElement(InnerAdmin, __assign({}, props, { title: application.name, dataProvider: dataProvider }))));
};
exports.Admin = Admin;
var InnerAdmin = function (props) {
    var resources = (0, ResourceConfiguration_1.useResourcesConfiguration)()[0];
    var hasResources = !!resources && Object.keys(resources).length > 0;
    return (react_1.default.createElement(app_1.AutoApp, __assign({ ready: ui_1.Ready, layout: ui_1.Layout, customRoutes: customRoutes }, props), hasResources
        ? Object.keys(resources).map(function (resource) { return (react_1.default.createElement(app_1.Resource, { key: resource, name: resource, options: { label: resources[resource].label }, list: builders_1.List, edit: builders_1.Edit, create: builders_1.Create, show: builders_1.Show })); })
        : undefined));
};
