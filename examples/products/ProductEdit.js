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
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var RichTextInput_1 = __importDefault(require("../../components/RichTextInput"));
var CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
var StarRatingField_1 = __importDefault(require("../reviews/StarRatingField"));
var Poster_1 = __importDefault(require("./Poster"));
var ProductTitle = function (_a) {
    var record = _a.record;
    return record ? React.createElement("span", null,
        "Poster #",
        record.reference) : null;
};
var PREFIX = 'ProductEdit';
var classes = {
    price: "".concat(PREFIX, "-price"),
    width: "".concat(PREFIX, "-width"),
    height: "".concat(PREFIX, "-height"),
    stock: "".concat(PREFIX, "-stock"),
    widthFormGroup: "".concat(PREFIX, "-widthFormGroup"),
    heightFormGroup: "".concat(PREFIX, "-heightFormGroup"),
    comment: "".concat(PREFIX, "-comment"),
    tab: "".concat(PREFIX, "-tab"),
};
var StyledEdit = (0, material_1.styled)(app_1.Edit)((_a = {},
    _a["& .".concat(classes.price)] = { width: '7em' },
    _a["& .".concat(classes.width)] = { width: '7em' },
    _a["& .".concat(classes.height)] = { width: '7em' },
    _a["& .".concat(classes.stock)] = { width: '7em' },
    _a["& .".concat(classes.widthFormGroup)] = { display: 'inline-block' },
    _a["& .".concat(classes.heightFormGroup)] = {
        display: 'inline-block',
        marginLeft: 32,
    },
    _a["& .".concat(classes.comment)] = {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    _a["& .".concat(classes.tab)] = {
        maxWidth: '40em',
        display: 'block',
    },
    _a));
var ProductEdit = function (props) { return (React.createElement(StyledEdit, __assign({}, props, { title: React.createElement(ProductTitle, null) }),
    React.createElement(app_1.TabbedForm, null,
        React.createElement(app_1.FormTab, { label: "resources.products.tabs.image", contentClassName: classes.tab },
            React.createElement(Poster_1.default, null),
            React.createElement(app_1.TextInput, { source: "image", fullWidth: true, validate: requiredValidate }),
            React.createElement(app_1.TextInput, { source: "thumbnail", fullWidth: true, validate: requiredValidate })),
        React.createElement(app_1.FormTab, { label: "resources.products.tabs.details", path: "details", contentClassName: classes.tab },
            React.createElement(app_1.TextInput, { source: "reference", validate: requiredValidate }),
            React.createElement(app_1.NumberInput, { source: "price", className: classes.price, InputProps: {
                    startAdornment: (React.createElement(material_1.InputAdornment, { position: "start" }, "\u20AC")),
                }, validate: requiredValidate }),
            React.createElement(app_1.NumberInput, { source: "width", className: classes.width, formClassName: classes.widthFormGroup, InputProps: {
                    endAdornment: (React.createElement(material_1.InputAdornment, { position: "start" }, "cm")),
                }, validate: requiredValidate }),
            React.createElement(app_1.NumberInput, { source: "height", className: classes.height, formClassName: classes.heightFormGroup, InputProps: {
                    endAdornment: (React.createElement(material_1.InputAdornment, { position: "start" }, "cm")),
                }, validate: requiredValidate }),
            React.createElement(app_1.ReferenceInput, { source: "category_id", reference: "categories", validate: requiredValidate },
                React.createElement(app_1.SelectInput, { source: "name" })),
            React.createElement(app_1.NumberInput, { source: "stock", className: classes.stock, validate: requiredValidate }),
            React.createElement(app_1.NumberInput, { source: "sales", className: classes.stock, validate: requiredValidate })),
        React.createElement(app_1.FormTab, { label: "resources.products.tabs.description", path: "description", contentClassName: classes.tab },
            React.createElement(RichTextInput_1.default, { source: "description", label: "", validate: requiredValidate })),
        React.createElement(app_1.FormTab, { label: "resources.products.tabs.reviews", path: "reviews" },
            React.createElement(app_1.ReferenceManyField, { reference: "reviews", target: "product_id", addLabel: false, pagination: React.createElement(app_1.Pagination, null), fullWidth: true },
                React.createElement(app_1.Datagrid, null,
                    React.createElement(app_1.DateField, { source: "date" }),
                    React.createElement(CustomerReferenceField_1.default, null),
                    React.createElement(StarRatingField_1.default, null),
                    React.createElement(app_1.TextField, { source: "comment", cellClassName: classes.comment }),
                    React.createElement(app_1.TextField, { source: "status" }),
                    React.createElement(app_1.EditButton, null))))))); };
var requiredValidate = [(0, app_1.required)()];
exports.default = ProductEdit;
