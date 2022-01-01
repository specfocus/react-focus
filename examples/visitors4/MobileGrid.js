"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
const styles_1 = require("@mui/styles");
const app_1 = require("../../app");
const AvatarField_1 = __importDefault(require("./AvatarField"));
const ColoredNumberField_1 = __importDefault(require("./ColoredNumberField"));
const SegmentsField_1 = __importDefault(require("./SegmentsField"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
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
    cardContent: Object.assign(Object.assign({}, theme.typography.body1), { display: 'flex', flexDirection: 'column' }),
}));
const MobileGrid = ({ ids, data, basePath }) => {
    const translate = (0, app_1.useTranslate)();
    const classes = useStyles();
    if (!ids || !data) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.root }, { children: ids.map(id => ((0, jsx_runtime_1.jsxs)(Card_1.default, Object.assign({ className: classes.card }, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { title: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.cardTitleContent }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: `${data[id].first_name} ${data[id].last_name}` }, void 0), (0, jsx_runtime_1.jsx)(app_1.EditButton, { resource: "visitors", basePath: basePath, record: data[id] }, void 0)] }), void 0), avatar: (0, jsx_runtime_1.jsx)(AvatarField_1.default, { record: data[id], size: "45" }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(CardContent_1.default, Object.assign({ className: classes.cardContent }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [translate('resources.customers.fields.last_seen_gte'), "\u00A0", (0, jsx_runtime_1.jsx)(app_1.DateField, { record: data[id], source: "last_seen" }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [translate('resources.commands.name', data[id].nb_commands || 1), "\u00A0:\u00A0", (0, jsx_runtime_1.jsx)(app_1.NumberField, { record: data[id], source: "nb_commands", label: "resources.customers.fields.commands" }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [translate('resources.customers.fields.total_spent'), "\u00A0 :", ' ', (0, jsx_runtime_1.jsx)(ColoredNumberField_1.default, { record: data[id], source: "total_spent", options: { style: 'currency', currency: 'USD' } }, void 0)] }, void 0)] }), void 0), data[id].groups && data[id].groups.length > 0 && ((0, jsx_runtime_1.jsx)(CardContent_1.default, Object.assign({ className: classes.cardContent }, { children: (0, jsx_runtime_1.jsx)(SegmentsField_1.default, { record: data[id] }, void 0) }), void 0))] }), id))) }), void 0));
};
MobileGrid.defaultProps = {
    data: {},
    ids: [],
};
exports.default = MobileGrid;
