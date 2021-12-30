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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@mui/material/styles");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var ProductReferenceField_1 = __importDefault(require("../products/ProductReferenceField"));
var CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
var rowStyle_1 = __importDefault(require("./rowStyle"));
var StarRatingField_1 = __importDefault(require("./StarRatingField"));
var PREFIX = 'ReviewListDesktop';
var classes = {
    headerRow: "".concat(PREFIX, "-headerRow"),
    headerCell: "".concat(PREFIX, "-headerCell"),
    rowCell: "".concat(PREFIX, "-rowCell"),
    comment: "".concat(PREFIX, "-comment"),
};
var StyledDatagrid = (0, styles_1.styled)(app_1.Datagrid)((_a = {},
    _a["& .".concat(classes.headerRow)] = {
        borderLeftColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    _a["& .".concat(classes.headerCell)] = {
        padding: '6px 8px 6px 8px',
    },
    _a["& .".concat(classes.rowCell)] = {
        padding: '6px 8px 6px 8px',
    },
    _a["& .".concat(classes.comment)] = {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    _a));
var ReviewListDesktop = function (_a) {
    var selectedRow = _a.selectedRow, props = __rest(_a, ["selectedRow"]);
    return (React.createElement(StyledDatagrid, __assign({ rowClick: "edit", 
        // @ts-ignore
        rowStyle: (0, rowStyle_1.default)(selectedRow), classes: {
            headerRow: classes.headerRow,
            headerCell: classes.headerCell,
            rowCell: classes.rowCell,
        }, optimized: true }, props),
        React.createElement(app_1.DateField, { source: "date" }),
        React.createElement(CustomerReferenceField_1.default, { link: false }),
        React.createElement(ProductReferenceField_1.default, { link: false }),
        React.createElement(StarRatingField_1.default, { size: "small" }),
        React.createElement(app_1.TextField, { source: "comment", cellClassName: classes.comment }),
        React.createElement(app_1.TextField, { source: "status" })));
};
exports.default = ReviewListDesktop;
