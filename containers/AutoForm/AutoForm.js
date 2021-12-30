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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_final_form_1 = require("react-final-form");
var ObjectSchema_1 = require("../../lib/ObjectSchema");
var AutoGrid_1 = __importDefault(require("../AutoGrid"));
var AutoFields_1 = __importDefault(require("./AutoFields"));
function AutoForm(_a) {
    var children = _a.children, form = _a.form, handleSubmit = _a.handleSubmit, observer = _a.observer, schema = _a.schema, state = _a.state, other = __rest(_a, ["children", "form", "handleSubmit", "observer", "schema", "state"]);
    var api = (0, react_final_form_1.useForm)();
    var width = function (index) {
        var total = other.config[0];
        var size = other.config[index + 1];
        if (Array.isArray(size)) {
            var width_1 = size[0];
            return width_1;
        }
        return total;
    };
    var _b = Object.entries(schema.fields).reduce(function (acc, _a) {
        var _b, _c;
        var key = _a[0], field = _a[1];
        if (field.type === 'object') {
            Object.assign(acc.fieldsets, (_b = {}, _b[key] = field, _b));
        }
        else {
            Object.assign(acc.fields, (_c = {}, _c[key] = field, _c));
        }
        return acc;
    }, {
        fields: {},
        fieldsets: {}
    }), fields = _b.fields, fieldsets = _b.fieldsets;
    var render = function (values) {
        var context = __assign(__assign({}, other), { values: values });
        return (react_1.default.createElement("form", { autoComplete: "off", onSubmit: handleSubmit, noValidate: true },
            react_1.default.createElement(AutoGrid_1.default, __assign({}, other),
                react_1.default.createElement(AutoFields_1.default, { config: [width(0)], context: context, schema: schema }),
                Object.entries(fieldsets).map(function (_a, index, array) {
                    var key = _a[0], schema = _a[1];
                    return (react_1.default.createElement(AutoFields_1.default, { config: [width(index + 1)], context: context, name: key, schema: schema }));
                }),
                react_1.Children.toArray(children))));
    };
    if (state.values) {
        return render((0, ObjectSchema_1.flatten)(state.values));
    }
    return (react_1.default.createElement(react_final_form_1.FormSpy, { subscription: { values: true } }, function (_a) {
        var values = _a.values;
        if (observer) {
            observer(values, api);
        }
        return render((0, ObjectSchema_1.flatten)(values));
    }));
}
exports.default = AutoForm;
