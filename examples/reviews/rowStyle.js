"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const green_1 = __importDefault(require("@mui/material/colors/green"));
const orange_1 = __importDefault(require("@mui/material/colors/orange"));
const red_1 = __importDefault(require("@mui/material/colors/red"));
const styles_1 = require("@mui/material/styles");
const rowStyle = (selectedRow) => (record) => {
    const theme = (0, styles_1.useTheme)();
    let style = {};
    if (!record) {
        return style;
    }
    if (selectedRow && selectedRow === record.id) {
        style = Object.assign(Object.assign({}, style), { backgroundColor: theme.palette.action.selected });
    }
    if (record.status === 'accepted')
        return Object.assign(Object.assign({}, style), { borderLeftColor: green_1.default[500], borderLeftWidth: 5, borderLeftStyle: 'solid' });
    if (record.status === 'pending')
        return Object.assign(Object.assign({}, style), { borderLeftColor: orange_1.default[500], borderLeftWidth: 5, borderLeftStyle: 'solid' });
    if (record.status === 'rejected')
        return Object.assign(Object.assign({}, style), { borderLeftColor: red_1.default[500], borderLeftWidth: 5, borderLeftStyle: 'solid' });
    return style;
};
exports.default = rowStyle;
