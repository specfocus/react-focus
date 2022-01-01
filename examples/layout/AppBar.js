"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const app_1 = require("../../app");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Settings_1 = __importDefault(require("@mui/icons-material/Settings"));
const Logo_1 = __importDefault(require("./Logo"));
const PREFIX = 'CustomAppBar';
const classes = {
    title: `${PREFIX}-title`,
    spacer: `${PREFIX}-spacer`,
};
const StyledAppBar = (0, styles_1.styled)(app_1.AppBar)({
    [`& .${classes.title}`]: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    [`& .${classes.spacer}`]: {
        flex: 1,
    },
});
const ConfigurationMenu = (0, react_1.forwardRef)((props, ref) => {
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(app_1.MenuItemLink, { ref: ref, to: "/configuration", primaryText: translate('pos.configuration'), leftIcon: (0, jsx_runtime_1.jsx)(Settings_1.default, {}, void 0), onClick: props.onClick, sidebarIsOpen: true }, void 0));
});
const CustomUserMenu = (props) => ((0, jsx_runtime_1.jsx)(app_1.UserMenu, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(ConfigurationMenu, {}, void 0) }), void 0));
const CustomAppBar = (props) => {
    return ((0, jsx_runtime_1.jsxs)(StyledAppBar, Object.assign({}, props, { elevation: 1, userMenu: (0, jsx_runtime_1.jsx)(CustomUserMenu, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", color: "inherit", className: classes.title, id: "../../app-title" }, void 0), (0, jsx_runtime_1.jsx)(Logo_1.default, {}, void 0), (0, jsx_runtime_1.jsx)("span", { className: classes.spacer }, void 0)] }), void 0));
};
exports.default = CustomAppBar;
