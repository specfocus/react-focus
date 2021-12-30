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
var prop_types_1 = __importDefault(require("prop-types"));
var Update_1 = __importDefault(require("@mui/icons-material/Update"));
var styles_2 = require("@mui/material/styles");
var core_1 = require("../../core");
var Button_1 = __importDefault(require("./Button"));
var PREFIX = 'RaBulkUpdateWithUndoButton';
var classes = {
    updateButton: "".concat(PREFIX, "-updateButton"),
};
var StyledButton = (0, styles_1.styled)(Button_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.updateButton)] = {
            color: theme.palette.error.main,
            '&:hover': {
                backgroundColor: (0, styles_2.alpha)(theme.palette.error.main, 0.12),
                // Reset on mouse devices
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
        },
        _b);
});
var BulkUpdateWithUndoButton = function (props) {
    var selectedIds = (0, core_1.useListContext)(props).selectedIds;
    var notify = (0, core_1.useNotify)();
    var unselectAll = (0, core_1.useUnselectAll)();
    var refresh = (0, core_1.useRefresh)();
    var resource = (0, core_1.useResourceContext)(props);
    var basePath = props.basePath, classesOverride = props.classes, data = props.data, _a = props.label, label = _a === void 0 ? 'ra.action.update' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, onClick = props.onClick, _c = props.onSuccess, onSuccess = _c === void 0 ? function () {
        notify('ra.notification.updated', 'info', { smart_count: selectedIds.length }, true);
        unselectAll(resource);
        refresh();
    } : _c, _d = props.onFailure, onFailure = _d === void 0 ? function (error) {
        notify(typeof error === 'string'
            ? error
            : error.message || 'ra.notification.http_error', 'warning', {
            _: typeof error === 'string'
                ? error
                : error && error.message
                    ? error.message
                    : undefined,
        });
        refresh();
    } : _d, rest = __rest(props, ["basePath", "classes", "data", "label", "icon", "onClick", "onSuccess", "onFailure"]);
    var _e = (0, core_1.useUpdateMany)(resource, selectedIds, data, {
        action: core_1.CRUD_UPDATE_MANY,
        onSuccess: onSuccess,
        onFailure: onFailure,
        undoable: true,
    }), updateMany = _e[0], loading = _e[1].loading;
    var handleClick = function (e) {
        updateMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(StyledButton, __assign({ onClick: handleClick, label: label, className: classes.updateButton, disabled: loading }, sanitizeRestProps(rest)), icon));
};
var defaultIcon = React.createElement(Update_1.default, null);
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, filterValues = _a.filterValues, label = _a.label, selectedIds = _a.selectedIds, onSuccess = _a.onSuccess, onFailure = _a.onFailure, rest = __rest(_a, ["basePath", "classes", "filterValues", "label", "selectedIds", "onSuccess", "onFailure"]);
    return rest;
};
BulkUpdateWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    icon: prop_types_1.default.element,
    data: prop_types_1.default.any.isRequired,
};
exports.default = BulkUpdateWithUndoButton;