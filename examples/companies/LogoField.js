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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoField = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/styles");
var useStyles = (0, styles_1.makeStyles)({
    image: {
        objectFit: 'contain',
    },
});
var sizeInPixel = {
    medium: 42,
    small: 20,
};
var LogoField = function (_a) {
    var record = _a.record, source = _a.source, _b = _a.size, size = _b === void 0 ? 'medium' : _b;
    var classes = useStyles();
    if (!record)
        return null;
    return (React.createElement("img", { src: process.env.PUBLIC_URL + record.logo, alt: record.name, title: record.name, width: sizeInPixel[size], height: sizeInPixel[size], className: classes.image }));
};
exports.LogoField = LogoField;
