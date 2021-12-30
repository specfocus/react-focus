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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var Slide_1 = __importDefault(require("@mui/material/Slide"));
var Transition = react_1.default.forwardRef(function Transition(props, ref) {
    return react_1.default.createElement(Slide_1.default, __assign({ direction: "up", ref: ref }, props));
});
function AlertDialogSlide() {
    var _a = react_1.default.useState(false), open = _a[0], setOpen = _a[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Button_1.default, { variant: "outlined", color: "primary", onClick: handleClickOpen }, "Slide in alert dialog"),
        react_1.default.createElement(Dialog_1.default, { open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-labelledby": "alert-dialog-slide-title", "aria-describedby": "alert-dialog-slide-description" },
            react_1.default.createElement(DialogTitle_1.default, { id: "alert-dialog-slide-title" }, "Use Google's location service?"),
            react_1.default.createElement(DialogContent_1.default, null,
                react_1.default.createElement(DialogContentText_1.default, { id: "alert-dialog-slide-description" }, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),
            react_1.default.createElement(DialogActions_1.default, null,
                react_1.default.createElement(Button_1.default, { onClick: handleClose, color: "primary" }, "Disagree"),
                react_1.default.createElement(Button_1.default, { onClick: handleClose, color: "primary" }, "Agree")))));
}
exports.default = AlertDialogSlide;
