"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const Status_1 = require("../../components/misc/Status");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    },
    metadata: {
        marginBottom: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    textarea: {
        paddingTop: 16,
        paddingLeft: 14,
        paddingRight: 60,
        paddingBottom: 14,
        lineHeight: 1.3,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(1),
    },
    cancel: {
        marginRight: theme.spacing(1),
    },
    content: {
        backgroundColor: '#edf3f0',
        padding: '0 1em',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'stretch',
        marginBottom: theme.spacing(1),
    },
    text: {
        flex: 1,
    },
    paragraph: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.body1.fontSize,
        lineHeight: 1.3,
        marginBottom: theme.spacing(2.4),
    },
    toolbar: {
        marginLeft: theme.spacing(2),
        visibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
}));
const Note = ({ showStatus, note, isLast, reference, }) => {
    const [isHover, setHover] = (0, react_1.useState)(false);
    const [isEditing, setEditing] = (0, react_1.useState)(false);
    const [noteText, setNoteText] = (0, react_1.useState)(note.text);
    const resource = (0, app_1.useResourceContext)();
    const record = (0, app_1.useRecordContext)();
    const notify = (0, app_1.useNotify)();
    const classes = useStyles();
    const [update, { loading }] = (0, app_1.useUpdate)();
    const [handleDelete] = (0, app_1.useDelete)(resource, note.id, note, {
        mutationMode: 'undoable',
        onSuccess: () => {
            notify('Note deleted', undefined, undefined, true);
            update(reference, record.id, { nb_notes: record.nb_notes - 1 }, record);
        },
    });
    const handleEnterEditMode = () => {
        setEditing(true);
    };
    const handleCancelEdit = () => {
        setEditing(false);
        setNoteText(note.text);
        setHover(false);
    };
    const handleTextChange = (event) => {
        setNoteText(event.target.value);
    };
    const handleNoteUpdate = (event) => {
        event.preventDefault();
        update(resource, note.id, { text: noteText }, note, {
            onSuccess: () => {
                setEditing(false);
                setNoteText(note.text);
                setHover(false);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.root, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.metadata }, { children: [(0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ record: note, resource: "contactNotes", source: "sales_id", reference: "sales", basePath: "/contactNotes" }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "first_name", variant: "body1" }, void 0) }), void 0), ' ', (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ component: "span", variant: "body1" }, { children: ["added a note on", ' '] }), void 0), (0, jsx_runtime_1.jsx)(app_1.DateField, { source: "date", record: note, variant: "body1", showTime: true, locales: "en", options: {
                            dateStyle: 'full',
                            timeStyle: 'short',
                        } }, void 0), ' ', showStatus && (0, jsx_runtime_1.jsx)(Status_1.Status, { status: note.status }, void 0)] }), void 0), isEditing ? ((0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleNoteUpdate }, { children: [(0, jsx_runtime_1.jsx)(material_1.FilledInput, { value: noteText, onChange: handleTextChange, fullWidth: true, multiline: true, className: classes.textarea, autoFocus: true }, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.buttons }, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ className: classes.cancel, onClick: handleCancelEdit, color: "primary" }, { children: "Cancel" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ type: "submit", color: "primary", variant: "contained", disabled: loading }, { children: "Update Note" }), void 0)] }), void 0)] }), void 0)) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.content }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.text }, { children: note.text
                            .split('\n')
                            .map((paragraph, index) => ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: classes.paragraph }, { children: paragraph }), index))) }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.toolbar, style: { visibility: isHover ? 'visible' : 'hidden' } }, { children: [(0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: "Edit note" }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ size: "small", onClick: handleEnterEditMode }, { children: (0, jsx_runtime_1.jsx)(Edit_1.default, {}, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: "Delete note" }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ size: "small", onClick: handleDelete }, { children: (0, jsx_runtime_1.jsx)(Delete_1.default, {}, void 0) }), void 0) }), void 0)] }), void 0)] }), void 0))] }), void 0));
};
exports.Note = Note;
