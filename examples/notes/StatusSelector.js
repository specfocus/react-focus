"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSelector = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const clsx_1 = __importDefault(require("clsx"));
const Status_1 = require("../../components/misc/Status");
const useStyles = (0, styles_1.makeStyles)({
    root: {
        width: 150,
    },
});
const StatusSelector = ({ status, setStatus, className = '' }) => {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsxs)(material_1.TextField, Object.assign({ select: true, value: status, onChange: (event) => {
            setStatus(event.target.value);
        }, variant: "filled", label: false, margin: "none", size: "small", className: (0, clsx_1.default)(className, classes.root) }, { children: [(0, jsx_runtime_1.jsxs)(material_1.MenuItem, Object.assign({ value: "cold" }, { children: ["Cold ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "cold" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.MenuItem, Object.assign({ value: "warm" }, { children: ["Warm ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "warm" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.MenuItem, Object.assign({ value: "hot" }, { children: ["Hot ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "hot" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.MenuItem, Object.assign({ value: "in-contract" }, { children: ["In Contract ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: "in-contract" }, void 0)] }), void 0)] }), void 0));
};
exports.StatusSelector = StatusSelector;
