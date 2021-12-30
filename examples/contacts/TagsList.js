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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsList = void 0;
var styles_1 = require("@mui/styles");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var ColoredChipField = function (_a) {
    var record = _a.record, props = __rest(_a, ["record"]);
    return record ? (React.createElement(app_1.ChipField, __assign({ record: record }, props, { style: { backgroundColor: record.color, border: 0 }, component: "span" }))) : null;
};
var useStyles = (0, styles_1.makeStyles)({
    root: {
        display: 'inline-block',
    },
});
var TagsList = function (_a) {
    var record = _a.record;
    var classes = useStyles();
    if (!record)
        return null;
    return (React.createElement(app_1.ReferenceArrayField, { record: record, basePath: "/contacts", resource: "contacts", source: "tags", reference: "tags", className: classes.root },
        React.createElement(app_1.SingleFieldList, { linkType: false, component: "span" },
            React.createElement(ColoredChipField, { source: "name", variant: "outlined", size: "small" }))));
};
exports.TagsList = TagsList;
