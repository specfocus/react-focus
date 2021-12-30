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
exports.FormTab = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("../../core");
var FormInput_1 = __importDefault(require("./FormInput"));
var FormTabHeader_1 = require("./FormTabHeader");
var hiddenStyle = { display: 'none' };
var FormTab = function (props) {
    var basePath = props.basePath, className = props.className, contentClassName = props.contentClassName, children = props.children, hidden = props.hidden, icon = props.icon, intent = props.intent, label = props.label, margin = props.margin, path = props.path, record = props.record, resource = props.resource, variant = props.variant, value = props.value, rest = __rest(props, ["basePath", "className", "contentClassName", "children", "hidden", "icon", "intent", "label", "margin", "path", "record", "resource", "variant", "value"]);
    var renderHeader = function () { return (React.createElement(FormTabHeader_1.FormTabHeader, __assign({ label: label, value: value, icon: icon, className: className }, rest))); };
    var renderContent = function () { return (React.createElement(core_1.FormGroupContextProvider, { name: value.toString() },
        React.createElement("span", { style: hidden ? hiddenStyle : null, className: contentClassName, id: "tabpanel-".concat(value), "aria-labelledby": "tabheader-".concat(value), "aria-hidden": hidden || undefined }, React.Children.map(children, function (input) {
            return input && (React.createElement(FormInput_1.default, { basePath: basePath, input: input, record: record, resource: resource, variant: input.props.variant || variant, margin: input.props.margin || margin }));
        })))); };
    return intent === 'header' ? renderHeader() : renderContent();
};
exports.FormTab = FormTab;
exports.FormTab.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    children: prop_types_1.default.node,
    intent: prop_types_1.default.oneOf(['header', 'content']),
    hidden: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element])
        .isRequired,
    margin: prop_types_1.default.oneOf(['none', 'dense', 'normal']),
    path: prop_types_1.default.string,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    variant: prop_types_1.default.oneOf(['standard', 'outlined', 'filled']),
};
exports.FormTab.displayName = 'FormTab';