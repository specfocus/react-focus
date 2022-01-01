"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Collections_1 = __importDefault(require("@mui/icons-material/Collections"));
const ProductList_1 = __importDefault(require("./ProductList"));
const ProductEdit_1 = __importDefault(require("./ProductEdit"));
const ProductCreate_1 = __importDefault(require("./ProductCreate"));
exports.default = {
    list: ProductList_1.default,
    create: ProductCreate_1.default,
    edit: ProductEdit_1.default,
    icon: Collections_1.default,
};
