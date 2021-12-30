"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = __importDefault(require("@mui/icons-material/People"));
var VisitorList_1 = __importDefault(require("./VisitorList"));
var VisitorCreate_1 = __importDefault(require("./VisitorCreate"));
var VisitorEdit_1 = __importDefault(require("./VisitorEdit"));
var resource = {
    list: VisitorList_1.default,
    create: VisitorCreate_1.default,
    edit: VisitorEdit_1.default,
    icon: People_1.default,
};
exports.default = resource;
