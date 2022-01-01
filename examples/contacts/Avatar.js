"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Avatar = ({ record }) => ((0, jsx_runtime_1.jsxs)(material_1.Avatar, Object.assign({ src: record.avatar }, { children: [record.first_name.charAt(0), record.last_name.charAt(0)] }), void 0));
exports.Avatar = Avatar;
