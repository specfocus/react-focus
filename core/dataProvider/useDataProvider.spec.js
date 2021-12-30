"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var expect_1 = __importDefault(require("expect"));
var test_1 = require("../../test");
var useDataProvider_1 = __importDefault(require("./useDataProvider"));
var useUpdate_1 = __importDefault(require("./useUpdate"));
var _1 = require(".");
var sideEffect_1 = require("../sideEffect");
var undoableEventEmitter_1 = __importDefault(require("./undoableEventEmitter"));
var UseGetOne = function () {
    var _a = (0, react_1.useState)(), data = _a[0], setData = _a[1];
    var _b = (0, react_1.useState)(), error = _b[0], setError = _b[1];
    var dataProvider = (0, useDataProvider_1.default)();
    (0, react_1.useEffect)(function () {
        dataProvider
            .getOne('posts', { id: 1 })
            .then(function (res) { return setData(res.data); })
            .catch(function (e) { return setError(e); });
    }, [dataProvider]);
    if (error)
        return React.createElement("div", { "data-testid": "error" }, error.message);
    if (data)
        return React.createElement("div", { "data-testid": "data" }, JSON.stringify(data));
    return React.createElement("div", { "data-testid": "loading" }, "loading");
};
var UseCustomVerb = function (_a) {
    var onSuccess = _a.onSuccess;
    var _b = (0, react_1.useState)(), data = _b[0], setData = _b[1];
    var _c = (0, react_1.useState)(), error = _c[0], setError = _c[1];
    var dataProvider = (0, useDataProvider_1.default)();
    (0, react_1.useEffect)(function () {
        dataProvider
            .customVerb({ id: 1 }, ['something'], { onSuccess: onSuccess })
            .then(function (res) { return setData(res.data); })
            .catch(function (e) { return setError(e); });
    }, [dataProvider, onSuccess]);
    if (error)
        return React.createElement("div", { "data-testid": "error" }, error.message);
    if (data)
        return React.createElement("div", { "data-testid": "data" }, JSON.stringify(data));
    return React.createElement("div", { "data-testid": "loading" }, "loading");
};
var UseCustomVerbWithStandardSignature = function (_a) {
    var onSuccess = _a.onSuccess;
    var _b = (0, react_1.useState)(), data = _b[0], setData = _b[1];
    var _c = (0, react_1.useState)(), error = _c[0], setError = _c[1];
    var dataProvider = (0, useDataProvider_1.default)();
    (0, react_1.useEffect)(function () {
        dataProvider
            .customVerb('posts', { id: 1 }, { onSuccess: onSuccess })
            .then(function (res) { return setData(res.data); })
            .catch(function (e) { return setError(e); });
    }, [dataProvider, onSuccess]);
    if (error)
        return React.createElement("div", { "data-testid": "error" }, error.message);
    if (data)
        return React.createElement("div", { "data-testid": "data" }, JSON.stringify(data));
    return React.createElement("div", { "data-testid": "loading" }, "loading");
};
describe('useDataProvider', function () {
    it('should return a way to call the dataProvider', function () { return __awaiter(void 0, void 0, void 0, function () {
        var getOne, dataProvider, queryByTestId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    getOne = jest.fn(function () {
                        return Promise.resolve({ data: { id: 1, title: 'foo' } });
                    });
                    dataProvider = { getOne: getOne };
                    queryByTestId = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(UseGetOne, null))).queryByTestId;
                    (0, expect_1.default)(queryByTestId('loading')).not.toBeNull();
                    return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    (0, expect_1.default)(getOne).toBeCalledTimes(1);
                    (0, expect_1.default)(queryByTestId('loading')).toBeNull();
                    (0, expect_1.default)(queryByTestId('data').textContent).toBe('{"id":1,"title":"foo"}');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle async errors in the dataProvider', function () { return __awaiter(void 0, void 0, void 0, function () {
        var getOne, dataProvider, queryByTestId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jest.spyOn(console, 'error').mockImplementationOnce(function () { });
                    getOne = jest.fn(function () { return Promise.reject(new Error('foo')); });
                    dataProvider = { getOne: getOne };
                    queryByTestId = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(UseGetOne, null))).queryByTestId;
                    (0, expect_1.default)(queryByTestId('loading')).not.toBeNull();
                    return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    (0, expect_1.default)(getOne).toBeCalledTimes(1);
                    (0, expect_1.default)(queryByTestId('loading')).toBeNull();
                    (0, expect_1.default)(queryByTestId('error').textContent).toBe('foo');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should throw a meaningful error when the dataProvider throws a sync error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var c, getOne, dataProvider, r;
        return __generator(this, function (_a) {
            c = jest.spyOn(console, 'error').mockImplementation(function () { });
            getOne = jest.fn(function () {
                throw new Error('foo');
            });
            dataProvider = { getOne: getOne };
            r = function () {
                return (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                    React.createElement(UseGetOne, null)));
            };
            (0, expect_1.default)(r).toThrow(new Error('The dataProvider threw an error. It should return a rejected Promise instead.'));
            c.mockRestore();
            return [2 /*return*/];
        });
    }); });
    it('should dispatch CUSTOM_FETCH actions by default', function () { return __awaiter(void 0, void 0, void 0, function () {
        var getOne, dataProvider, dispatch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    getOne = jest.fn(function () { return Promise.resolve({ data: { id: 123 } }); });
                    dataProvider = { getOne: getOne };
                    dispatch = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(UseGetOne, null))).dispatch;
                    (0, expect_1.default)(dispatch.mock.calls).toHaveLength(3);
                    // waitFor for the dataProvider to return
                    return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    // waitFor for the dataProvider to return
                    _a.sent();
                    (0, expect_1.default)(dispatch.mock.calls).toHaveLength(5);
                    (0, expect_1.default)(dispatch.mock.calls[0][0].type).toBe('CUSTOM_FETCH');
                    (0, expect_1.default)(dispatch.mock.calls[1][0].type).toBe('CUSTOM_FETCH_LOADING');
                    (0, expect_1.default)(dispatch.mock.calls[2][0].type).toBe('FETCH_START');
                    (0, expect_1.default)(dispatch.mock.calls[3][0].type).toBe('CUSTOM_FETCH_SUCCESS');
                    (0, expect_1.default)(dispatch.mock.calls[4][0].type).toBe('FETCH_END');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should call custom verbs with standard signature (resource, payload, options)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var onSuccess, customVerb, dataProvider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    onSuccess = jest.fn();
                    customVerb = jest.fn(function () { return Promise.resolve({ data: null }); });
                    dataProvider = { customVerb: customVerb };
                    (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(UseCustomVerbWithStandardSignature, { onSuccess: onSuccess })));
                    // waitFor for the dataProvider to return
                    return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    // waitFor for the dataProvider to return
                    _a.sent();
                    (0, expect_1.default)(customVerb).toHaveBeenCalledWith('posts', { id: 1 });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should accept calls to custom verbs with no arguments', function () { return __awaiter(void 0, void 0, void 0, function () {
        var UseCustomVerbWithNoArgument, customVerb, dataProvider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    UseCustomVerbWithNoArgument = function (_a) {
                        var onSuccess = _a.onSuccess;
                        var _b = (0, react_1.useState)(), data = _b[0], setData = _b[1];
                        var _c = (0, react_1.useState)(), error = _c[0], setError = _c[1];
                        var dataProvider = (0, useDataProvider_1.default)();
                        (0, react_1.useEffect)(function () {
                            dataProvider
                                .customVerb()
                                .then(function (res) { return setData(res.data); })
                                .catch(function (e) { return setError(e); });
                        }, [dataProvider, onSuccess]);
                        if (error)
                            return React.createElement("div", { "data-testid": "error" }, error.message);
                        if (data)
                            return React.createElement("div", { "data-testid": "data" }, JSON.stringify(data));
                        return React.createElement("div", { "data-testid": "loading" }, "loading");
                    };
                    customVerb = jest.fn(function () { return Promise.resolve({ data: null }); });
                    dataProvider = { customVerb: customVerb };
                    (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(UseCustomVerbWithNoArgument, null)));
                    // waitFor for the dataProvider to return
                    return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    // waitFor for the dataProvider to return
                    _a.sent();
                    (0, expect_1.default)(customVerb).toHaveBeenCalledWith();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should accept custom arguments for custom verbs', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customVerb, dataProvider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customVerb = jest.fn(function () { return Promise.resolve({ data: null }); });
                    dataProvider = { customVerb: customVerb };
                    (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(UseCustomVerb, null)));
                    // waitFor for the dataProvider to return
                    return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    // waitFor for the dataProvider to return
                    _a.sent();
                    (0, expect_1.default)(customVerb).toHaveBeenCalledWith({ id: 1 }, ['something']);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should accept custom arguments for custom verbs and allow options', function () { return __awaiter(void 0, void 0, void 0, function () {
        var onSuccess, customVerb, dataProvider;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    onSuccess = jest.fn();
                    customVerb = jest.fn(function () { return Promise.resolve({ data: null }); });
                    dataProvider = { customVerb: customVerb };
                    (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(UseCustomVerb, { onSuccess: onSuccess })));
                    // waitFor for the dataProvider to return
                    return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    // waitFor for the dataProvider to return
                    _a.sent();
                    (0, expect_1.default)(customVerb).toHaveBeenCalledWith({ id: 1 }, ['something']);
                    (0, expect_1.default)(onSuccess).toHaveBeenCalledWith({ data: null });
                    return [2 /*return*/];
            }
        });
    }); });
    describe('options', function () {
        it('should accept an action option to dispatch a custom action', function () { return __awaiter(void 0, void 0, void 0, function () {
            var UseGetOneWithCustomAction, getOne, dataProvider, dispatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        UseGetOneWithCustomAction = function () {
                            var _a = (0, react_1.useState)(), data = _a[0], setData = _a[1];
                            var dataProvider = (0, useDataProvider_1.default)();
                            (0, react_1.useEffect)(function () {
                                dataProvider
                                    .getOne('dummy', {}, { action: 'MY_ACTION' })
                                    .then(function (res) { return setData(res.data); });
                            }, [dataProvider]);
                            if (data)
                                return React.createElement("div", { "data-testid": "data" }, JSON.stringify(data));
                            return React.createElement("div", { "data-testid": "loading" }, "loading");
                        };
                        getOne = jest.fn(function () {
                            return Promise.resolve({ data: { id: 123 } });
                        });
                        dataProvider = { getOne: getOne };
                        dispatch = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOneWithCustomAction, null))).dispatch;
                        (0, expect_1.default)(dispatch.mock.calls).toHaveLength(3);
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(dispatch.mock.calls).toHaveLength(5);
                        (0, expect_1.default)(dispatch.mock.calls[0][0].type).toBe('MY_ACTION');
                        (0, expect_1.default)(dispatch.mock.calls[1][0].type).toBe('MY_ACTION_LOADING');
                        (0, expect_1.default)(dispatch.mock.calls[2][0].type).toBe('FETCH_START');
                        (0, expect_1.default)(dispatch.mock.calls[3][0].type).toBe('MY_ACTION_SUCCESS');
                        (0, expect_1.default)(dispatch.mock.calls[4][0].type).toBe('FETCH_END');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should accept an onSuccess option to execute on success', function () { return __awaiter(void 0, void 0, void 0, function () {
            var onSuccess, UseGetOneWithOnSuccess, getOne, dataProvider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onSuccess = jest.fn();
                        UseGetOneWithOnSuccess = function () {
                            var _a = (0, react_1.useState)(), data = _a[0], setData = _a[1];
                            var dataProvider = (0, useDataProvider_1.default)();
                            (0, react_1.useEffect)(function () {
                                dataProvider
                                    .getOne('dummy', {}, { onSuccess: onSuccess })
                                    .then(function (res) { return setData(res.data); });
                            }, [dataProvider]);
                            if (data)
                                return React.createElement("div", { "data-testid": "data" }, JSON.stringify(data));
                            return React.createElement("div", { "data-testid": "loading" }, "loading");
                        };
                        getOne = jest.fn(function () {
                            return Promise.resolve({ data: { id: 1, foo: 'bar' } });
                        });
                        dataProvider = { getOne: getOne };
                        (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOneWithOnSuccess, null)));
                        (0, expect_1.default)(onSuccess.mock.calls).toHaveLength(0);
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(onSuccess.mock.calls).toHaveLength(1);
                        (0, expect_1.default)(onSuccess.mock.calls[0][0]).toEqual({
                            data: { id: 1, foo: 'bar' },
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should accept an onFailure option to execute on failure', function () { return __awaiter(void 0, void 0, void 0, function () {
            var onFailure, UseGetOneWithOnFailure, getOne, dataProvider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.spyOn(console, 'error').mockImplementationOnce(function () { });
                        onFailure = jest.fn();
                        UseGetOneWithOnFailure = function () {
                            var _a = (0, react_1.useState)(), error = _a[0], setError = _a[1];
                            var dataProvider = (0, useDataProvider_1.default)();
                            (0, react_1.useEffect)(function () {
                                dataProvider
                                    .getOne('dummy', {}, { onFailure: onFailure })
                                    .catch(function (e) { return setError(e); });
                            }, [dataProvider]);
                            if (error)
                                return React.createElement("div", { "data-testid": "error" }, error.message);
                            return React.createElement("div", { "data-testid": "loading" }, "loading");
                        };
                        getOne = jest.fn(function () { return Promise.reject(new Error('foo')); });
                        dataProvider = { getOne: getOne };
                        (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOneWithOnFailure, null)));
                        (0, expect_1.default)(onFailure.mock.calls).toHaveLength(0);
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(onFailure.mock.calls).toHaveLength(1);
                        (0, expect_1.default)(onFailure.mock.calls[0][0]).toEqual(new Error('foo'));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should accept an enabled option to block the query until a condition is met', function () { return __awaiter(void 0, void 0, void 0, function () {
            var UseGetOneWithEnabled, getOne, dataProvider, _a, queryByTestId, getByRole;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        UseGetOneWithEnabled = function () {
                            var _a = (0, react_1.useState)(), data = _a[0], setData = _a[1];
                            var _b = (0, react_1.useState)(), error = _b[0], setError = _b[1];
                            var _c = (0, react_1.useState)(false), isEnabled = _c[0], setIsEnabled = _c[1];
                            var dataProvider = (0, useDataProvider_1.default)();
                            (0, react_1.useEffect)(function () {
                                dataProvider
                                    .getOne('dummy', {}, { enabled: isEnabled })
                                    .then(function (res) { return setData(res.data); })
                                    .catch(function (e) { return setError(e); });
                            }, [dataProvider, isEnabled]);
                            var content = React.createElement("div", { "data-testid": "loading" }, "loading");
                            if (error)
                                content = React.createElement("div", { "data-testid": "error" }, error.message);
                            if (data)
                                content = (React.createElement("div", { "data-testid": "data" }, JSON.stringify(data)));
                            return (React.createElement("div", null,
                                content,
                                React.createElement("button", { onClick: function () { return setIsEnabled(function (e) { return !e; }); } }, "toggle")));
                        };
                        getOne = jest
                            .fn()
                            .mockResolvedValue({ data: { id: 1, title: 'foo' } });
                        dataProvider = { getOne: getOne };
                        _a = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOneWithEnabled, null))), queryByTestId = _a.queryByTestId, getByRole = _a.getByRole;
                        (0, expect_1.default)(queryByTestId('loading')).not.toBeNull();
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _b.sent();
                        (0, expect_1.default)(getOne).not.toBeCalled();
                        (0, expect_1.default)(queryByTestId('loading')).not.toBeNull();
                        // enable the query
                        react_2.fireEvent.click(getByRole('button', { name: 'toggle' }));
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        (0, expect_1.default)(queryByTestId('loading')).toBeNull();
                        (0, expect_1.default)(queryByTestId('data').textContent).toBe('{"id":1,"title":"foo"}');
                        return [2 /*return*/];
                }
            });
        }); });
        describe('mutationMode', function () {
            it('should wait for response to dispatch side effects in pessimistic mode', function () { return __awaiter(void 0, void 0, void 0, function () {
                var resolveUpdate, update, dataProvider, UpdateButton, _a, getByText, queryByText;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            update = jest.fn(function () {
                                return new Promise(function (resolve) {
                                    resolveUpdate = resolve;
                                }).then(function () { return ({ data: { id: 1, updated: true } }); });
                            });
                            dataProvider = { update: update };
                            UpdateButton = function () {
                                var _a = (0, react_1.useState)(false), updated = _a[0], setUpdated = _a[1];
                                var dataProvider = (0, useDataProvider_1.default)();
                                return (React.createElement("button", { onClick: function () {
                                        return dataProvider.update('foo', {}, {
                                            onSuccess: function () {
                                                setUpdated(true);
                                            },
                                            mutationMode: 'pessimistic',
                                        });
                                    } }, updated ? '(updated)' : 'update'));
                            };
                            _a = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                                React.createElement(UpdateButton, null)), { admin: { resources: { posts: { data: {}, list: {} } } } }), getByText = _a.getByText, queryByText = _a.queryByText;
                            // click on the update button
                            return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                react_2.fireEvent.click(getByText('update'));
                                                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 1:
                            // click on the update button
                            _b.sent();
                            (0, expect_1.default)(update).toBeCalledTimes(1);
                            // make sure the side effect hasn't been applied yet
                            (0, expect_1.default)(queryByText('(updated)')).toBeNull();
                            return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        resolveUpdate();
                                        return [2 /*return*/];
                                    });
                                }); })];
                        case 2:
                            _b.sent();
                            // side effects should be applied now
                            (0, expect_1.default)(queryByText('(updated)')).not.toBeNull();
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should not wait for response to dispatch side effects in optimistic mode', function () { return __awaiter(void 0, void 0, void 0, function () {
                var resolveUpdate, update, dataProvider, UpdateButton, _a, getByText, queryByText;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            update = jest.fn(function () {
                                return new Promise(function (resolve) {
                                    resolveUpdate = resolve;
                                }).then(function () { return ({ data: { id: 1, updated: true } }); });
                            });
                            dataProvider = { update: update };
                            UpdateButton = function () {
                                var _a = (0, react_1.useState)(false), updated = _a[0], setUpdated = _a[1];
                                var dataProvider = (0, useDataProvider_1.default)();
                                return (React.createElement("button", { onClick: function () {
                                        return dataProvider.update('foo', {}, {
                                            onSuccess: function () {
                                                setUpdated(true);
                                            },
                                            mutationMode: 'optimistic',
                                        });
                                    } }, updated ? '(updated)' : 'update'));
                            };
                            _a = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                                React.createElement(UpdateButton, null)), { admin: { resources: { posts: { data: {}, list: {} } } } }), getByText = _a.getByText, queryByText = _a.queryByText;
                            // click on the update button
                            return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                react_2.fireEvent.click(getByText('update'));
                                                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 1:
                            // click on the update button
                            _b.sent();
                            // side effects should be applied now
                            (0, expect_1.default)(queryByText('(updated)')).not.toBeNull();
                            (0, expect_1.default)(update).toBeCalledTimes(1);
                            (0, react_2.act)(function () {
                                resolveUpdate();
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should not wait for response to dispatch side effects in undoable mode', function () { return __awaiter(void 0, void 0, void 0, function () {
                var update, dataProvider, UpdateButton, _a, getByText, queryByText;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            update = jest.fn({
                                apply: function () {
                                    return Promise.resolve({ data: { id: 1, updated: true } });
                                },
                            });
                            dataProvider = { update: update };
                            UpdateButton = function () {
                                var _a = (0, react_1.useState)(false), updated = _a[0], setUpdated = _a[1];
                                var dataProvider = (0, useDataProvider_1.default)();
                                return (React.createElement("button", { onClick: function () {
                                        return dataProvider.update('foo', {}, {
                                            onSuccess: function () {
                                                setUpdated(true);
                                            },
                                            mutationMode: 'undoable',
                                        });
                                    } }, updated ? '(updated)' : 'update'));
                            };
                            _a = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                                React.createElement(UpdateButton, null)), { admin: { resources: { posts: { data: {}, list: {} } } } }), getByText = _a.getByText, queryByText = _a.queryByText;
                            // click on the update button
                            return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                react_2.fireEvent.click(getByText('update'));
                                                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 1:
                            // click on the update button
                            _b.sent();
                            // side effects should be applied now
                            (0, expect_1.default)(queryByText('(updated)')).not.toBeNull();
                            // update shouldn't be called at all
                            (0, expect_1.default)(update).toBeCalledTimes(0);
                            (0, react_2.act)(function () {
                                undoableEventEmitter_1.default.emit('end', {});
                            });
                            (0, expect_1.default)(update).toBeCalledTimes(1);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
    describe('cache', function () {
        it('should not skip the dataProvider call if there is no cache', function () { return __awaiter(void 0, void 0, void 0, function () {
            var getOne, dataProvider, rerender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getOne = jest.fn(function () { return Promise.resolve({ data: { id: 1 } }); });
                        dataProvider = { getOne: getOne };
                        rerender = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "1" })), { admin: { resources: { posts: { data: {}, list: {} } } } }).rerender;
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        rerender(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "2" })));
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 2:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should skip the dataProvider call if there is a valid cache', function () { return __awaiter(void 0, void 0, void 0, function () {
            var getOne, dataProvider, rerender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getOne = jest.fn(function () {
                            var validUntil = new Date();
                            validUntil.setTime(validUntil.getTime() + 1000);
                            return Promise.resolve({ data: { id: 1 }, validUntil: validUntil });
                        });
                        dataProvider = { getOne: getOne };
                        rerender = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "1" })), { admin: { resources: { posts: { data: {}, list: {} } } } }).rerender;
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        rerender(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "2" })));
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 2:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not skip the dataProvider call if there is an invalid cache', function () { return __awaiter(void 0, void 0, void 0, function () {
            var getOne, dataProvider, rerender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getOne = jest.fn(function () {
                            var validUntil = new Date();
                            validUntil.setTime(validUntil.getTime() - 1000);
                            return Promise.resolve({ data: { id: 1 }, validUntil: validUntil });
                        });
                        dataProvider = { getOne: getOne };
                        rerender = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "1" })), { admin: { resources: { posts: { data: {}, list: {} } } } }).rerender;
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        rerender(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "2" })));
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 2:
                        // waitFor for the dataProvider to return
                        _a.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not use the cache after a refresh', function () { return __awaiter(void 0, void 0, void 0, function () {
            var getOne, dataProvider, Refresh, _a, getByText, rerender;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        getOne = jest.fn(function () {
                            var validUntil = new Date();
                            validUntil.setTime(validUntil.getTime() + 1000);
                            return Promise.resolve({ data: { id: 1 }, validUntil: validUntil });
                        });
                        dataProvider = { getOne: getOne };
                        Refresh = function () {
                            var refresh = (0, sideEffect_1.useRefresh)();
                            return React.createElement("button", { onClick: function () { return refresh(); } }, "refresh");
                        };
                        _a = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "1" }),
                            React.createElement(Refresh, null)), { admin: { resources: { posts: { data: {}, list: {} } } } }), getByText = _a.getByText, rerender = _a.rerender;
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _b.sent();
                        // click on the refresh button
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            react_2.fireEvent.click(getByText('refresh'));
                                            return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        rerender(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "2" })));
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 3:
                        // waitFor for the dataProvider to return
                        _b.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not use the cache after a hard refresh', function () { return __awaiter(void 0, void 0, void 0, function () {
            var getOne, dataProvider, Refresh, _a, getByText, rerender;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        getOne = jest.fn(function () {
                            var validUntil = new Date();
                            validUntil.setTime(validUntil.getTime() + 1000);
                            return Promise.resolve({ data: { id: 1 }, validUntil: validUntil });
                        });
                        dataProvider = { getOne: getOne };
                        Refresh = function () {
                            var refresh = (0, sideEffect_1.useRefresh)();
                            return React.createElement("button", { onClick: function () { return refresh(true); } }, "refresh");
                        };
                        _a = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "1" }),
                            React.createElement(Refresh, null)), { admin: { resources: { posts: { data: {}, list: {} } } } }), getByText = _a.getByText, rerender = _a.rerender;
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _b.sent();
                        // click on the refresh button
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            react_2.fireEvent.click(getByText('refresh'));
                                            return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _b.sent();
                        rerender(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "2" })));
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 3:
                        // waitFor for the dataProvider to return
                        _b.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not use the cache after an update', function () { return __awaiter(void 0, void 0, void 0, function () {
            var getOne, dataProvider, Update, _a, getByText, rerender;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        getOne = jest.fn(function () {
                            var validUntil = new Date();
                            validUntil.setTime(validUntil.getTime() + 1000);
                            return Promise.resolve({ data: { id: 1 }, validUntil: validUntil });
                        });
                        dataProvider = {
                            getOne: getOne,
                            update: function () { return Promise.resolve({ data: { id: 1, foo: 'bar' } }); },
                        };
                        Update = function () {
                            var update = (0, useUpdate_1.default)('posts', 1, { foo: 'bar ' })[0];
                            return React.createElement("button", { onClick: function () { return update(); } }, "update");
                        };
                        _a = (0, test_1.renderWithRedux)(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "1" }),
                            React.createElement(Update, null)), { admin: { resources: { posts: { data: {}, list: {} } } } }), getByText = _a.getByText, rerender = _a.rerender;
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 1:
                        // waitFor for the dataProvider to return
                        _b.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(1);
                        // click on the update button
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            react_2.fireEvent.click(getByText('update'));
                                            return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        // click on the update button
                        _b.sent();
                        rerender(React.createElement(_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(UseGetOne, { key: "2" })));
                        // waitFor for the dataProvider to return
                        return [4 /*yield*/, (0, react_2.act)(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })];
                    case 3:
                        // waitFor for the dataProvider to return
                        _b.sent();
                        (0, expect_1.default)(getOne).toBeCalledTimes(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
