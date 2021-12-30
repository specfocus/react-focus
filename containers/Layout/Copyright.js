"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = __importDefault(require("@mui/material/Link"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var react_1 = __importDefault(require("react"));
function Copyright() {
    return (react_1.default.createElement(Typography_1.default, { variant: "body2", color: "textSecondary", align: "center" },
        'Copyright © ',
        react_1.default.createElement(Link_1.default, { color: "inherit", href: "https://ufinet.com/" }, "ufinet.com"),
        ' ',
        new Date().getFullYear().toString(),
        '.'));
}
exports.default = Copyright;
