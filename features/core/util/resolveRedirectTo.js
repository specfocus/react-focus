"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const linkToRecord_1 = __importDefault(require("./linkToRecord"));
exports.default = (redirectTo, basePath, id, data) => {
    if (typeof redirectTo === 'function') {
        return redirectTo(basePath, id, data);
    }
    switch (redirectTo) {
        case 'list':
            return basePath;
        case 'create':
            return `${basePath}/create`;
        case 'edit':
            return (0, linkToRecord_1.default)(basePath, id);
        case 'show':
            return `${(0, linkToRecord_1.default)(basePath, id)}/show`;
        default:
            return redirectTo;
    }
};
