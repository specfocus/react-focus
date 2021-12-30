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
exports.CompanyEdit = void 0;
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var clsx_1 = __importDefault(require("clsx"));
var CompanyAside_1 = require("./CompanyAside");
var LogoField_1 = require("./LogoField");
var sectors_1 = require("./sectors");
var sizes_1 = require("./sizes");
var useStyles = (0, styles_1.makeStyles)({
    inline: {
        display: 'inline-block',
        marginLeft: '1em',
        '&.first-child': {
            marginLeft: 0,
        },
    },
});
var CompanyEdit = function (props) {
    var classes = useStyles();
    return (React.createElement(app_1.Edit, __assign({}, props, { aside: React.createElement(CompanyAside_1.CompanyAside, { link: "show" }), actions: false }),
        React.createElement(app_1.SimpleForm, { component: CustomLayout, redirect: "show" },
            React.createElement(app_1.TextInput, { source: "name", validate: (0, app_1.required)(), fullWidth: true }),
            React.createElement(app_1.SelectInput, { source: "sector", choices: sectors_1.sectors, formClassName: (0, clsx_1.default)(classes.inline, 'first-child') }),
            React.createElement(app_1.SelectInput, { source: "size", choices: sizes_1.sizes, formClassName: classes.inline }),
            React.createElement(CustomDivider, null),
            React.createElement(app_1.TextInput, { source: "address", fullWidth: true, helperText: false }),
            React.createElement(app_1.TextInput, { source: "city", formClassName: (0, clsx_1.default)(classes.inline, 'first-child') }),
            React.createElement(app_1.TextInput, { source: "zipcode", formClassName: classes.inline }),
            React.createElement(app_1.TextInput, { source: "stateAbbr", formClassName: classes.inline }),
            React.createElement(CustomDivider, null),
            React.createElement(app_1.TextInput, { source: "website", fullWidth: true, helperText: false }),
            React.createElement(app_1.TextInput, { source: "linkedIn", fullWidth: true, helperText: false }),
            React.createElement(app_1.TextInput, { source: "logo", fullWidth: true }),
            React.createElement(CustomDivider, null),
            React.createElement(app_1.TextInput, { source: "phone_number", formClassName: (0, clsx_1.default)(classes.inline, 'first-child'), helperText: false }),
            React.createElement(app_1.ReferenceInput, { source: "sales_id", reference: "sales", label: "Account manager", formClassName: classes.inline, helperText: false },
                React.createElement(app_1.SelectInput, { optionText: function (sales) {
                        return "".concat(sales.first_name, " ").concat(sales.last_name);
                    } })))));
};
exports.CompanyEdit = CompanyEdit;
var CustomLayout = function (props) {
    var record = (0, app_1.useRecordContext)(props);
    return (React.createElement(material_1.CardContent, null,
        React.createElement(material_1.Box, { display: "flex" },
            React.createElement(LogoField_1.LogoField, { record: record }),
            React.createElement(material_1.Box, { ml: 2, flex: "1", maxWidth: 796 }, props.children))));
};
var CustomDivider = function () { return (React.createElement(material_1.Box, { mb: 2 },
    React.createElement(material_1.Divider, null))); };
