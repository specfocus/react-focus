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
var Update_1 = __importDefault(require("@mui/icons-material/Update"));
var inflection_1 = __importDefault(require("inflection"));
var styles_1 = require("@mui/material/styles");
var core_1 = require("../../core");
var Confirm_1 = __importDefault(require("../layout/Confirm"));
var Button_1 = __importDefault(require("./Button"));
var PREFIX = 'RaBulkUpdateWithConfirmButton';
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
                backgroundColor: (0, styles_1.alpha)(theme.palette.error.main, 0.12),
                // Reset on mouse devices
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
        },
        _b);
});
var defaultIcon = React.createElement(Update_1.default, null);
var BulkUpdateWithConfirmButton = function (props) {
    var notify = (0, core_1.useNotify)();
    var refresh = (0, core_1.useRefresh)();
    var translate = (0, core_1.useTranslate)();
    var unselectAll = (0, core_1.useUnselectAll)();
    var resource = (0, core_1.useResourceContext)(props);
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setOpen = _a[1];
    var basePath = props.basePath, mutationMode = props.mutationMode, classesOverride = props.classes, _b = props.confirmTitle, confirmTitle = _b === void 0 ? 'ra.message.bulk_update_title' : _b, _c = props.confirmContent, confirmContent = _c === void 0 ? 'ra.message.bulk_update_content' : _c, data = props.data, _d = props.icon, icon = _d === void 0 ? defaultIcon : _d, label = props.label, onClick = props.onClick, selectedIds = props.selectedIds, _e = props.onSuccess, onSuccess = _e === void 0 ? function () {
        refresh();
        notify('ra.notification.updated', 'info', {
            smart_count: selectedIds.length,
        });
        unselectAll(resource);
    } : _e, _f = props.onFailure, onFailure = _f === void 0 ? function (error) {
        notify(typeof error === 'string'
            ? error
            : error.message || 'ra.notification.http_error', 'warning', {
            _: typeof error === 'string'
                ? error
                : error && error.message
                    ? error.message
                    : undefined,
        });
        setOpen(false);
    } : _f, rest = __rest(props, ["basePath", "mutationMode", "classes", "confirmTitle", "confirmContent", "data", "icon", "label", "onClick", "selectedIds", "onSuccess", "onFailure"]);
    var _g = (0, core_1.useUpdateMany)(resource, selectedIds, data, {
        action: core_1.CRUD_UPDATE_MANY,
        onSuccess: onSuccess,
        onFailure: onFailure,
        mutationMode: mutationMode,
    }), updateMany = _g[0], loading = _g[1].loading;
    var handleClick = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function () {
        setOpen(false);
    };
    var handleUpdate = function (e) {
        updateMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(react_1.Fragment, null,
        React.createElement(StyledButton, __assign({ onClick: handleClick, label: label, className: classes.updateButton }, sanitizeRestProps(rest)), icon),
        React.createElement(Confirm_1.default, { isOpen: isOpen, loading: loading, title: confirmTitle, content: confirmContent, translateOptions: {
                smart_count: selectedIds.length,
                name: translate("resources.".concat(resource, ".forcedCaseName"), {
                    smart_count: selectedIds.length,
                    _: inflection_1.default.humanize(translate("resources.".concat(resource, ".name"), {
                        smart_count: selectedIds.length,
                        _: inflection_1.default.inflect(resource, selectedIds.length),
                    }), true),
                }),
            }, onConfirm: handleUpdate, onClose: handleDialogClose })));
};
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, filterValues = _a.filterValues, label = _a.label, onSuccess = _a.onSuccess, onFailure = _a.onFailure, rest = __rest(_a, ["basePath", "classes", "filterValues", "label", "onSuccess", "onFailure"]);
    return rest;
};
BulkUpdateWithConfirmButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    confirmTitle: prop_types_1.default.string,
    confirmContent: prop_types_1.default.string,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    icon: prop_types_1.default.element,
    data: prop_types_1.default.any.isRequired,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
};
BulkUpdateWithConfirmButton.defaultProps = {
    label: 'ra.action.update',
    mutationMode: 'pessimistic',
};
exports.default = BulkUpdateWithConfirmButton;
