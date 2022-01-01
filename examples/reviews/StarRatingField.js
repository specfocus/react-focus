"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Stars_1 = __importDefault(require("@mui/icons-material/Stars"));
const PREFIX = 'StarRatingField';
const classes = {
    root: `${PREFIX}-root`,
    large: `${PREFIX}-large`,
    small: `${PREFIX}-small`,
};
const Root = (0, styles_1.styled)('span')({
    [`&.${classes.root}`]: {
        opacity: 0.87,
        whiteSpace: 'nowrap',
        display: 'flex',
    },
    [`& .${classes.large}`]: {
        width: 20,
        height: 20,
    },
    [`& .${classes.small}`]: {
        width: 15,
        height: 15,
    },
});
const StarRatingField = ({ record, size = 'large' }) => {
    return record ? ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: classes.root }, { children: Array(record.rating)
            .fill(true)
            .map((_, i) => ((0, jsx_runtime_1.jsx)(Stars_1.default, { className: size === 'large' ? classes.large : classes.small }, i))) }), void 0)) : null;
};
StarRatingField.defaultProps = {
    label: 'resources.reviews.fields.rating',
    source: 'rating',
    addLabel: true,
};
exports.default = StarRatingField;
