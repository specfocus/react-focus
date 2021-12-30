"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.DealColumn = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var DealCard_1 = require("./DealCard");
var stages_1 = require("./stages");
var useStyles = (0, styles_1.makeStyles)({
    root: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 16,
        backgroundColor: '#eaeaee',
        '&:first-child': {
            paddingLeft: 5,
            borderTopLeftRadius: 5,
        },
        '&:last-child': {
            paddingRight: 5,
            borderTopRightRadius: 5,
        },
    },
    droppable: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 5,
        padding: 5,
        '&.isDraggingOver': {
            backgroundColor: '#dadadf',
        },
    },
});
var DealColumn = function (_a) {
    var stage = _a.stage, dealIds = _a.dealIds, data = _a.data;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(material_1.Typography, { align: "center", variant: "subtitle1" }, stages_1.stageNames[stage]),
        React.createElement(react_beautiful_dnd_1.Droppable, { droppableId: stage }, function (droppableProvided, snapshot) { return (React.createElement("div", __assign({ ref: droppableProvided.innerRef }, droppableProvided.droppableProps, { className: classes.droppable +
                (snapshot.isDraggingOver ? ' isDraggingOver' : '') }),
            dealIds.map(function (id, index) { return (React.createElement(DealCard_1.DealCard, { key: id, index: index, deal: data[id] })); }),
            droppableProvided.placeholder)); })));
};
exports.DealColumn = DealColumn;
