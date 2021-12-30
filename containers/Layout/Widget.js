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
var SpeedDial_1 = __importDefault(require("@mui/lab/SpeedDial"));
var SpeedDialAction_1 = __importDefault(require("@mui/lab/SpeedDialAction"));
var styles_1 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
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
}); });
function Widget(_a) {
    var actions = _a.actions, children = _a.children, Icon = _a.icon, maxWidth = _a.maxWidth, reducer = _a.reducer, subtitle = _a.title, title = _a.title, props = __rest(_a, ["actions", "children", "icon", "maxWidth", "reducer", "title", "title"]);
    var classes = (0, exports.useStyles)();
    var _b = (0, react_1.useState)(false), openSpeedDial = _b[0], setOpenSpeedDial = _b[1];
    var handleSpeedDialClose = function () {
        setOpenSpeedDial(false);
    };
    var handleSpeedDialOpen = function () {
        setOpenSpeedDial(true);
    };
    var _c = (0, react_1.useReducer)(reducer, { index: 0, canNext: true }), state = _c[0], dispatch = _c[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(TranslatedTypography_1.default, { className: classes.title, color: "inherit", component: "h5", i18nKey: title, variant: "h5", noWrap: true }, title),
        react_1.default.createElement(SpeedDial_1.default, { ariaLabel: "SpeedDial example", className: classes.speedDial, FabProps: { className: classes.speedDialFav }, hidden: false, icon: react_1.default.createElement(Icon, { className: classes.icon }), onClose: handleSpeedDialClose, onOpen: handleSpeedDialOpen, open: openSpeedDial, direction: 'down' }, Object.entries(actions).map(function (_a) {
            var name = _a[0], _b = _a[1], action = _b.action, Icon = _b.icon, label = _b.label;
            return (react_1.default.createElement(SpeedDialAction_1.default, { key: name, icon: react_1.default.createElement(Icon, null), title: label, onClick: function () { return dispatch(action); } }));
        })),
        children));
}
exports.default = Widget;
