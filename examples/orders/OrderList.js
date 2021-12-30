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
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var NbItemsField_1 = __importDefault(require("./NbItemsField"));
var CustomerReferenceField_1 = __importDefault(require("../visitors/CustomerReferenceField"));
var AddressField_1 = __importDefault(require("../visitors/AddressField"));
var MobileGrid_1 = __importDefault(require("./MobileGrid"));
var PREFIX = 'OrderList';
var classes = {
    total: "".concat(PREFIX, "-total"),
};
var StyledDatagrid = (0, styles_1.styled)(app_1.Datagrid)((_a = {},
    _a["& .".concat(classes.total)] = { fontWeight: 'bold' },
    _a));
var orderFilters = [
    React.createElement(app_1.SearchInput, { source: "q", alwaysOn: true }),
    React.createElement(app_1.ReferenceInput, { source: "customer_id", reference: "customers" },
        React.createElement(app_1.AutocompleteInput, { optionText: function (choice) {
                return choice.id // the empty choice is { id: '' }
                    ? "".concat(choice.first_name, " ").concat(choice.last_name)
                    : '';
            } })),
    React.createElement(app_1.DateInput, { source: "date_gte" }),
    React.createElement(app_1.DateInput, { source: "date_lte" }),
    React.createElement(app_1.TextInput, { source: "total_gte" }),
    React.createElement(app_1.NullableBooleanInput, { source: "returned" }),
];
var tabs = [
    { id: 'ordered', name: 'ordered' },
    { id: 'delivered', name: 'delivered' },
    { id: 'cancelled', name: 'cancelled' },
];
var useGetTotals = function (filterValues) {
    var totalOrdered = (0, app_1.useGetList)('commands', { perPage: 1, page: 1 }, { field: 'id', order: 'ASC' }, __assign(__assign({}, filterValues), { status: 'ordered' })).total;
    var totalDelivered = (0, app_1.useGetList)('commands', { perPage: 1, page: 1 }, { field: 'id', order: 'ASC' }, __assign(__assign({}, filterValues), { status: 'delivered' })).total;
    var totalCancelled = (0, app_1.useGetList)('commands', { perPage: 1, page: 1 }, { field: 'id', order: 'ASC' }, __assign(__assign({}, filterValues), { status: 'cancelled' })).total;
    return {
        ordered: totalOrdered,
        delivered: totalDelivered,
        cancelled: totalCancelled,
    };
};
var TabbedDatagrid = function (props) {
    var listContext = (0, app_1.useListContext)();
    var ids = listContext.ids, filterValues = listContext.filterValues, setFilters = listContext.setFilters, displayedFilters = listContext.displayedFilters;
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var _a = (0, react_1.useState)([]), ordered = _a[0], setOrdered = _a[1];
    var _b = (0, react_1.useState)([]), delivered = _b[0], setDelivered = _b[1];
    var _c = (0, react_1.useState)([]), cancelled = _c[0], setCancelled = _c[1];
    var totals = useGetTotals(filterValues);
    (0, react_1.useEffect)(function () {
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
    var handleChange = (0, react_1.useCallback)(function (event, value) {
        setFilters &&
            setFilters(__assign(__assign({}, filterValues), { status: value }), displayedFilters);
    }, [displayedFilters, filterValues, setFilters]);
    var selectedIds = filterValues.status === 'ordered'
        ? ordered
        : filterValues.status === 'delivered'
            ? delivered
            : cancelled;
    return (React.createElement(react_1.Fragment, null,
        React.createElement(material_1.Tabs, { variant: "fullWidth", centered: true, value: filterValues.status, indicatorColor: "primary", onChange: handleChange }, tabs.map(function (choice) { return (React.createElement(material_1.Tab, { key: choice.id, label: totals[choice.name]
                ? "".concat(choice.name, " (").concat(totals[choice.name], ")")
                : choice.name, value: choice.id })); })),
        React.createElement(material_1.Divider, null),
        isXSmall ? (React.createElement(app_1.ListContextProvider, { value: __assign(__assign({}, listContext), { ids: selectedIds }) },
            React.createElement(MobileGrid_1.default, __assign({}, props, { ids: selectedIds })))) : (React.createElement("div", null,
            filterValues.status === 'ordered' && (React.createElement(app_1.ListContextProvider, { value: __assign(__assign({}, listContext), { ids: ordered }) },
                React.createElement(StyledDatagrid, __assign({}, props, { optimized: true, rowClick: "edit" }),
                    React.createElement(app_1.DateField, { source: "date", showTime: true }),
                    React.createElement(app_1.TextField, { source: "reference" }),
                    React.createElement(CustomerReferenceField_1.default, null),
                    React.createElement(app_1.ReferenceField, { source: "customer_id", reference: "customers", link: false, label: "resources.commands.fields.address" },
                        React.createElement(AddressField_1.default, null)),
                    React.createElement(NbItemsField_1.default, null),
                    React.createElement(app_1.NumberField, { source: "total", options: {
                            style: 'currency',
                            currency: 'USD',
                        }, className: classes.total })))),
            filterValues.status === 'delivered' && (React.createElement(app_1.ListContextProvider, { value: __assign(__assign({}, listContext), { ids: delivered }) },
                React.createElement(StyledDatagrid, __assign({}, props, { rowClick: "edit" }),
                    React.createElement(app_1.DateField, { source: "date", showTime: true }),
                    React.createElement(app_1.TextField, { source: "reference" }),
                    React.createElement(CustomerReferenceField_1.default, null),
                    React.createElement(app_1.ReferenceField, { source: "customer_id", reference: "customers", link: false, label: "resources.commands.fields.address" },
                        React.createElement(AddressField_1.default, null)),
                    React.createElement(NbItemsField_1.default, null),
                    React.createElement(app_1.NumberField, { source: "total", options: {
                            style: 'currency',
                            currency: 'USD',
                        }, className: classes.total }),
                    React.createElement(app_1.BooleanField, { source: "returned" })))),
            filterValues.status === 'cancelled' && (React.createElement(app_1.ListContextProvider, { value: __assign(__assign({}, listContext), { ids: cancelled }) },
                React.createElement(StyledDatagrid, __assign({}, props, { rowClick: "edit" }),
                    React.createElement(app_1.DateField, { source: "date", showTime: true }),
                    React.createElement(app_1.TextField, { source: "reference" }),
                    React.createElement(CustomerReferenceField_1.default, null),
                    React.createElement(app_1.ReferenceField, { source: "customer_id", reference: "customers", link: false, label: "resources.commands.fields.address" },
                        React.createElement(AddressField_1.default, null)),
                    React.createElement(NbItemsField_1.default, null),
                    React.createElement(app_1.NumberField, { source: "total", options: {
                            style: 'currency',
                            currency: 'USD',
                        }, className: classes.total }),
                    React.createElement(app_1.BooleanField, { source: "returned" }))))))));
};
var OrderList = function (props) { return (React.createElement(app_1.List, __assign({}, props, { filterDefaultValues: { status: 'ordered' }, sort: { field: 'date', order: 'DESC' }, perPage: 25, filters: orderFilters }),
    React.createElement(TabbedDatagrid, null))); };
exports.default = OrderList;
