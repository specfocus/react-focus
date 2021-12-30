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
exports.GridList = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var CompanyCard_1 = require("./CompanyCard");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 1008,
        gap: '10px',
    },
    paper: {
        height: 200,
        width: 194,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.grey[200],
    },
}); });
var times = function (nbChildren, fn) {
    return Array.from({ length: nbChildren }, function (_, key) { return fn(key); });
};
var LoadingGridList = function () {
    var classes = useStyles();
    return (React.createElement(material_1.Box, { className: classes.gridList }, times(15, function (key) { return (React.createElement(material_1.Paper, { className: classes.paper, key: key })); })));
};
var LoadedGridList = function () {
    var _a = (0, app_1.useListContext)(), ids = _a.ids, data = _a.data;
    var classes = useStyles();
    if (!ids || !data)
        return null;
    return (React.createElement(material_1.Box, { className: classes.gridList }, ids.map(function (id) { return (React.createElement(CompanyCard_1.CompanyCard, { key: id, record: data[id] })); })));
};
var GridList = function () {
    var loaded = (0, app_1.useListContext)().loaded;
    return loaded ? React.createElement(LoadedGridList, null) : React.createElement(LoadingGridList, null);
};
exports.GridList = GridList;
