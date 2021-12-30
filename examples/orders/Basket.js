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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var app_1 = require("../../app");
var PREFIX = 'Basket';
var classes = {
    rightAlignedCell: "".concat(PREFIX, "-rightAlignedCell"),
};
var StyledTable = (0, styles_1.styled)(material_1.Table)((_a = {},
    _a["& .".concat(classes.rightAlignedCell)] = { textAlign: 'right' },
    _a));
var Basket = function (props) {
    var record = props.record;
    var translate = (0, app_1.useTranslate)();
    var _a = (0, app_1.useQueryWithStore)({
        type: 'getMany',
        resource: 'products',
        payload: {
            ids: record ? record.basket.map(function (item) { return item.product_id; }) : [],
        },
    }, {}, function (state) {
        var productIds = record
            ? record.basket.map(function (item) { return item.product_id; })
            : [];
        return productIds
            .map(function (productId) {
            return state.admin.resources.products.data[productId];
        })
            .filter(function (r) { return typeof r !== 'undefined'; })
            .reduce(function (prev, next) {
            prev[next.id] = next;
            return prev;
        }, {});
    }), loaded = _a.loaded, products = _a.data;
    if (!loaded || !record)
        return null;
    return (React.createElement(StyledTable, null,
        React.createElement(material_1.TableHead, null,
            React.createElement(material_1.TableRow, null,
                React.createElement(material_1.TableCell, null, translate('resources.commands.fields.basket.reference')),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, translate('resources.commands.fields.basket.unit_price')),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, translate('resources.commands.fields.basket.quantity')),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, translate('resources.commands.fields.basket.total')))),
        React.createElement(material_1.TableBody, null, record.basket.map(function (item) {
            return products[item.product_id] && (React.createElement(material_1.TableRow, { key: item.product_id },
                React.createElement(material_1.TableCell, null,
                    React.createElement(app_1.Link, { to: "/products/".concat(item.product_id) }, products[item.product_id].reference)),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, products[item.product_id].price.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                })),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, item.quantity),
                React.createElement(material_1.TableCell, { className: classes.rightAlignedCell }, (products[item.product_id].price *
                    item.quantity).toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                }))));
        }))));
};
exports.default = Basket;
