"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var simpleRestProvider_1 = __importDefault(require("../providers/simpleRestProvider"));
var restProvider = (0, simpleRestProvider_1.default)('http://localhost:4000');
var delayedDataProvider = new Proxy(restProvider, {
    get: function (target, name, self) {
        return name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
            ? self
            : function (resource, params) {
                return new Promise(function (resolve) {
                    return setTimeout(function () {
                        return resolve(restProvider[name](resource, params));
                    }, 500);
                });
            };
    },
});
exports.default = delayedDataProvider;
