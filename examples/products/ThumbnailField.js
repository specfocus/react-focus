"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const PREFIX = 'ThumbnailField';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)('img')({
    [`&.${classes.root}`]: { width: 25, maxWidth: 25, maxHeight: 25 },
});
const ThumbnailField = (props) => {
    const { record } = props;
    return record ? ((0, jsx_runtime_1.jsx)(Root, { src: record.thumbnail, className: classes.root, alt: "" }, void 0)) : null;
};
exports.default = ThumbnailField;
