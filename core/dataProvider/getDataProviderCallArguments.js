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
exports.getDataProviderCallArguments = void 0;
// List of properties we expect in the options
var OptionsProperties = [
    'action',
    'fetch',
    'meta',
    'onFailure',
    'onSuccess',
    'undoable',
    'mutationMode',
    'enabled',
];
var isDataProviderOptions = function (value) {
    if (typeof value === 'undefined')
        return [];
    var options = value;
    return Object.keys(options).some(function (key) { return OptionsProperties.includes(key); });
};
// As all dataProvider methods do not have the same signature, we must differentiate
// standard methods which have the (resource, params, options) signature
// from the custom ones
var getDataProviderCallArguments = function (args) {
    var lastArg = args[args.length - 1];
    var allArguments = __spreadArray([], args, true);
    var resource;
    var payload;
    var options;
    if (isDataProviderOptions(lastArg)) {
        options = lastArg;
        allArguments = allArguments.slice(0, args.length - 1);
    }
    if (typeof allArguments[0] === 'string') {
        resource = allArguments[0];
        payload = allArguments[1];
    }
    return {
        resource: resource,
        payload: payload,
        allArguments: allArguments,
        options: options,
    };
};
exports.getDataProviderCallArguments = getDataProviderCallArguments;