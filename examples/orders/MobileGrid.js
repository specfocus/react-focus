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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// in src/comments.js
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var app_1 = require("../../app");
var CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
var PREFIX = 'MobileGrid';
var classes = {
    card: "".concat(PREFIX, "-card"),
    cardTitleContent: "".concat(PREFIX, "-cardTitleContent"),
    cardContent: "".concat(PREFIX, "-cardContent"),
    cardContentRow: "".concat(PREFIX, "-cardContentRow"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.card)] = {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: '0.5rem 0',
        },
        _b["& .".concat(classes.cardTitleContent)] = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        _b["& .".concat(classes.cardContent)] = theme.typography.body1,
        _b["& .".concat(classes.cardContentRow)] = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0.5rem 0',
        },
        _b);
});
var MobileGrid = function (props) {
    var ids = props.ids, data = props.data, basePath = props.basePath;
    var translate = (0, app_1.useTranslate)();
    if (!ids || !data || !basePath) {
        return null;
    }
    return (React.createElement(Root, { style: { margin: '1em' } }, ids.map(function (id) { return (React.createElement(material_1.Card, { key: id, className: classes.card },
        React.createElement(material_1.CardHeader, { title: React.createElement("div", { className: classes.cardTitleContent },
                React.createElement("span", null,
                    translate('resources.commands.name', 1),
                    ":\u00A0",
                    React.createElement(app_1.TextField, { record: data[id], source: "reference" })),
                React.createElement(app_1.EditButton, { resource: "commands", basePath: basePath, record: data[id] })) }),
        React.createElement(material_1.CardContent, { className: classes.cardContent },
            React.createElement("span", { className: classes.cardContentRow },
                translate('resources.customers.name', 1),
                ":\u00A0",
                React.createElement(CustomerReferenceField_1.default, { record: data[id], basePath: basePath })),
            React.createElement("span", { className: classes.cardContentRow },
                translate('resources.reviews.fields.date'),
                ":\u00A0",
                React.createElement(app_1.DateField, { record: data[id], source: "date", showTime: true })),
            React.createElement("span", { className: classes.cardContentRow },
                translate('resources.commands.fields.basket.total'),
                ":\u00A0",
                React.createElement(app_1.NumberField, { record: data[id], source: "total", options: { style: 'currency', currency: 'USD' } })),
            React.createElement("span", { className: classes.cardContentRow },
                translate('resources.commands.fields.status'),
                ":\u00A0",
                React.createElement(app_1.TextField, { source: "status", record: data[id] })),
            React.createElement("span", { className: classes.cardContentRow },
                translate('resources.commands.fields.returned'),
                ":\u00A0",
                React.createElement(app_1.BooleanField, { record: data[id], source: "returned" }))))); })));
};
MobileGrid.defaultProps = {
    data: {},
    ids: [],
};
exports.default = MobileGrid;
