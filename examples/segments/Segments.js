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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var Card_1 = __importDefault(require("@mui/material/Card"));
var Table_1 = __importDefault(require("@mui/material/Table"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableHead_1 = __importDefault(require("@mui/material/TableHead"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var app_1 = require("../../app");
var LinkToRelatedCustomers_1 = __importDefault(require("./LinkToRelatedCustomers"));
var data_1 = __importDefault(require("./data"));
var PREFIX = 'Segments';
var classes = {
    root: "".concat(PREFIX, "-root"),
};
var StyledCard = (0, styles_1.styled)(Card_1.default)((_a = {},
    _a["&.".concat(classes.root)] = {
        marginTop: 16,
    },
    _a));
var Segments = function () {
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(StyledCard, { className: classes.root },
        React.createElement(app_1.Title, { title: translate('resources.segments.name', { smart_count: 2 }) }),
        React.createElement(Table_1.default, { size: "small" },
            React.createElement(TableHead_1.default, null,
                React.createElement(TableRow_1.default, null,
                    React.createElement(TableCell_1.default, null, translate('resources.segments.fields.name')),
                    React.createElement(TableCell_1.default, null))),
            React.createElement(TableBody_1.default, null, data_1.default.map(function (segment) { return (React.createElement(TableRow_1.default, { key: segment.id },
                React.createElement(TableCell_1.default, null, translate(segment.name)),
                React.createElement(TableCell_1.default, null,
                    React.createElement(LinkToRelatedCustomers_1.default, { segment: segment.id })))); })))));
};
exports.default = Segments;
