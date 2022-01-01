"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const Label_1 = __importDefault(require("@mui/icons-material/Label"));
const classnames_1 = __importDefault(require("classnames"));
const app_1 = require("../../app");
const visitors_1 = __importDefault(require("../visitors"));
const orders_1 = __importDefault(require("../orders"));
const invoices_1 = __importDefault(require("../invoices"));
const products_1 = __importDefault(require("../products"));
const categories_1 = __importDefault(require("../categories"));
const reviews_1 = __importDefault(require("../reviews"));
const SubMenu_1 = __importDefault(require("./SubMenu"));
const PREFIX = 'Menu';
const classes = {
    root: `${PREFIX}-root`,
    open: `${PREFIX}-open`,
    closed: `${PREFIX}-closed`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    [`&.${classes.open}`]: {
        width: 200,
    },
    [`&.${classes.closed}`]: {
        width: 55,
    },
}));
const Menu = ({ dense = false }) => {
    const [state, setState] = (0, react_1.useState)({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const translate = (0, app_1.useTranslate)();
    const open = (0, react_redux_1.useSelector)((state) => state.admin.ui.sidebarOpen);
    (0, react_redux_1.useSelector)((state) => state.theme); // force rerender on theme change
    const handleToggle = (menu) => {
        setState(state => (Object.assign(Object.assign({}, state), { [menu]: !state[menu] })));
    };
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)(classes.root, {
            [classes.open]: open,
            [classes.closed]: !open,
        }) }, { children: [' ', (0, jsx_runtime_1.jsx)(app_1.DashboardMenuItem, {}, void 0), (0, jsx_runtime_1.jsxs)(SubMenu_1.default, Object.assign({ handleToggle: () => handleToggle('menuSales'), isOpen: state.menuSales, name: "pos.menu.sales", icon: (0, jsx_runtime_1.jsx)(orders_1.default.icon, {}, void 0), dense: dense }, { children: [(0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { to: '/commands', state: { _scrollToTop: true }, primaryText: translate(`resources.commands.name`, {
                            smart_count: 2,
                        }), leftIcon: (0, jsx_runtime_1.jsx)(orders_1.default.icon, {}, void 0), dense: dense }, void 0), (0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { to: '/invoices', state: { _scrollToTop: true }, primaryText: translate(`resources.invoices.name`, {
                            smart_count: 2,
                        }), leftIcon: (0, jsx_runtime_1.jsx)(invoices_1.default.icon, {}, void 0), dense: dense }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(SubMenu_1.default, Object.assign({ handleToggle: () => handleToggle('menuCatalog'), isOpen: state.menuCatalog, name: "pos.menu.catalog", icon: (0, jsx_runtime_1.jsx)(products_1.default.icon, {}, void 0), dense: dense }, { children: [(0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { to: '/products', state: { _scrollToTop: true }, primaryText: translate(`resources.products.name`, {
                            smart_count: 2,
                        }), leftIcon: (0, jsx_runtime_1.jsx)(products_1.default.icon, {}, void 0), dense: dense }, void 0), (0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { to: '/categories', state: { _scrollToTop: true }, primaryText: translate(`resources.categories.name`, {
                            smart_count: 2,
                        }), leftIcon: (0, jsx_runtime_1.jsx)(categories_1.default.icon, {}, void 0), dense: dense }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(SubMenu_1.default, Object.assign({ handleToggle: () => handleToggle('menuCustomers'), isOpen: state.menuCustomers, name: "pos.menu.customers", icon: (0, jsx_runtime_1.jsx)(visitors_1.default.icon, {}, void 0), dense: dense }, { children: [(0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { to: '/customers', state: { _scrollToTop: true }, primaryText: translate(`resources.customers.name`, {
                            smart_count: 2,
                        }), leftIcon: (0, jsx_runtime_1.jsx)(visitors_1.default.icon, {}, void 0), dense: dense }, void 0), (0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { to: '/segments', state: { _scrollToTop: true }, primaryText: translate(`resources.segments.name`, {
                            smart_count: 2,
                        }), leftIcon: (0, jsx_runtime_1.jsx)(Label_1.default, {}, void 0), dense: dense }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { to: '/reviews', state: { _scrollToTop: true }, primaryText: translate(`resources.reviews.name`, {
                    smart_count: 2,
                }), leftIcon: (0, jsx_runtime_1.jsx)(reviews_1.default.icon, {}, void 0), dense: dense }, void 0)] }), void 0));
};
exports.default = Menu;
