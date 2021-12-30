"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSales = void 0;
var en_US_1 = require("faker/locale/en_US");
var generateSales = function (db) {
    var randomSales = Array.from(Array(10).keys()).map(function (id) {
        var first_name = en_US_1.name.firstName();
        var last_name = en_US_1.name.lastName();
        var email = en_US_1.internet.email(first_name, last_name);
        return {
            id: id + 1,
            first_name: first_name,
            last_name: last_name,
            email: email,
        };
    });
    return __spreadArray([
        {
            id: 0,
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'janedoe@atomic.dev',
        }
    ], randomSales, true);
};
exports.generateSales = generateSales;
