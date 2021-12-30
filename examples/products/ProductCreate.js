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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var RichTextInput_1 = __importDefault(require("../../components/RichTextInput"));
var PREFIX = 'ProductCreate';
var classes = {
    price: "".concat(PREFIX, "-price"),
    width: "".concat(PREFIX, "-width"),
    height: "".concat(PREFIX, "-height"),
    stock: "".concat(PREFIX, "-stock"),
    widthFormGroup: "".concat(PREFIX, "-widthFormGroup"),
    heightFormGroup: "".concat(PREFIX, "-heightFormGroup"),
};
var StyledCreate = (0, styles_1.styled)(app_1.Create)((_a = {},
    _a["& .".concat(classes.price)] = { width: '7em' },
    _a["& .".concat(classes.width)] = { width: '7em' },
    _a["& .".concat(classes.height)] = { width: '7em' },
    _a["& .".concat(classes.stock)] = { width: '7em' },
    _a["& .".concat(classes.widthFormGroup)] = { display: 'inline-block' },
    _a["& .".concat(classes.heightFormGroup)] = {
        display: 'inline-block',
        marginLeft: 32,
    },
    _a));
var ProductCreate = function (props) {
    return (React.createElement(StyledCreate, __assign({}, props),
        React.createElement(app_1.TabbedForm, null,
            React.createElement(app_1.FormTab, { label: "resources.products.tabs.image" },
                React.createElement(app_1.TextInput, { autoFocus: true, source: "image", fullWidth: true, validate: (0, app_1.required)() }),
                React.createElement(app_1.TextInput, { source: "thumbnail", fullWidth: true, validate: (0, app_1.required)() })),
            React.createElement(app_1.FormTab, { label: "resources.products.tabs.details", path: "details" },
                React.createElement(app_1.TextInput, { source: "reference", validate: (0, app_1.required)() }),
                React.createElement(app_1.NumberInput, { source: "price", validate: (0, app_1.required)(), className: classes.price, InputProps: {
                        startAdornment: (React.createElement(material_1.InputAdornment, { position: "start" }, "\u20AC")),
                    } }),
                React.createElement(app_1.NumberInput, { source: "width", validate: (0, app_1.required)(), className: classes.width, formClassName: classes.widthFormGroup, InputProps: {
                        endAdornment: (React.createElement(material_1.InputAdornment, { position: "start" }, "cm")),
                    } }),
                React.createElement(app_1.NumberInput, { source: "height", validate: (0, app_1.required)(), className: classes.height, formClassName: classes.heightFormGroup, InputProps: {
                        endAdornment: (React.createElement(material_1.InputAdornment, { position: "start" }, "cm")),
                    } }),
                React.createElement(app_1.ReferenceInput, { source: "category_id", reference: "categories", allowEmpty: true },
                    React.createElement(app_1.SelectInput, { source: "name" })),
                React.createElement(app_1.NumberInput, { source: "stock", validate: (0, app_1.required)(), className: classes.stock })),
            React.createElement(app_1.FormTab, { label: "resources.products.tabs.description", path: "description" },
                React.createElement(RichTextInput_1.default, { source: "description", label: "" })))));
};
exports.default = ProductCreate;
