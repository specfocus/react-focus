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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var green_1 = __importDefault(require("@mui/material/colors/green"));
var orange_1 = __importDefault(require("@mui/material/colors/orange"));
var red_1 = __importDefault(require("@mui/material/colors/red"));
var styles_1 = require("@mui/material/styles");
var rowStyle = function (selectedRow) { return function (record) {
    var theme = (0, styles_1.useTheme)();
    var style = {};
    if (!record) {
        return style;
    }
    if (selectedRow && selectedRow === record.id) {
        style = __assign(__assign({}, style), { backgroundColor: theme.palette.action.selected });
    }
    if (record.status === 'accepted')
        return __assign(__assign({}, style), { borderLeftColor: green_1.default[500], borderLeftWidth: 5, borderLeftStyle: 'solid' });
    if (record.status === 'pending')
        return __assign(__assign({}, style), { borderLeftColor: orange_1.default[500], borderLeftWidth: 5, borderLeftStyle: 'solid' });
    if (record.status === 'rejected')
        return __assign(__assign({}, style), { borderLeftColor: red_1.default[500], borderLeftWidth: 5, borderLeftStyle: 'solid' });
    return style;
}; };
exports.default = rowStyle;
