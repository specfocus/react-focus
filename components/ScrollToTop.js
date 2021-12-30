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
exports.ScrollToTop = void 0;
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/styles");
var Fab_1 = __importDefault(require("@mui/material/Fab"));
// import NavigationIcon from '@mui/icons-material/Navigation';
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        display: "flex",
        border: "none",
        bottom: 40,
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
        outline: "none",
        position: "fixed",
        transition: "opacity 1s ease-in-out",
        width: "100%",
        zIndex: 2
    },
    active: {
        transform: "matrix(0.95, 0, 0, 0.95, 0, 0)"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}); });
function scrollToTop(smooth) {
    if (smooth === void 0) { smooth = false; }
    if (smooth) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    else {
        document.documentElement.scrollTop = 0;
    }
}
var ScrollToTop = function (_a) {
    var _b = _a.top, top = _b === void 0 ? 20 : _b, 
    // className = styles["scroll-to-top"],
    _c = _a.color, 
    // className = styles["scroll-to-top"],
    color = _c === void 0 ? "black" : _c, _d = _a.smooth, smooth = _d === void 0 ? false : _d, _e = _a.viewBox, viewBox = _e === void 0 ? "0 0 256 256" : _e, _f = _a.svgPath, svgPath = _f === void 0 ? "M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z" : _f, props = __rest(_a, ["top", "color", "smooth", "viewBox", "svgPath"]);
    var _g = (0, react_1.useState)(false), visible = _g[0], setVisible = _g[1];
    var onScroll = function () {
        setVisible(document.documentElement.scrollTop > top);
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("scroll", onScroll);
        // Remove listener on unmount
        return function () { return document.removeEventListener("scroll", onScroll); };
    }, []);
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.root }, visible && (react_1.default.createElement(Fab_1.default, __assign({ onClick: function () { return scrollToTop(smooth); }, variant: "extended" }, props), "up"))));
};
exports.ScrollToTop = ScrollToTop;
