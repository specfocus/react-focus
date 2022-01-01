"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesIterator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const styles_1 = require("@mui/styles");
const Note_1 = require("./Note");
const NewNote_1 = require("./NewNote");
const useStyles = (0, styles_1.makeStyles)({
    root: {
        marginTop: '0.5em',
    },
});
const NotesIterator = ({ showStatus, reference, }) => {
    const classes = useStyles();
    const { data, ids, loaded } = (0, app_1.useListContext)();
    if (!loaded)
        return null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(NewNote_1.NewNote, { showStatus: showStatus, reference: reference }, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.root }, { children: ids.map((id, index) => ((0, jsx_runtime_1.jsx)(Note_1.Note, { note: data[id], isLast: index === ids.length - 1, showStatus: showStatus, reference: reference }, index))) }), void 0)] }, void 0));
};
exports.NotesIterator = NotesIterator;
