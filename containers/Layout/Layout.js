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
exports.TOOLBAR_UPDATE = void 0;
var Box_1 = __importDefault(require("@mui/material/Box"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Hidden_1 = __importDefault(require("@mui/material/Hidden"));
var styles_1 = require("@mui/styles");
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var react_1 = __importDefault(require("react"));
var TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
var AppMenu_1 = __importDefault(require("../../app/AppMenu"));
var Sidebar_1 = __importStar(require("./Sidebar"));
var AppState_1 = require("../../app/AppState");
var recoil_1 = require("recoil");
var AppStack_1 = require("../../app/AppStack");
var styles_2 = require("@mui/material/styles");
var AppBar_1 = __importDefault(require("@mui/material/AppBar"));
exports.TOOLBAR_UPDATE = 'TOOLBAR_UPDATE';
var drawerWidth = 240;
// ListActions -> TopToolbar
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        display: 'flex',
        height: '100vh'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: "calc(100% - ".concat(drawerWidth, "px)"),
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    /*
    appBarTools: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      flexFlow: 'row',
      flexWrap: 'nowrap',
      gap: theme.spacing(1),
      justifyContent: 'flex-end',
    },
    */
    content: {
        flexGrow: 1,
        height: "calc(100vh - ".concat(theme.spacing(8), ")"),
        overflow: 'hidden',
        marginTop: theme.spacing(8)
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    fixedHeight: {
        height: 240,
    },
    menuButton: {
        // marginRight: 36,
        marginLeft: 48,
    },
    menuButtonHidden: {
        display: 'none',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    subtitle: {
        flexGrow: 0
    },
    title: {
        flexGrow: 0,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    }
}); });
var AppBar = (0, styles_2.styled)(AppBar_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'open'; },
})(function (_a) {
    var theme = _a.theme, open = _a.open;
    return (__assign({ zIndex: theme.zIndex.drawer - 1, transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }) }, (open && {
        marginLeft: drawerWidth,
        width: "calc(100% - ".concat(drawerWidth, "px)"),
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })));
});
function Layout(_a) {
    var children = _a.children;
    var classes = useStyles();
    // const title = useRecoilValue(appTitle);
    var _b = (0, recoil_1.useRecoilState)(AppState_1.appSidebar), drawerState = _b[0], setDrawerState = _b[1];
    var handleSidebarDrawerExpand = function (event) {
        setDrawerState('expanded');
    };
    var stack = (0, recoil_1.useRecoilValue)(AppStack_1.appStack);
    var buttons = [];
    var index = 0;
    var title = process.env.REACT_APP_TITLE || '';
    for (var _i = 0, _c = Object.entries(stack || {}); _i < _c.length; _i++) {
        var _d = _c[_i], key = _d[0], config = _d[1];
        if (config.title) {
            title = config.title;
        }
        if (config === null || config === void 0 ? void 0 : config.tools) {
            if (index > 0) {
                buttons.push(react_1.default.createElement(Divider_1.default, { orientation: "vertical", flexItem: true }));
            }
            index++;
            for (var _e = 0, _f = config.tools; _e < _f.length; _e++) {
                var Tool = _f[_e];
                if (Tool !== null) {
                    buttons.push(react_1.default.createElement(Tool, null));
                }
                else {
                    buttons.push(react_1.default.createElement(Divider_1.default, { orientation: "vertical", flexItem: true }));
                }
            }
        }
    }
    var drawerOpen = drawerState === 'expanded';
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(AppBar, { position: "fixed", open: drawerOpen },
            react_1.default.createElement(Toolbar_1.default, { className: classes.toolbar },
                react_1.default.createElement(Hidden_1.default, { smDown: true },
                    react_1.default.createElement(TranslatedTypography_1.default, { className: classes.title, color: "inherit", component: "h1", i18nKey: title, variant: "h6", sx: __assign({}, (!drawerOpen && { marginLeft: 9 })), noWrap: true }, title)),
                react_1.default.createElement(Box_1.default, { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flex: "row", flexWrap: "nowrap", justifyContent: "flex-end", 
                    // md={{ marginRight: 6 }} v5
                    marginRight: 6 }, buttons)),
            react_1.default.createElement(Hidden_1.default, { smDown: true },
                react_1.default.createElement(AppMenu_1.default, null))),
        react_1.default.createElement(Sidebar_1.default, null),
        react_1.default.createElement(Box_1.default, { component: "main", sx: { flexGrow: 1, overflow: 'hidden' } },
            react_1.default.createElement(Sidebar_1.DrawerHeader, null),
            children)));
}
exports.default = Layout;
