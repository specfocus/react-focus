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
var classnames_1 = __importDefault(require("classnames"));
var react_redux_1 = require("react-redux");
var styles_2 = require("@mui/material/styles");
var CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
var core_1 = require("../../core");
var RefreshIconButton_1 = __importDefault(require("../button/RefreshIconButton"));
var PREFIX = 'RaLoadingIndicator';
var classes = {
    loader: "".concat(PREFIX, "-loader"),
    loadedIcon: "".concat(PREFIX, "-loadedIcon"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.loader)] = {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        _b["& .".concat(classes.loadedIcon)] = {},
        _b);
});
var LoadingIndicator = function (props) {
    var className = props.className, rest = __rest(props, ["className"]);
    (0, core_1.useRefreshWhenVisible)();
    var loading = (0, react_redux_1.useSelector)(function (state) { return state.admin.loading > 0; });
    var theme = (0, styles_2.useTheme)();
    return (React.createElement(Root, null, loading ? (React.createElement(CircularProgress_1.default, __assign({ className: (0, classnames_1.default)('app-loader', classes.loader, className), color: "inherit", size: theme.spacing(2), thickness: 6 }, rest))) : (React.createElement(RefreshIconButton_1.default, { className: classes.loadedIcon }))));
};
LoadingIndicator.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    width: prop_types_1.default.string,
};
exports.default = LoadingIndicator;
