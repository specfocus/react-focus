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
exports.DeleteWithConfirmButton = void 0;
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var styles_2 = require("@mui/material/styles");
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var classnames_1 = __importDefault(require("classnames"));
var inflection_1 = __importDefault(require("inflection"));
var core_1 = require("../../core");
var Confirm_1 = __importDefault(require("../layout/Confirm"));
var Button_1 = __importDefault(require("./Button"));
var PREFIX = 'RaDeleteWithConfirmButton';
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
var DeleteWithConfirmButton = function (props) {
    var basePath = props.basePath, classesOverride = props.classes, className = props.className, _a = props.confirmTitle, confirmTitle = _a === void 0 ? 'ra.message.delete_title' : _a, _b = props.confirmContent, confirmContent = _b === void 0 ? 'ra.message.delete_content' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, _d = props.label, label = _d === void 0 ? 'ra.action.delete' : _d, mutationMode = props.mutationMode, onClick = props.onClick, record = props.record, _e = props.redirect, redirect = _e === void 0 ? 'list' : _e, onSuccess = props.onSuccess, onFailure = props.onFailure, undoable = props.undoable, rest = __rest(props, ["basePath", "classes", "className", "confirmTitle", "confirmContent", "icon", "label", "mutationMode", "onClick", "record", "redirect", "onSuccess", "onFailure", "undoable"]);
    var translate = (0, core_1.useTranslate)();
    var resource = (0, core_1.useResourceContext)(props);
    var mode = (0, core_1.getMutationMode)(mutationMode, undoable);
    var _f = (0, core_1.useDeleteWithConfirmController)({
        record: record,
        redirect: redirect,
        basePath: basePath,
        mutationMode: mutationMode || mode,
        onClick: onClick,
        onSuccess: onSuccess,
        onFailure: onFailure,
        resource: resource,
    }), open = _f.open, loading = _f.loading, handleDialogOpen = _f.handleDialogOpen, handleDialogClose = _f.handleDialogClose, handleDelete = _f.handleDelete;
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(StyledButton, __assign({ onClick: handleDialogOpen, label: label, className: (0, classnames_1.default)('ra-delete-button', classes.deleteButton, className), key: "button" }, rest), icon),
        react_1.default.createElement(Confirm_1.default, { isOpen: open, loading: loading, title: confirmTitle, content: confirmContent, translateOptions: {
                name: translate("resources.".concat(resource, ".forcedCaseName"), {
                    smart_count: 1,
                    _: inflection_1.default.humanize(translate("resources.".concat(resource, ".name"), {
                        smart_count: 1,
                        _: inflection_1.default.singularize(resource),
                    }), true),
                }),
                id: record.id,
            }, onConfirm: handleDelete, onClose: handleDialogClose })));
};
exports.DeleteWithConfirmButton = DeleteWithConfirmButton;
var defaultIcon = react_1.default.createElement(Delete_1.default, null);
exports.DeleteWithConfirmButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    confirmTitle: prop_types_1.default.string,
    confirmContent: prop_types_1.default.string,
    label: prop_types_1.default.string,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    undoable: prop_types_1.default.bool,
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
