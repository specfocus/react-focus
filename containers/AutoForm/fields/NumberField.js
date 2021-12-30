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
require("date-fns");
var react_1 = __importDefault(require("react"));
var react_final_form_1 = require("react-final-form");
var TextField_1 = require("../../../components/final-form/TextField");
// import ruLocale from 'date-fns/locale/ru';
var DOMAINS = __importStar(require("../../../data/domains"));
function domainProps(type, domain) {
    var domains = DOMAINS;
    var props = domains[type.toUpperCase()] || {};
    var position = domain ? domain.length : -1;
    while (domain && position > 0) {
        var val = domains[domain];
        if (val) {
            props = val;
            break;
        }
        position = domain.lastIndexOf('_', position);
        domain = domain.slice(0, position);
    }
    return props;
}
;
var NumberField = function (_a) {
    var label = _a.label, name = _a.name, placeholder = _a.placeholder, readonly = _a.readonly, required = _a.required, schema = _a.schema;
    var domain = schema.domain;
    var textFieldProps = {
        name: name
    };
    if (readonly) {
        Object.assign(textFieldProps, {
            disabled: true,
            InputProps: {
                readOnly: true,
                inputProps: { min: 0, max: 10 }
            },
            variant: 'outlined',
            'aria-readonly': true,
        });
    }
    return (react_1.default.createElement(react_final_form_1.Field, { type: "number", name: name, render: function (_a) {
            var _b = _a.input, name = _b.name, value = _b.value, onChange = _b.onChange, checked = _b.checked, restInput = __rest(_b, ["name", "value", "onChange", "checked"]);
            return (react_1.default.createElement(TextField_1.TextField, __assign({ name: name, label: label, placeholder: placeholder, helperText: required && '* Required', type: "number", InputProps: restInput }, domainProps('string', domain), textFieldProps)));
        } }));
};
exports.default = NumberField;
