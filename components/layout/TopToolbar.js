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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var classnames_1 = __importDefault(require("classnames"));
var PREFIX = 'RaTopToolbar';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var StyledToolbar = (0, styles_1.styled)(Toolbar_1.default)(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = (_c = {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                paddingTop: theme.spacing(3),
                paddingBottom: theme.spacing(1),
                minHeight: theme.spacing(5)
            },
            _c[theme.breakpoints.up('xs')] = {
                paddingLeft: 0,
                paddingRight: 0,
            },
            _c[theme.breakpoints.down('md')] = {
                paddingRight: theme.spacing(2),
            },
            _c[theme.breakpoints.down('sm')] = {
                padding: theme.spacing(1),
                backgroundColor: theme.palette.background.paper,
            },
            _c),
        _b);
});
var TopToolbar = function (props) {
    var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
    return (React.createElement(StyledToolbar, __assign({ className: (0, classnames_1.default)(classes.root, className) }, rest), children));
};
TopToolbar.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
};
exports.default = TopToolbar;
