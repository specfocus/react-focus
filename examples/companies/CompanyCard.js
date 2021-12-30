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
exports.CompanyCard = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
var MonetizationOn_1 = __importDefault(require("@mui/icons-material/MonetizationOn"));
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var CompanyAvatar_1 = require("./CompanyAvatar");
var sectors_1 = require("./sectors");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    paper: {
        height: 200,
        width: 193.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1em',
    },
    identity: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        textAlign: 'center',
        marginTop: theme.spacing(1),
    },
    stats: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    },
    singleStat: {
        display: 'flex',
        alignItems: 'center',
    },
    statIcon: {
        marginRight: theme.spacing(1),
    },
}); });
var CompanyCard = function (_a) {
    var record = _a.record;
    var classes = useStyles();
    var _b = (0, react_1.useState)(1), elevation = _b[0], setElevation = _b[1];
    return (React.createElement(material_1.Link, { component: react_router_dom_1.Link, to: (0, app_1.linkToRecord)('/companies', record.id, 'show'), underline: "none", onMouseEnter: function () { return setElevation(3); }, onMouseLeave: function () { return setElevation(1); } },
        React.createElement(material_1.Paper, { className: classes.paper, elevation: elevation },
            React.createElement("div", { className: classes.identity },
                React.createElement(CompanyAvatar_1.CompanyAvatar, { record: record }),
                React.createElement("div", { className: classes.name },
                    React.createElement(material_1.Typography, { variant: "subtitle2" }, record.name),
                    React.createElement(app_1.SelectField, { color: "textSecondary", source: "sector", choices: sectors_1.sectors, record: record }))),
            React.createElement("div", { className: classes.stats },
                React.createElement("div", { className: classes.singleStat },
                    React.createElement(AccountCircle_1.default, { color: "disabled", className: classes.statIcon }),
                    React.createElement("div", null,
                        React.createElement(material_1.Typography, { variant: "subtitle2", style: { marginBottom: -8 } }, record.nb_contacts),
                        React.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, record.nb_contacts > 1
                            ? 'contacts'
                            : 'contact'))),
                React.createElement("div", { className: classes.singleStat },
                    React.createElement(MonetizationOn_1.default, { color: "disabled", className: classes.statIcon }),
                    React.createElement("div", null,
                        React.createElement(material_1.Typography, { variant: "subtitle2", style: { marginBottom: -8 } }, record.nb_deals),
                        React.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" }, record.nb_deals > 1 ? 'deals' : 'deal')))))));
};
exports.CompanyCard = CompanyCard;
