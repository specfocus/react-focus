"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)({
    image: {
        objectFit: 'contain',
    },
});
const sizeInPixel = {
    medium: 42,
    small: 20,
};
const LogoField = ({ record, source, size = 'medium', }) => {
    const classes = useStyles();
    if (!record)
        return null;
    return ((0, jsx_runtime_1.jsx)("img", { src: process.env.PUBLIC_URL + record.logo, alt: record.name, title: record.name, width: sizeInPixel[size], height: sizeInPixel[size], className: classes.image }, void 0));
};
exports.LogoField = LogoField;
