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
exports.renderWithRedux = void 0;
var React = __importStar(require("react"));
var react_1 = require("@testing-library/react");
var TestContext_1 = __importDefault(require("./TestContext"));
/**
 * render with react-testing library adding redux context for unit test.
 * @example
 * const { dispatch, reduxStore, ...otherReactTestingLibraryHelper } = renderWithRedux(
 *     <TestedComponent />,
 *     initialState
 * );
 *
 * render with react-testing library adding redux context for unit test and passing customReducers.
 * @example
 * const { dispatch, reduxStore, ...otherReactTestingLibraryHelper } = renderWithRedux(
 *     <TestedComponent />,
 *     initialState,
 *     {},
 *     customReducers
 * );
 *
 * @param {ReactNode} component: The component you want to test in jsx
 * @param {Object} initialState: Optional initial state of the redux store
 * @param {Object} options: Render options, e.g. to use a custom container element
 * @param {Object} customReducers: Custom reducers to be added to the default store
 * @return {{ dispatch, reduxStore, ...rest }} helper function to test rendered component.
 * Same as @testing-library/react render method with added dispatch and reduxStore helper
 * dispatch: spy on the redux store dispatch method
 * reduxStore: the redux store used by the tested component
 */
var renderWithRedux = function (component, initialState, options, customReducers) {
    if (initialState === void 0) { initialState = {}; }
    if (options === void 0) { options = {}; }
    if (customReducers === void 0) { customReducers = {}; }
    var dispatch;
    var reduxStore;
    var renderResult = (0, react_1.render)(React.createElement(TestContext_1.default, { initialState: initialState, customReducers: customReducers, enableReducers: true }, function (_a) {
        var store = _a.store;
        dispatch = jest.spyOn(store, 'dispatch');
        reduxStore = store;
        return component;
    }), options);
    return __assign(__assign({}, renderResult), { rerender: function (newComponent) {
            return renderResult.rerender(React.createElement(TestContext_1.default, { initialState: initialState, customReducers: customReducers, enableReducers: true }, function (_a) {
                var store = _a.store;
                dispatch = jest.spyOn(store, 'dispatch');
                reduxStore = store;
                return newComponent;
            }));
        }, dispatch: dispatch, reduxStore: reduxStore });
};
exports.renderWithRedux = renderWithRedux;
