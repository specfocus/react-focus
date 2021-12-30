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
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var PREFIX = 'Poster';
var classes = {
    root: "".concat(PREFIX, "-root"),
    content: "".concat(PREFIX, "-content"),
    img: "".concat(PREFIX, "-img"),
};
var StyledCard = (0, styles_1.styled)(Card_1.default)((_a = {},
    _a["&.".concat(classes.root)] = {
        display: 'inline-block',
        marginTop: '1em',
        zIndex: 2,
    },
    _a["& .".concat(classes.content)] = { padding: 0, '&:last-child': { padding: 0 } },
    _a["& .".concat(classes.img)] = {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '42em',
        maxHeight: '15em',
    },
    _a));
var Poster = function (props) {
    var record = props.record;
    if (!record)
        return null;
    return (React.createElement(StyledCard, { className: classes.root },
        React.createElement(CardContent_1.default, { className: classes.content },
            React.createElement("img", { src: record.image, alt: "", className: classes.img }))));
};
exports.default = Poster;
