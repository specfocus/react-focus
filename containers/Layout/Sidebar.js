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
exports.DrawerHeader = void 0;
var ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
var ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var List_1 = __importDefault(require("@mui/material/List"));
var ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var recoil_1 = require("recoil");
var AppSidebar_1 = require("../../app/AppSidebar");
var AppState_1 = require("../../app/AppState");
var TranslatedListItem_1 = __importDefault(require("../../components/TranslatedListItem"));
var TranslatedListItemLink_1 = __importDefault(require("../../components/TranslatedListItemLink"));
var TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
var drawerWidth = 240;
var openedMixin = function (theme) { return ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
}); };
var closedMixin = function (theme) {
    var _a;
    return (_a = {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: "calc(".concat(theme.spacing(7), " + 1px)")
        },
        _a[theme.breakpoints.up('sm')] = {
            width: "calc(".concat(theme.spacing(9), " + 1px)"),
        },
        _a);
};
exports.DrawerHeader = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return (__assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: theme.spacing(0, 1) }, theme.mixins.toolbar));
});
var Drawer = (0, styles_1.styled)(Drawer_1.default, { shouldForwardProp: function (prop) { return prop !== 'open'; } })(function (_a) {
    var theme = _a.theme, open = _a.open;
    return (__assign(__assign({ width: drawerWidth, flexShrink: 0, whiteSpace: 'nowrap', boxSizing: 'border-box' }, (open && __assign(__assign({}, openedMixin(theme)), { '& .MuiDrawer-paper': openedMixin(theme) }))), (!open && __assign(__assign({}, closedMixin(theme)), { '& .MuiDrawer-paper': closedMixin(theme) }))));
});
var useStyles = (0, styles_2.makeStyles)(function (theme) {
    var _a;
    return ({
        subtitle: {
            paddingLeft: theme.spacing(2),
        },
        item: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#000'
        },
        toolbarIcon: __assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px' }, theme.mixins.toolbar),
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: (_a = {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7)
            },
            _a[theme.breakpoints.up('sm')] = {
                width: theme.spacing(9),
            },
            _a),
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
    });
});
function Sidebar() {
    var classes = useStyles();
    var _a = (0, recoil_1.useRecoilState)(AppState_1.appSidebar), drawerState = _a[0], setDrawerState = _a[1];
    var drawerOpen = drawerState === 'expanded';
    var sidebar = (0, AppSidebar_1.useAppSidebar)();
    var location = (0, react_router_dom_1.useLocation)();
    var theme = (0, styles_1.useTheme)();
    var handleDrawerShrink = function (event) {
        setDrawerState(drawerOpen ? 'collapsed' : 'expanded');
    };
    console.log({ drawerOpen: drawerOpen, drawerState: drawerState });
    var chevronRight = theme.direction === 'rtl' ? drawerOpen : !drawerOpen;
    return (react_1.default.createElement(Drawer, { variant: "permanent", open: drawerOpen },
        react_1.default.createElement(exports.DrawerHeader, null,
            drawerOpen && (react_1.default.createElement(Box_1.default, { component: "img", sx: {
                    height: 61,
                    width: 150,
                    maxHeight: { xs: 61, md: 61 },
                    maxWidth: { xs: 150, md: 150 },
                }, alt: "Ufinet", src: "/logo_ufinet.png" })),
            react_1.default.createElement(IconButton_1.default, { onClick: handleDrawerShrink }, chevronRight ? react_1.default.createElement(ChevronRight_1.default, null) : react_1.default.createElement(ChevronLeft_1.default, null))),
        sidebar && Array.isArray(sidebar.lists) && sidebar.lists.map(function (list, listIndex) { return (react_1.default.createElement(react_1.Fragment, { key: "fragment-".concat(listIndex) },
            drawerOpen && (react_1.default.createElement(Divider_1.default, { key: "divider-".concat(listIndex) })),
            react_1.default.createElement(List_1.default, { key: "list-".concat(listIndex) },
                drawerOpen && list.subheader && (react_1.default.createElement(ListSubheader_1.default, { key: "list-".concat(listIndex, "-subheader"), className: classes.subtitle, inset: true }, react_1.default.createElement(TranslatedTypography_1.default, { variant: "overline" }, list.subheader))),
                list && Array.isArray(list.items) && list.items.map(function (item, itemIndex) {
                    var key = "list-".concat(listIndex, "-item-").concat(itemIndex);
                    var type = item.type, props = __rest(item, ["type"]);
                    switch (type) {
                        case 'link':
                            var match = (0, react_router_dom_1.matchPath)(location.pathname, { path: props.to, strict: props.strict });
                            if (!match) {
                            }
                            else if (match.isExact) {
                                Object.assign(props, { selected: true });
                            }
                            else {
                                // Object.assign(props, { selected: true });
                            }
                            return (react_1.default.createElement(TranslatedListItemLink_1.default, __assign({ className: classes.item, key: key }, props)));
                        default:
                            return (react_1.default.createElement(TranslatedListItem_1.default, __assign({ className: classes.item, key: key }, props)));
                    }
                })))); })));
}
exports.default = Sidebar;
