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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ArraySchema_1 = require("../../../lib/ArraySchema");
var BooleanSchema_1 = require("../../../lib/BooleanSchema");
var NumberSchema_1 = require("../../../lib/NumberSchema");
var StringSchema_1 = require("../../../lib/StringSchema");
var ArrayField_1 = __importDefault(require("./ArrayField"));
var BooleanField_1 = __importDefault(require("./BooleanField"));
var NumberField_1 = __importDefault(require("./NumberField"));
var StringField_1 = __importDefault(require("./StringField"));
var SimpleField = function (props) {
    switch (props.schema.type) {
        case ArraySchema_1.ARRAY_TYPE:
            return (react_1.default.createElement(ArrayField_1.default, __assign({}, props)));
        case BooleanSchema_1.BOOLEAN_TYPE:
            return (react_1.default.createElement(BooleanField_1.default, __assign({}, props)));
        case NumberSchema_1.NUMBER_TYPE:
            return (react_1.default.createElement(NumberField_1.default, __assign({}, props)));
        case StringSchema_1.STRING_TYPE:
            return (react_1.default.createElement(StringField_1.default, __assign({}, props)));
        default:
            console.warn("Unknnown schema type ".concat(props.schema.type));
            return null;
    }
};
exports.default = SimpleField;
