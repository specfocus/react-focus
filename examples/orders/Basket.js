"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const PREFIX = 'Basket';
const classes = {
    rightAlignedCell: `${PREFIX}-rightAlignedCell`,
};
const StyledTable = (0, styles_1.styled)(material_1.Table)({
    [`& .${classes.rightAlignedCell}`]: { textAlign: 'right' },
});
const Basket = (props) => {
    const { record } = props;
    const translate = (0, app_1.useTranslate)();
    const { loaded, data: products } = (0, app_1.useQueryWithStore)({
        type: 'getMany',
        resource: 'products',
        payload: {
            ids: record ? record.basket.map(item => item.product_id) : [],
        },
    }, {}, state => {
        const productIds = record
            ? record.basket.map(item => item.product_id)
            : [];
        return productIds
            .map(productId => state.admin.resources.products.data[productId])
            .filter(r => typeof r !== 'undefined')
            .reduce((prev, next) => {
            prev[next.id] = next;
            return prev;
        }, {});
    });
    if (!loaded || !record)
        return null;
    return ((0, jsx_runtime_1.jsxs)(StyledTable, { children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, { children: (0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(material_1.TableCell, { children: translate('resources.commands.fields.basket.reference') }, void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: translate('resources.commands.fields.basket.unit_price') }), void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: translate('resources.commands.fields.basket.quantity') }), void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: translate('resources.commands.fields.basket.total') }), void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.TableBody, { children: record.basket.map((item) => products[item.product_id] && ((0, jsx_runtime_1.jsxs)(material_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(material_1.TableCell, { children: (0, jsx_runtime_1.jsx)(app_1.Link, Object.assign({ to: `/products/${item.product_id}` }, { children: products[item.product_id].reference }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: products[item.product_id].price.toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                            }) }), void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: item.quantity }), void 0), (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: classes.rightAlignedCell }, { children: (products[item.product_id].price *
                                item.quantity).toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                            }) }), void 0)] }, item.product_id))) }, void 0)] }, void 0));
};
exports.default = Basket;
