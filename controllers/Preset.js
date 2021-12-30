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
exports.usePreset = void 0;
var react_1 = __importStar(require("react"));
var sift_1 = __importDefault(require("sift"));
var react_final_form_1 = require("react-final-form");
var final_form_1 = require("final-form");
var deep_diff_1 = require("deep-diff");
var flatten = function (schema, acc, path) {
    if (acc === void 0) { acc = {}; }
    if (path === void 0) { path = []; }
    return Object.entries(schema.fields).reduce(function ($acc, _a) {
        var _b;
        var key = _a[0], field = _a[1];
        var $path = __spreadArray(__spreadArray([], path, true), [key], false);
        if (field.type === 'object') {
            return flatten(field, $acc, $path);
        }
        var $key = $path.join('.');
        return Object.assign($acc, (_b = {}, _b[$key] = field, _b));
    }, acc);
};
var select = function (schema) {
    var driver = Object.entries(flatten(schema))
        .reduce(function (acc, _a) {
        var _b;
        var key = _a[0], preset = _a[1].preset;
        return Object.assign(acc, (_b = {}, _b[key] = preset || {}, _b));
    }, {});
    Object.entries(driver).forEach(function (_a) {
        var key = _a[0], preset = _a[1];
    });
    return driver;
};
var intersect = function (lhs, rhs) { return lhs.filter(function (x) { return rhs.includes(x); }); };
var usePreset = function (_a) {
    var presets = _a.presets, schema = _a.schema, values = _a.values;
    var _b = (0, react_1.useState)({}), state = _b[0], setState = _b[1];
    var _c = (0, react_1.useState)(), previous = _c[0], setPrevious = _c[1];
    var _d = (0, react_1.useState)(false), skip = _d[0], setSkip = _d[1];
    var _e = (0, react_final_form_1.useForm)(), batch = _e.batch, change = _e.change;
    if (state === values) {
        return;
    }
    var differences = (0, deep_diff_1.diff)(state, values || {});
    if (!differences) {
        return;
    }
    var changes = differences.reduce(function (acc, _a) {
        var _b;
        var path = _a.path, rhs = _a.rhs;
        var key = path.join('.');
        var v = (0, final_form_1.getIn)(state, key);
        Object.assign(acc, (_b = {}, _b[key] = rhs, _b));
        return acc;
    }, {});
    if (previous && !(0, deep_diff_1.diff)(changes, previous)) {
        return;
    }
    setPrevious(changes);
    setState(values);
    if (skip) {
        return;
    }
    var keys = Object.keys(changes);
    var actions = presets.reduce(function (acc, _a) {
        var $if = _a.$if, $then = _a.$then, $else = _a.$else;
        var inter = intersect(Object.keys($if), keys);
        if (!inter.length) {
            return acc;
        }
        var $test = (0, sift_1.default)($if);
        var $match = $test(values);
        if ($match && $then) {
            return $then;
        }
        if (!$match && $else) {
            return $else;
        }
        return acc;
    }, {});
    console.log(JSON.stringify(actions, null, 2));
    if (!Object.keys(actions).length) {
        return;
    }
    setSkip(true);
    batch(function () {
        Object.entries(actions).forEach(function (_a) {
            var name = _a[0], value = _a[1];
            return change(name, value);
        });
        //setSkip(false), 10);
        setSkip(false);
    });
};
exports.usePreset = usePreset;
var Controller = function (props) {
    (0, exports.usePreset)(props);
    return (react_1.default.createElement(react_1.default.Fragment, null));
};
var Wrapper = function (props) {
    return props.values ? (react_1.default.createElement(Controller, __assign({}, props))) : (react_1.default.createElement(react_final_form_1.FormSpy, { subscription: { values: true } }, function (_a) {
        var values = _a.values;
        return (react_1.default.createElement(Controller, __assign({}, props, { values: values })));
    }));
};
exports.default = Wrapper;
