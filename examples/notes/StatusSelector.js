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
exports.StatusSelector = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var clsx_1 = __importDefault(require("clsx"));
var Status_1 = require("../../components/misc/Status");
var useStyles = (0, styles_1.makeStyles)({
    root: {
        width: 150,
    },
});
var StatusSelector = function (_a) {
    var status = _a.status, setStatus = _a.setStatus, _b = _a.className, className = _b === void 0 ? '' : _b;
    var classes = useStyles();
    return (React.createElement(material_1.TextField, { select: true, value: status, onChange: function (event) {
            setStatus(event.target.value);
        }, variant: "filled", label: false, margin: "none", size: "small", className: (0, clsx_1.default)(className, classes.root) },
        React.createElement(material_1.MenuItem, { value: "cold" },
            "Cold ",
            React.createElement(Status_1.Status, { status: "cold" })),
        React.createElement(material_1.MenuItem, { value: "warm" },
            "Warm ",
            React.createElement(Status_1.Status, { status: "warm" })),
        React.createElement(material_1.MenuItem, { value: "hot" },
            "Hot ",
            React.createElement(Status_1.Status, { status: "hot" })),
        React.createElement(material_1.MenuItem, { value: "in-contract" },
            "In Contract ",
            React.createElement(Status_1.Status, { status: "in-contract" }))));
};
exports.StatusSelector = StatusSelector;
