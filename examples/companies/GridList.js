"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const app_1 = require("../../app");
const CompanyCard_1 = require("./CompanyCard");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
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
}));
const times = (nbChildren, fn) => Array.from({ length: nbChildren }, (_, key) => fn(key));
const LoadingGridList = () => {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ className: classes.gridList }, { children: times(15, key => ((0, jsx_runtime_1.jsx)(material_1.Paper, { className: classes.paper }, key))) }), void 0));
};
const LoadedGridList = () => {
    const { ids, data } = (0, app_1.useListContext)();
    const classes = useStyles();
    if (!ids || !data)
        return null;
    return ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ className: classes.gridList }, { children: ids.map((id) => ((0, jsx_runtime_1.jsx)(CompanyCard_1.CompanyCard, { record: data[id] }, id))) }), void 0));
};
const GridList = () => {
    const { loaded } = (0, app_1.useListContext)();
    return loaded ? (0, jsx_runtime_1.jsx)(LoadedGridList, {}, void 0) : (0, jsx_runtime_1.jsx)(LoadingGridList, {}, void 0);
};
exports.GridList = GridList;
