"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ImageList_1 = __importDefault(require("@mui/material/ImageList"));
const ImageListItem_1 = __importDefault(require("@mui/material/ImageListItem"));
const ImageListItemBar_1 = __importDefault(require("@mui/material/ImageListItemBar"));
const app_1 = require("../../app");
const react_router_dom_1 = require("react-router-dom");
const PREFIX = 'GridList';
const classes = {
    gridList: `${PREFIX}-gridList`,
    tileBar: `${PREFIX}-tileBar`,
    placeholder: `${PREFIX}-placeholder`,
    price: `${PREFIX}-price`,
    link: `${PREFIX}-link`,
};
const StyledGridList = (0, material_1.styled)(ImageList_1.default)(({ theme }) => ({
    [`& .${classes.gridList}`]: {
        margin: 0,
    },
    [`& .${classes.tileBar}`]: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
    },
    [`& .${classes.placeholder}`]: {
        backgroundColor: theme.palette.grey[300],
        height: '100%',
    },
    [`& .${classes.price}`]: {
        display: 'inline',
        fontSize: '1em',
    },
    [`& .${classes.link}`]: {
        color: '#fff',
    },
}));
const useColsForWidth = () => {
    const theme = (0, material_1.useTheme)();
    const xs = (0, material_1.useMediaQuery)(theme.breakpoints.up('xs'));
    const sm = (0, material_1.useMediaQuery)(theme.breakpoints.up('sm'));
    const md = (0, material_1.useMediaQuery)(theme.breakpoints.up('md'));
    const lg = (0, material_1.useMediaQuery)(theme.breakpoints.up('lg'));
    if (xs)
        return 2;
    if (sm)
        return 3;
    if (md)
        return 3;
    if (lg)
        return 5;
    return 6;
};
const times = (nbChildren, fn) => Array.from({ length: nbChildren }, (_, key) => fn(key));
const LoadingGridList = (props) => {
    const { nbItems = 20 } = props;
    const cols = useColsForWidth();
    return ((0, jsx_runtime_1.jsxs)(StyledGridList, Object.assign({ rowHeight: 180, cols: cols, className: classes.gridList }, { children: [' ', times(nbItems, key => ((0, jsx_runtime_1.jsx)(ImageListItem_1.default, { children: (0, jsx_runtime_1.jsx)("div", { className: classes.placeholder }, void 0) }, key)))] }), void 0));
};
const LoadedGridList = (props) => {
    const { ids, data, basePath } = (0, app_1.useListContext)();
    const cols = useColsForWidth();
    if (!ids || !data)
        return null;
    return ((0, jsx_runtime_1.jsx)(StyledGridList, Object.assign({ rowHeight: 180, cols: cols, className: classes.gridList }, { children: ids.map((id) => ((0, jsx_runtime_1.jsxs)(ImageListItem_1.default
        // @ts-ignore
        , Object.assign({ 
            // @ts-ignore
            component: react_router_dom_1.Link, to: (0, app_1.linkToRecord)(basePath, data[id].id) }, { children: [(0, jsx_runtime_1.jsx)("img", { src: data[id].thumbnail, alt: "" }, void 0), (0, jsx_runtime_1.jsx)(ImageListItemBar_1.default, { className: classes.tileBar, title: data[id].reference, subtitle: (0, jsx_runtime_1.jsxs)("span", { children: [data[id].width, "x", data[id].height, ",", ' ', (0, jsx_runtime_1.jsx)(app_1.NumberField, { className: classes.price, source: "price", record: data[id], color: "inherit", options: {
                                    style: 'currency',
                                    currency: 'USD',
                                } }, void 0)] }, void 0) }, void 0)] }), id))) }), void 0));
};
const ImageList = () => {
    const { loaded } = (0, app_1.useListContext)();
    return loaded ? (0, jsx_runtime_1.jsx)(LoadedGridList, {}, void 0) : (0, jsx_runtime_1.jsx)(LoadingGridList, {}, void 0);
};
exports.default = ImageList;
