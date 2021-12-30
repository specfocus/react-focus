"use strict";
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
var AppContext_1 = __importDefault(require("./AppContext"));
var AppUI_1 = __importDefault(require("./AppUI"));
/**
 * Main admin component, entry point to the application.
 *
 * Initializes the various contexts (auth, data, i18n, redux, router)
 * and defines the main routes.
 *
 * Expects a list of resources as children, or a function returning a list of
 * resources based on the permissions.
 *
 * @example
 *
 * // static list of resources
 *
 * import {
 *     Admin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../app';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Admin>
 * );
 *
 * // dynamic list of resources based on permissions
 *
 * import {
 *     Admin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../app';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         {permissions => [
 *             <Resource name="posts" key="posts" list={ListGuesser} />,
 *         ]}
 *     </Admin>
 * );
 *
 * // If you have to build a dynamic list of resources using a side effect,
 * // you can't use <Admin>. But as it delegates to sub components,
 * // it's relatively straightforward to replace it:
 *
 * import * as React from 'react';
import { useEffect, useState } from 'react';
 * import {
 *     AppContext,
 *     AppUI,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from '../app';
 *
 * const App = () => (
 *     <AppContext dataProvider={myDataProvider}>
 *         <Resources />
 *     </AppContext>
 * );
 *
 * const Resources = () => {
 *     const [resources, setResources] = useState([]);
 *     const dataProvider = useDataProvider();
 *     useEffect(() => {
 *         dataProvider.introspect().then(r => setResources(r));
 *     }, []);
 *
 *     return (
 *         <AppUI>
 *             {resources.map(resource => (
 *                 <Resource name={resource.name} key={resource.key} list={ListGuesser} />
 *             ))}
 *         </AppUI>
 *     );
 * };
 */
var Admin = function (props) {
    var appLayout = props.appLayout, authProvider = props.authProvider, catchAll = props.catchAll, children = props.children, customReducers = props.customReducers, _a = props.customRoutes, customRoutes = _a === void 0 ? [] : _a, customSagas = props.customSagas, dashboard = props.dashboard, dataProvider = props.dataProvider, disableTelemetry = props.disableTelemetry, history = props.history, i18nProvider = props.i18nProvider, initialState = props.initialState, layout = props.layout, loading = props.loading, locale = props.locale, loginPage = props.loginPage, logoutButton = props.logoutButton, menu = props.menu, // deprecated, use a custom layout instead
    ready = props.ready, theme = props.theme, _b = props.title, title = _b === void 0 ? 'React Admin' : _b;
    if (appLayout && process.env.NODE_ENV !== 'production') {
        console.warn('You are using deprecated prop "appLayout", it was replaced by "layout", see https://github.com/marmelab/../../app/issues/2918');
    }
    if (loginPage === true && process.env.NODE_ENV !== 'production') {
        console.warn('You passed true to the loginPage prop. You must either pass false to disable it or a component class to customize it');
    }
    if (locale && process.env.NODE_ENV !== 'production') {
        console.warn('You are using deprecated prop "locale". You must now pass the initial locale to your i18nProvider');
    }
    return (React.createElement(AppContext_1.default, { authProvider: authProvider, dataProvider: dataProvider, i18nProvider: i18nProvider, history: history, customReducers: customReducers, customSagas: customSagas, initialState: initialState },
        React.createElement(AppUI_1.default, { layout: appLayout || layout, customRoutes: customRoutes, dashboard: dashboard, disableTelemetry: disableTelemetry, menu: menu, catchAll: catchAll, theme: theme, title: title, loading: loading, loginPage: loginPage, logout: authProvider ? logoutButton : undefined, ready: ready }, children)));
};
exports.default = Admin;