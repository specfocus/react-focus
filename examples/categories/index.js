"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Bookmark_1 = __importDefault(require("@mui/icons-material/Bookmark"));
var CategoryList_1 = __importDefault(require("./CategoryList"));
var CategoryEdit_1 = __importDefault(require("./CategoryEdit"));
exports.default = {
    list: CategoryList_1.default,
    edit: CategoryEdit_1.default,
    icon: Bookmark_1.default,
};
