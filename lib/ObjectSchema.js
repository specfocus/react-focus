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
exports.isSimpleObject = exports.flatten = exports.OBJECT_TYPE = void 0;
exports.OBJECT_TYPE = 'object';
var flatten = function (obj, path) {
    if (path === void 0) { path = []; }
    return Object.entries(obj).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], val = _a[1];
        if ((0, exports.isSimpleObject)(val)) {
            return Object.assign(acc, (0, exports.flatten)(val, __spreadArray(__spreadArray([], path, true), [key], false)));
        }
        return Object.assign(acc, (_b = {}, _b[__spreadArray(__spreadArray([], path, true), [key], false).join('.')] = val, _b));
    }, {});
};
exports.flatten = flatten;
var isSimpleObject = function (val) {
    return typeof val === 'object' && val !== null && !Array.isArray(val) && !(val instanceof Date);
};
exports.isSimpleObject = isSimpleObject;
