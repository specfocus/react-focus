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
var material_1 = require("@mui/material");
var Home_1 = __importDefault(require("@mui/icons-material/Home"));
var Code_1 = __importDefault(require("@mui/icons-material/Code"));
var app_1 = require("../../app");
var welcome_illustration_svg_1 = __importDefault(require("./welcome_illustration.svg"));
var PREFIX = 'Welcome';
var classes = {
    root: "".concat(PREFIX, "-root"),
    media: "".concat(PREFIX, "-media"),
    actions: "".concat(PREFIX, "-actions"),
};
var StyledCard = (0, styles_1.styled)(material_1.Card)(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            background: theme.palette.mode === 'dark'
                ? '#535353'
                : "linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb",
            color: '#fff',
            padding: 20,
            marginTop: theme.spacing(2),
            marginBottom: '1em',
        },
        _b["& .".concat(classes.media)] = {
            background: "url(".concat(welcome_illustration_svg_1.default, ") top right / cover"),
            marginLeft: 'auto',
        },
        _b["& .".concat(classes.actions)] = (_c = {},
            _c[theme.breakpoints.down('lg')] = {
                padding: 0,
                flexWrap: 'wrap',
                '& a': {
                    marginTop: '1em',
                    marginLeft: '0!important',
                    marginRight: '1em',
                },
            },
            _c),
        _b);
});
var Welcome = function () {
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(StyledCard, { className: classes.root },
        React.createElement(material_1.Box, { display: "flex" },
            React.createElement(material_1.Box, { flex: "1" },
                React.createElement(material_1.Typography, { variant: "h5", component: "h2", gutterBottom: true }, translate('pos.dashboard.welcome.title')),
                React.createElement(material_1.Box, { maxWidth: "40em" },
                    React.createElement(material_1.Typography, { variant: "body1", component: "p", gutterBottom: true }, translate('pos.dashboard.welcome.subtitle'))),
                React.createElement(material_1.CardActions, { className: classes.actions },
                    React.createElement(material_1.Button, { variant: "contained", href: "https://marmelab.com/../../app", startIcon: React.createElement(Home_1.default, null) }, translate('pos.dashboard.welcome.ra_button')),
                    React.createElement(material_1.Button, { variant: "contained", href: "https://github.com/marmelab/../../app/tree/master/examples/demo", startIcon: React.createElement(Code_1.default, null) }, translate('pos.dashboard.welcome.demo_button')))),
            React.createElement(material_1.Box, { display: { xs: 'none', sm: 'none', md: 'block' }, className: classes.media, width: "16em", height: "9em", overflow: "hidden" }))));
};
exports.default = Welcome;
