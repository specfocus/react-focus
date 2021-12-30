"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.RoutesWithLayout = exports.createAdminStore = exports.BaseAppUI = exports.BaseAppRouter = exports.BaseAppContext = exports.CoreAdmin = void 0;
var BaseApp_1 = __importDefault(require("./BaseApp"));
exports.CoreAdmin = BaseApp_1.default;
var BaseAppContext_1 = __importDefault(require("./BaseAppContext"));
exports.BaseAppContext = BaseAppContext_1.default;
var BaseAppRouter_1 = __importDefault(require("./BaseAppRouter"));
exports.BaseAppRouter = BaseAppRouter_1.default;
var BaseAppUI_1 = __importDefault(require("./BaseAppUI"));
exports.BaseAppUI = BaseAppUI_1.default;
var createReduxStore_1 = __importDefault(require("./createReduxStore"));
exports.createAdminStore = createReduxStore_1.default;
var RoutesWithLayout_1 = __importDefault(require("./RoutesWithLayout"));
exports.RoutesWithLayout = RoutesWithLayout_1.default;
var Resource_1 = __importDefault(require("./Resource"));
exports.Resource = Resource_1.default;
