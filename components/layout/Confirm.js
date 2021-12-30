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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var styles_2 = require("@mui/material/styles");
var CheckCircle_1 = __importDefault(require("@mui/icons-material/CheckCircle"));
var ErrorOutline_1 = __importDefault(require("@mui/icons-material/ErrorOutline"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var PREFIX = 'RaConfirm';
var classes = {
    confirmPrimary: "".concat(PREFIX, "-confirmPrimary"),
    confirmWarning: "".concat(PREFIX, "-confirmWarning"),
    iconPaddingStyle: "".concat(PREFIX, "-iconPaddingStyle"),
};
var StyledDialog = (0, styles_1.styled)(Dialog_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.confirmPrimary)] = {
            color: theme.palette.primary.main,
        },
        _b["& .".concat(classes.confirmWarning)] = {
            color: theme.palette.error.main,
            '&:hover': {
                backgroundColor: (0, styles_2.alpha)(theme.palette.error.main, 0.12),
                // Reset on mouse devices
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
        },
        _b["& .".concat(classes.iconPaddingStyle)] = {
            paddingRight: '0.5em',
        },
        _b);
});
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
var Confirm = function (props) {
    var _a;
    var isOpen = props.isOpen, loading = props.loading, title = props.title, content = props.content, confirm = props.confirm, cancel = props.cancel, confirmColor = props.confirmColor, ConfirmIcon = props.ConfirmIcon, CancelIcon = props.CancelIcon, onClose = props.onClose, onConfirm = props.onConfirm, _b = props.translateOptions, translateOptions = _b === void 0 ? {} : _b;
    var translate = (0, core_1.useTranslate)();
    var handleConfirm = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        onConfirm(e);
    }, [onConfirm]);
    var handleClick = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
    }, []);
    return (React.createElement(StyledDialog, { open: isOpen, onClose: onClose, onClick: handleClick, "aria-labelledby": "alert-dialog-title" },
        React.createElement(DialogTitle_1.default, { id: "alert-dialog-title" }, translate(title, __assign({ _: title }, translateOptions))),
        React.createElement(DialogContent_1.default, null, typeof content === 'string' ? (React.createElement(DialogContentText_1.default, null, translate(content, __assign({ _: content }, translateOptions)))) : (content)),
        React.createElement(DialogActions_1.default, null,
            React.createElement(Button_1.default, { disabled: loading, onClick: onClose },
                React.createElement(CancelIcon, { className: classes.iconPaddingStyle }),
                translate(cancel, { _: cancel })),
            React.createElement(Button_1.default, { disabled: loading, onClick: handleConfirm, className: (0, classnames_1.default)('ra-confirm', (_a = {},
                    _a[classes.confirmWarning] = confirmColor === 'warning',
                    _a[classes.confirmPrimary] = confirmColor === 'primary',
                    _a)), autoFocus: true },
                React.createElement(ConfirmIcon, { className: classes.iconPaddingStyle }),
                translate(confirm, { _: confirm })))));
};
Confirm.propTypes = {
    cancel: prop_types_1.default.string,
    confirm: prop_types_1.default.string,
    confirmColor: prop_types_1.default.string,
    ConfirmIcon: prop_types_1.default.elementType,
    CancelIcon: prop_types_1.default.elementType,
    content: prop_types_1.default.node.isRequired,
    isOpen: prop_types_1.default.bool,
    loading: prop_types_1.default.bool,
    onClose: prop_types_1.default.func.isRequired,
    onConfirm: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string.isRequired,
};
Confirm.defaultProps = {
    cancel: 'ra.action.cancel',
    confirm: 'ra.action.confirm',
    confirmColor: 'primary',
    ConfirmIcon: CheckCircle_1.default,
    CancelIcon: ErrorOutline_1.default,
    isOpen: false,
};
exports.default = Confirm;
