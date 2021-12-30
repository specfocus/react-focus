"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LibraryBooks_1 = __importDefault(require("@mui/icons-material/LibraryBooks"));
var InvoiceList_1 = __importDefault(require("./InvoiceList"));
exports.default = {
    list: InvoiceList_1.default,
    icon: LibraryBooks_1.default,
};
