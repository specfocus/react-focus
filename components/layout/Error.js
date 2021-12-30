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
var material_1 = require("@mui/material");
var Report_1 = __importDefault(require("@mui/icons-material/Report"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var History_1 = __importDefault(require("@mui/icons-material/History"));
var core_1 = require("../../core");
var Title_1 = __importStar(require("./Title"));
var PREFIX = 'RaError';
var classes = {
    container: "".concat(PREFIX, "-container"),
    title: "".concat(PREFIX, "-title"),
    icon: "".concat(PREFIX, "-icon"),
    panel: "".concat(PREFIX, "-panel"),
    panelDetails: "".concat(PREFIX, "-panelDetails"),
    toolbar: "".concat(PREFIX, "-toolbar"),
    advice: "".concat(PREFIX, "-advice"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.container)] = (_c = {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            },
            _c[theme.breakpoints.down('md')] = {
                padding: '1em',
            },
            _c.fontFamily = 'Roboto, sans-serif',
            _c.opacity = 0.5,
            _c),
        _b["& .".concat(classes.title)] = {
            display: 'flex',
            alignItems: 'center',
        },
        _b["& .".concat(classes.icon)] = {
            width: '2em',
            height: '2em',
            marginRight: '0.5em',
        },
        _b["& .".concat(classes.panel)] = {
            marginTop: '1em',
            maxWidth: '60em',
        },
        _b["& .".concat(classes.panelDetails)] = {
            whiteSpace: 'pre-wrap',
        },
        _b["& .".concat(classes.toolbar)] = {
            marginTop: '2em',
        },
        _b["& .".concat(classes.advice)] = {
            marginTop: '2em',
        },
        _b);
});
function goBack() {
    window.history.go(-1);
}
var Error = function (props) {
    var error = props.error, errorInfo = props.errorInfo, className = props.className, title = props.title, rest = __rest(props, ["error", "errorInfo", "className", "title"]);
    var translate = (0, core_1.useTranslate)();
    return (React.createElement(react_1.Fragment, null,
        title && React.createElement(Title_1.default, { defaultTitle: title }),
        React.createElement(Root, __assign({ className: (0, classnames_1.default)(classes.container, className) }, rest),
            React.createElement("h1", { className: classes.title, role: "alert" },
                React.createElement(Report_1.default, { className: classes.icon }),
                translate('ra.page.error')),
            React.createElement("div", null, translate('ra.message.error')),
            process.env.NODE_ENV !== 'production' && (React.createElement(React.Fragment, null,
                React.createElement(material_1.Accordion, { className: classes.panel },
                    React.createElement(material_1.AccordionSummary, { expandIcon: React.createElement(ExpandMore_1.default, null) }, translate(error.toString(), {
                        _: error.toString(),
                    })),
                    errorInfo && (React.createElement(material_1.AccordionDetails, { className: classes.panelDetails }, errorInfo.componentStack))),
                React.createElement("div", { className: classes.advice },
                    React.createElement(material_1.Typography, { align: "center" }, "Need help with this error? Try the following:"),
                    React.createElement(material_1.Typography, { component: "div" },
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                "Check the",
                                ' ',
                                React.createElement("a", { href: "https://marmelab.com/../../app/Readme.html" }, "../../app documentation")),
                            React.createElement("li", null,
                                "Search on",
                                ' ',
                                React.createElement("a", { href: "https://stackoverflow.com/questions/tagged/../../app" }, "StackOverflow"),
                                ' ',
                                "for community answers"),
                            React.createElement("li", null,
                                "Get help from the core team via",
                                ' ',
                                React.createElement("a", { href: "https://marmelab.com/ra-enterprise/#fromsww" }, "../../app Enterprise Edition"))))))),
            React.createElement("div", { className: classes.toolbar },
                React.createElement(material_1.Button, { variant: "contained", startIcon: React.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back'))))));
};
Error.propTypes = {
    className: prop_types_1.default.string,
    error: prop_types_1.default.object.isRequired,
    errorInfo: prop_types_1.default.object,
    title: Title_1.TitlePropType,
};
exports.default = Error;
