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
exports.Note = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var Status_1 = require("../../components/misc/Status");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
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
}); });
var Note = function (_a) {
    var showStatus = _a.showStatus, note = _a.note, isLast = _a.isLast, reference = _a.reference;
    var _b = (0, react_1.useState)(false), isHover = _b[0], setHover = _b[1];
    var _c = (0, react_1.useState)(false), isEditing = _c[0], setEditing = _c[1];
    var _d = (0, react_1.useState)(note.text), noteText = _d[0], setNoteText = _d[1];
    var resource = (0, app_1.useResourceContext)();
    var record = (0, app_1.useRecordContext)();
    var notify = (0, app_1.useNotify)();
    var classes = useStyles();
    var _e = (0, app_1.useUpdate)(), update = _e[0], loading = _e[1].loading;
    var handleDelete = (0, app_1.useDelete)(resource, note.id, note, {
        mutationMode: 'undoable',
        onSuccess: function () {
            notify('Note deleted', undefined, undefined, true);
            update(reference, record.id, { nb_notes: record.nb_notes - 1 }, record);
        },
    })[0];
    var handleEnterEditMode = function () {
        setEditing(true);
    };
    var handleCancelEdit = function () {
        setEditing(false);
        setNoteText(note.text);
        setHover(false);
    };
    var handleTextChange = function (event) {
        setNoteText(event.target.value);
    };
    var handleNoteUpdate = function (event) {
        event.preventDefault();
        update(resource, note.id, { text: noteText }, note, {
            onSuccess: function () {
                setEditing(false);
                setNoteText(note.text);
                setHover(false);
            },
        });
    };
    return (React.createElement("div", { className: classes.root, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); } },
        React.createElement("div", { className: classes.metadata },
            React.createElement(app_1.ReferenceField, { record: note, resource: "contactNotes", source: "sales_id", reference: "sales", basePath: "/contactNotes" },
                React.createElement(app_1.TextField, { source: "first_name", variant: "body1" })),
            ' ',
            React.createElement(material_1.Typography, { component: "span", variant: "body1" },
                "added a note on",
                ' '),
            React.createElement(app_1.DateField, { source: "date", record: note, variant: "body1", showTime: true, locales: "en", options: {
                    dateStyle: 'full',
                    timeStyle: 'short',
                } }),
            ' ',
            showStatus && React.createElement(Status_1.Status, { status: note.status })),
        isEditing ? (React.createElement("form", { onSubmit: handleNoteUpdate },
            React.createElement(material_1.FilledInput, { value: noteText, onChange: handleTextChange, fullWidth: true, multiline: true, className: classes.textarea, autoFocus: true }),
            React.createElement("div", { className: classes.buttons },
                React.createElement(material_1.Button, { className: classes.cancel, onClick: handleCancelEdit, color: "primary" }, "Cancel"),
                React.createElement(material_1.Button, { type: "submit", color: "primary", variant: "contained", disabled: loading }, "Update Note")))) : (React.createElement("div", { className: classes.content },
            React.createElement("div", { className: classes.text }, note.text
                .split('\n')
                .map(function (paragraph, index) { return (React.createElement("p", { className: classes.paragraph, key: index }, paragraph)); })),
            React.createElement("div", { className: classes.toolbar, style: { visibility: isHover ? 'visible' : 'hidden' } },
                React.createElement(material_1.Tooltip, { title: "Edit note" },
                    React.createElement(material_1.IconButton, { size: "small", onClick: handleEnterEditMode },
                        React.createElement(Edit_1.default, null))),
                React.createElement(material_1.Tooltip, { title: "Delete note" },
                    React.createElement(material_1.IconButton, { size: "small", onClick: handleDelete },
                        React.createElement(Delete_1.default, null))))))));
};
exports.Note = Note;
