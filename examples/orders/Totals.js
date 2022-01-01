"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const material_1 = require("@mui/material");
const app_1 = require("../../app");
const PREFIX = 'Totals';
const classes = {
    container: `${PREFIX}-container`,
    rightAlignedCell: `${PREFIX}-rightAlignedCell`,
    boldCell: `${PREFIX}-boldCell`,
};
const StyledTable = (0, styles_1.styled)(material_1.Table)({
    [`&.${classes.container}`]: { minWidth: '35em' },
    [`& .${classes.rightAlignedCell}`]: { textAlign: 'right' },
    [`& .${classes.boldCell}`]: { fontWeight: 'bold' },
});
const Totals = (props) => {
    const { record } = props;
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(StyledTable, Object.assign({ className: classes.container }, { children: (0, jsx_runtime_1.jsxs)(material_1.TableBody, { children: [(0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(material_1.TableCell, { children: translate('resources.commands.fields.basket.sum') }, void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: record === null || record === void 0 ? void 0 : record.total_ex_taxes.toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                            }) }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(material_1.TableCell, { children: translate('resources.commands.fields.basket.delivery') }, void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: record === null || record === void 0 ? void 0 : record.delivery_fees.toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                            }) }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsxs)(material_1.TableCell, { children: [translate('resources.commands.fields.basket.taxes'), " (", record === null || record === void 0 ? void 0 : record.tax_rate.toLocaleString(undefined, {
                                    style: 'percent',
                                }), ")"] }, void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: record === null || record === void 0 ? void 0 : record.taxes.toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                            }) }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.boldCell }, { children: translate('resources.commands.fields.basket.total') }), void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: (0, classnames_1.default)(classes.boldCell, classes.rightAlignedCell) }, { children: record === null || record === void 0 ? void 0 : record.total.toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                            }) }), void 0)] }, void 0)] }, void 0) }), void 0));
};
exports.default = Totals;
