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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var expect_1 = __importDefault(require("expect"));
var core_1 = require("../../core");
var ra_test_1 = require("ra-test");
var Show_1 = require("./Show");
describe('<Show />', function () {
    var defaultShowProps = {
        basePath: '/',
        id: '123',
        resource: 'foo',
        location: {},
        match: {},
    };
    it('should display aside component', function () {
        var Aside = function () { return React.createElement("div", { id: "aside" }, "Hello"); };
        var dataProvider = {
            getOne: function () { return Promise.resolve({ data: { id: 123 } }); },
        };
        var Dummy = function () { return React.createElement("div", null); };
        var queryAllByText = (0, ra_test_1.renderWithRedux)(React.createElement(core_1.DataProviderContext.Provider, { value: dataProvider },
            React.createElement(Show_1.Show, __assign({}, defaultShowProps, { aside: React.createElement(Aside, null) }),
                React.createElement(Dummy, null))), { admin: { resources: { foo: { data: {} } } } }).queryAllByText;
        (0, expect_1.default)(queryAllByText('Hello')).toHaveLength(1);
    });
});
