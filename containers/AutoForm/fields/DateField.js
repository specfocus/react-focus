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
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
require("date-fns");
var react_1 = __importDefault(require("react"));
var react_i18next_1 = require("react-i18next");
var KeyboardDatePicker_1 = require("../../../components/final-form/KeyboardDatePicker");
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
var DateField = function (_a) {
    var readonly = _a.readonly, required = _a.required, value = _a.value, props = __rest(_a, ["readonly", "required", "value"]);
    var t = (0, react_i18next_1.useTranslation)().t;
    var domain = props.domain;
    return (react_1.default.createElement(KeyboardDatePicker_1.KeyboardDatePicker, __assign({}, props, { 
        // format='yyyy-MM-dd'
        // placeholder={/*translate(placeholder, t) ||*/ 'yyyy-MM-dd'}
        dateFunsUtils: date_fns_1.default, 
        // helperText={required && '* Required'}
        readOnly: readonly }, domainProps('string', domain))));
};
exports.default = DateField;
