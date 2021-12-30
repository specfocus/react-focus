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
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../core");
var default_1 = __importDefault(require("../../theme/default"));
var Notification_1 = __importDefault(require("../layout/Notification"));
var LoginForm_1 = __importDefault(require("./LoginForm"));
var PREFIX = 'RaLogin';
var classes = {
    main: "".concat(PREFIX, "-main"),
    card: "".concat(PREFIX, "-card"),
    avatar: "".concat(PREFIX, "-avatar"),
    icon: "".concat(PREFIX, "-icon"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.main)] = {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            height: '1px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
        },
        _b["& .".concat(classes.card)] = {
            minWidth: 300,
            marginTop: '6em',
        },
        _b["& .".concat(classes.avatar)] = {
            margin: '1em',
            display: 'flex',
            justifyContent: 'center',
        },
        _b["& .".concat(classes.icon)] = {
            backgroundColor: theme.palette.secondary[500],
        },
        _b);
});
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
var Login = function (props) {
    var theme = props.theme, rest = __rest(props, ["theme"]);
    var muiTheme = (0, react_1.useMemo)(function () { return (0, styles_1.createTheme)(theme); }, [theme]);
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: muiTheme },
        react_1.default.createElement(LoginContainer, __assign({}, rest))));
};
var LoginContainer = function (props) {
    var title = props.title, classesOverride = props.classes, className = props.className, children = props.children, notification = props.notification, staticContext = props.staticContext, backgroundImage = props.backgroundImage, rest = __rest(props, ["title", "classes", "className", "children", "notification", "staticContext", "backgroundImage"]);
    var containerRef = (0, react_1.useRef)();
    var backgroundImageLoaded = false;
    var checkAuth = (0, core_1.useCheckAuth)();
    var history = (0, react_router_dom_1.useHistory)();
    (0, react_1.useEffect)(function () {
        checkAuth({}, false)
            .then(function () {
            // already authenticated, redirect to the home page
            history.push('/');
        })
            .catch(function () {
            // not authenticated, stay on the login page
        });
    }, [checkAuth, history]);
    var updateBackgroundImage = function () {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = "url(".concat(backgroundImage, ")");
            backgroundImageLoaded = true;
        }
    };
    // Load background image asynchronously to speed up time to interactive
    var lazyLoadBackgroundImage = function () {
        if (backgroundImage) {
            var img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };
    (0, react_1.useEffect)(function () {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });
    return (react_1.default.createElement(Root, __assign({ className: (0, classnames_1.default)(classes.main, className) }, rest, { ref: containerRef }),
        react_1.default.createElement(material_1.Card, { className: classes.card },
            react_1.default.createElement("div", { className: classes.avatar },
                react_1.default.createElement(material_1.Avatar, { className: classes.icon },
                    react_1.default.createElement(Lock_1.default, null))),
            children),
        notification ? (0, react_1.createElement)(notification) : null));
};
Login.propTypes = {
    backgroundImage: prop_types_1.default.string,
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    theme: prop_types_1.default.object,
    staticContext: prop_types_1.default.object,
};
Login.defaultProps = {
    theme: default_1.default,
    children: react_1.default.createElement(LoginForm_1.default, null),
    notification: Notification_1.default,
};
exports.default = Login;
