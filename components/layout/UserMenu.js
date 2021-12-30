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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("../../core");
var material_1 = require("@mui/material");
var AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
var PREFIX = 'RaUserMenu';
var classes = {
    user: "".concat(PREFIX, "-user"),
    userButton: "".concat(PREFIX, "-userButton"),
    avatar: "".concat(PREFIX, "-avatar"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.user)] = {},
        _b["& .".concat(classes.userButton)] = {
            textTransform: 'none',
        },
        _b["& .".concat(classes.avatar)] = {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        _b);
});
var defaultIcon = React.createElement(AccountCircle_1.default, null);
var AnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
};
var TransformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
var UserMenu = function (props) {
    var _a = (0, react_1.useState)(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var translate = (0, core_1.useTranslate)();
    var _b = (0, core_1.useGetIdentity)(), loaded = _b.loaded, identity = _b.identity;
    var children = props.children, _c = props.label, label = _c === void 0 ? 'ra.auth.user_menu' : _c, _d = props.icon, icon = _d === void 0 ? defaultIcon : _d, logout = props.logout;
    if (!logout && !children)
        return null;
    var open = Boolean(anchorEl);
    var handleMenu = function (event) { return setAnchorEl(event.currentTarget); };
    var handleClose = function () { return setAnchorEl(null); };
    return (React.createElement(Root, { className: classes.user },
        loaded && (identity === null || identity === void 0 ? void 0 : identity.fullName) ? (React.createElement(material_1.Button, { "aria-label": label && translate(label, { _: label }), className: classes.userButton, color: "inherit", startIcon: identity.avatar ? (React.createElement(material_1.Avatar, { className: classes.avatar, src: identity.avatar, alt: identity.fullName })) : (icon), onClick: handleMenu }, identity.fullName)) : (React.createElement(material_1.Tooltip, { title: label && translate(label, { _: label }) },
            React.createElement(material_1.IconButton, { "aria-label": label && translate(label, { _: label }), "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": true, color: "inherit", onClick: handleMenu, size: "large" }, icon))),
        React.createElement(material_1.Menu, { id: "menu-appbar", disableScrollLock: true, anchorEl: anchorEl, anchorOrigin: AnchorOrigin, transformOrigin: TransformOrigin, open: open, onClose: handleClose },
            react_1.Children.map(children, function (menuItem) {
                return (0, react_1.isValidElement)(menuItem)
                    ? (0, react_1.cloneElement)(menuItem, {
                        onClick: handleClose,
                    })
                    : null;
            }),
            logout)));
};
UserMenu.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    logout: prop_types_1.default.element,
    icon: prop_types_1.default.node,
};
exports.default = UserMenu;
