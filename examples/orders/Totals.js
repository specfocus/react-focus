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
var classnames_1 = __importDefault(require("classnames"));
var material_1 = require("@mui/material");
var app_1 = require("../../app");
var PREFIX = 'Totals';
var classes = {
    container: "".concat(PREFIX, "-container"),
    rightAlignedCell: "".concat(PREFIX, "-rightAlignedCell"),
    boldCell: "".concat(PREFIX, "-boldCell"),
};
var StyledTable = (0, styles_1.styled)(material_1.Table)((_a = {},
    _a["&.".concat(classes.container)] = { minWidth: '35em' },
    _a["& .".concat(classes.rightAlignedCell)] = { textAlign: 'right' },
    _a["& .".concat(classes.boldCell)] = { fontWeight: 'bold' },
    _a));
var Totals = function (props) {
    var record = props.record;
    var translate = (0, app_1.useTranslate)();
    return (React.createElement(StyledTable, { className: classes.container },
        React.createElement(material_1.TableBody, null,
            React.createElement(material_1.TableRow, null,
                React.createElement(material_1.TableCell, null, translate('resources.commands.fields.basket.sum')),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, record === null || record === void 0 ? void 0 : record.total_ex_taxes.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                }))),
            React.createElement(material_1.TableRow, null,
                React.createElement(material_1.TableCell, null, translate('resources.commands.fields.basket.delivery')),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, record === null || record === void 0 ? void 0 : record.delivery_fees.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                }))),
            React.createElement(material_1.TableRow, null,
                React.createElement(material_1.TableCell, null,
                    translate('resources.commands.fields.basket.taxes'),
                    " (", record === null || record === void 0 ? void 0 :
                    record.tax_rate.toLocaleString(undefined, {
                        style: 'percent',
                    }),
                    ")"),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, record === null || record === void 0 ? void 0 : record.taxes.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                }))),
            React.createElement(material_1.TableRow, null,
                React.createElement(material_1.TableCell, { className: classes.boldCell }, translate('resources.commands.fields.basket.total')),
                React.createElement(material_1.TableCell, { className: (0, classnames_1.default)(classes.boldCell, classes.rightAlignedCell) }, record === null || record === void 0 ? void 0 : record.total.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                }))))));
};
exports.default = Totals;
