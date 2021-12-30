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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var types_1 = require("./types");
var PREFIX = 'RaFileField';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var Root = (0, styles_1.styled)('div')((_a = {},
    _a["&.".concat(classes.root)] = { display: 'inline-block' },
    _a));
var StyledList = (0, styles_1.styled)('ul')((_b = {},
    _b["&.".concat(classes.root)] = { display: 'inline-block' },
    _b));
/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from '../../app';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
var FileField = function (props) {
    var className = props.className, classesOverride = props.classes, emptyText = props.emptyText, source = props.source, title = props.title, src = props.src, target = props.target, download = props.download, ping = props.ping, rel = props.rel, rest = __rest(props, ["className", "classes", "emptyText", "source", "title", "src", "target", "download", "ping", "rel"]);
    var record = (0, core_1.useRecordContext)(props);
    var sourceValue = (0, get_1.default)(record, source);
    if (!sourceValue) {
        return emptyText ? (React.createElement(Typography_1.default, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest)), emptyText)) : (React.createElement(Root, __assign({ className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest))));
    }
    if (Array.isArray(sourceValue)) {
        return (React.createElement(StyledList, __assign({ className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest)), sourceValue.map(function (file, index) {
            var fileTitleValue = (0, get_1.default)(file, title) || title;
            var srcValue = (0, get_1.default)(file, src) || title;
            return (React.createElement("li", { key: index },
                React.createElement("a", { href: srcValue, title: fileTitleValue, target: target, download: download, ping: ping, rel: rel }, fileTitleValue)));
        })));
    }
    var titleValue = (0, get_1.default)(record, title) || title;
    return (React.createElement(Root, __assign({ className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest)),
        React.createElement("a", { href: sourceValue, title: titleValue, target: target, download: download, ping: ping, rel: rel }, titleValue)));
};
FileField.defaultProps = {
    addLabel: true,
};
FileField.propTypes = __assign(__assign({}, types_1.fieldPropTypes), { src: prop_types_1.default.string, title: prop_types_1.default.string, target: prop_types_1.default.string, download: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.string]), ping: prop_types_1.default.string, rel: prop_types_1.default.string });
exports.default = FileField;
