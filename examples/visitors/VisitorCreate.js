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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePasswords = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var PREFIX = 'VisitorCreate';
var classes = {
    first_name: "".concat(PREFIX, "-first_name"),
    last_name: "".concat(PREFIX, "-last_name"),
    email: "".concat(PREFIX, "-email"),
    address: "".concat(PREFIX, "-address"),
    zipcode: "".concat(PREFIX, "-zipcode"),
    city: "".concat(PREFIX, "-city"),
    comment: "".concat(PREFIX, "-comment"),
    password: "".concat(PREFIX, "-password"),
    confirm_password: "".concat(PREFIX, "-confirm_password"),
};
var StyledSimpleForm = (0, styles_1.styled)(app_1.SimpleForm)((_a = {},
    _a["& .".concat(classes.first_name)] = { display: 'inline-block' },
    _a["& .".concat(classes.last_name)] = { display: 'inline-block', marginLeft: 32 },
    _a["& .".concat(classes.email)] = { width: 544 },
    _a["& .".concat(classes.address)] = { maxWidth: 544 },
    _a["& .".concat(classes.zipcode)] = { display: 'inline-block' },
    _a["& .".concat(classes.city)] = { display: 'inline-block', marginLeft: 32 },
    _a["& .".concat(classes.comment)] = {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    _a["& .".concat(classes.password)] = { display: 'inline-block' },
    _a["& .".concat(classes.confirm_password)] = {
        display: 'inline-block',
        marginLeft: 32,
    },
    _a));
var validatePasswords = function (_a) {
    var password = _a.password, confirm_password = _a.confirm_password;
    var errors = {};
    if (password && confirm_password && password !== confirm_password) {
        errors.confirm_password = [
            'resources.customers.errors.password_mismatch',
        ];
    }
    return errors;
};
exports.validatePasswords = validatePasswords;
var VisitorCreate = function (props) { return (React.createElement(app_1.Create, __assign({}, props),
    React.createElement(StyledSimpleForm, { validate: exports.validatePasswords },
        React.createElement(SectionTitle, { label: "resources.customers.fieldGroups.identity" }),
        React.createElement(app_1.TextInput, { autoFocus: true, source: "first_name", formClassName: classes.first_name, validate: requiredValidate }),
        React.createElement(app_1.TextInput, { source: "last_name", formClassName: classes.last_name, validate: requiredValidate }),
        React.createElement(app_1.TextInput, { type: "email", source: "email", validation: { email: true }, fullWidth: true, formClassName: classes.email, validate: [(0, app_1.required)(), (0, app_1.email)()] }),
        React.createElement(app_1.DateInput, { source: "birthday" }),
        React.createElement(Separator, null),
        React.createElement(SectionTitle, { label: "resources.customers.fieldGroups.address" }),
        React.createElement(app_1.TextInput, { source: "address", formClassName: classes.address, multiline: true, fullWidth: true, helperText: false }),
        React.createElement(app_1.TextInput, { source: "zipcode", formClassName: classes.zipcode, helperText: false }),
        React.createElement(app_1.TextInput, { source: "city", formClassName: classes.city, helperText: false }),
        React.createElement(Separator, null),
        React.createElement(SectionTitle, { label: "resources.customers.fieldGroups.password" }),
        React.createElement(app_1.PasswordInput, { source: "password", formClassName: classes.password }),
        React.createElement(app_1.PasswordInput, { source: "confirm_password", formClassName: classes.confirm_password })))); };
var requiredValidate = [(0, app_1.required)()];
var SectionTitle = function (_a) {
    var label = _a.label;
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(material_1.Typography, { variant: "h6", gutterBottom: true }, translate(label)));
};
var Separator = function () { return React.createElement(material_1.Box, { pt: "1em" }); };
exports.default = VisitorCreate;
