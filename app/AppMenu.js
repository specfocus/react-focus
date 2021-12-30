"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var PowerSettingsNew_1 = __importDefault(require("@mui/icons-material/PowerSettingsNew"));
var SpeedDial_1 = __importDefault(require("@mui/lab/SpeedDial"));
var SpeedDialAction_1 = __importDefault(require("@mui/lab/SpeedDialAction"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var styles_1 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var AzureAuthentication_1 = require("../azure/AzureAuthentication");
var AppStack_1 = require("./AppStack");
var examples = [
    ["Lucas Oromi", "/avatar-male.png"],
    ["Komra Salo", "/avatar-female.png"],
    ["Remy Sharp", "https://mui.com/static/images/avatar/1.jpg"],
    ["Travis Howard", "https://mui.com/static/images/avatar/2.jpg"],
    ["Cindy Baker", "https://mui.com/static/images/avatar/3.jpg"]
];
var actions = [
    /*
    { icon: <UserPreferencesIcon />, name: 'Preferences', type: USER_PREFERENCES },
    { icon: <UserAccountIcon />, name: 'View Account', type: USER_ACCOUNT },
    { icon: <UserProfileIcon />, name: 'Profile', type: USER_PROFILE },
    { icon: <SwitchAccountIcon />, name: 'Switch Tenant', type: SWITCH_ACCOUNT },
    */
    { icon: react_1.default.createElement(PowerSettingsNew_1.default, null), name: 'Sign Out', type: AzureAuthentication_1.SIGN_OUT },
];
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
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
}); });
var UserMenu = function () {
    var classes = useStyles();
    var _a = react_1.default.useState(false), open = _a[0], setOpen = _a[1];
    var trigger = (0, AppStack_1.useAppStack)().trigger;
    var props = (0, react_1.useMemo)(function () {
        var _a = examples[Math.round(4 * Math.random())], alt = _a[0], src = _a[1];
        return { alt: alt, src: src };
    }, []);
    var handleAction = function (action) {
        if (action.type) {
            trigger(action.type);
        }
        setOpen(false);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var handleOpen = function () {
        setOpen(true);
    };
    return (react_1.default.createElement(SpeedDial_1.default, { ariaLabel: "User menu", className: classes.speedDial, hidden: false, icon: react_1.default.createElement(Avatar_1.default, __assign({ className: classes.avatar }, props)), onClose: handleClose, onOpen: handleOpen, open: open, direction: 'down' }, actions.map(function (action) { return (react_1.default.createElement(SpeedDialAction_1.default, { key: action.name, icon: action.icon, tooltipTitle: action.name, onClick: function () { return handleAction(action); } })); })));
};
exports.default = UserMenu;
