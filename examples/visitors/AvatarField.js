"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const AvatarField = ({ record, size = '25', className }) => record ? ((0, jsx_runtime_1.jsx)(Avatar_1.default, { src: `${record.avatar}?size=${size}x${size}`, style: { width: parseInt(size, 10), height: parseInt(size, 10) }, className: className }, void 0)) : null;
exports.default = AvatarField;
