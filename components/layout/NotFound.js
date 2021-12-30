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
var Button_1 = __importDefault(require("@mui/material/Button"));
var HotTub_1 = __importDefault(require("@mui/icons-material/HotTub"));
var History_1 = __importDefault(require("@mui/icons-material/History"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var Title_1 = __importDefault(require("./Title"));
var PREFIX = 'RaNotFound';
var classes = {
    container: "".concat(PREFIX, "-container"),
    icon: "".concat(PREFIX, "-icon"),
    message: "".concat(PREFIX, "-message"),
    toolbar: "".concat(PREFIX, "-toolbar"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.container)] = (_c = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            _c[theme.breakpoints.up('md')] = {
                height: '100%',
            },
            _c[theme.breakpoints.down('md')] = {
                height: '100vh',
                marginTop: '-3em',
            },
            _c),
        _b["& .".concat(classes.icon)] = {
            width: '9em',
            height: '9em',
        },
        _b["& .".concat(classes.message)] = {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            opacity: 0.5,
            margin: '0 1em',
        },
        _b["& .".concat(classes.toolbar)] = {
            textAlign: 'center',
            marginTop: '2em',
        },
        _b);
});
function goBack() {
    window.history.go(-1);
}
var NotFound = function (props) {
    var className = props.className, title = props.title, rest = __rest(props, ["className", "title"]);
    var translate = (0, core_1.useTranslate)();
    (0, core_1.useAuthenticated)();
    return (React.createElement(Root, __assign({ className: (0, classnames_1.default)(classes.container, className) }, sanitizeRestProps(rest)),
        React.createElement(Title_1.default, { defaultTitle: title }),
        React.createElement("div", { className: classes.message },
            React.createElement(HotTub_1.default, { className: classes.icon }),
            React.createElement("h1", null, translate('ra.page.not_found')),
            React.createElement("div", null,
                translate('ra.message.not_found'),
                ".")),
        React.createElement("div", { className: classes.toolbar },
            React.createElement(Button_1.default, { variant: "contained", startIcon: React.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back')))));
};
var sanitizeRestProps = function (_a) {
    var staticContext = _a.staticContext, history = _a.history, location = _a.location, match = _a.match, rest = __rest(_a, ["staticContext", "history", "location", "match"]);
    return rest;
};
NotFound.propTypes = {
    className: prop_types_1.default.string,
    title: prop_types_1.default.string,
    location: prop_types_1.default.object,
};
exports.default = NotFound;