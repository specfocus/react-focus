"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const styles_1 = require("@mui/styles");
const data_1 = __importDefault(require("../segments/data"));
const useStyles = (0, styles_1.makeStyles)({
    input: { width: 150 },
});
const SegmentInput = (props) => {
    const translate = (0, app_1.useTranslate)();
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(app_1.SelectInput, Object.assign({}, props, { choices: data_1.default.map(segment => ({
            id: segment.id,
            name: translate(segment.name),
        })), className: classes.input }), void 0));
};
SegmentInput.defaultProps = {
    source: 'groups',
};
exports.default = SegmentInput;
