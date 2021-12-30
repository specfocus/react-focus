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
exports.SimpleFormIterator = void 0;
var material_1 = require("@mui/material");
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash/get"));
var prop_types_1 = __importDefault(require("prop-types"));
var React = __importStar(require("react"));
var react_1 = require("react");
var react_transition_group_1 = require("react-transition-group");
var core_1 = require("../../../core");
var AddItemButton_1 = require("./AddItemButton");
var RemoveItemButton_1 = require("./RemoveItemButton");
var ReOrderButtons_1 = require("./ReOrderButtons");
var SimpleFormIteratorContext_1 = require("./SimpleFormIteratorContext");
var SimpleFormIteratorItem_1 = require("./SimpleFormIteratorItem");
var useArrayInput_1 = require("./useArrayInput");
var useSimpleFormIteratorStyles_1 = require("./useSimpleFormIteratorStyles");
var SimpleFormIterator = function (props) {
    var _a = props.addButton, addButton = _a === void 0 ? React.createElement(AddItemButton_1.AddItemButton, null) : _a, _b = props.removeButton, removeButton = _b === void 0 ? React.createElement(RemoveItemButton_1.RemoveItemButton, null) : _b, _c = props.reOrderButtons, reOrderButtons = _c === void 0 ? React.createElement(ReOrderButtons_1.ReOrderButtons, null) : _c, basePath = props.basePath, children = props.children, className = props.className, record = props.record, resource = props.resource, source = props.source, disabled = props.disabled, disableAdd = props.disableAdd, disableRemove = props.disableRemove, disableReordering = props.disableReordering, variant = props.variant, margin = props.margin, TransitionProps = props.TransitionProps, defaultValue = props.defaultValue, _d = props.getItemLabel, getItemLabel = _d === void 0 ? DefaultLabelFn : _d;
    var _e = (0, useArrayInput_1.useArrayInput)(props), fields = _e.fields, meta = _e.meta;
    var error = meta.error, submitFailed = meta.submitFailed;
    var nodeRef = (0, react_1.useRef)(null);
    // We need a unique id for each field for a proper enter/exit animation
    // so we keep an internal map between the field position and an auto-increment id
    var nextId = (0, react_1.useRef)(fields && fields.length
        ? fields.length
        : defaultValue
            ? defaultValue.length
            : 0);
    // We check whether we have a defaultValue (which must be an array) before checking
    // the fields prop which will always be empty for a new record.
    // Without it, our ids wouldn't match the default value and we would get key warnings
    // on the CssTransition element inside our render method
    var ids = (0, react_1.useRef)(nextId.current > 0 ? Array.from(Array(nextId.current).keys()) : []);
    var removeField = (0, react_1.useCallback)(function (index) {
        ids.current.splice(index, 1);
        fields.remove(index);
    }, [fields]);
    var addField = (0, react_1.useCallback)(function (item) {
        if (item === void 0) { item = undefined; }
        ids.current.push(nextId.current++);
        fields.push(item);
    }, [fields]);
    // add field and call the onClick event of the button passed as addButton prop
    var handleAddButtonClick = function (originalOnClickHandler) { return function (event) {
        addField();
        if (originalOnClickHandler) {
            originalOnClickHandler(event);
        }
    }; };
    var handleReorder = (0, react_1.useCallback)(function (origin, destination) {
        var item = ids.current[origin];
        ids.current[origin] = ids.current[destination];
        ids.current[destination] = item;
        fields.move(origin, destination);
    }, [fields]);
    var records = (0, get_1.default)(record, source);
    var context = (0, react_1.useMemo)(function () { return ({
        total: fields.length,
        add: addField,
        remove: removeField,
        reOrder: handleReorder,
    }); }, [fields.length, addField, removeField, handleReorder]);
    return fields ? (React.createElement(SimpleFormIteratorContext_1.SimpleFormIteratorContext.Provider, { value: context },
        React.createElement(Root, { className: (0, classnames_1.default)(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.root, className) },
            submitFailed && typeof error !== 'object' && error && (React.createElement(material_1.FormHelperText, { error: true },
                React.createElement(core_1.ValidationError, { error: error }))),
            React.createElement(react_transition_group_1.TransitionGroup, { component: null }, fields.map(function (member, index) { return (React.createElement(react_transition_group_1.CSSTransition, __assign({ nodeRef: nodeRef, key: ids.current[index], timeout: 500, classNames: "fade" }, TransitionProps),
                React.createElement(SimpleFormIteratorItem_1.SimpleFormIteratorItem, { basePath: basePath, disabled: disabled, disableRemove: disableRemove, disableReordering: disableReordering, fields: fields, getItemLabel: getItemLabel, index: index, margin: margin, member: member, meta: meta, onRemoveField: removeField, onReorder: handleReorder, record: (records && records[index]) || {}, removeButton: removeButton, reOrderButtons: reOrderButtons, resource: resource, source: source, variant: variant }, children))); })),
            !disabled && !disableAdd && (React.createElement("li", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line },
                React.createElement("span", { className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action }, (0, react_1.cloneElement)(addButton, {
                    onClick: handleAddButtonClick(addButton.props.onClick),
                    className: (0, classnames_1.default)('button-add', "button-add-".concat(source)),
                }))))))) : null;
};
exports.SimpleFormIterator = SimpleFormIterator;
exports.SimpleFormIterator.defaultProps = {
    disableAdd: false,
    disableRemove: false,
};
exports.SimpleFormIterator.propTypes = {
    defaultValue: prop_types_1.default.any,
    addButton: prop_types_1.default.element,
    removeButton: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    // @ts-ignore
    fields: prop_types_1.default.object,
    meta: prop_types_1.default.object,
    // @ts-ignore
    record: prop_types_1.default.object,
    source: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    translate: prop_types_1.default.func,
    disableAdd: prop_types_1.default.bool,
    disableRemove: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    TransitionProps: prop_types_1.default.shape({}),
};
var Root = (0, material_1.styled)('ul')(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {},
        _b["".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix, " .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.root)] = {
            padding: 0,
            marginBottom: 0,
            '& > li:last-child': {
                borderBottom: 'none',
            },
        },
        _b["".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix, " .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line)] = (_c = {
                display: 'flex',
                listStyleType: 'none',
                borderBottom: "solid 1px ".concat(theme.palette.divider)
            },
            _c[theme.breakpoints.down('sm')] = { display: 'block' },
            _c['&.fade-enter'] = {
                opacity: 0.01,
                transform: 'translateX(100vw)',
            },
            _c['&.fade-enter-active'] = {
                opacity: 1,
                transform: 'translateX(0)',
                transition: 'all 500ms ease-in',
            },
            _c['&.fade-exit'] = {
                opacity: 1,
                transform: 'translateX(0)',
            },
            _c['&.fade-exit-active'] = {
                opacity: 0.01,
                transform: 'translateX(100vw)',
                transition: 'all 500ms ease-in',
            },
            _c),
        _b["".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix, " .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.index)] = (_d = {},
            _d[theme.breakpoints.down('md')] = { display: 'none' },
            _d.marginRight = theme.spacing(1),
            _d),
        _b["".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix, " .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.indexContainer)] = {
            display: 'flex',
            paddingTop: '1em',
            marginRight: theme.spacing(1),
            alignItems: 'center',
        },
        _b["".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix, " .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.form)] = {
            flex: 2,
        },
        _b["".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix, " .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action)] = {
            paddingTop: '0.5em',
        },
        _b["".concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorPrefix, " .").concat(useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.leftIcon)] = {
            marginRight: theme.spacing(1),
        },
        _b);
});
var DefaultLabelFn = function (index) { return index + 1; };
