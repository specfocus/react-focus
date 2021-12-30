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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Label_1 = __importDefault(require("@mui/icons-material/Label"));
var classnames_1 = __importDefault(require("classnames"));
var app_1 = require("../../app");
var visitors_1 = __importDefault(require("../visitors"));
var orders_1 = __importDefault(require("../orders"));
var invoices_1 = __importDefault(require("../invoices"));
var products_1 = __importDefault(require("../products"));
var categories_1 = __importDefault(require("../categories"));
var reviews_1 = __importDefault(require("../reviews"));
var SubMenu_1 = __importDefault(require("./SubMenu"));
var PREFIX = 'Menu';
var classes = {
    root: "".concat(PREFIX, "-root"),
    open: "".concat(PREFIX, "-open"),
    closed: "".concat(PREFIX, "-closed"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        _b["&.".concat(classes.open)] = {
            width: 200,
        },
        _b["&.".concat(classes.closed)] = {
            width: 55,
        },
        _b);
});
var Menu = function (_a) {
    var _b;
    var _c = _a.dense, dense = _c === void 0 ? false : _c;
    var _d = (0, react_1.useState)({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    }), state = _d[0], setState = _d[1];
    var translate = (0, app_1.useTranslate)();
    var open = (0, react_redux_1.useSelector)(function (state) { return state.admin.ui.sidebarOpen; });
    (0, react_redux_1.useSelector)(function (state) { return state.theme; }); // force rerender on theme change
    var handleToggle = function (menu) {
        setState(function (state) {
            var _a;
            return (__assign(__assign({}, state), (_a = {}, _a[menu] = !state[menu], _a)));
        });
    };
    return (React.createElement(Root, { className: (0, classnames_1.default)(classes.root, (_b = {},
            _b[classes.open] = open,
            _b[classes.closed] = !open,
            _b)) },
        ' ',
        React.createElement(app_1.DashboardMenuItem, null),
        React.createElement(SubMenu_1.default, { handleToggle: function () { return handleToggle('menuSales'); }, isOpen: state.menuSales, name: "pos.menu.sales", icon: React.createElement(orders_1.default.icon, null), dense: dense },
            React.createElement(app_1.MenuItemLink, { to: {
                    pathname: '/commands',
                    state: { _scrollToTop: true },
                }, primaryText: translate("resources.commands.name", {
                    smart_count: 2,
                }), leftIcon: React.createElement(orders_1.default.icon, null), dense: dense }),
            React.createElement(app_1.MenuItemLink, { to: {
                    pathname: '/invoices',
                    state: { _scrollToTop: true },
                }, primaryText: translate("resources.invoices.name", {
                    smart_count: 2,
                }), leftIcon: React.createElement(invoices_1.default.icon, null), dense: dense })),
        React.createElement(SubMenu_1.default, { handleToggle: function () { return handleToggle('menuCatalog'); }, isOpen: state.menuCatalog, name: "pos.menu.catalog", icon: React.createElement(products_1.default.icon, null), dense: dense },
            React.createElement(app_1.MenuItemLink, { to: {
                    pathname: '/products',
                    state: { _scrollToTop: true },
                }, primaryText: translate("resources.products.name", {
                    smart_count: 2,
                }), leftIcon: React.createElement(products_1.default.icon, null), dense: dense }),
            React.createElement(app_1.MenuItemLink, { to: {
                    pathname: '/categories',
                    state: { _scrollToTop: true },
                }, primaryText: translate("resources.categories.name", {
                    smart_count: 2,
                }), leftIcon: React.createElement(categories_1.default.icon, null), dense: dense })),
        React.createElement(SubMenu_1.default, { handleToggle: function () { return handleToggle('menuCustomers'); }, isOpen: state.menuCustomers, name: "pos.menu.customers", icon: React.createElement(visitors_1.default.icon, null), dense: dense },
            React.createElement(app_1.MenuItemLink, { to: {
                    pathname: '/customers',
                    state: { _scrollToTop: true },
                }, primaryText: translate("resources.customers.name", {
                    smart_count: 2,
                }), leftIcon: React.createElement(visitors_1.default.icon, null), dense: dense }),
            React.createElement(app_1.MenuItemLink, { to: {
                    pathname: '/segments',
                    state: { _scrollToTop: true },
                }, primaryText: translate("resources.segments.name", {
                    smart_count: 2,
                }), leftIcon: React.createElement(Label_1.default, null), dense: dense })),
        React.createElement(app_1.MenuItemLink, { to: {
                pathname: '/reviews',
                state: { _scrollToTop: true },
            }, primaryText: translate("resources.reviews.name", {
                smart_count: 2,
            }), leftIcon: React.createElement(reviews_1.default.icon, null), dense: dense })));
};
exports.default = Menu;
