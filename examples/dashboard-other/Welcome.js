"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const Home_1 = __importDefault(require("@mui/icons-material/Home"));
const Code_1 = __importDefault(require("@mui/icons-material/Code"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        background: `#c5dedd`,
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
}));
const Welcome = () => {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsxs)(material_1.Card, Object.assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h5", gutterBottom: true }, { children: "CRM demo" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ gutterBottom: true }, { children: "This app runs in the browser, and relies on a mock REST API. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload." }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ gutterBottom: true }, { children: "It was built using ../../app, an open-source framework. The code for this demo is also open-source. Reading it is a great way to learn ../../app!" }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(material_1.CardActions, Object.assign({ className: classes.actions }, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", fullWidth: true, href: "https://marmelab.com/../../app", startIcon: (0, jsx_runtime_1.jsx)(Home_1.default, {}, void 0) }, { children: "React-admin site" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", fullWidth: true, href: "https://github.com/marmelab/../../app/tree/master/examples/crm", startIcon: (0, jsx_runtime_1.jsx)(Code_1.default, {}, void 0) }, { children: "Source for this demo" }), void 0)] }), void 0)] }), void 0));
};
exports.Welcome = Welcome;
