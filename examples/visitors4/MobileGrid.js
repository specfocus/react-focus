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
Object.defineProperty(exports, "__esModule", { value: true });
// in src/comments.js
var React = __importStar(require("react"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var styles_1 = require("@mui/styles");
var app_1 = require("../../app");
var AvatarField_1 = __importDefault(require("./AvatarField"));
var ColoredNumberField_1 = __importDefault(require("./ColoredNumberField"));
var SegmentsField_1 = __importDefault(require("./SegmentsField"));
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: { margin: '1em' },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5rem 0',
    },
    cardTitleContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardContent: __assign(__assign({}, theme.typography.body1), { display: 'flex', flexDirection: 'column' }),
}); });
var MobileGrid = function (_a) {
    var ids = _a.ids, data = _a.data, basePath = _a.basePath;
    var translate = (0, app_1.useTranslate)();
    var classes = useStyles();
    if (!ids || !data) {
        return null;
    }
    return (React.createElement("div", { className: classes.root }, ids.map(function (id) { return (React.createElement(Card_1.default, { key: id, className: classes.card },
        React.createElement(CardHeader_1.default, { title: React.createElement("div", { className: classes.cardTitleContent },
                React.createElement("h2", null, "".concat(data[id].first_name, " ").concat(data[id].last_name)),
                React.createElement(app_1.EditButton, { resource: "visitors", basePath: basePath, record: data[id] })), avatar: React.createElement(AvatarField_1.default, { record: data[id], size: "45" }) }),
        React.createElement(CardContent_1.default, { className: classes.cardContent },
            React.createElement("div", null,
                translate('resources.customers.fields.last_seen_gte'),
                "\u00A0",
                React.createElement(app_1.DateField, { record: data[id], source: "last_seen" })),
            React.createElement("div", null,
                translate('resources.commands.name', data[id].nb_commands || 1),
                "\u00A0:\u00A0",
                React.createElement(app_1.NumberField, { record: data[id], source: "nb_commands", label: "resources.customers.fields.commands" })),
            React.createElement("div", null,
                translate('resources.customers.fields.total_spent'),
                "\u00A0 :",
                ' ',
                React.createElement(ColoredNumberField_1.default, { record: data[id], source: "total_spent", options: { style: 'currency', currency: 'USD' } }))),
        data[id].groups && data[id].groups.length > 0 && (React.createElement(CardContent_1.default, { className: classes.cardContent },
            React.createElement(SegmentsField_1.default, { record: data[id] }))))); })));
};
MobileGrid.defaultProps = {
    data: {},
    ids: [],
};
exports.default = MobileGrid;
