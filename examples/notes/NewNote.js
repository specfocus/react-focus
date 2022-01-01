"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewNote = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const StatusSelector_1 = require("./StatusSelector");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
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
}));
const NewNote = ({ showStatus, reference, }) => {
    const classes = useStyles();
    const record = (0, app_1.useRecordContext)();
    const resource = (0, app_1.useResourceContext)();
    const [text, setText] = (0, react_1.useState)('');
    const [status, setStatus] = (0, react_1.useState)(record && record.status);
    const [date, setDate] = (0, react_1.useState)(getCurrentDate());
    const [create, { loading }] = (0, app_1.useCreate)();
    const [update] = (0, app_1.useUpdate)();
    // FIXME: use refetch instead when ReferenceManyField exposes it in the ListContext
    const refresh = (0, app_1.useRefresh)();
    const notify = (0, app_1.useNotify)();
    const { identity } = (0, app_1.useGetIdentity)();
    if (!record || !identity)
        return null;
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            [foreignKeyMapping[reference]]: record.id,
            sales_id: identity.id,
            date,
            text,
        };
        if (showStatus) {
            data.status = status;
        }
        update(reference, (record && record.id), {
            last_seen: date,
            status,
            nb_notes: record.nb_notes + 1,
        }, record);
        create(resource, data, {
            onSuccess: () => {
                setText('');
                notify('Note added successfully');
                refresh();
            },
        });
        return false;
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Add a note", variant: "filled", size: "small", fullWidth: true, multiline: true, value: text, onChange: (event) => setText(event.target.value), rows: 3 }, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.toolbar }, { children: [(0, jsx_runtime_1.jsx)("span", { children: text ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [showStatus && ((0, jsx_runtime_1.jsx)(StatusSelector_1.StatusSelector, { status: status, setStatus: setStatus, className: classes.small }, void 0)), (0, jsx_runtime_1.jsx)(material_1.TextField, { type: "datetime-local", variant: "filled", size: "small", value: date, onChange: (event) => {
                                            setDate(event.target.value);
                                        }, className: classes.small }, void 0)] }, void 0)) : null }, void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ type: "submit", variant: "contained", color: "primary", disabled: !text || loading }, { children: "Add this note" }), void 0)] }), void 0)] }), void 0) }), void 0));
};
exports.NewNote = NewNote;
const getCurrentDate = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, -1);
};
const foreignKeyMapping = {
    contacts: 'contact_id',
    deals: 'deal_id',
};
