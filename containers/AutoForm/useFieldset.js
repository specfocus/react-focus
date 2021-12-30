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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_final_form_1 = require("react-final-form");
var react_i18next_1 = require("react-i18next");
var DOMAINS = __importStar(require("../../data/domains"));
var ObjectSchema_1 = require("../../lib/ObjectSchema");
var StringSchema_1 = require("../../lib/StringSchema");
;
var getIn = function (key, rec) { return rec && rec[key]; };
var textIn = function (key, t, rec) {
    var val = getIn(key, rec);
    if (typeof val === 'string') {
        return { label: t(val) || val };
    }
    var trans = function (obj) { return Object.entries(obj)
        .reduce(function (acc, _a) {
        var _b, _c;
        var key = _a[0], val = _a[1];
        return typeof val === 'string'
            ? Object.assign(acc, (_b = {}, _b[key] = t(val) || val, _b))
            : Object.assign(acc, (_c = {}, _c[key] = trans(val), _c));
    }, {}); };
    return trans(val || { label: key });
};
var useFieldset = function (_a) {
    var context = _a.context, fieldset = _a.name, fields = _a.schema.fields;
    var api = (0, react_final_form_1.useForm)();
    var batch = api.batch, change = api.change;
    var t = (0, react_i18next_1.useTranslation)().t;
    var classes = context.classes, dispatch = context.dispatch, dependencies = context.dependencies, immutables = context.immutables, i18n = context.i18n, requires = context.requires, styles = context.styles, values = context.values, variants = context.variants;
    var getName = function (key) { return fieldset ? "".concat(fieldset, ".").concat(key) : key; };
    var getDependencies = function (name) {
        var _a;
        if (!name) {
            return;
        }
        var dependency = getIn(name, dependencies);
        if (typeof dependency === 'string') {
            return _a = {}, _a[dependency] = values[dependency], _a;
        }
        else if (Array.isArray(dependency)) {
            return dependency.reduce(function (acc, item) {
                var _a;
                return Object.assign(acc, (_a = {}, _a[item] = values[item], _a));
            }, {});
        }
        else if ((0, ObjectSchema_1.isSimpleObject)(dependency)) {
            return Object.entries(dependency)
                .reduce(function (acc, _a) {
                var _b;
                var item = _a[0];
                return Object.assign(acc, (_b = {}, _b[item] = values[item], _b));
            }, {});
        }
        ;
    };
    var isReady = function (name) {
        if (!name) {
            return true;
        }
        var dependency = getIn(name, dependencies);
        if (typeof dependency === 'string') {
            return Boolean(values[dependency]);
        }
        else if (Array.isArray(dependency)) {
            return dependency.some(function (name) { return !Boolean(values[name]); });
        }
        else if ((0, ObjectSchema_1.isSimpleObject)(dependency)) {
            return Object.entries(dependency) // TODO: also check for val being an array of values or a sift expre
                .map(function (_a) {
                var key = _a[0], val = _a[1];
                return ([values[key], val]);
            })
                .filter(function (_a) {
                var lhs = _a[0], rhs = _a[1];
                return lhs != rhs;
            })
                .length === 0;
        }
        return true;
    };
    (0, react_1.useEffect)(function () {
        return batch(function () {
            var dirty = Object.keys(fields)
                .map(getName)
                .filter(function (name) { return isReady(name) === false; })
                .filter(function (name) { return typeof values[name] !== 'undefined'; });
            dirty.forEach(change);
        });
    }, [batch, change, fields, fieldset, values]);
    var getFieldProps = function (key, schema) {
        var name = getName(key);
        var value = values[name];
        if (!value) {
            var tuples = Object.entries(values).filter(function (_a) {
                var key = _a[0];
                return key.startsWith(name + '.');
            });
            if (tuples.length) {
                value = tuples.reduce(function (acc, _a) {
                    var _b;
                    var key = _a[0], val = _a[1];
                    return Object.assign(acc, (_b = {}, _b[key.substring(name.length + 1)] = val, _b));
                }, {});
            }
        }
        var props = __assign(__assign({}, textIn(name, t, i18n)), { api: api, 
            // context,
            dependencies: getDependencies(name), dispatch: dispatch, name: name, schema: schema, t: t, value: value });
        if (classes && styles) {
            var style = styles[name];
            if (style) {
                var className = classes[style];
                if (className) {
                    Object.assign(props, { className: className });
                }
            }
        }
        if (isReady(name) === false) {
            Object.assign(props, { disabled: true });
        }
        if (immutables[name]) {
            Object.assign(props, { readonly: true });
        }
        if (requires[name]) {
            Object.assign(props, { required: true });
        }
        if (variants && variants[name]) {
            Object.assign(props, { variant: variants[name] });
        }
        var _a = schema, domainName = _a.domain, placeholder = _a.placeholder, type = _a.type;
        if (!domainName) {
        }
        else {
            var domain = DOMAINS[domainName];
            if (domain) {
                Object.assign(props, { domain: domain });
                if (type === StringSchema_1.STRING_TYPE && (domain === null || domain === void 0 ? void 0 : domain.enum) && !props.disabled) {
                    var parent_1 = dependencies[name];
                    if (typeof parent_1 === 'string') {
                        var filter = values[parent_1];
                        Object.assign(props, { filter: filter });
                    }
                }
            }
        }
        if (placeholder) {
            Object.assign(props, { placeholder: t(placeholder) });
        }
        return props;
    };
    return {
        api: api,
        hidden: !isReady(fieldset),
        getFieldProps: getFieldProps,
        t: t
    };
};
exports.default = useFieldset;
