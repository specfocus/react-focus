"use strict";
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
exports.COUNTRY_OPTION_TEMPLATE = exports.countryTransformFn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const convertCountryCodeToFlag_1 = __importDefault(require("features/domain/locale/convertCountryCodeToFlag"));
const DomainPicker_1 = __importDefault(require("../DomainPicker"));
const countryTransformFn = (_a) => {
    var { code } = _a, spread = __rest(_a, ["code"]);
    return (Object.assign(Object.assign({}, spread), { code, icon: (0, convertCountryCodeToFlag_1.default)(code) }));
};
exports.countryTransformFn = countryTransformFn;
exports.COUNTRY_OPTION_TEMPLATE = `<span>{icon}</span>
&nbsp;<span>{name} ({code}) +{phone}<span>
`;
const CountryPicker = (props) => {
    return ((0, jsx_runtime_1.jsx)(DomainPicker_1.default, Object.assign({ domain: "locale/language", labelKey: "name", optionTemplate: exports.COUNTRY_OPTION_TEMPLATE, transformFn: exports.countryTransformFn }, props), void 0));
};
exports.default = CountryPicker;
