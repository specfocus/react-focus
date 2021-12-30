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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __importDefault(require("@mui/material/Box"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var styles_1 = require("@mui/material/styles");
var useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
var react_1 = __importStar(require("react"));
var presets_1 = require("./presets");
var shrink = function (_a) {
    var width = _a[0], sizes = _a.slice(1);
    return __spreadArray([
        Math.max(1, width - 1)
    ], sizes.map(function (_a) {
        var w = _a[0], h = _a[1];
        return [Math.max(1, w - 1), h];
    }), true);
};
function AutoGrid(_a) {
    var config = _a.config, children = _a.children, props = __rest(_a, ["config", "children"]);
    var theme = (0, styles_1.useTheme)();
    var lg = (0, useMediaQuery_1.default)(theme.breakpoints.up('lg'));
    var md = (0, useMediaQuery_1.default)(theme.breakpoints.up('md'));
    if (config.length === 1) {
        var width = config[0];
        var min = function (n) { return Math.min(12, Math.max(1, Math.floor(n))); };
        var sizes_1 = { xs: 12 };
        if (width > 1) {
            var lg_1 = min(12 / width);
            Object.assign(sizes_1, { lg: lg_1 });
        }
        if (width > 2) {
            var md_1 = min(3 * 12 / (2 * width));
            Object.assign(sizes_1, { md: md_1 });
        }
        return (react_1.default.createElement(Grid_1.default, { spacing: 4, container: true }, react_1.Children.toArray(children).map(function (child, index) {
            return (react_1.default.createElement(Grid_1.default, __assign({ key: "grid-item-".concat(index) }, sizes_1, { item: true }), child));
        })));
    }
    if (!lg) {
        config = shrink(config);
    }
    if (!md) {
        config = shrink(config);
    }
    var system = {
        sx: __assign({ gridColumnGap: 10, gridRowGap: 10, padding: 0, spacing: 0 }, (0, presets_1.generateSystemProps)(config)),
        lg: (0, presets_1.generateSystemProps)(config)
    };
    return (react_1.default.createElement(Box_1.default, __assign({}, system, props), react_1.Children.toArray(children).map(function (child, index) {
        return (react_1.default.createElement(Box_1.default, { key: "box-item-".concat(index), sx: { gridArea: "a".concat(index) } }, child));
    })));
}
exports.default = AutoGrid;
