"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_redux_1 = require("react-redux");
const material_1 = require("@mui/material");
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const app_1 = require("../../app");
const PREFIX = 'SubMenu';
const classes = {
    icon: `${PREFIX}-icon`,
    sidebarIsOpen: `${PREFIX}-sidebarIsOpen`,
    sidebarIsClosed: `${PREFIX}-sidebarIsClosed`,
};
// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.icon}`]: { minWidth: theme.spacing(5) },
    [`& .${classes.sidebarIsOpen}`]: {
        '& a': {
            transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            paddingLeft: theme.spacing(4),
        },
    },
    [`& .${classes.sidebarIsClosed}`]: {
        '& a': {
            transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            paddingLeft: theme.spacing(2),
        },
    },
}));
const SubMenu = (props) => {
    const { handleToggle, isOpen, name, icon, children, dense } = props;
    const translate = (0, app_1.useTranslate)();
    const sidebarIsOpen = (0, react_redux_1.useSelector)(state => state.admin.ui.sidebarOpen);
    const header = ((0, jsx_runtime_1.jsxs)(material_1.MenuItem, Object.assign({ dense: dense, onClick: handleToggle }, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, Object.assign({ className: classes.icon }, { children: isOpen ? (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}, void 0) : icon }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "inherit", color: "textSecondary" }, { children: translate(name) }), void 0)] }), void 0));
    return ((0, jsx_runtime_1.jsxs)(Root, { children: [sidebarIsOpen || isOpen ? (header) : ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: translate(name), placement: "right" }, { children: header }), void 0)), (0, jsx_runtime_1.jsx)(material_1.Collapse, Object.assign({ in: isOpen, timeout: "auto", unmountOnExit: true }, { children: (0, jsx_runtime_1.jsx)(material_1.List, Object.assign({ dense: dense, component: "div", disablePadding: true, className: sidebarIsOpen
                        ? classes.sidebarIsOpen
                        : classes.sidebarIsClosed }, { children: children }), void 0) }), void 0)] }, void 0));
};
exports.default = SubMenu;
