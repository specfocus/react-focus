"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Card_1 = __importDefault(require("@mui/material/Card"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const app_1 = require("../../app");
const LinkToRelatedCustomers_1 = __importDefault(require("./LinkToRelatedCustomers"));
const data_1 = __importDefault(require("./data"));
const PREFIX = 'Segments';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledCard = (0, styles_1.styled)(Card_1.default)({
    [`&.${classes.root}`]: {
        marginTop: 16,
    },
});
const Segments = () => {
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsxs)(StyledCard, Object.assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsx)(app_1.Title, { title: translate('resources.segments.name', { smart_count: 2 }) }, void 0), (0, jsx_runtime_1.jsxs)(Table_1.default, Object.assign({ size: "small" }, { children: [(0, jsx_runtime_1.jsx)(TableHead_1.default, { children: (0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: translate('resources.segments.fields.name') }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, {}, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(TableBody_1.default, { children: data_1.default.map(segment => ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { children: translate(segment.name) }, void 0), (0, jsx_runtime_1.jsx)(TableCell_1.default, { children: (0, jsx_runtime_1.jsx)(LinkToRelatedCustomers_1.default, { segment: segment.id }, void 0) }, void 0)] }, segment.id))) }, void 0)] }), void 0)] }), void 0));
};
exports.default = Segments;
