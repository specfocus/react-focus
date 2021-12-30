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
var material_1 = require("@mui/material");
var ImageList_1 = __importDefault(require("@mui/material/ImageList"));
var ImageListItem_1 = __importDefault(require("@mui/material/ImageListItem"));
var ImageListItemBar_1 = __importDefault(require("@mui/material/ImageListItemBar"));
var app_1 = require("../../app");
var react_router_dom_1 = require("react-router-dom");
var PREFIX = 'GridList';
var classes = {
    gridList: "".concat(PREFIX, "-gridList"),
    tileBar: "".concat(PREFIX, "-tileBar"),
    placeholder: "".concat(PREFIX, "-placeholder"),
    price: "".concat(PREFIX, "-price"),
    link: "".concat(PREFIX, "-link"),
};
var StyledGridList = (0, material_1.styled)(ImageList_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.gridList)] = {
            margin: 0,
        },
        _b["& .".concat(classes.tileBar)] = {
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
        },
        _b["& .".concat(classes.placeholder)] = {
            backgroundColor: theme.palette.grey[300],
            height: '100%',
        },
        _b["& .".concat(classes.price)] = {
            display: 'inline',
            fontSize: '1em',
        },
        _b["& .".concat(classes.link)] = {
            color: '#fff',
        },
        _b);
});
var useColsForWidth = function () {
    var theme = (0, material_1.useTheme)();
    var xs = (0, material_1.useMediaQuery)(theme.breakpoints.up('xs'));
    var sm = (0, material_1.useMediaQuery)(theme.breakpoints.up('sm'));
    var md = (0, material_1.useMediaQuery)(theme.breakpoints.up('md'));
    var lg = (0, material_1.useMediaQuery)(theme.breakpoints.up('lg'));
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
var times = function (nbChildren, fn) {
    return Array.from({ length: nbChildren }, function (_, key) { return fn(key); });
};
var LoadingGridList = function (props) {
    var _a = props.nbItems, nbItems = _a === void 0 ? 20 : _a;
    var cols = useColsForWidth();
    return (React.createElement(StyledGridList, { rowHeight: 180, cols: cols, className: classes.gridList },
        ' ',
        times(nbItems, function (key) { return (React.createElement(ImageListItem_1.default, { key: key },
            React.createElement("div", { className: classes.placeholder }))); })));
};
var LoadedGridList = function (props) {
    var _a = (0, app_1.useListContext)(), ids = _a.ids, data = _a.data, basePath = _a.basePath;
    var cols = useColsForWidth();
    if (!ids || !data)
        return null;
    return (React.createElement(StyledGridList, { rowHeight: 180, cols: cols, className: classes.gridList }, ids.map(function (id) { return (React.createElement(ImageListItem_1.default
    // @ts-ignore
    , { 
        // @ts-ignore
        component: react_router_dom_1.Link, key: id, to: (0, app_1.linkToRecord)(basePath, data[id].id) },
        React.createElement("img", { src: data[id].thumbnail, alt: "" }),
        React.createElement(ImageListItemBar_1.default, { className: classes.tileBar, title: data[id].reference, subtitle: React.createElement("span", null,
                data[id].width,
                "x",
                data[id].height,
                ",",
                ' ',
                React.createElement(app_1.NumberField, { className: classes.price, source: "price", record: data[id], color: "inherit", options: {
                        style: 'currency',
                        currency: 'USD',
                    } })) }))); })));
};
var ImageList = function () {
    var loaded = (0, app_1.useListContext)().loaded;
    return loaded ? React.createElement(LoadedGridList, null) : React.createElement(LoadingGridList, null);
};
exports.default = ImageList;
