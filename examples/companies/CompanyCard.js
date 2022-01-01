"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
const MonetizationOn_1 = __importDefault(require("@mui/icons-material/MonetizationOn"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const CompanyAvatar_1 = require("./CompanyAvatar");
const sectors_1 = require("./sectors");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
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
}));
const CompanyCard = ({ record }) => {
    const classes = useStyles();
    const [elevation, setElevation] = (0, react_1.useState)(1);
    return ((0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ component: react_router_dom_1.Link, to: (0, app_1.linkToRecord)('/companies', record.id, 'show'), underline: "none", onMouseEnter: () => setElevation(3), onMouseLeave: () => setElevation(1) }, { children: (0, jsx_runtime_1.jsxs)(material_1.Paper, Object.assign({ className: classes.paper, elevation: elevation }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.identity }, { children: [(0, jsx_runtime_1.jsx)(CompanyAvatar_1.CompanyAvatar, { record: record }, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.name }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2" }, { children: record.name }), void 0), (0, jsx_runtime_1.jsx)(app_1.SelectField, { color: "textSecondary", source: "sector", choices: sectors_1.sectors, record: record }, void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.stats }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.singleStat }, { children: [(0, jsx_runtime_1.jsx)(AccountCircle_1.default, { color: "disabled", className: classes.statIcon }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2", style: { marginBottom: -8 } }, { children: record.nb_contacts }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "caption", color: "textSecondary" }, { children: record.nb_contacts > 1
                                                ? 'contacts'
                                                : 'contact' }), void 0)] }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.singleStat }, { children: [(0, jsx_runtime_1.jsx)(MonetizationOn_1.default, { color: "disabled", className: classes.statIcon }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "subtitle2", style: { marginBottom: -8 } }, { children: record.nb_deals }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "caption", color: "textSecondary" }, { children: record.nb_deals > 1 ? 'deals' : 'deal' }), void 0)] }, void 0)] }), void 0)] }), void 0)] }), void 0) }), void 0));
};
exports.CompanyCard = CompanyCard;
