"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAvatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const clsx_1 = __importDefault(require("clsx"));
const useStyles = (0, styles_1.makeStyles)({
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
const CompanyAvatar = ({ record, size = 'large', }) => {
    const classes = useStyles();
    if (!record)
        return null;
    return ((0, jsx_runtime_1.jsx)(material_1.Avatar, { src: process.env.PUBLIC_URL + record.logo, alt: record.name, className: classes.avatar, imgProps: { className: (0, clsx_1.default)(classes.img, classes[size]) } }, void 0));
};
exports.CompanyAvatar = CompanyAvatar;
