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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Table_1 = __importDefault(require("@mui/material/Table"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var TableCell_1 = __importDefault(require("@mui/material/TableCell"));
var TableHead_1 = __importDefault(require("@mui/material/TableHead"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id: id, date: date, name: name, shipTo: shipTo, paymentMethod: paymentMethod, amount: amount };
}
var rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
function AutoTable(_a) {
    var _b = _a.initialState, initialState = _b === void 0 ? { orderBy: 'id' } : _b, _c = _a.schema, schema = _c === void 0 ? {
        domain: 'EXAMPLE',
        fields: {
            id: { type: 'number' },
            date: { type: 'date' },
            name: { type: 'string' },
            shipTo: { type: 'string' },
            paymentMethod: { type: 'string' },
            amount: { type: 'number' }
        },
        head: ['id', 'date', 'name', 'shipTo', 'paymentMethod', 'amount'],
        type: 'object'
    } : _c, otherProps = __rest(_a, ["initialState", "schema"]);
    var _d = (0, react_1.useState)(initialState), state = _d[0], setState = _d[1];
    var columns = schema.head || Object.keys(schema.fields);
    var title = function (name) { return name; };
    var cellProps = columns.reduce(function (acc, col) {
        var _a;
        var props = {
            key: col
        };
        if (schema.fields[col].type === 'number') {
            Object.assign(props, { align: 'right' });
        }
        return Object.assign(acc, (_a = {}, _a[col] = props, _a));
    }, {});
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Table_1.default, __assign({ size: "small" }, otherProps),
            react_1.default.createElement(TableHead_1.default, null,
                react_1.default.createElement(TableRow_1.default, null, columns.map(function (col) { return (react_1.default.createElement(TableCell_1.default, __assign({}, cellProps[col]), title(col))); }))),
            react_1.default.createElement(TableBody_1.default, null, rows.map(function (row) { return (react_1.default.createElement(TableRow_1.default, { key: row.id }, columns.map(function (col, index) { return (react_1.default.createElement(TableCell_1.default, __assign({}, cellProps[col], { key: "".concat(col, "-").concat(index) }), row[col])); }))); })))));
}
exports.default = AutoTable;
