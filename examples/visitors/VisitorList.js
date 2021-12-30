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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var SegmentsField_1 = __importDefault(require("./SegmentsField"));
var SegmentInput_1 = __importDefault(require("./SegmentInput"));
var CustomerLinkField_1 = __importDefault(require("./CustomerLinkField"));
var ColoredNumberField_1 = __importDefault(require("./ColoredNumberField"));
var MobileGrid_1 = __importDefault(require("./MobileGrid"));
var VisitorListAside_1 = __importDefault(require("./VisitorListAside"));
var PREFIX = 'VisitorList';
var classes = {
    nb_commands: "".concat(PREFIX, "-nb_commands"),
    hiddenOnSmallScreens: "".concat(PREFIX, "-hiddenOnSmallScreens"),
};
var StyledList = (0, styles_1.styled)(app_1.List)(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.nb_commands)] = { color: 'purple' },
        _b["& .".concat(classes.hiddenOnSmallScreens)] = (_c = {
                display: 'table-cell'
            },
            _c[theme.breakpoints.down('lg')] = {
                display: 'none',
            },
            _c),
        _b);
});
var visitorFilters = [
    React.createElement(app_1.SearchInput, { source: "q", alwaysOn: true }),
    React.createElement(app_1.DateInput, { source: "last_seen_gte" }),
    React.createElement(app_1.NullableBooleanInput, { source: "has_ordered" }),
    React.createElement(app_1.NullableBooleanInput, { source: "has_newsletter", defaultValue: true }),
    React.createElement(SegmentInput_1.default, null),
];
var VisitorList = function (props) {
    var isXsmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var isSmall = (0, material_1.useMediaQuery)(function (theme) { return theme.breakpoints.down('md'); });
    return (React.createElement(StyledList, __assign({}, props, { filters: isSmall ? visitorFilters : undefined, sort: { field: 'last_seen', order: 'DESC' }, perPage: 25, aside: React.createElement(VisitorListAside_1.default, null) }), isXsmall ? (React.createElement(MobileGrid_1.default, null)) : (React.createElement(app_1.Datagrid, { optimized: true, rowClick: "edit" },
        React.createElement(CustomerLinkField_1.default, null),
        React.createElement(app_1.DateField, { source: "last_seen" }),
        React.createElement(app_1.NumberField, { source: "nb_commands", label: "resources.customers.fields.commands", className: classes.nb_commands }),
        React.createElement(ColoredNumberField_1.default, { source: "total_spent", options: { style: 'currency', currency: 'USD' } }),
        React.createElement(app_1.DateField, { source: "latest_purchase", showTime: true }),
        React.createElement(app_1.BooleanField, { source: "has_newsletter", label: "News." }),
        React.createElement(SegmentsField_1.default, { cellClassName: classes.hiddenOnSmallScreens, headerClassName: classes.hiddenOnSmallScreens })))));
};
exports.default = VisitorList;
