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
exports.CompanyAvatar = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var clsx_1 = __importDefault(require("clsx"));
var React = __importStar(require("react"));
var useStyles = (0, styles_1.makeStyles)({
    avatar: {
        width: 60,
        height: 60,
        backgroundColor: 'aliceblue',
    },
    img: {
        objectFit: 'contain',
    },
    small: {
        width: 20,
        height: 20,
    },
    large: {
        width: 40,
        height: 40,
    },
});
var CompanyAvatar = function (_a) {
    var record = _a.record, _b = _a.size, size = _b === void 0 ? 'large' : _b;
    var classes = useStyles();
    if (!record)
        return null;
    return (React.createElement(material_1.Avatar, { src: process.env.PUBLIC_URL + record.logo, alt: record.name, className: classes.avatar, imgProps: { className: (0, clsx_1.default)(classes.img, classes[size]) } }));
};
exports.CompanyAvatar = CompanyAvatar;
