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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var query_string_1 = require("query-string");
var visitors_1 = __importDefault(require("../visitors"));
var PREFIX = 'LinkToRelatedCustomers';
var classes = {
    icon: "".concat(PREFIX, "-icon"),
    link: "".concat(PREFIX, "-link"),
};
var StyledButton = (0, styles_1.styled)(Button_1.default)((_a = {},
    _a["& .".concat(classes.icon)] = { paddingRight: '0.5em' },
    _a["&.".concat(classes.link)] = {
        display: 'inline-flex',
        alignItems: 'center',
    },
    _a));
var LinkToRelatedCustomers = function (_a) {
    var segment = _a.segment;
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(StyledButton, { size: "small", color: "primary", 
        // @ts-ignore
        component: react_router_dom_1.Link, to: {
            pathname: '/customers',
            search: (0, query_string_1.stringify)({
                filter: JSON.stringify({ groups: segment }),
            }),
        }, className: classes.link },
        React.createElement(visitors_1.default.icon, { className: classes.icon }),
        translate('resources.segments.fields.customers')));
};
exports.default = LinkToRelatedCustomers;
