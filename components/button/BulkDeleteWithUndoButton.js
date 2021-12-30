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
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var styles_2 = require("@mui/material/styles");
var core_1 = require("../../core");
var Button_1 = __importDefault(require("./Button"));
var PREFIX = 'RaBulkDeleteWithUndoButton';
var classes = {
    deleteButton: "".concat(PREFIX, "-deleteButton"),
};
var StyledButton = (0, styles_1.styled)(Button_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.deleteButton)] = {
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
var BulkDeleteWithUndoButton = function (props) {
    var basePath = props.basePath, classesOverride = props.classes, _a = props.label, label = _a === void 0 ? 'ra.action.delete' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, onClick = props.onClick, rest = __rest(props, ["basePath", "classes", "label", "icon", "onClick"]);
    var selectedIds = (0, core_1.useListContext)(props).selectedIds;
    var notify = (0, core_1.useNotify)();
    var unselectAll = (0, core_1.useUnselectAll)();
    var refresh = (0, core_1.useRefresh)();
    var resource = (0, core_1.useResourceContext)(props);
    var _c = (0, core_1.useDeleteMany)(resource, selectedIds, {
        action: core_1.CRUD_DELETE_MANY,
        onSuccess: function () {
            notify('ra.notification.deleted', 'info', { smart_count: selectedIds.length }, true);
            unselectAll(resource);
            refresh();
        },
        onFailure: function (error) {
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
        },
        undoable: true,
    }), deleteMany = _c[0], loading = _c[1].loading;
    var handleClick = function (e) {
        deleteMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(StyledButton, __assign({ onClick: handleClick, label: label, className: classes.deleteButton, disabled: loading }, sanitizeRestProps(rest)), icon));
};
var defaultIcon = React.createElement(Delete_1.default, null);
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, filterValues = _a.filterValues, label = _a.label, selectedIds = _a.selectedIds, rest = __rest(_a, ["basePath", "classes", "filterValues", "label", "selectedIds"]);
    return rest;
};
BulkDeleteWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    icon: prop_types_1.default.element,
};
exports.default = BulkDeleteWithUndoButton;
