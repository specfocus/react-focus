"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealColumn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const DealCard_1 = require("./DealCard");
const stages_1 = require("./stages");
const useStyles = (0, styles_1.makeStyles)({
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
const DealColumn = ({ stage, dealIds, data, }) => {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ align: "center", variant: "subtitle1" }, { children: stages_1.stageNames[stage] }), void 0), (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Droppable, Object.assign({ droppableId: stage }, { children: (droppableProvided, snapshot) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ ref: droppableProvided.innerRef }, droppableProvided.droppableProps, { className: classes.droppable +
                        (snapshot.isDraggingOver ? ' isDraggingOver' : '') }, { children: [dealIds.map((id, index) => ((0, jsx_runtime_1.jsx)(DealCard_1.DealCard, { index: index, deal: data[id] }, id))), droppableProvided.placeholder] }), void 0)) }), void 0)] }), void 0));
};
exports.DealColumn = DealColumn;
