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
require("date-fns");
var react_1 = __importDefault(require("react"));
var TextField_1 = require("../../../components/final-form/TextField");
var DateField_1 = __importDefault(require("./DateField"));
var EnumField_1 = __importDefault(require("./EnumField"));
var StringField = function (props) {
    var domain = props.domain;
    switch (domain === null || domain === void 0 ? void 0 : domain.format) {
        case 'date':
            return (react_1.default.createElement(DateField_1.default, __assign({}, props)));
    }
    if ((domain === null || domain === void 0 ? void 0 : domain.enum) && !props.readonly) {
        return (react_1.default.createElement(EnumField_1.default, __assign({}, props)));
    }
    var textFieldProps = {
        name: props.name
    };
    if (props.readonly) {
        Object.assign(textFieldProps, {
            disabled: true,
            InputProps: {
                readOnly: true,
            },
            variant: 'outlined',
            'aria-readonly': true,
        });
    }
    return (react_1.default.createElement(TextField_1.TextField, __assign({}, props, { helperText: props.required && '* Required' }, textFieldProps)));
};
exports.default = StringField;
