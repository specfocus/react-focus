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
var prop_types_1 = __importDefault(require("prop-types"));
var List_1 = __importDefault(require("@mui/icons-material/List"));
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../core");
var Button_1 = __importDefault(require("./Button"));
/**
 * Opens the List view of a given resource
 *
 * @example // basic usage
 * import { ListButton } from '../../app';
 *
 * const CommentListButton = () => (
 *     <ListButton basePath="/comments" label="Comments" />
 * );
 *
 * @example // linking back to the list from the Edit view
 * import { TopToolbar, ListButton, ShowButton, Edit } from '../../app';
 *
 * const PostEditActions = ({ basePath, record, resource }) => (
 *     <TopToolbar>
 *         <ListButton basePath={basePath} />
 *         <ShowButton basePath={basePath} record={record} />
 *     </TopToolbar>
 * );
 *
 * export const PostEdit = (props) => (
 *     <Edit actions={<PostEditActions />} {...props}>
 *         ...
 *     </Edit>
 * );
 */
var ListButton = function (props) {
    var _a = props.basePath, basePath = _a === void 0 ? '' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, _c = props.label, label = _c === void 0 ? 'ra.action.list' : _c, rest = __rest(props, ["basePath", "icon", "label"]);
    var resource = (0, core_1.useResourceContext)();
    return (React.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: basePath || "/".concat(resource), label: label }, rest), icon));
};
var defaultIcon = React.createElement(List_1.default, null);
ListButton.propTypes = {
    basePath: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
};
exports.default = ListButton;
