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
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var PREFIX = 'RaNotification';
var classes = {
    success: "".concat(PREFIX, "-success"),
    error: "".concat(PREFIX, "-error"),
    warning: "".concat(PREFIX, "-warning"),
    undo: "".concat(PREFIX, "-undo"),
};
var StyledButton = (0, styles_1.styled)(material_1.Button)(function (_a) {
    var _b;
    var theme = _a.theme, type = _a.type;
    return (_b = {},
        _b["& .".concat(classes.success)] = {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
        },
        _b["& .".concat(classes.error)] = {
            backgroundColor: theme.palette.error.dark,
            color: theme.palette.error.contrastText,
        },
        _b["& .".concat(classes.warning)] = {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.contrastText,
        },
        _b["& .".concat(classes.undo)] = {
            color: type === 'success'
                ? theme.palette.success.contrastText
                : theme.palette.primary.light,
        },
        _b);
});
var Notification = function (props) {
    var classesOverride = props.classes, type = props.type, className = props.className, autoHideDuration = props.autoHideDuration, rest = __rest(props, ["classes", "type", "className", "autoHideDuration"]);
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var notification = (0, react_redux_1.useSelector)(core_1.getNotification);
    var dispatch = (0, react_redux_1.useDispatch)();
    var translate = (0, core_1.useTranslate)();
    (0, react_1.useEffect)(function () {
        setOpen(!!notification);
    }, [notification]);
    var handleRequestClose = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, [setOpen]);
    var handleExited = (0, react_1.useCallback)(function () {
        if (notification && notification.undoable) {
            dispatch((0, core_1.complete)());
            core_1.undoableEventEmitter.emit('end', { isUndo: false });
        }
        dispatch((0, core_1.hideNotification)());
    }, [dispatch, notification]);
    var handleUndo = (0, react_1.useCallback)(function () {
        dispatch((0, core_1.undo)());
        core_1.undoableEventEmitter.emit('end', { isUndo: true });
    }, [dispatch]);
    return (React.createElement(material_1.Snackbar, __assign({ open: open, message: notification &&
            notification.message &&
            translate(notification.message, notification.messageArgs), autoHideDuration: (notification && notification.autoHideDuration) ||
            autoHideDuration, disableWindowBlurListener: notification && notification.undoable, TransitionProps: { onExited: handleExited }, onClose: handleRequestClose, ContentProps: {
            className: (0, classnames_1.default)(classes[(notification && notification.type) || type], className),
        }, action: notification && notification.undoable ? (React.createElement(StyledButton, { color: "primary", className: classes.undo, size: "small", onClick: handleUndo },
            React.createElement(React.Fragment, null, translate('ra.action.undo')))) : null }, rest)));
};
Notification.propTypes = {
    type: prop_types_1.default.string,
};
Notification.defaultProps = {
    type: 'info',
    autoHideDuration: 4000,
};
exports.default = Notification;
