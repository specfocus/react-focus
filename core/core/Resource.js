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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var WithPermissions_1 = __importDefault(require("../auth/WithPermissions"));
var actions_1 = require("../actions");
var ResourceContextProvider_1 = require("./ResourceContextProvider");
var defaultOptions = {};
var ResourceRegister = function (props) {
    var name = props.name, list = props.list, create = props.create, edit = props.edit, show = props.show, icon = props.icon, _a = props.options, options = _a === void 0 ? defaultOptions : _a;
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, actions_1.registerResource)({
            name: name,
            options: options,
            hasList: !!list,
            hasEdit: !!edit,
            hasShow: !!show,
            hasCreate: !!create,
            icon: icon,
        }));
        return function () {
            console.log('UNREGISTER_RESOURCE', name);
            dispatch((0, actions_1.unregisterResource)(name));
        };
    }, [dispatch, name, create, edit, icon, list, show, options]);
    return null;
};
var ResourceRoutes = function (props) {
    var name = props.name, match = props.match, list = props.list, create = props.create, edit = props.edit, show = props.show, _a = props.options, options = _a === void 0 ? defaultOptions : _a;
    var isRegistered = (0, react_redux_1.useSelector)(function (state) {
        return !!state.admin.resources[name];
    });
    var basePath = match ? match.path : '';
    var resourceData = (0, react_1.useMemo)(function () { return ({
        resource: name,
        options: options,
        hasList: !!list,
        hasEdit: !!edit,
        hasShow: !!show,
        hasCreate: !!create,
    }); }, [name, options, create, edit, list, show]);
    // match tends to change even on the same route ; using memo to avoid an extra render
    return (0, react_1.useMemo)(function () {
        // if the registration hasn't finished, no need to render
        if (!isRegistered) {
            console.log("if ".concat(name, " registration hasn't finished, no need to render"));
            return null;
        }
        return (React.createElement(ResourceContextProvider_1.ResourceContextProvider, { value: name },
            React.createElement(react_router_dom_1.Switch, null,
                create && (React.createElement(react_router_dom_1.Route, { path: "".concat(basePath, "/create"), render: function (routeProps) { return (React.createElement(WithPermissions_1.default, __assign({ component: create, basePath: basePath }, routeProps, resourceData))); } })),
                show && (React.createElement(react_router_dom_1.Route, { path: "".concat(basePath, "/:id/show"), render: function (routeProps) { return (React.createElement(WithPermissions_1.default, __assign({ component: show, basePath: basePath, id: decodeURIComponent(routeProps.match
                            .params.id) }, routeProps, resourceData))); } })),
                edit && (React.createElement(react_router_dom_1.Route, { path: "".concat(basePath, "/:id"), render: function (routeProps) { return (React.createElement(WithPermissions_1.default, __assign({ component: edit, basePath: basePath, id: decodeURIComponent(routeProps.match
                            .params.id) }, routeProps, resourceData))); } })),
                list && (React.createElement(react_router_dom_1.Route, { path: "".concat(basePath), render: function (routeProps) { return (React.createElement(WithPermissions_1.default, __assign({ component: list, basePath: basePath }, routeProps, resourceData, { syncWithLocation: true }))); } })))));
    }, [basePath, name, create, edit, list, show, options, isRegistered]); // eslint-disable-line react-hooks/exhaustive-deps
};
var Resource = function (props) {
    var _a = props.intent, intent = _a === void 0 ? 'route' : _a, rest = __rest(props, ["intent"]);
    return intent === 'registration' ? (React.createElement(ResourceRegister, __assign({}, rest))) : (React.createElement(ResourceRoutes, __assign({}, rest)));
};
exports.default = Resource;
