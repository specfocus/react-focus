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
exports.Show = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("../../core");
var ShowView_1 = require("./ShowView");
/**
 * Page component for the Show view
 *
 * The `<Show>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleShowLayout>`),
 * to which it passes the `record` as prop.
 *
 * The <Show> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - title
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Show, SimpleShowLayout, TextField } from '../../app';
 *
 * export const PostShow = (props) => (
 *     <Show {...props}>
 *         <SimpleShowLayout>
 *             <TextField source="title" />
 *         </SimpleShowLayout>
 *     </Show>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from '../../app';
 *
 * import { PostShow } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" show={PostShow} />
 *     </Admin>
 * );
 * export default App;
 */
var Show = function (props) {
    (0, core_1.useCheckMinimumRequiredProps)('Show', ['children'], props);
    var controllerProps = (0, core_1.useShowController)(props);
    var body = (React.createElement(core_1.ShowContextProvider, { value: controllerProps },
        React.createElement(ShowView_1.ShowView, __assign({}, props, controllerProps))));
    return props.resource ? (
    // support resource override via props
    React.createElement(core_1.ResourceContextProvider, { value: props.resource }, body)) : (body);
};
exports.Show = Show;
exports.Show.propTypes = {
    actions: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    aside: prop_types_1.default.element,
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    id: prop_types_1.default.any.isRequired,
    resource: prop_types_1.default.string,
    title: prop_types_1.default.node,
};
