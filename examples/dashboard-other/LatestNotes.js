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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatestNotes = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var Note_1 = __importDefault(require("@mui/icons-material/Note"));
var date_fns_1 = require("date-fns");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
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
}); });
var LatestNotes = function () {
    var classes = useStyles();
    var identity = (0, app_1.useGetIdentity)().identity;
    var _a = (0, app_1.useGetList)('contactNotes', { page: 1, perPage: 5 }, { field: 'date', order: 'DESC' }, { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) }), contactNotesData = _a.data, contactNotesIds = _a.ids, contactNotesLoaded = _a.loaded;
    var _b = (0, app_1.useGetList)('dealNotes', { page: 1, perPage: 5 }, { field: 'date', order: 'DESC' }, { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) }), dealNotesData = _b.data, dealNotesIds = _b.ids, dealNotesLoaded = _b.loaded;
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
    var allNotes = []
        .concat(contactNotesIds.map(function (id) { return (__assign(__assign({}, contactNotesData[id]), { type: 'contactNote' })); }), dealNotesIds.map(function (id) { return (__assign(__assign({}, dealNotesData[id]), { type: 'dealNote' })); }))
        .sort(function (a, b) { return new Date(b.date).valueOf() - new Date(a.date).valueOf(); })
        .slice(0, 5);
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { display: "flex", alignItems: "center", marginBottom: "1em" },
            React.createElement(material_1.Box, { ml: 2, mr: 2, display: "flex" },
                React.createElement(Note_1.default, { color: "disabled", fontSize: "large" })),
            React.createElement(material_1.Typography, { variant: "h5", color: "textSecondary" }, "My Latest Notes")),
        React.createElement(material_1.Card, null,
            React.createElement(material_1.CardContent, null, allNotes.map(function (note) { return (React.createElement("div", { id: "".concat(note.type, "_").concat(note.id), key: "".concat(note.type, "_").concat(note.id), className: classes.note },
                React.createElement(material_1.Typography, { color: "textSecondary", gutterBottom: true },
                    "on",
                    ' ',
                    note.type === 'dealNote' ? (React.createElement(Deal, { note: note })) : (React.createElement(Contact, { note: note })),
                    ", added",
                    ' ',
                    (0, date_fns_1.formatDistance)(new Date(note.date), new Date(), {
                        addSuffix: true,
                    })),
                React.createElement("div", { className: classes.noteText },
                    React.createElement(material_1.Typography, { className: classes.noteTextText }, note.text)))); })))));
};
exports.LatestNotes = LatestNotes;
var Deal = function (_a) {
    var note = _a.note;
    return (React.createElement(React.Fragment, null,
        "Deal",
        ' ',
        React.createElement(app_1.ReferenceField, { record: note, source: "deal_id", reference: "deals", basePath: "/deals", link: "show" },
            React.createElement(app_1.TextField, { source: "name", variant: "body1" }))));
};
var Contact = function (_a) {
    var note = _a.note;
    return (React.createElement(React.Fragment, null,
        "Contact",
        ' ',
        React.createElement(app_1.ReferenceField, { record: note, source: "contact_id", reference: "contacts", basePath: "/contacts", link: "show" },
            React.createElement(app_1.FunctionField, { variant: "body1", render: function (contact) {
                    return contact ? "".concat(contact.first_name, " ").concat(contact.last_name) : '';
                } }))));
};
