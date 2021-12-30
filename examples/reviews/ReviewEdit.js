"use strict";
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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var ProductReferenceField_1 = __importDefault(require("../products/ProductReferenceField"));
var CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
var StarRatingField_1 = __importDefault(require("./StarRatingField"));
var ReviewEditToolbar_1 = __importDefault(require("./ReviewEditToolbar"));
var PREFIX = 'ReviewEdit';
var classes = {
    root: "".concat(PREFIX, "-root"),
    title: "".concat(PREFIX, "-title"),
    form: "".concat(PREFIX, "-form"),
    inlineField: "".concat(PREFIX, "-inlineField"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            paddingTop: 40,
        },
        _b["& .".concat(classes.title)] = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '1em',
        },
        _b["& .".concat(classes.form)] = (_c = {},
            _c[theme.breakpoints.up('xs')] = {
                width: 400,
            },
            _c[theme.breakpoints.down('sm')] = {
                width: '100vw',
                marginTop: -30,
            },
            _c),
        _b["& .".concat(classes.inlineField)] = {
            display: 'inline-block',
            width: '50%',
        },
        _b);
});
var ReviewEdit = function (_a) {
    var onCancel = _a.onCancel, props = __rest(_a, ["onCancel"]);
    var controllerProps = (0, app_1.useEditController)(props);
    var translate = (0, app_1.useTranslate)();
    if (!controllerProps.record) {
        return null;
    }
    return (React.createElement(Root, { className: classes.root },
        React.createElement("div", { className: classes.title },
            React.createElement(material_1.Typography, { variant: "h6" }, translate('resources.reviews.detail')),
            React.createElement(material_1.IconButton, { onClick: onCancel, size: "large" },
                React.createElement(Close_1.default, null))),
        React.createElement(app_1.EditContextProvider, { value: controllerProps },
            React.createElement(app_1.SimpleForm, { className: classes.form, basePath: controllerProps.basePath, record: controllerProps.record, save: controllerProps.save, version: controllerProps.version, redirect: "list", resource: "reviews", toolbar: React.createElement(ReviewEditToolbar_1.default, null) },
                React.createElement(CustomerReferenceField_1.default, { formClassName: classes.inlineField }),
                React.createElement(ProductReferenceField_1.default, { formClassName: classes.inlineField }),
                React.createElement(app_1.DateField, { source: "date", formClassName: classes.inlineField }),
                React.createElement(StarRatingField_1.default, { formClassName: classes.inlineField }),
                React.createElement(app_1.TextInput, { source: "comment", rowsMax: 15, multiline: true, fullWidth: true })))));
};
exports.default = ReviewEdit;
