"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useDataProvider_1 = __importDefault(require("./useDataProvider"));
var react_1 = require("react");
var useDeclarativeSideEffects_1 = __importDefault(require("./useDeclarativeSideEffects"));
var getDataProviderCallArguments_1 = require("./getDataProviderCallArguments");
/**
 * This version of the useDataProvider hook ensure Query and Mutation components are still usable
 * with side effects declared as objects.
 *
 * @deprecated This is for backward compatibility only and will be removed in next major version.
 */
var useDataProviderWithDeclarativeSideEffects = function () {
    var dataProvider = (0, useDataProvider_1.default)();
    var getSideEffects = (0, useDeclarativeSideEffects_1.default)();
    // @ts-ignore
    var dataProviderProxy = (0, react_1.useMemo)(function () {
        return new Proxy(dataProvider, {
            get: function (target, name) {
                if (typeof name === 'symbol') {
                    return;
                }
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var _a = (0, getDataProviderCallArguments_1.getDataProviderCallArguments)(args), resource = _a.resource, payload = _a.payload, allArguments = _a.allArguments, options = _a.options;
                    var onSuccess;
                    var onFailure;
                    var finalOptions = options;
                    var finalAllArguments = allArguments;
                    if (options &&
                        Object.keys(options).some(function (key) {
                            return ['onSuccess', 'onFailure'].includes(key);
                        })) {
                        var sideEffect = getSideEffects(resource, options);
                        var ignoreOnSuccess = options.onSuccess, // Used to extract options without onSuccess
                        ignoreOnFailure = options.onFailure, // Used to extract options without onFailure
                        otherOptions = __rest(options, ["onSuccess", "onFailure"]);
                        onSuccess = sideEffect.onSuccess;
                        onFailure = sideEffect.onFailure;
                        finalOptions = otherOptions;
                        finalAllArguments = __spreadArray([], args, true).slice(0, args.length - 1);
                    }
                    try {
                        return target[name.toString()].apply(target, typeof resource === 'string'
                            ? [
                                resource,
                                payload,
                                __assign(__assign({}, finalOptions), { onSuccess: onSuccess, onFailure: onFailure }),
                            ]
                            : finalAllArguments);
                    }
                    catch (e) {
                        // turn synchronous exceptions (e.g. in parameter preparation)
                        // into async ones, otherwise they'll be lost
                        return Promise.reject(e);
                    }
                };
            },
        });
    }, [dataProvider, getSideEffects]);
    return dataProviderProxy;
};
exports.default = useDataProviderWithDeclarativeSideEffects;
