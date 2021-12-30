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
var react_1 = require("@testing-library/react");
var react_final_form_1 = require("react-final-form");
var core_1 = require("../../core");
var ra_test_1 = require("ra-test");
var add_days_1 = __importDefault(require("date-fns/add_days"));
var list_1 = require("../list");
var field_1 = require("../field");
var ReferenceArrayInput_1 = __importStar(require("./ReferenceArrayInput"));
describe('<ReferenceArrayInput />', function () {
    var defaultProps = {
        input: {},
        meta: {},
        record: {},
        reference: 'tags',
        resource: 'posts',
        source: 'tag_ids',
        basePath: '/posts',
        translate: function (x) { return "*".concat(x, "*"); },
    };
    it('should display an error if error is defined', function () {
        var MyComponent = function () { return React.createElement("div", null, "MyComponent"); };
        var _a = (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, __assign(__assign({}, defaultProps), { error: 'error', input: {} })),
            React.createElement(MyComponent, null))), queryByDisplayValue = _a.queryByDisplayValue, queryByText = _a.queryByText;
        expect(queryByDisplayValue('error')).not.toBeNull();
        expect(queryByText('MyComponent')).toBeNull();
    });
    it('should send an error to the children if warning is defined', function () {
        var MyComponent = function (_a) {
            var meta = _a.meta;
            return React.createElement("div", null, meta.helperText);
        };
        var _a = (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, __assign(__assign({}, defaultProps), { warning: 'fetch error', input: { value: [1, 2] }, choices: [{ id: 2 }] })),
            React.createElement(MyComponent, null))), queryByText = _a.queryByText, queryByRole = _a.queryByRole;
        expect(queryByRole('textbox')).toBeNull();
        expect(queryByText('fetch error')).not.toBeNull();
    });
    it('should not send an error to the children if warning is not defined', function () {
        var MyComponent = function (_a) {
            var meta = _a.meta;
            return React.createElement("div", null, JSON.stringify(meta));
        };
        var _a = (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, __assign(__assign({}, defaultProps), { input: { value: [1, 2] }, choices: [{ id: 1 }, { id: 2 }] })),
            React.createElement(MyComponent, null))), queryByText = _a.queryByText, queryByRole = _a.queryByRole;
        expect(queryByRole('textbox')).toBeNull();
        expect(queryByText(JSON.stringify({ helperText: false }))).not.toBeNull();
    });
    it('should render enclosed component if references present in input are available in state', function () {
        var MyComponent = function (_a) {
            var choices = _a.choices;
            return (React.createElement("div", null, JSON.stringify(choices)));
        };
        var _a = (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, __assign(__assign({}, defaultProps), { input: { value: [1] }, choices: [1] })),
            React.createElement(MyComponent, null))), queryByRole = _a.queryByRole, queryByText = _a.queryByText;
        expect(queryByRole('textbox')).toBeNull();
        expect(queryByText(JSON.stringify([1]))).not.toBeNull();
    });
    it('should render enclosed component even if the choices are empty', function () {
        var MyComponent = function (_a) {
            var choices = _a.choices;
            return (React.createElement("div", null, JSON.stringify(choices)));
        };
        var _a = (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, __assign(__assign({}, defaultProps), { choices: [] })),
            React.createElement(MyComponent, null))), queryByRole = _a.queryByRole, queryByText = _a.queryByText;
        expect(queryByRole('progressbar')).toBeNull();
        expect(queryByRole('textbox')).toBeNull();
        expect(queryByText(JSON.stringify([]))).not.toBeNull();
    });
    it('should pass the correct resource and basePath down to child component', function () {
        var resourceProp;
        var basePathProp;
        var MyComponent = function (_a) {
            var resource = _a.resource, basePath = _a.basePath;
            resourceProp = resource;
            basePathProp = basePath;
            return React.createElement("div", null);
        };
        var onChange = jest.fn();
        (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, defaultProps, { allowEmpty: true, onChange: onChange }),
            React.createElement(MyComponent, null)));
        expect(resourceProp).toEqual('tags');
        expect(basePathProp).toEqual('/tags');
    });
    it('should pass onChange down to child component', function () {
        var onChangeCallback;
        var MyComponent = function (_a) {
            var onChange = _a.onChange;
            onChangeCallback = onChange;
            return React.createElement("div", null);
        };
        var onChange = jest.fn();
        (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, defaultProps, { allowEmpty: true, onChange: onChange }),
            React.createElement(MyComponent, null)));
        onChangeCallback('foo');
        expect(onChange).toBeCalledWith('foo');
    });
    it('should pass meta down to child component', function () {
        var MyComponent = function (_a) {
            var meta = _a.meta;
            return React.createElement("div", null, JSON.stringify(meta));
        };
        var queryByText = (0, react_1.render)(React.createElement(ReferenceArrayInput_1.ReferenceArrayInputView, __assign({}, defaultProps, { allowEmpty: true, meta: { touched: false } }),
            React.createElement(MyComponent, null))).queryByText;
        expect(queryByText(JSON.stringify({ touched: false, helperText: false }))).not.toBeNull();
    });
    it('should provide a ListContext with all available choices', function () { return __awaiter(void 0, void 0, void 0, function () {
        var Children, getByLabelText;
        var _a;
        return __generator(this, function (_b) {
            Children = function () {
                var listContext = (0, core_1.useListContext)();
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { "aria-label": "total" }, listContext.total),
                    React.createElement("div", { "aria-label": "ids" }, listContext.ids.join()),
                    React.createElement("div", { "aria-label": "data" }, JSON.stringify(listContext.data))));
            };
            getByLabelText = (0, ra_test_1.renderWithRedux)(React.createElement(react_final_form_1.Form, { onSubmit: jest.fn(), render: function () { return (React.createElement(ReferenceArrayInput_1.default, __assign({}, defaultProps),
                    React.createElement(Children, null))); } }), {
                admin: {
                    references: {
                        possibleValues: {
                            'posts@tag_ids': [5, 6],
                        },
                    },
                    resources: {
                        tags: {
                            list: {
                                cachedRequests: (_a = {},
                                    _a[JSON.stringify({
                                        pagination: { page: 1, perPage: 25 },
                                        sort: {
                                            field: 'id',
                                            order: 'DESC',
                                        },
                                        filter: {},
                                    })] = {
                                        total: 2,
                                    },
                                    _a),
                            },
                            data: {
                                5: { id: 5, name: 'test1' },
                                6: { id: 6, name: 'test2' },
                            },
                        },
                    },
                },
            }).getByLabelText;
            expect(getByLabelText('total').innerHTML).toEqual('2');
            return [2 /*return*/];
        });
    }); });
    test('should allow to use a Datagrid', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, getByLabelText, queryByText, checkBoxTest1, checkBoxTest2, checkBoxAll;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = (0, ra_test_1.renderWithRedux)(React.createElement(react_final_form_1.Form, { onSubmit: jest.fn(), initialValues: { tag_ids: [5] }, render: function () { return (React.createElement(ReferenceArrayInput_1.default, { reference: "tags", resource: "posts", source: "tag_ids", basePath: "/posts" },
                            React.createElement(list_1.Datagrid, { hasBulkActions: true, rowClick: "toggleSelection" },
                                React.createElement(field_1.TextField, { source: "name" })))); } }), {
                        admin: {
                            references: {
                                possibleValues: {
                                    'posts@tag_ids': [5, 6],
                                },
                            },
                            resources: {
                                tags: {
                                    list: {
                                        cachedRequests: (_b = {},
                                            _b[JSON.stringify({
                                                pagination: { page: 1, perPage: 25 },
                                                sort: {
                                                    field: 'id',
                                                    order: 'DESC',
                                                },
                                                filter: {},
                                            })] = {
                                                ids: [5, 6],
                                                total: 2,
                                                validity: (0, add_days_1.default)(new Date(), 1),
                                            },
                                            _b),
                                    },
                                    data: {
                                        5: { id: 5, name: 'test1' },
                                        6: { id: 6, name: 'test2' },
                                    },
                                },
                            },
                        },
                    }), getByLabelText = _a.getByLabelText, queryByText = _a.queryByText;
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(queryByText('test1')).not.toBeNull();
                            expect(queryByText('test2')).not.toBeNull();
                        })];
                case 1:
                    _c.sent();
                    checkBoxTest1 = (0, react_1.within)(queryByText('test1').closest('tr'))
                        .getByLabelText('ra.action.select_row')
                        .querySelector('input');
                    checkBoxTest2 = (0, react_1.within)(queryByText('test2').closest('tr'))
                        .getByLabelText('ra.action.select_row')
                        .querySelector('input');
                    checkBoxAll = getByLabelText('ra.action.select_all').querySelector('input');
                    expect(checkBoxTest1.checked).toEqual(true);
                    expect(checkBoxTest2.checked).toEqual(false);
                    react_1.fireEvent.click(checkBoxTest2);
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(checkBoxTest2.checked).toEqual(true);
                            expect(checkBoxAll.checked).toEqual(true);
                        })];
                case 2:
                    _c.sent();
                    react_1.fireEvent.click(checkBoxAll);
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(checkBoxTest1.checked).toEqual(false);
                            expect(checkBoxTest2.checked).toEqual(false);
                            expect(checkBoxAll.checked).toEqual(false);
                        })];
                case 3:
                    _c.sent();
                    react_1.fireEvent.click(checkBoxAll);
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(checkBoxTest1.checked).toEqual(true);
                            expect(checkBoxTest2.checked).toEqual(true);
                            expect(checkBoxAll.checked).toEqual(true);
                        })];
                case 4:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
