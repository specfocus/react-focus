"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Chip_1 = __importDefault(require("@mui/material/Chip"));
const app_1 = require("../../app");
const data_1 = __importDefault(require("../segments/data"));
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)({
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: -8,
        marginBottom: -8,
    },
    chip: { margin: 4 },
});
const SegmentsField = ({ record }) => {
    const translate = (0, app_1.useTranslate)();
    const classes = useStyles();
    return record ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: classes.main }, { children: record.groups &&
            record.groups.map(segmentId => {
                const segment = data_1.default.find(s => s.id === segmentId);
                return segment ? ((0, jsx_runtime_1.jsx)(Chip_1.default, { size: "small", className: classes.chip, label: translate(segment.name) }, segment.id)) : null;
            }) }), void 0)) : null;
};
SegmentsField.defaultProps = {
    addLabel: true,
    source: 'groups',
};
exports.default = SegmentsField;
