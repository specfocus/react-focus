"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const app_1 = require("../../app");
const ColoredNumberField_1 = __importDefault(require("./ColoredNumberField"));
const CustomerLinkField_1 = __importDefault(require("./CustomerLinkField"));
const MobileGrid_1 = __importDefault(require("./MobileGrid"));
const SegmentInput_1 = __importDefault(require("./SegmentInput"));
const SegmentsField_1 = __importDefault(require("./SegmentsField"));
const VisitorListAside_1 = __importDefault(require("./VisitorListAside"));
const visitorFilters = [
    (0, jsx_runtime_1.jsx)(app_1.SearchInput, { source: "q", alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "last_seen_gte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.NullableBooleanInput, { source: "has_ordered" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.NullableBooleanInput, { source: "has_newsletter", defaultValue: true }, void 0),
    (0, jsx_runtime_1.jsx)(SegmentInput_1.default, {}, void 0),
];
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    nb_commands: { color: 'purple' },
    hiddenOnSmallScreens: {
        display: 'table-cell',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
}));
const VisitorList = (props) => {
    const classes = useStyles();
    const isXsmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('xs'));
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    return ((0, jsx_runtime_1.jsx)(app_1.List, Object.assign({}, props, { filters: isSmall ? visitorFilters : undefined, sort: { field: 'last_seen', order: 'DESC' }, perPage: 25, aside: (0, jsx_runtime_1.jsx)(VisitorListAside_1.default, {}, void 0) }, { children: isXsmall ? ((0, jsx_runtime_1.jsx)(MobileGrid_1.default, {}, void 0)) : ((0, jsx_runtime_1.jsxs)(app_1.Datagrid, Object.assign({ optimized: true, rowClick: "edit" }, { children: [(0, jsx_runtime_1.jsx)(CustomerLinkField_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "last_seen" }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberField, { source: "nb_commands", label: "resources.customers.fields.commands", className: classes.nb_commands }, void 0), (0, jsx_runtime_1.jsx)(ColoredNumberField_1.default, { source: "total_spent", options: { style: 'currency', currency: 'USD' } }, void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "latest_purchase", showTime: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.BooleanField, { source: "has_newsletter", label: "News." }, void 0), (0, jsx_runtime_1.jsx)(SegmentsField_1.default, { cellClassName: classes.hiddenOnSmallScreens, headerClassName: classes.hiddenOnSmallScreens }, void 0)] }), void 0)) }), void 0));
};
exports.default = VisitorList;
