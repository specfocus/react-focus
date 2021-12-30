"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataProvider = void 0;
var db_1 = __importDefault(require("./db"));
var fakeDataProvider_1 = __importDefault(require("./providers/fakeDataProvider"));
var baseDataProvider = (0, fakeDataProvider_1.default)((0, db_1.default)(), true);
exports.dataProvider = new Proxy(baseDataProvider, {
    get: function (target, name) { return function (resource, params) {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(baseDataProvider[name](resource, params)); }, 300);
        });
    }; },
});
