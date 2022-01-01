"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable import/no-anonymous-default-export */
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const date_fns_1 = require("date-fns");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const layout_1 = require("../../components/layout");
const Status_1 = require("../../components/misc/Status");
const Avatar_1 = require("./Avatar");
const ContactListFilter_1 = require("./ContactListFilter");
const TagsList_1 = require("./TagsList");
const ContactListContent = () => {
    const { data, ids, loaded, onToggleItem, selectedIds } = (0, app_1.useListContext)();
    const now = Date.now();
    if (loaded === false) {
        return (0, jsx_runtime_1.jsx)(app_1.SimpleListLoading, { hasLeftAvatarOrIcon: true, hasSecondaryText: true }, void 0);
    }
    return ((0, jsx_runtime_1.jsx)(material_1.List, { children: ids.map(id => {
            const contact = data[id];
            return ((0, jsx_runtime_1.jsxs)(material_1.ListItem, Object.assign({ button: true, component: react_router_dom_1.Link, to: `/contacts/${id}/show` }, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, { children: (0, jsx_runtime_1.jsx)(material_1.Checkbox, { edge: "start", checked: selectedIds.includes(id), tabIndex: -1, disableRipple: true, onClick: e => {
                                e.stopPropagation();
                                onToggleItem(id);
                            } }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { record: contact }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: `${contact.first_name} ${contact.last_name}`, secondary: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [contact.title, " at", ' ', (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ record: contact, source: "company_id", reference: "companies", basePath: "/companies", link: false }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "name" }, void 0) }), void 0), ' ', contact.nb_notes &&
                                    `- ${contact.nb_notes} notes `, (0, jsx_runtime_1.jsx)(TagsList_1.TagsList, { record: contact }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemSecondaryAction, { children: (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary" }, { children: ["last activity", ' ', (0, date_fns_1.formatDistance)(new Date(contact.last_seen), now), ' ', "ago ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: contact.status }, void 0)] }), void 0) }, void 0)] }), id));
        }) }, void 0));
};
const useActionStyles = (0, styles_1.makeStyles)((theme) => ({
    createButton: {
        marginLeft: theme.spacing(2),
    },
}));
const ContactListActions = () => {
    const classes = useActionStyles();
    return ((0, jsx_runtime_1.jsxs)(layout_1.TopToolbar, { children: [(0, jsx_runtime_1.jsx)(app_1.SortButton, { fields: ['last_name', 'first_name', 'last_seen'] }, void 0), (0, jsx_runtime_1.jsx)(app_1.ExportButton, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.CreateButton, { basePath: "/contacts", variant: "contained", label: "New Contact", className: classes.createButton }, void 0)] }, void 0));
};
const ContactList = (props) => {
    const { identity } = (0, app_1.useGetIdentity)();
    return identity ? ((0, jsx_runtime_1.jsx)(app_1.List, Object.assign({}, props, { actions: (0, jsx_runtime_1.jsx)(ContactListActions, {}, void 0), aside: (0, jsx_runtime_1.jsx)(ContactListFilter_1.ContactListFilter, {}, void 0), perPage: 25, pagination: (0, jsx_runtime_1.jsx)(app_1.Pagination, { rowsPerPageOptions: [10, 25, 50, 100] }, void 0), filterDefaultValues: { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, sort: { field: 'last_seen', order: 'DESC' } }, { children: (0, jsx_runtime_1.jsx)(ContactListContent, {}, void 0) }), void 0)) : null;
};
exports.ContactList = ContactList;
