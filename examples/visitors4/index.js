"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("@mui/icons-material/People"));
const VisitorList_1 = __importDefault(require("./VisitorList"));
const VisitorCreate_1 = __importDefault(require("./VisitorCreate"));
const VisitorEdit_1 = __importDefault(require("./VisitorEdit"));
const resource = {
    list: VisitorList_1.default,
    create: VisitorCreate_1.default,
    edit: VisitorEdit_1.default,
    icon: People_1.default,
};
exports.default = resource;
