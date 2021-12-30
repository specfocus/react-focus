"use strict";
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
exports.Empty = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var Inbox_1 = __importDefault(require("@mui/icons-material/Inbox"));
var core_1 = require("../../core");
var button_1 = require("../button");
var PREFIX = 'RaEmpty';
var classes = {
    message: "".concat(PREFIX, "-message"),
    icon: "".concat(PREFIX, "-icon"),
    toolbar: "".concat(PREFIX, "-toolbar"),
};
var Root = (0, styles_1.styled)('span')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.message)] = {
            textAlign: 'center',
            opacity: theme.palette.mode === 'light' ? 0.5 : 0.8,
            margin: '0 1em',
            color: theme.palette.mode === 'light'
                ? 'inherit'
                : theme.palette.text.primary,
        },
        _b["& .".concat(classes.icon)] = {
            width: '9em',
            height: '9em',
        },
        _b["& .".concat(classes.toolbar)] = {
            textAlign: 'center',
            marginTop: '2em',
        },
        _b);
});
var Empty = function (props) {
    var _a = (0, core_1.useListContext)(props), basePath = _a.basePath, hasCreate = _a.hasCreate;
    var resource = (0, core_1.useResourceContext)(props);
    var translate = (0, core_1.useTranslate)();
    var getResourceLabel = (0, core_1.useGetResourceLabel)();
    var resourceName = translate("resources.".concat(resource, ".forcedCaseName"), {
        smart_count: 0,
        _: getResourceLabel(resource, 0),
    });
    var emptyMessage = translate('ra.page.empty', { name: resourceName });
    var inviteMessage = translate('ra.page.invite');
    return (React.createElement(Root, null,
        React.createElement("div", { className: classes.message },
            React.createElement(Inbox_1.default, { className: classes.icon }),
            React.createElement(material_1.Typography, { variant: "h4", paragraph: true }, translate("resources.".concat(resource, ".empty"), {
                _: emptyMessage,
            })),
            hasCreate && (React.createElement(material_1.Typography, { variant: "body1" }, translate("resources.".concat(resource, ".invite"), {
                _: inviteMessage,
            })))),
        hasCreate && (React.createElement("div", { className: classes.toolbar },
            React.createElement(button_1.CreateButton, { variant: "contained", basePath: basePath })))));
};
exports.Empty = Empty;
