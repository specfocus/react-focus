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
exports.NewResourceMenuItem = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var ImportResourceDialog_1 = require("./ImportResourceDialog");
var styles_1 = require("@mui/styles");
var material_1 = require("@mui/material");
var NewResourceMenuItem = function (props) {
    var sidebarIsOpen = props.sidebarIsOpen, rest = __rest(props, ["sidebarIsOpen"]);
    var _a = (0, react_1.useState)(false), showImportResourceDialog = _a[0], setShowImportResourceDialog = _a[1];
    var classes = useStyles(props);
    var handleClick = function (event) {
        setShowImportResourceDialog(true);
        props.onClick(event);
    };
    var handleCloseImportNewResourceDialog = function () {
        setShowImportResourceDialog(false);
    };
    var primaryText = 'New resource';
    var renderMenuItem = function () { return (React.createElement(material_1.MenuItem, __assign({ className: classes.root, 
        // @ts-ignore
        component: "button", tabIndex: 0 }, rest, { onClick: handleClick }),
        React.createElement(material_1.ListItemIcon, { className: classes.icon },
            React.createElement(Add_1.default, { titleAccess: primaryText })),
        primaryText)); };
    return (React.createElement(React.Fragment, null,
        sidebarIsOpen ? (renderMenuItem()) : (React.createElement(material_1.Tooltip, { title: primaryText, placement: "right" }, renderMenuItem())),
        React.createElement(ImportResourceDialog_1.ImportResourceDialog, { open: showImportResourceDialog, onClose: handleCloseImportNewResourceDialog })));
};
exports.NewResourceMenuItem = NewResourceMenuItem;
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        color: theme.palette.text.secondary,
    },
    active: {
        color: theme.palette.text.primary,
    },
    icon: { minWidth: theme.spacing(5) },
}); }, { name: 'RaMenuItemLink' });
