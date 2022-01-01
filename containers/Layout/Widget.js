"use strict";
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
exports.useStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SpeedDial_1 = __importDefault(require("@mui/lab/SpeedDial"));
const SpeedDialAction_1 = __importDefault(require("@mui/material/SpeedDialAction"));
const styles_1 = require("@mui/styles");
const react_1 = require("react");
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
exports.useStyles = (0, styles_1.makeStyles)((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    divider: {
        margin: theme.spacing(4, 0, 2, 0)
    },
    header: {
        display: 'block',
        justifyContent: 'stretch',
        marginBottom: 0
    },
    content: {
        marginTop: 0
    },
    container: {
        display: 'flex',
        flexGrow: 1,
        // height: `calc(100% - ${theme.spacing(6)})`,
        overflowY: 'hidden',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    },
    icon: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    speedDial: {
        position: 'fixed',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(.5),
            right: theme.spacing(.5),
        },
    },
    speedDialFav: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        opacity: .5,
        transition: 'opacity .5s ease-out',
        /*
        '-moz-transition': 'opacity .5s ease-out',
        '-webkit-transition': 'opacity .5s ease-out',
        '-o-transition': 'opacity .5s ease-out',
        `*/
        '&[aria-expanded=true]': {
            opacity: 1
        },
    },
    title: {
        flexGrow: 0,
        textAlign: 'center'
    },
    toolbar: {}
}));
function Widget(_a) {
    var { actions, children, icon: Icon, maxWidth, reducer, title: subtitle, title } = _a, props = __rest(_a, ["actions", "children", "icon", "maxWidth", "reducer", "title", "title"]);
    const classes = (0, exports.useStyles)();
    const [openSpeedDial, setOpenSpeedDial] = (0, react_1.useState)(false);
    const handleSpeedDialClose = () => {
        setOpenSpeedDial(false);
    };
    const handleSpeedDialOpen = () => {
        setOpenSpeedDial(true);
    };
    const [state, dispatch] = (0, react_1.useReducer)(reducer, { index: 0, canNext: true });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ className: classes.title, color: "inherit", component: "h5", i18nKey: title, variant: "h5", noWrap: true }, { children: title }), void 0), (0, jsx_runtime_1.jsx)(SpeedDial_1.default, Object.assign({ ariaLabel: "SpeedDial example", className: classes.speedDial, FabProps: { className: classes.speedDialFav }, hidden: false, icon: (0, jsx_runtime_1.jsx)(Icon, { className: classes.icon }, void 0), onClose: handleSpeedDialClose, onOpen: handleSpeedDialOpen, open: openSpeedDial, direction: 'down' }, { children: Object.entries(actions).map(([name, { action, icon: Icon, label }]) => ((0, jsx_runtime_1.jsx)(SpeedDialAction_1.default, { icon: (0, jsx_runtime_1.jsx)(Icon, {}, void 0), title: label, onClick: () => dispatch(action) }, name))) }), void 0), children] }, void 0));
}
exports.default = Widget;
