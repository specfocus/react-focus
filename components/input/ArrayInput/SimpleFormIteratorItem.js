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
exports.SimpleFormIteratorItem = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var classnames_1 = __importDefault(require("classnames"));
var FormInput_1 = __importDefault(require("../../form/FormInput"));
var useSimpleFormIteratorStyles_1 = require("./useSimpleFormIteratorStyles");
var useSimpleFormIterator_1 = require("./useSimpleFormIterator");
var SimpleFormIteratorItemContext_1 = require("./SimpleFormIteratorItemContext");
var SimpleFormIteratorItem = function (props) {
    var basePath = props.basePath, children = props.children, disabled = props.disabled, disableReordering = props.disableReordering, disableRemove = props.disableRemove, getItemLabel = props.getItemLabel, index = props.index, margin = props.margin, member = props.member, record = props.record, removeButton = props.removeButton, reOrderButtons = props.reOrderButtons, resource = props.resource, source = props.source, variant = props.variant;
    var _a = (0, useSimpleFormIterator_1.useSimpleFormIterator)(), total = _a.total, reOrder = _a.reOrder, remove = _a.remove;
    // Returns a boolean to indicate whether to disable the remove button for certain fields.
    // If disableRemove is a function, then call the function with the current record to
    // determining if the button should be disabled. Otherwise, use a boolean property that
    // enables or disables the button for all of the fields.
    var disableRemoveField = function (record) {
        if (typeof disableRemove === 'boolean') {
            return disableRemove;
        }
        return disableRemove && disableRemove(record);
    };
    // remove field and call the onClick event of the button passed as removeButton prop
    var handleRemoveButtonClick = function (originalOnClickHandler, index) { return function (event) {
        remove(index);
        if (originalOnClickHandler) {
            originalOnClickHandler(event);
        }
    }; };
    var context = (0, react_1.useMemo)(function () { return ({
        index: index,
        total: total,
        reOrder: function (newIndex) { return reOrder(index, newIndex); },
        remove: function () { return remove(index); },
    }); }, [index, total, reOrder, remove]);
    return (React.createElement(SimpleFormIteratorItemContext_1.SimpleFormIteratorItemContext.Provider, { value: context },
        React.createElement("li", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line },
            React.createElement("div", null,
                React.createElement("div", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.indexContainer },
                    React.createElement(material_1.Typography, { variant: "body1", className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.index }, getItemLabel(index)),
                    !disabled &&
                        !disableReordering &&
                        (0, react_1.cloneElement)(reOrderButtons, {
                            index: index,
                            max: total,
                            reOrder: reOrder,
                            className: (0, classnames_1.default)('button-reorder', "button-reorder-".concat(source, "-").concat(index)),
                        }))),
            React.createElement("section", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.form }, react_1.Children.map(children, function (input, index2) {
                if (!(0, react_1.isValidElement)(input)) {
                    return null;
                }
                var _a = input.props, source = _a.source, inputProps = __rest(_a, ["source"]);
                return (React.createElement(FormInput_1.default, { basePath: input.props.basePath || basePath, input: (0, react_1.cloneElement)(input, __assign({ source: source
                            ? "".concat(member, ".").concat(source)
                            : member, index: source ? undefined : index2, label: typeof input.props.label === 'undefined'
                            ? source
                                ? "resources.".concat(resource, ".fields.").concat(source)
                                : undefined
                            : input.props.label, disabled: disabled }, inputProps)), record: record, resource: resource, variant: variant, margin: margin }));
            })),
            !disabled && !disableRemoveField(record) && (React.createElement("span", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action }, (0, react_1.cloneElement)(removeButton, {
                onClick: handleRemoveButtonClick(removeButton.props.onClick, index),
                className: (0, classnames_1.default)('button-remove', "button-remove-".concat(source, "-").concat(index)),
            }))))));
};
exports.SimpleFormIteratorItem = SimpleFormIteratorItem;