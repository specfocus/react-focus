"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var styles_1 = require("@mui/material/styles");
var classnames_1 = __importDefault(require("classnames"));
var flowRight_1 = __importDefault(require("lodash/flowRight"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../core");
var default_1 = __importDefault(require("../../theme/default"));
var SkipNavigationButton_1 = __importDefault(require("../button/SkipNavigationButton"));
var AppBar_1 = __importDefault(require("./AppBar"));
var Error_1 = __importDefault(require("./Error"));
var Menu_1 = __importDefault(require("./Menu"));
var Notification_1 = __importDefault(require("./Notification"));
var Sidebar_1 = __importDefault(require("./Sidebar"));
var PREFIX = 'RaLayout';
var classes = {
    root: "".concat(PREFIX, "-root"),
    appFrame: "".concat(PREFIX, "-appFrame"),
    contentWithSidebar: "".concat(PREFIX, "-contentWithSidebar"),
    content: "".concat(PREFIX, "-content"),
};
var StyledLayout = (0, styles_1.styled)('div')(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1,
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            position: 'relative',
            minWidth: 'fit-content',
            width: '100%',
            color: theme.palette.getContrastText(theme.palette.background.default),
        },
        _b["& .".concat(classes.appFrame)] = (_c = {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
            },
            _c[theme.breakpoints.up('xs')] = {
                marginTop: theme.spacing(6),
            },
            _c[theme.breakpoints.down('sm')] = {
                marginTop: theme.spacing(7),
            },
            _c),
        _b["& .".concat(classes.contentWithSidebar)] = {
            display: 'flex',
            flexGrow: 1,
        },
        _b["& .".concat(classes.content)] = (_d = {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                flexBasis: 0,
                padding: theme.spacing(3),
                paddingTop: theme.spacing(1),
                paddingLeft: 0
            },
            _d[theme.breakpoints.up('xs')] = {
                paddingLeft: 5,
            },
            _d[theme.breakpoints.down('md')] = {
                padding: 0,
            },
            _d),
        _b);
});
var LayoutWithoutTheme = /** @class */ (function (_super) {
    __extends(LayoutWithoutTheme, _super);
    function LayoutWithoutTheme(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false, error: null, errorInfo: null };
        /**
         * Reset the error state upon navigation
         *
         * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
         */
        props.history.listen(function () {
            if (_this.state.hasError) {
                _this.setState({ hasError: false });
            }
        });
        return _this;
    }
    LayoutWithoutTheme.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ hasError: true, error: error, errorInfo: errorInfo });
    };
    LayoutWithoutTheme.prototype.render = function () {
        return react_1.default.createElement(LayoutContainer, __assign({}, this.props, this.state));
    };
    LayoutWithoutTheme.propTypes = {
        appBar: core_1.ComponentPropType,
        children: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
        classes: prop_types_1.default.object,
        className: prop_types_1.default.string,
        dashboard: core_1.ComponentPropType,
        error: core_1.ComponentPropType,
        history: prop_types_1.default.object.isRequired,
        logout: prop_types_1.default.element,
        menu: core_1.ComponentPropType,
        notification: core_1.ComponentPropType,
        open: prop_types_1.default.bool,
        sidebar: core_1.ComponentPropType,
        title: prop_types_1.default.node.isRequired,
    };
    LayoutWithoutTheme.defaultProps = {
        appBar: AppBar_1.default,
        error: Error_1.default,
        menu: Menu_1.default,
        notification: Notification_1.default,
        sidebar: Sidebar_1.default,
    };
    return LayoutWithoutTheme;
}(react_1.Component));
var LayoutContainer = function (props) {
    var appBar = props.appBar, children = props.children, className = props.className, ErrorComponent = props.error, dashboard = props.dashboard, error = props.error, errorInfo = props.errorInfo, hasError = props.hasError, logout = props.logout, menu = props.menu, notification = props.notification, open = props.open, sidebar = props.sidebar, title = props.title, 
    // sanitize react-router props
    match = props.match, location = props.location, history = props.history, staticContext = props.staticContext, rest = __rest(props, ["appBar", "children", "className", "error", "dashboard", "error", "errorInfo", "hasError", "logout", "menu", "notification", "open", "sidebar", "title", "match", "location", "history", "staticContext"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLayout, __assign({ className: (0, classnames_1.default)('layout', classes.root, className) }, rest),
            react_1.default.createElement(SkipNavigationButton_1.default, null),
            react_1.default.createElement("div", { className: classes.appFrame },
                (0, react_1.createElement)(appBar, { title: title, open: open, logout: logout }),
                react_1.default.createElement("main", { className: classes.contentWithSidebar },
                    (0, react_1.createElement)(sidebar, {
                        children: (0, react_1.createElement)(menu, {
                            logout: logout,
                            hasDashboard: !!dashboard,
                        }),
                    }),
                    react_1.default.createElement("div", { id: "main-content", className: classes.content }, hasError ? (react_1.default.createElement(ErrorComponent, { error: error, errorInfo: errorInfo, title: title })) : (children))))),
        (0, react_1.createElement)(notification)));
};
var mapStateToProps = function (state) { return ({
    open: state.admin.ui.sidebarOpen,
}); };
var EnhancedLayout = (0, flowRight_1.default)((0, react_redux_1.connect)(mapStateToProps, {} // Avoid connect passing dispatch in props
), react_router_dom_1.withRouter)(LayoutWithoutTheme);
var Layout = function (_a) {
    var themeOverride = _a.theme, props = __rest(_a, ["theme"]);
    var themeProp = (0, react_1.useRef)(themeOverride);
    var _b = (0, react_1.useState)(function () { return (0, styles_1.createTheme)(themeOverride); }), theme = _b[0], setTheme = _b[1];
    (0, react_1.useEffect)(function () {
        if (themeProp.current !== themeOverride) {
            themeProp.current = themeOverride;
            setTheme((0, styles_1.createTheme)(themeOverride));
        }
    }, [themeOverride, themeProp, theme, setTheme]);
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(EnhancedLayout, __assign({}, props))));
};
Layout.propTypes = {
    theme: prop_types_1.default.object,
};
Layout.defaultProps = {
    theme: default_1.default,
};
exports.default = Layout;
