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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("date-fns");
var react_1 = __importStar(require("react"));
var Fieldset_1 = __importDefault(require("../../components/Fieldset"));
var BooleanDomain_1 = require("../../lib/BooleanDomain");
var AutoGrid_1 = __importDefault(require("../AutoGrid"));
var ActionField_1 = __importDefault(require("./fields/ActionField"));
var ArrayField_1 = __importDefault(require("./fields/ArrayField"));
var BooleanFieldGroup_1 = __importDefault(require("./fields/BooleanFieldGroup"));
var BooleanXorFieldGroup_1 = __importDefault(require("./fields/BooleanXorFieldGroup"));
var SimpleField_1 = __importDefault(require("./fields/SimpleField"));
var useFieldset_1 = __importDefault(require("./useFieldset"));
function AutoFields(_a) {
    var config = _a.config, context = _a.context, name = _a.name, schema = _a.schema;
    var domain = schema.domain, fields = schema.fields;
    var props = { context: context, name: name, schema: schema };
    var _b = (0, useFieldset_1.default)(props), getFieldProps = _b.getFieldProps, hidden = _b.hidden, t = _b.t;
    if (hidden) {
        return null;
    }
    switch (domain) {
        case BooleanDomain_1.BOOLEAN_XOR_DOMAIN:
            return (react_1.default.createElement(Fieldset_1.default, { subtitle: name },
                react_1.default.createElement(BooleanXorFieldGroup_1.default, __assign({}, props))));
        case BooleanDomain_1.BOOLEAN_DOMAIN:
            return (react_1.default.createElement(Fieldset_1.default, { subtitle: t(name) },
                react_1.default.createElement(BooleanFieldGroup_1.default, __assign({}, props))));
    }
    return (react_1.default.createElement(Fieldset_1.default, { subtitle: t(name) },
        react_1.default.createElement(AutoGrid_1.default, { config: config }, Object.entries(fields).map(function (_a) {
            var _b;
            var key = _a[0], field = _a[1];
            var props = getFieldProps(key, field);
            if ((_b = context.excludes) === null || _b === void 0 ? void 0 : _b.includes(props.name)) {
                return null;
            }
            if (field.type === 'action') {
                return (react_1.default.createElement(react_1.Fragment, { key: field.name },
                    react_1.default.createElement(ActionField_1.default, __assign({}, props, { dispatch: context.dispatch, values: context.values }))));
            }
            if (field.type === 'array') {
                return (react_1.default.createElement(react_1.Fragment, { key: field.name },
                    react_1.default.createElement(ArrayField_1.default, __assign({}, props))));
            }
            return (react_1.default.createElement(react_1.Fragment, { key: field.name },
                react_1.default.createElement(SimpleField_1.default, __assign({}, props, { dispatch: context.dispatch, values: context.values }))));
        }))));
}
exports.default = AutoFields;
