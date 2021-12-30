"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AttachMoney_1 = __importDefault(require("@mui/icons-material/AttachMoney"));
var OrderList_1 = __importDefault(require("./OrderList"));
var OrderEdit_1 = __importDefault(require("./OrderEdit"));
exports.default = {
    list: OrderList_1.default,
    edit: OrderEdit_1.default,
    icon: AttachMoney_1.default,
};
