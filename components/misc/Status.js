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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var getColorFromStatus = function (status) {
    return status === 'cold'
        ? '#7dbde8'
        : status === 'warm'
            ? '#e8cb7d'
            : status === 'hot'
                ? '#e88b7d'
                : status === 'in-contract'
                    ? '#a4e87d'
                    : '#000';
};
var Status = function (_a) {
    var status = _a.status;
    return (React.createElement(material_1.Box, { width: 10, height: 10, display: "inline-block", borderRadius: 5, bgcolor: getColorFromStatus(status), component: "span" }));
};
exports.Status = Status;
