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
var prop_types_1 = __importDefault(require("prop-types"));
var RemoveRedEye_1 = __importDefault(require("@mui/icons-material/RemoveRedEye"));
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../core");
var Button_1 = __importDefault(require("./Button"));
/**
 * Opens the Show view of a given record
 *
 * @example // basic usage
 * import { ShowButton } from '../../app';
 *
 * const CommentShowButton = ({ record }) => (
 *     <ShowButton basePath="/comments" label="Show comment" record={record} />
 * );
 */
var ShowButton = function (props) {
    var _a = props.basePath, basePath = _a === void 0 ? '' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, _c = props.label, label = _c === void 0 ? 'ra.action.show' : _c, record = props.record, _d = props.scrollToTop, scrollToTop = _d === void 0 ? true : _d, rest = __rest(props, ["basePath", "icon", "label", "record", "scrollToTop"]);
    var resource = (0, core_1.useResourceContext)();
    return (React.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: (0, react_1.useMemo)(function () { return ({
            pathname: record
                ? "".concat((0, core_1.linkToRecord)(basePath || "/".concat(resource), record.id), "/show")
                : '',
            state: { _scrollToTop: scrollToTop },
        }); }, [basePath, record, resource, scrollToTop]), label: label, onClick: stopPropagation }, rest), icon));
};
var defaultIcon = React.createElement(RemoveRedEye_1.default, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
ShowButton.propTypes = {
    basePath: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
    scrollToTop: prop_types_1.default.bool,
};
var PureShowButton = (0, react_1.memo)(ShowButton, function (props, nextProps) {
    return (props.record && nextProps.record
        ? props.record.id === nextProps.record.id
        : props.record == nextProps.record) && // eslint-disable-line eqeqeq
        props.basePath === nextProps.basePath &&
        props.to === nextProps.to &&
        props.disabled === nextProps.disabled;
});
exports.default = PureShowButton;