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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppStack = exports.appStack = exports.APP_STACK = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
exports.APP_STACK = 'appStack';
exports.appStack = (0, recoil_1.atom)({
    key: exports.APP_STACK,
    default: {}, // default value (aka initial value)
});
var stackTrace = function () {
    var error = new Error();
    return error.stack.split("\n")
        .slice(2)
        .map(function (line) { return line.replace(/\s+at\s+/, ""); });
};
var useAppStack = function () {
    var setStack = (0, recoil_1.useSetRecoilState)(exports.appStack);
    var push = (0, react_1.useCallback)(function (key, config) {
        setStack(function (stack) {
            var _a;
            if (!stack || stack[key]) {
                return stack || {};
            }
            var value = __assign((_a = {}, _a[key] = config, _a), stack);
            return value;
        });
    }, [setStack]);
    var pop = (0, react_1.useCallback)(function (key) {
        setStack(function (stack) {
            if (!stack || !stack[key]) {
                return stack || {};
            }
            var next = Object.entries(stack).filter(function (_a) {
                var k = _a[0];
                return k !== key;
            });
            var value = next.reduce(function (acc, _a) {
                var _b;
                var key = _a[0], val = _a[1];
                return Object.assign(acc, (_b = {}, _b[key] = val, _b));
            }, {});
            return value;
        });
    }, [setStack]);
    var trigger = (0, recoil_1.useRecoilCallback)(function (_a) {
        var snapshot = _a.snapshot;
        return function (action) { return __awaiter(void 0, void 0, void 0, function () {
            var stack, _i, _a, _b, key, config;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, snapshot.getPromise(exports.appStack)];
                    case 1:
                        stack = _c.sent();
                        for (_i = 0, _a = Object.entries(stack); _i < _a.length; _i++) {
                            _b = _a[_i], key = _b[0], config = _b[1];
                            if (!action) {
                                break;
                            }
                            if (config === null || config === void 0 ? void 0 : config.handle) {
                                config.handle(action);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    });
    return {
        pop: pop,
        push: push,
        trigger: trigger
    };
};
exports.useAppStack = useAppStack;
