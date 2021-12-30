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
var expect_1 = __importDefault(require("expect"));
var react_1 = require("@testing-library/react");
var core_1 = require("../../core");
var ra_test_1 = require("ra-test");
var Edit_1 = require("./Edit");
describe('<Edit />', function () {
    var defaultEditProps = {
        basePath: '',
        id: '123',
        resource: 'foo',
        location: {},
        match: {},
    };
    it('should call dataProvider.getOne() and pass the result to its child as record', function () { return __awaiter(void 0, void 0, void 0, function () {
        var dataProvider, FakeForm, queryAllByText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataProvider = {
                        getOne: function () {
                            return Promise.resolve({ data: { id: 123, title: 'lorem' } });
                        },
                    };
                    FakeForm = function (_a) {
                        var record = _a.record;
                        return React.createElement(React.Fragment, null, record.title);
                    };
                    queryAllByText = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(Edit_1.Edit, __assign({}, defaultEditProps),
                            React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }).queryAllByText;
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should call dataProvider.update() when the child calls the save callback', function () { return __awaiter(void 0, void 0, void 0, function () {
        var update, dataProvider, FakeForm, _a, queryAllByText, getByText;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    update = jest
                        .fn()
                        .mockImplementationOnce(function (_, _a) {
                        var data = _a.data;
                        return Promise.resolve({ data: data });
                    });
                    dataProvider = {
                        getOne: function () {
                            return Promise.resolve({ data: { id: 1234, title: 'lorem' } });
                        },
                        update: update,
                    };
                    FakeForm = function (_a) {
                        var record = _a.record, save = _a.save;
                        return (React.createElement(React.Fragment, null,
                            React.createElement("span", null, record.title),
                            React.createElement("button", { onClick: function () { return save(__assign(__assign({}, record), { title: 'ipsum' })); } }, "Update")));
                    };
                    _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                        React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { id: "1234", undoable: false }),
                            React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryAllByText = _a.queryAllByText, getByText = _a.getByText;
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                        })];
                case 1:
                    _b.sent();
                    react_1.fireEvent.click(getByText('Update'));
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, expect_1.default)(update).toHaveBeenCalledWith('foo', {
                                id: '1234',
                                data: { id: 1234, title: 'ipsum' },
                                previousData: { id: 1234, title: 'lorem' },
                            });
                        })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('mutationMode prop', function () {
        it('should be undoable by default', function () { return __awaiter(void 0, void 0, void 0, function () {
            var update, dataProvider, onSuccess, FakeForm, _a, queryByText, getByText, findByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        update = jest
                            .fn()
                            .mockImplementationOnce(function (_, _a) {
                            var data = _a.data;
                            return Promise.resolve({ data: data });
                        });
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({ data: { id: 1234, title: 'lorem' } });
                            },
                            update: update,
                        };
                        onSuccess = jest.fn();
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () { return save(__assign(__assign({}, record), { title: 'ipsum' })); } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { id: "1234", onSuccess: onSuccess }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryByText = _a.queryByText, getByText = _a.getByText, findByText = _a.findByText;
                        return [4 /*yield*/, findByText('lorem')];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        // waitFor for the next tick
                        return [4 /*yield*/, (0, react_1.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        // waitFor for the next tick
                        _b.sent();
                        // changes applied locally
                        (0, expect_1.default)(queryByText('ipsum')).not.toBeNull();
                        // side effects called right away
                        (0, expect_1.default)(onSuccess).toHaveBeenCalledTimes(1);
                        // dataProvider not called
                        (0, expect_1.default)(update).toHaveBeenCalledTimes(0);
                        (0, react_1.act)(function () {
                            core_1.undoableEventEmitter.emit('end', {});
                        });
                        // dataProvider called
                        (0, expect_1.default)(update).toHaveBeenCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should accept optimistic mode', function () { return __awaiter(void 0, void 0, void 0, function () {
            var update, dataProvider, onSuccess, FakeForm, _a, queryByText, getByText, findByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        update = jest
                            .fn()
                            .mockImplementationOnce(function (_, _a) {
                            var data = _a.data;
                            return Promise.resolve({ data: data });
                        });
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({ data: { id: 1234, title: 'lorem' } });
                            },
                            update: update,
                        };
                        onSuccess = jest.fn();
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () { return save(__assign(__assign({}, record), { title: 'ipsum' })); } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { id: "1234", mutationMode: "optimistic", onSuccess: onSuccess }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryByText = _a.queryByText, getByText = _a.getByText, findByText = _a.findByText;
                        return [4 /*yield*/, findByText('lorem')];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        // waitFor for the next tick
                        return [4 /*yield*/, (0, react_1.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        // waitFor for the next tick
                        _b.sent();
                        // changes applied locally
                        (0, expect_1.default)(queryByText('ipsum')).not.toBeNull();
                        // side effects called right away
                        (0, expect_1.default)(onSuccess).toHaveBeenCalledTimes(1);
                        // dataProvider called
                        (0, expect_1.default)(update).toHaveBeenCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should accept pessimistic mode', function () { return __awaiter(void 0, void 0, void 0, function () {
            var resolveUpdate, update, dataProvider, onSuccess, FakeForm, _a, queryByText, getByText, findByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        update = jest.fn().mockImplementationOnce(function (_, _a) {
                            var data = _a.data;
                            return new Promise(function (resolve) {
                                resolveUpdate = resolve;
                            }).then(function () { return ({ data: data }); });
                        });
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({ data: { id: 1234, title: 'lorem' } });
                            },
                            update: update,
                        };
                        onSuccess = jest.fn();
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () { return save(__assign(__assign({}, record), { title: 'ipsum' })); } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { id: "1234", mutationMode: "pessimistic", onSuccess: onSuccess }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryByText = _a.queryByText, getByText = _a.getByText, findByText = _a.findByText;
                        return [4 /*yield*/, findByText('lorem')];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        // waitFor for the next tick
                        return [4 /*yield*/, (0, react_1.act)(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        // waitFor for the next tick
                        _b.sent();
                        // changes not applied locally
                        (0, expect_1.default)(queryByText('ipsum')).toBeNull();
                        // side effects not called right away
                        (0, expect_1.default)(onSuccess).toHaveBeenCalledTimes(0);
                        // dataProvider called
                        (0, expect_1.default)(update).toHaveBeenCalledTimes(1);
                        (0, react_1.act)(function () {
                            resolveUpdate();
                        });
                        // changes applied locally
                        return [4 /*yield*/, findByText('ipsum')];
                    case 3:
                        // changes applied locally
                        _b.sent();
                        // side effects applied
                        (0, expect_1.default)(onSuccess).toHaveBeenCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('onSuccess prop', function () {
        it('should allow to override the default success side effects', function () { return __awaiter(void 0, void 0, void 0, function () {
            var dataProvider, onSuccess, FakeForm, _a, queryAllByText, getByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({
                                    data: { id: 123, title: 'lorem' },
                                });
                            },
                            update: function (_, _a) {
                                var data = _a.data;
                                return Promise.resolve({ data: data });
                            },
                        };
                        onSuccess = jest.fn();
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () { return save(__assign(__assign({}, record), { title: 'ipsum' })); } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { onSuccess: onSuccess, undoable: false }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryAllByText = _a.queryAllByText, getByText = _a.getByText;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                            })];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(onSuccess).toHaveBeenCalledWith({
                                    data: { id: 123, title: 'ipsum' },
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be overridden by onSuccess save option', function () { return __awaiter(void 0, void 0, void 0, function () {
            var dataProvider, onSuccess, onSuccessSave, FakeForm, _a, queryAllByText, getByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({
                                    data: { id: 123, title: 'lorem' },
                                });
                            },
                            update: function (_, _a) {
                                var data = _a.data;
                                return Promise.resolve({ data: data });
                            },
                        };
                        onSuccess = jest.fn();
                        onSuccessSave = jest.fn();
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () {
                                        return save(__assign(__assign({}, record), { title: 'ipsum' }), undefined, {
                                            onSuccess: onSuccessSave,
                                        });
                                    } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { onSuccess: onSuccess, undoable: false }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryAllByText = _a.queryAllByText, getByText = _a.getByText;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                            })];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(onSuccessSave).toHaveBeenCalledWith({
                                    data: { id: 123, title: 'ipsum' },
                                });
                                (0, expect_1.default)(onSuccess).not.toHaveBeenCalled();
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('onFailure prop', function () {
        it('should allow to override the default error side effects', function () { return __awaiter(void 0, void 0, void 0, function () {
            var dataProvider, onFailure, FakeForm, _a, queryAllByText, getByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        jest.spyOn(console, 'error').mockImplementationOnce(function () { });
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({
                                    data: { id: 123, title: 'lorem' },
                                });
                            },
                            update: function () { return Promise.reject({ message: 'not good' }); },
                        };
                        onFailure = jest.fn();
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () { return save(__assign(__assign({}, record), { title: 'ipsum' })); } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { onFailure: onFailure, undoable: false }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryAllByText = _a.queryAllByText, getByText = _a.getByText;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                            })];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(onFailure).toHaveBeenCalledWith({ message: 'not good' });
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be overridden by onFailure save option', function () { return __awaiter(void 0, void 0, void 0, function () {
            var dataProvider, onFailure, onFailureSave, FakeForm, _a, queryAllByText, getByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        jest.spyOn(console, 'error').mockImplementationOnce(function () { });
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({
                                    data: { id: 123, title: 'lorem' },
                                });
                            },
                            update: function () { return Promise.reject({ message: 'not good' }); },
                        };
                        onFailure = jest.fn();
                        onFailureSave = jest.fn();
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () {
                                        return save(__assign(__assign({}, record), { title: 'ipsum' }), undefined, {
                                            onFailure: onFailureSave,
                                        });
                                    } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { onFailure: onFailure, undoable: false }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryAllByText = _a.queryAllByText, getByText = _a.getByText;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                            })];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(onFailureSave).toHaveBeenCalledWith({
                                    message: 'not good',
                                });
                                (0, expect_1.default)(onFailure).not.toHaveBeenCalled();
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('transform prop', function () {
        it('should allow to transform the data before calling update', function () { return __awaiter(void 0, void 0, void 0, function () {
            var update, dataProvider, transform, FakeForm, _a, queryAllByText, getByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        update = jest
                            .fn()
                            .mockImplementationOnce(function (_, _a) {
                            var data = _a.data;
                            return Promise.resolve({ data: data });
                        });
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({
                                    data: { id: 123, title: 'lorem' },
                                });
                            },
                            update: update,
                        };
                        transform = jest.fn().mockImplementationOnce(function (data) { return (__assign(__assign({}, data), { transformed: true })); });
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () { return save(__assign(__assign({}, record), { title: 'ipsum' })); } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { transform: transform, undoable: false }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryAllByText = _a.queryAllByText, getByText = _a.getByText;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                            })];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(transform).toHaveBeenCalledWith({
                                    id: 123,
                                    title: 'ipsum',
                                });
                                (0, expect_1.default)(update).toHaveBeenCalledWith('foo', {
                                    id: '123',
                                    data: { id: 123, title: 'ipsum', transformed: true },
                                    previousData: { id: 123, title: 'lorem' },
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should be overridden by transform save option', function () { return __awaiter(void 0, void 0, void 0, function () {
            var update, dataProvider, transform, transformSave, FakeForm, _a, queryAllByText, getByText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        update = jest
                            .fn()
                            .mockImplementationOnce(function (_, _a) {
                            var data = _a.data;
                            return Promise.resolve({ data: data });
                        });
                        dataProvider = {
                            getOne: function () {
                                return Promise.resolve({
                                    data: { id: 123, title: 'lorem' },
                                });
                            },
                            update: update,
                        };
                        transform = jest.fn();
                        transformSave = jest.fn().mockImplementationOnce(function (data) { return (__assign(__assign({}, data), { transformed: true })); });
                        FakeForm = function (_a) {
                            var record = _a.record, save = _a.save;
                            return (React.createElement(React.Fragment, null,
                                React.createElement("span", null, record.title),
                                React.createElement("button", { onClick: function () {
                                        return save(__assign(__assign({}, record), { title: 'ipsum' }), undefined, {
                                            transform: transformSave,
                                        });
                                    } }, "Update")));
                        };
                        _a = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                            React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { transform: transform, undoable: false }),
                                React.createElement(FakeForm, null))), { admin: { resources: { foo: { data: {} } } } }), queryAllByText = _a.queryAllByText, getByText = _a.getByText;
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(queryAllByText('lorem')).toHaveLength(1);
                            })];
                    case 1:
                        _b.sent();
                        react_1.fireEvent.click(getByText('Update'));
                        return [4 /*yield*/, (0, react_1.waitFor)(function () {
                                (0, expect_1.default)(transform).not.toHaveBeenCalled();
                                (0, expect_1.default)(transformSave).toHaveBeenCalledWith({
                                    id: 123,
                                    title: 'ipsum',
                                });
                                (0, expect_1.default)(update).toHaveBeenCalledWith('foo', {
                                    id: '123',
                                    data: { id: 123, title: 'ipsum', transformed: true },
                                    previousData: { id: 123, title: 'lorem' },
                                });
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('aside prop', function () {
        it('should display aside component', function () {
            var Aside = function () { return React.createElement("div", { id: "aside" }, "Hello"); };
            var dataProvider = {
                getOne: function () { return Promise.resolve({ data: { id: 123 } }); },
            };
            var Dummy = function () { return React.createElement("div", null); };
            var queryAllByText = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
                React.createElement(Edit_1.Edit, __assign({}, defaultEditProps, { aside: React.createElement(Aside, null) }),
                    React.createElement(Dummy, null))), { admin: { resources: { foo: { data: {} } } } }).queryAllByText;
            (0, expect_1.default)(queryAllByText('Hello')).toHaveLength(1);
        });
    });
});
