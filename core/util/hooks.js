"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = exports.useDeepCompareEffect = exports.usePrevious = exports.useSafeSetState = void 0;
var react_1 = require("react");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
// thanks Kent C Dodds for the following helpers
function useSafeSetState(initialState) {
    var _a = (0, react_1.useState)(initialState), state = _a[0], setState = _a[1];
    var mountedRef = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    var safeSetState = (0, react_1.useCallback)(function (args) {
        if (mountedRef.current) {
            return setState(args);
        }
    }, [mountedRef, setState]);
    return [state, safeSetState];
}
exports.useSafeSetState = useSafeSetState;
function usePrevious(value) {
    var ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        ref.current = value;
    });
    return ref.current;
}
exports.usePrevious = usePrevious;
function useDeepCompareEffect(callback, inputs) {
    var cleanupRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        if (!(0, isEqual_1.default)(previousInputs, inputs)) {
            cleanupRef.current = callback();
        }
        return cleanupRef.current;
    });
    var previousInputs = usePrevious(inputs);
}
exports.useDeepCompareEffect = useDeepCompareEffect;
function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var _a = (0, react_1.useState)(false), ready = _a[0], setReady = _a[1];
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            setReady(true);
        }, ms);
        return function () {
            clearTimeout(timer);
        };
    }, [ms]);
    return ready;
}
exports.useTimeout = useTimeout;
