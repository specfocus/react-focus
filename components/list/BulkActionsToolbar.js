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
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_2 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var core_1 = require("../../core");
var TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
var PREFIX = 'RaBulkActionsToolbar';
var classes = {
    toolbar: "".concat(PREFIX, "-toolbar"),
    topToolbar: "".concat(PREFIX, "-topToolbar"),
    buttons: "".concat(PREFIX, "-buttons"),
    collapsed: "".concat(PREFIX, "-collapsed"),
    title: "".concat(PREFIX, "-title"),
    icon: "".concat(PREFIX, "-icon"),
};
var Root = (0, styles_1.styled)(Toolbar_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.toolbar)] = {
            zIndex: 3,
            color: theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            justifyContent: 'space-between',
            backgroundColor: theme.palette.mode === 'light'
                ? (0, styles_2.alpha)(theme.palette.primary.light, 0.85)
                : theme.palette.primary.dark,
            minHeight: theme.spacing(8),
            height: theme.spacing(8),
            transition: "".concat(theme.transitions.create('height'), ", ").concat(theme.transitions.create('min-height')),
        },
        _b["& .".concat(classes.topToolbar)] = {
            paddingTop: theme.spacing(2),
        },
        _b["& .".concat(classes.buttons)] = {},
        _b["&.".concat(classes.toolbar, ".").concat(classes.collapsed)] = {
            minHeight: 0,
            height: 0,
            overflowY: 'hidden',
        },
        _b["& .".concat(classes.title)] = {
            display: 'flex',
            flex: '0 0 auto',
        },
        _b["& .".concat(classes.icon)] = {
            marginLeft: '-0.5em',
            marginRight: '0.5em',
        },
        _b);
});
var BulkActionsToolbar = function (props) {
    var _a;
    var _b = props.label, label = _b === void 0 ? 'ra.action.bulk_actions' : _b, children = props.children, rest = __rest(props, ["label", "children"]);
    var _c = (0, core_1.useListContext)(props), basePath = _c.basePath, filterValues = _c.filterValues, resource = _c.resource, selectedIds = _c.selectedIds, onUnselectItems = _c.onUnselectItems;
    var translate = (0, core_1.useTranslate)();
    return (React.createElement(Root, __assign({ "data-test": "bulk-actions-toolbar", className: (0, classnames_1.default)(classes.toolbar, (_a = {},
            _a[classes.collapsed] = selectedIds.length === 0,
            _a)) }, (0, core_1.sanitizeListRestProps)(rest)),
        React.createElement("div", { className: classes.title },
            React.createElement(IconButton_1.default, { className: classes.icon, "aria-label": translate('ra.action.unselect'), title: translate('ra.action.unselect'), onClick: onUnselectItems, size: "small" },
                React.createElement(Close_1.default, { fontSize: "small" })),
            React.createElement(Typography_1.default, { color: "inherit", variant: "subtitle1" }, translate(label, {
                _: label,
                smart_count: selectedIds.length,
            }))),
        React.createElement(TopToolbar_1.default, { className: classes.topToolbar }, react_1.Children.map(children, function (child) {
            return (0, react_1.isValidElement)(child)
                ? (0, react_1.cloneElement)(child, {
                    basePath: basePath,
                    filterValues: filterValues,
                    resource: resource,
                    selectedIds: selectedIds,
                })
                : null;
        }))));
};
BulkActionsToolbar.propTypes = {
    children: prop_types_1.default.node,
    label: prop_types_1.default.string,
};
exports.default = BulkActionsToolbar;
