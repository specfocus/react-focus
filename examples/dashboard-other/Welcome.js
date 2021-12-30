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
exports.Welcome = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var Home_1 = __importDefault(require("@mui/icons-material/Home"));
var Code_1 = __importDefault(require("@mui/icons-material/Code"));
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        background: "#c5dedd",
        color: 'rgba(0, 0, 0, 0.87)',
        padding: '1em',
        marginBottom: '1em',
        marginTop: '2em',
    },
    actions: {
        padding: theme.spacing(2),
        marginTop: -theme.spacing(2),
        marginBottom: -theme.spacing(1),
        flexDirection: 'column',
        '& a': {
            marginBottom: theme.spacing(1),
            backgroundColor: 'white',
            marginLeft: '0 !important',
        },
    },
}); });
var Welcome = function () {
    var classes = useStyles();
    return (React.createElement(material_1.Card, { className: classes.root },
        React.createElement(material_1.CardContent, null,
            React.createElement(material_1.Typography, { variant: "h5", gutterBottom: true }, "CRM demo"),
            React.createElement(material_1.Typography, { gutterBottom: true }, "This app runs in the browser, and relies on a mock REST API. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload."),
            React.createElement(material_1.Typography, { gutterBottom: true }, "It was built using ../../app, an open-source framework. The code for this demo is also open-source. Reading it is a great way to learn ../../app!")),
        React.createElement(material_1.CardActions, { className: classes.actions },
            React.createElement(material_1.Button, { variant: "contained", fullWidth: true, href: "https://marmelab.com/../../app", startIcon: React.createElement(Home_1.default, null) }, "React-admin site"),
            React.createElement(material_1.Button, { variant: "contained", fullWidth: true, href: "https://github.com/marmelab/../../app/tree/master/examples/crm", startIcon: React.createElement(Code_1.default, null) }, "Source for this demo"))));
};
exports.Welcome = Welcome;
