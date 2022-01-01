"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Home_1 = __importDefault(require("@mui/icons-material/Home"));
const Code_1 = __importDefault(require("@mui/icons-material/Code"));
const app_1 = require("../../app");
const welcome_illustration_svg_1 = __importDefault(require("./welcome_illustration.svg"));
const PREFIX = 'Welcome';
const classes = {
    root: `${PREFIX}-root`,
    media: `${PREFIX}-media`,
    actions: `${PREFIX}-actions`,
};
const StyledCard = (0, styles_1.styled)(material_1.Card)(({ theme }) => ({
    [`&.${classes.root}`]: {
        background: theme.palette.mode === 'dark'
            ? '#535353'
            : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,
        color: '#fff',
        padding: 20,
        marginTop: theme.spacing(2),
        marginBottom: '1em',
    },
    [`& .${classes.media}`]: {
        background: `url(${welcome_illustration_svg_1.default}) top right / cover`,
        marginLeft: 'auto',
    },
    [`& .${classes.actions}`]: {
        [theme.breakpoints.down('lg')]: {
            padding: 0,
            flexWrap: 'wrap',
            '& a': {
                marginTop: '1em',
                marginLeft: '0!important',
                marginRight: '1em',
            },
        },
    },
}));
const Welcome = () => {
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(StyledCard, Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex" }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ flex: "1" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h5", component: "h2", gutterBottom: true }, { children: translate('pos.dashboard.welcome.title') }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ maxWidth: "40em" }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body1", component: "p", gutterBottom: true }, { children: translate('pos.dashboard.welcome.subtitle') }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.CardActions, Object.assign({ className: classes.actions }, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", href: "https://marmelab.com/../../app", startIcon: (0, jsx_runtime_1.jsx)(Home_1.default, {}, void 0) }, { children: translate('pos.dashboard.welcome.ra_button') }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", href: "https://github.com/marmelab/../../app/tree/master/examples/demo", startIcon: (0, jsx_runtime_1.jsx)(Code_1.default, {}, void 0) }, { children: translate('pos.dashboard.welcome.demo_button') }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, { display: { xs: 'none', sm: 'none', md: 'block' }, className: classes.media, width: "16em", height: "9em", overflow: "hidden" }, void 0)] }), void 0) }), void 0));
};
exports.default = Welcome;
