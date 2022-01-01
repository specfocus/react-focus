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
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const data_1 = __importDefault(require("../segments/data"));
const SegmentsInput = (_a) => {
    var { addField } = _a, rest = __rest(_a, ["addField"]);
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(app_1.SelectArrayInput, Object.assign({ source: "groups" }, rest, { choices: data_1.default.map(segment => ({
            id: segment.id,
            name: translate(segment.name),
        })) }), void 0));
};
SegmentsInput.defaultProps = {
    addField: true,
    source: 'groups',
    resource: 'customers',
};
exports.default = SegmentsInput;
