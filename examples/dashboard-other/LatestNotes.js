"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatestNotes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const Note_1 = __importDefault(require("@mui/icons-material/Note"));
const date_fns_1 = require("date-fns");
const app_1 = require("../../app");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    note: {
        marginBottom: theme.spacing(2),
    },
    noteText: {
        backgroundColor: '#edf3f0',
        padding: theme.spacing(1),
        borderRadius: 10,
    },
    noteTextText: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
    },
}));
const LatestNotes = () => {
    const classes = useStyles();
    const { identity } = (0, app_1.useGetIdentity)();
    const { data: contactNotesData, ids: contactNotesIds, loaded: contactNotesLoaded, } = (0, app_1.useGetList)('contactNotes', { page: 1, perPage: 5 }, { field: 'date', order: 'DESC' }, { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) });
    const { data: dealNotesData, ids: dealNotesIds, loaded: dealNotesLoaded, } = (0, app_1.useGetList)('dealNotes', { page: 1, perPage: 5 }, { field: 'date', order: 'DESC' }, { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) });
    if (!contactNotesLoaded || !dealNotesLoaded) {
        return null;
    }
    // TypeScript guards
    if (!contactNotesIds ||
        !contactNotesData ||
        !dealNotesIds ||
        !dealNotesData) {
        return null;
    }
    const allNotes = []
        .concat(contactNotesIds.map(id => (Object.assign(Object.assign({}, contactNotesData[id]), { type: 'contactNote' }))), dealNotesIds.map(id => (Object.assign(Object.assign({}, dealNotesData[id]), { type: 'dealNote' }))))
        .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
        .slice(0, 5);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", alignItems: "center", marginBottom: "1em" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ ml: 2, mr: 2, display: "flex" }, { children: (0, jsx_runtime_1.jsx)(Note_1.default, { color: "disabled", fontSize: "large" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h5", color: "textSecondary" }, { children: "My Latest Notes" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Card, { children: (0, jsx_runtime_1.jsx)(material_1.CardContent, { children: allNotes.map(note => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ id: `${note.type}_${note.id}`, className: classes.note }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ color: "textSecondary", gutterBottom: true }, { children: ["on", ' ', note.type === 'dealNote' ? ((0, jsx_runtime_1.jsx)(Deal, { note: note }, void 0)) : ((0, jsx_runtime_1.jsx)(Contact, { note: note }, void 0)), ", added", ' ', (0, date_fns_1.formatDistance)(new Date(note.date), new Date(), {
                                        addSuffix: true,
                                    })] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.noteText }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ className: classes.noteTextText }, { children: note.text }), void 0) }), void 0)] }), `${note.type}_${note.id}`))) }, void 0) }, void 0)] }, void 0));
};
exports.LatestNotes = LatestNotes;
const Deal = ({ note }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Deal", ' ', (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ record: note, source: "deal_id", reference: "deals", basePath: "/deals", link: "show" }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "name", variant: "body1" }, void 0) }), void 0)] }, void 0));
const Contact = ({ note }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Contact", ' ', (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ record: note, source: "contact_id", reference: "contacts", basePath: "/contacts", link: "show" }, { children: (0, jsx_runtime_1.jsx)(app_1.FunctionField, { variant: "body1", render: contact => contact ? `${contact.first_name} ${contact.last_name}` : '' }, void 0) }), void 0)] }, void 0));
