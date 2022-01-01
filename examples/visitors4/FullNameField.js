"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("@mui/styles");
const AvatarField_1 = __importDefault(require("./AvatarField"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    avatar: {
        marginRight: theme.spacing(1),
        marginTop: -theme.spacing(0.5),
        marginBottom: -theme.spacing(0.5),
    },
}));
const FullNameField = (props) => {
    const { record, size } = props;
    const classes = useStyles();
    return record ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsx)(AvatarField_1.default, { className: classes.avatar, record: record, size: size }, void 0), record.first_name, " ", record.last_name] }), void 0)) : null;
};
FullNameField.defaultProps = {
    source: 'last_name',
    label: 'resources.customers.fields.name',
};
exports.default = (0, react_1.memo)(FullNameField);
