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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var app_1 = require("../../app");
var AcceptButton_1 = __importDefault(require("./AcceptButton"));
var RejectButton_1 = __importDefault(require("./RejectButton"));
var PREFIX = 'ReviewEditToolbar';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var StyledMuiToolbar = (0, styles_1.styled)(Toolbar_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            justifyContent: 'space-between',
        },
        _b);
});
var ReviewEditToolbar = function (props) {
    var basePath = props.basePath, handleSubmitWithRedirect = props.handleSubmitWithRedirect, invalid = props.invalid, record = props.record, resource = props.resource, saving = props.saving;
    if (!record)
        return null;
    return (React.createElement(StyledMuiToolbar, { className: classes.root }, record.status === 'pending' ? (React.createElement(react_1.Fragment, null,
        React.createElement(AcceptButton_1.default, { record: record }),
        React.createElement(RejectButton_1.default, { record: record }))) : (React.createElement(react_1.Fragment, null,
        React.createElement(app_1.SaveButton, { handleSubmitWithRedirect: handleSubmitWithRedirect, invalid: invalid, saving: saving, redirect: "list", submitOnEnter: true }),
        React.createElement(app_1.DeleteButton, { basePath: basePath, record: record, resource: resource })))));
};
exports.default = ReviewEditToolbar;
