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
exports.NewNote = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var StatusSelector_1 = require("./StatusSelector");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(1),
    },
    small: {
        marginRight: '1em',
        '& .MuiFilledInput-input': {
            paddingTop: 10,
        },
    },
}); });
var NewNote = function (_a) {
    var showStatus = _a.showStatus, reference = _a.reference;
    var classes = useStyles();
    var record = (0, app_1.useRecordContext)();
    var resource = (0, app_1.useResourceContext)();
    var _b = (0, react_1.useState)(''), text = _b[0], setText = _b[1];
    var _c = (0, react_1.useState)(record && record.status), status = _c[0], setStatus = _c[1];
    var _d = (0, react_1.useState)(getCurrentDate()), date = _d[0], setDate = _d[1];
    var _e = (0, app_1.useCreate)(), create = _e[0], loading = _e[1].loading;
    var update = (0, app_1.useUpdate)()[0];
    // FIXME: use refetch instead when ReferenceManyField exposes it in the ListContext
    var refresh = (0, app_1.useRefresh)();
    var notify = (0, app_1.useNotify)();
    var identity = (0, app_1.useGetIdentity)().identity;
    if (!record || !identity)
        return null;
    var handleSubmit = function (event) {
        var _a;
        event.preventDefault();
        var data = (_a = {},
            _a[foreignKeyMapping[reference]] = record.id,
            _a.sales_id = identity.id,
            _a.date = date,
            _a.text = text,
            _a);
        if (showStatus) {
            data.status = status;
        }
        update(reference, (record && record.id), {
            last_seen: date,
            status: status,
            nb_notes: record.nb_notes + 1,
        }, record);
        create(resource, data, {
            onSuccess: function () {
                setText('');
                notify('Note added successfully');
                refresh();
            },
        });
        return false;
    };
    return (React.createElement("div", { className: classes.root },
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement(material_1.TextField, { label: "Add a note", variant: "filled", size: "small", fullWidth: true, multiline: true, value: text, onChange: function (event) {
                    return setText(event.target.value);
                }, rows: 3 }),
            React.createElement("div", { className: classes.toolbar },
                React.createElement("span", null, text ? (React.createElement(React.Fragment, null,
                    showStatus && (React.createElement(StatusSelector_1.StatusSelector, { status: status, setStatus: setStatus, className: classes.small })),
                    React.createElement(material_1.TextField, { type: "datetime-local", variant: "filled", size: "small", value: date, onChange: function (event) {
                            setDate(event.target.value);
                        }, className: classes.small }))) : null),
                React.createElement(material_1.Button, { type: "submit", variant: "contained", color: "primary", disabled: !text || loading }, "Add this note")))));
};
exports.NewNote = NewNote;
var getCurrentDate = function () {
    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, -1);
};
var foreignKeyMapping = {
    contacts: 'contact_id',
    deals: 'deal_id',
};
