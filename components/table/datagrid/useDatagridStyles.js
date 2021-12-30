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
exports.TextWide = exports.TextLarge = exports.TextMedium = exports.TextSmall = exports.DateMedium = exports.DateSmall = exports.DateText = exports.Text = exports.InputLabelProps = exports.InputProps = void 0;
var styles_1 = require("@mui/styles");
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var TranslatedTextField_1 = __importDefault(require("../../../components/TranslatedTextField"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var date_fns_1 = require("date-fns");
var useDatagridStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    table: {
        tableLayout: 'auto',
        backgroundColor: theme.palette.mode !== 'dark' ? '#DDD' : '#555'
    },
    thead: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        borderBottom: "1px solid ".concat(theme.palette.divider),
        height: theme.spacing(6),
        zIndex: 2,
    },
    tbody: {},
    headerRow: {
        borderBottom: '0px solid transparent',
        backgroundColor: '#FFF'
    },
    headerCell: {
        borderBottom: '0px solid transparent',
        height: theme.spacing(6),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        wordWrap: 'break-word',
        '&:first-child': {
            borderTopLeftRadius: theme.shape.borderRadius,
        },
        '&:last-child': {
            borderTopRightRadius: theme.shape.borderRadius,
        },
    },
    checkbox: {},
    row: {
        backgroundColor: '#FFF'
    },
    clickableRow: {
        cursor: 'pointer',
    },
    rowEven: {},
    rowOdd: {},
    rowCell: {},
    expandHeader: {
        padding: 0,
        width: theme.spacing(6),
    },
    expandIconCell: {
        width: theme.spacing(6),
    },
    expandIcon: {
        padding: theme.spacing(1),
        transform: 'rotate(-90deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expanded: {
        transform: 'rotate(0deg)',
    }
}); }, { name: 'Datagrid' });
exports.InputProps = { style: { fontSize: '1.0em' } };
exports.InputLabelProps = { style: { fontSize: '1.2em' } };
var Text = function (_a) {
    var xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, tooltip = _a.tooltip, value = _a.value, props = __rest(_a, ["xs", "sm", "md", "lg", "xl", "tooltip", "value"]);
    return !tooltip ? (React.createElement(Grid_1.default, { item: true, xs: xs, sm: sm, md: md, lg: lg, xl: xl },
        React.createElement(TranslatedTextField_1.default, __assign({ fullWidth: true, value: value || typeof value === 'number' ? String(value) : '', InputProps: __assign(__assign({}, exports.InputProps), { readOnly: true, disableUnderline: true }), InputLabelProps: __assign(__assign({}, exports.InputLabelProps), { shrink: true }) }, props, { variant: "standard" })))) : (React.createElement(Grid_1.default, { item: true, xs: xs, sm: sm, md: md, lg: lg, xl: xl },
        React.createElement(Tooltip_1.default, { title: tooltip },
            React.createElement("span", null,
                React.createElement(TranslatedTextField_1.default, __assign({ fullWidth: true, value: value || typeof value === 'number' ? String(value) : '', InputProps: __assign(__assign({}, exports.InputProps), { readOnly: true, disableUnderline: true }), InputLabelProps: __assign(__assign({}, exports.InputLabelProps), { shrink: true }) }, props, { variant: "standard" }))))));
};
exports.Text = Text;
var DateText = function (_a) {
    var value = _a.value, props = __rest(_a, ["value"]);
    var date = new Date(String(value));
    var now = new Date();
    var ok = date.toString() !== 'Invalid Date';
    return (React.createElement(exports.Text, __assign({}, props, { value: value, tooltip: ok ? "".concat((0, date_fns_1.format)(date, 'EEEE, MMMM do, yyyy'), " (").concat((0, date_fns_1.formatDistance)(date, now), ")") : '' })));
};
exports.DateText = DateText;
var DateSmall = function (props) { return (React.createElement(exports.DateText, __assign({ xs: 12, lg: 4 }, props))); };
exports.DateSmall = DateSmall;
var DateMedium = function (props) { return (React.createElement(exports.DateText, __assign({ xs: 12, lg: 6 }, props))); };
exports.DateMedium = DateMedium;
var TextSmall = function (props) { return (React.createElement(exports.Text, __assign({ xs: 12, lg: 4 }, props))); };
exports.TextSmall = TextSmall;
var TextMedium = function (props) { return (React.createElement(exports.Text, __assign({ xs: 12, lg: 6 }, props))); };
exports.TextMedium = TextMedium;
var TextLarge = function (props) { return (React.createElement(exports.Text, __assign({ xs: 12, lg: 8 }, props))); };
exports.TextLarge = TextLarge;
var TextWide = function (props) { return (React.createElement(exports.Text, __assign({ xs: 12 }, props))); };
exports.TextWide = TextWide;
exports.default = useDatagridStyles;
