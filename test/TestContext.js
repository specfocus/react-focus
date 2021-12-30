"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.TestContext = exports.defaultStore = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var merge_1 = __importDefault(require("lodash/merge"));
var history_1 = require("history");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../core");
exports.defaultStore = {
    admin: {
        resources: {},
        references: { possibleValues: {} },
        ui: { viewVersion: 1 },
        notifications: [],
    },
};
var dataProviderDefaultResponse = { data: null };
/**
 * Simulate a ../../app context in unit tests
 *
 * Pass custom store values as store prop
 *
 * @example
 * // in a react testing-library test
 * const utils = render(
 *     <TestContext initialState={{ admin: { resources: { post: { data: { 1: {id: 1, title: 'foo' } } } } } }}>
 *         <Show {...defaultShowProps} />
 *     </TestContext>
 * );
 *
 * @example
 * // in a react testing-library test, using jest.
 * const utils = render(
 *     <TestContext initialState={{ admin: { resources: { posts: { data: { 1: {id: 1, title: 'foo' } } } } } }}>
 *         {({ store }) => {
 *              dispatchSpy = jest.spyOn(store, 'dispatch');
 *              return <Show {...defaultShowProps} />
 *         }}
 *     </TestContext>
 * );
 */
var TestContext = /** @class */ (function (_super) {
    __extends(TestContext, _super);
    function TestContext(props) {
        var _this = _super.call(this, props) || this;
        _this.storeWithDefault = null;
        _this.history = null;
        _this.renderChildren = function () {
            var children = _this.props.children;
            return typeof children === 'function'
                ? children({
                    store: _this.storeWithDefault,
                    history: _this.history,
                })
                : children;
        };
        _this.history = props.history || (0, history_1.createMemoryHistory)();
        var _a = props.initialState, initialState = _a === void 0 ? {} : _a, _b = props.enableReducers, enableReducers = _b === void 0 ? false : _b, _c = props.customReducers, customReducers = _c === void 0 ? {} : _c;
        _this.storeWithDefault = enableReducers
            ? (0, core_1.createAdminStore)({
                initialState: (0, merge_1.default)({}, exports.defaultStore, initialState),
                dataProvider: (0, core_1.convertLegacyDataProvider)(function () {
                    return Promise.resolve(dataProviderDefaultResponse);
                }),
                history: (0, history_1.createMemoryHistory)(),
                customReducers: customReducers,
            })
            : (0, redux_1.createStore)(function () { return (0, merge_1.default)({}, exports.defaultStore, initialState); });
        return _this;
    }
    TestContext.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, { store: this.storeWithDefault },
            React.createElement(react_router_dom_1.Router, { history: this.history }, this.renderChildren())));
    };
    return TestContext;
}(react_1.Component));
exports.TestContext = TestContext;
exports.default = TestContext;
