"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const app_1 = require("../../app");
const AddressField_1 = __importDefault(require("../visitors/AddressField"));
const CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
const MobileGrid_1 = __importDefault(require("./MobileGrid"));
const NbItemsField_1 = __importDefault(require("./NbItemsField"));
const PREFIX = 'OrderList';
const classes = {
    total: `${PREFIX}-total`,
};
const StyledDatagrid = (0, styles_1.styled)(app_1.Datagrid)({
    [`& .${classes.total}`]: { fontWeight: 'bold' },
});
const orderFilters = [
    (0, jsx_runtime_1.jsx)(app_1.SearchInput, { source: "q", alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "customer_id", reference: "customers" }, { children: (0, jsx_runtime_1.jsx)(app_1.AutocompleteInput, { optionText: (choice) => choice.id // the empty choice is { id: '' }
                ? `${choice.first_name} ${choice.last_name}`
                : '' }, void 0) }), void 0),
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_gte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_lte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "total_gte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.NullableBooleanInput, { source: "returned" }, void 0),
];
const tabs = [
    { id: 'ordered', name: 'ordered' },
    { id: 'delivered', name: 'delivered' },
    { id: 'cancelled', name: 'cancelled' },
];
const useGetTotals = (filterValues) => {
    const { total: totalOrdered } = (0, app_1.useGetList)('commands', { perPage: 1, page: 1 }, { field: 'id', order: 'ASC' }, Object.assign(Object.assign({}, filterValues), { status: 'ordered' }));
    const { total: totalDelivered } = (0, app_1.useGetList)('commands', { perPage: 1, page: 1 }, { field: 'id', order: 'ASC' }, Object.assign(Object.assign({}, filterValues), { status: 'delivered' }));
    const { total: totalCancelled } = (0, app_1.useGetList)('commands', { perPage: 1, page: 1 }, { field: 'id', order: 'ASC' }, Object.assign(Object.assign({}, filterValues), { status: 'cancelled' }));
    return {
        ordered: totalOrdered,
        delivered: totalDelivered,
        cancelled: totalCancelled,
    };
};
const TabbedDatagrid = (props) => {
    const listContext = (0, app_1.useListContext)();
    const { ids, filterValues, setFilters, displayedFilters } = listContext;
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const [ordered, setOrdered] = (0, react_1.useState)([]);
    const [delivered, setDelivered] = (0, react_1.useState)([]);
    const [cancelled, setCancelled] = (0, react_1.useState)([]);
    const totals = useGetTotals(filterValues);
    (0, react_1.useEffect)(() => {
        if (ids && ids !== filterValues.status) {
            switch (filterValues.status) {
                case 'ordered':
                    setOrdered(ids);
                    break;
                case 'delivered':
                    setDelivered(ids);
                    break;
                case 'cancelled':
                    setCancelled(ids);
                    break;
            }
        }
    }, [ids, filterValues.status]);
    const handleChange = (0, react_1.useCallback)((event, value) => {
        setFilters &&
            setFilters(Object.assign(Object.assign({}, filterValues), { status: value }), displayedFilters);
    }, [displayedFilters, filterValues, setFilters]);
    const selectedIds = filterValues.status === 'ordered'
        ? ordered
        : filterValues.status === 'delivered'
            ? delivered
            : cancelled;
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Tabs, Object.assign({ variant: "fullWidth", centered: true, value: filterValues.status, indicatorColor: "primary", onChange: handleChange }, { children: tabs.map(choice => ((0, jsx_runtime_1.jsx)(material_1.Tab, { label: totals[choice.name]
                        ? `${choice.name} (${totals[choice.name]})`
                        : choice.name, value: choice.id }, choice.id))) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), isXSmall ? ((0, jsx_runtime_1.jsx)(app_1.ListContextProvider, Object.assign({ value: Object.assign(Object.assign({}, listContext), { ids: selectedIds }) }, { children: (0, jsx_runtime_1.jsx)(MobileGrid_1.default, Object.assign({}, props, { ids: selectedIds }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsxs)("div", { children: [filterValues.status === 'ordered' && ((0, jsx_runtime_1.jsx)(app_1.ListContextProvider, Object.assign({ value: Object.assign(Object.assign({}, listContext), { ids: ordered }) }, { children: (0, jsx_runtime_1.jsxs)(StyledDatagrid, Object.assign({}, props, { optimized: true, rowClick: "edit" }, { children: [(0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date", showTime: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference" }, void 0), (0, jsx_runtime_1.jsx)(CustomerReferenceField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers", link: false, label: "resources.commands.fields.address" }, { children: (0, jsx_runtime_1.jsx)(AddressField_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(NbItemsField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total", options: {
                                        style: 'currency',
                                        currency: 'USD',
                                    }, className: classes.total }, void 0)] }), void 0) }), void 0)), filterValues.status === 'delivered' && ((0, jsx_runtime_1.jsx)(app_1.ListContextProvider, Object.assign({ value: Object.assign(Object.assign({}, listContext), { ids: delivered }) }, { children: (0, jsx_runtime_1.jsxs)(StyledDatagrid, Object.assign({}, props, { rowClick: "edit" }, { children: [(0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date", showTime: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference" }, void 0), (0, jsx_runtime_1.jsx)(CustomerReferenceField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers", link: false, label: "resources.commands.fields.address" }, { children: (0, jsx_runtime_1.jsx)(AddressField_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(NbItemsField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total", options: {
                                        style: 'currency',
                                        currency: 'USD',
                                    }, className: classes.total }, void 0), (0, jsx_runtime_1.jsx)(app_1.BooleanField, { source: "returned" }, void 0)] }), void 0) }), void 0)), filterValues.status === 'cancelled' && ((0, jsx_runtime_1.jsx)(app_1.ListContextProvider, Object.assign({ value: Object.assign(Object.assign({}, listContext), { ids: cancelled }) }, { children: (0, jsx_runtime_1.jsxs)(StyledDatagrid, Object.assign({}, props, { rowClick: "edit" }, { children: [(0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date", showTime: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference" }, void 0), (0, jsx_runtime_1.jsx)(CustomerReferenceField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "customer_id", reference: "customers", link: false, label: "resources.commands.fields.address" }, { children: (0, jsx_runtime_1.jsx)(AddressField_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(NbItemsField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "total", options: {
                                        style: 'currency',
                                        currency: 'USD',
                                    }, className: classes.total }, void 0), (0, jsx_runtime_1.jsx)(app_1.BooleanField, { source: "returned" }, void 0)] }), void 0) }), void 0))] }, void 0))] }, void 0));
};
const OrderList = (props) => ((0, jsx_runtime_1.jsx)(app_1.List, Object.assign({}, props, { filterDefaultValues: { status: 'ordered' }, sort: { field: 'date', order: 'DESC' }, perPage: 25, filters: orderFilters }, { children: (0, jsx_runtime_1.jsx)(TabbedDatagrid, {}, void 0) }), void 0));
exports.default = OrderList;
