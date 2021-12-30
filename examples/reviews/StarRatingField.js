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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var Stars_1 = __importDefault(require("@mui/icons-material/Stars"));
var PREFIX = 'StarRatingField';
var classes = {
    root: "".concat(PREFIX, "-root"),
    large: "".concat(PREFIX, "-large"),
    small: "".concat(PREFIX, "-small"),
};
var Root = (0, styles_1.styled)('span')((_a = {},
    _a["&.".concat(classes.root)] = {
        opacity: 0.87,
        whiteSpace: 'nowrap',
        display: 'flex',
    },
    _a["& .".concat(classes.large)] = {
        width: 20,
        height: 20,
    },
    _a["& .".concat(classes.small)] = {
        width: 15,
        height: 15,
    },
    _a));
var StarRatingField = function (_a) {
    var record = _a.record, _b = _a.size, size = _b === void 0 ? 'large' : _b;
    return record ? (React.createElement(Root, { className: classes.root }, Array(record.rating)
        .fill(true)
        .map(function (_, i) { return (React.createElement(Stars_1.default, { key: i, className: size === 'large' ? classes.large : classes.small })); }))) : null;
};
StarRatingField.defaultProps = {
    label: 'resources.reviews.fields.rating',
    source: 'rating',
    addLabel: true,
};
exports.default = StarRatingField;
