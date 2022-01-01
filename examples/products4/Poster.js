"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)({
    root: { display: 'inline-block', marginTop: '1em', zIndex: 2 },
    content: { padding: 0, '&:last-child': { padding: 0 } },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '42em',
        maxHeight: '15em',
    },
});
const Poster = (props) => {
    const { record } = props;
    const classes = useStyles();
    if (!record)
        return null;
    return ((0, jsx_runtime_1.jsx)(Card_1.default, Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsx)(CardContent_1.default, Object.assign({ className: classes.content }, { children: (0, jsx_runtime_1.jsx)("img", { src: record.image, alt: "", className: classes.img }, void 0) }), void 0) }), void 0));
};
exports.default = Poster;
