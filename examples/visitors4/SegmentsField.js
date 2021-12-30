"use strict";
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
var React = __importStar(require("react"));
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var app_1 = require("../../app");
var data_1 = __importDefault(require("../segments/data"));
var styles_1 = require("@mui/styles");
var useStyles = (0, styles_1.makeStyles)({
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: -8,
        marginBottom: -8,
    },
    chip: { margin: 4 },
});
var SegmentsField = function (_a) {
    var record = _a.record;
    var translate = (0, app_1.useTranslate)();
    var classes = useStyles();
    return record ? (React.createElement("span", { className: classes.main }, record.groups &&
        record.groups.map(function (segmentId) {
            var segment = data_1.default.find(function (s) { return s.id === segmentId; });
            return segment ? (React.createElement(Chip_1.default, { size: "small", key: segment.id, className: classes.chip, label: translate(segment.name) })) : null;
        }))) : null;
};
SegmentsField.defaultProps = {
    addLabel: true,
    source: 'groups',
};
exports.default = SegmentsField;
