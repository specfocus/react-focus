"use strict";
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
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const ProductReferenceField_1 = __importDefault(require("../products/ProductReferenceField"));
const CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
const rowStyle_1 = __importDefault(require("./rowStyle"));
const StarRatingField_1 = __importDefault(require("./StarRatingField"));
const PREFIX = 'ReviewListDesktop';
const classes = {
    headerRow: `${PREFIX}-headerRow`,
    headerCell: `${PREFIX}-headerCell`,
    rowCell: `${PREFIX}-rowCell`,
    comment: `${PREFIX}-comment`,
};
const StyledDatagrid = (0, styles_1.styled)(app_1.Datagrid, { shouldForwardProp: prop => prop !== 'classes' })({
    [`& .${classes.headerRow}`]: {
        borderLeftColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    [`& .${classes.headerCell}`]: {
        padding: '6px 8px 6px 8px',
    },
    [`& .${classes.rowCell}`]: {
        padding: '6px 8px 6px 8px',
    },
    [`& .${classes.comment}`]: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});
const ReviewListDesktop = (_a) => {
    var { selectedRow } = _a, props = __rest(_a, ["selectedRow"]);
    return ((0, jsx_runtime_1.jsxs)(StyledDatagrid, Object.assign({ rowClick: "edit", rowStyle: (0, rowStyle_1.default)(selectedRow), classes: {
            headerRow: classes.headerRow,
            headerCell: classes.headerCell,
            rowCell: classes.rowCell,
        }, optimized: true }, props, { children: [(0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date" }, void 0), (0, jsx_runtime_1.jsx)(CustomerReferenceField_1.default, { link: false }, void 0), (0, jsx_runtime_1.jsx)(ProductReferenceField_1.default, { link: false }, void 0), (0, jsx_runtime_1.jsx)(StarRatingField_1.default, { size: "small" }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "comment", cellClassName: classes.comment }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "status" }, void 0)] }), void 0));
};
exports.default = ReviewListDesktop;
