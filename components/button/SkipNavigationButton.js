"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var Button_1 = __importDefault(require("./Button"));
var core_1 = require("../../core");
var classnames_1 = __importDefault(require("classnames"));
var PREFIX = 'RaSkipToContentButton';
var classes = {
    skipToContentButton: "".concat(PREFIX, "-skipToContentButton"),
};
var StyledButton = (0, styles_1.styled)(Button_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.skipToContentButton)] = {
            position: 'fixed',
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.default,
            color: theme.palette.getContrastText(theme.palette.background.default),
            transition: theme.transitions.create(['top', 'opacity'], {
                easing: theme.transitions.easing.easeIn,
                duration: theme.transitions.duration.leavingScreen,
            }),
            left: theme.spacing(2),
            top: theme.spacing(-10),
            zIndex: 5000,
            '&:hover': {
                opacity: 0.8,
                backgroundColor: theme.palette.background.default,
            },
            '&:focus': {
                top: theme.spacing(2),
                transition: theme.transitions.create(['top', 'opacity'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
        _b);
});
var skipToContent = function () {
    if (typeof document === 'undefined')
        return;
    var element = document.getElementById('main-content');
    if (!element) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('No element with id "main-content" was found. Ensure the element that contains your main content has an id of "main-content".');
        }
        return;
    }
    element.setAttribute('tabIndex', '-1');
    element.focus();
    element.blur();
    element.removeAttribute('tabIndex');
};
var SkipNavigationButton = function () {
    var translate = (0, core_1.useTranslate)();
    return (react_1.default.createElement(StyledButton, { onClick: skipToContent, className: (0, classnames_1.default)(classes.skipToContentButton, 'skip-nav-button'), label: translate('ra.navigation.skip_nav'), variant: "contained" }));
};
exports.default = SkipNavigationButton;
