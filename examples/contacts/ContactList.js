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
exports.ContactList = void 0;
/* eslint-disable import/no-anonymous-default-export */
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var date_fns_1 = require("date-fns");
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var layout_1 = require("../../components/layout");
var Status_1 = require("../../components/misc/Status");
var Avatar_1 = require("./Avatar");
var ContactListFilter_1 = require("./ContactListFilter");
var TagsList_1 = require("./TagsList");
var ContactListContent = function () {
    var _a = (0, app_1.useListContext)(), data = _a.data, ids = _a.ids, loaded = _a.loaded, onToggleItem = _a.onToggleItem, selectedIds = _a.selectedIds;
    var now = Date.now();
    if (loaded === false) {
        return React.createElement(app_1.SimpleListLoading, { hasLeftAvatarOrIcon: true, hasSecondaryText: true });
    }
    return (React.createElement(material_1.List, null, ids.map(function (id) {
        var contact = data[id];
        return (React.createElement(material_1.ListItem, { button: true, key: id, component: react_router_dom_1.Link, to: "/contacts/".concat(id, "/show") },
            React.createElement(material_1.ListItemIcon, null,
                React.createElement(material_1.Checkbox, { edge: "start", checked: selectedIds.includes(id), tabIndex: -1, disableRipple: true, onClick: function (e) {
                        e.stopPropagation();
                        onToggleItem(id);
                    } })),
            React.createElement(material_1.ListItemAvatar, null,
                React.createElement(Avatar_1.Avatar, { record: contact })),
            React.createElement(material_1.ListItemText, { primary: "".concat(contact.first_name, " ").concat(contact.last_name), secondary: React.createElement(React.Fragment, null,
                    contact.title,
                    " at",
                    ' ',
                    React.createElement(app_1.ReferenceField, { record: contact, source: "company_id", reference: "companies", basePath: "/companies", link: false },
                        React.createElement(app_1.TextField, { source: "name" })),
                    ' ',
                    contact.nb_notes &&
                        "- ".concat(contact.nb_notes, " notes "),
                    React.createElement(TagsList_1.TagsList, { record: contact })) }),
            React.createElement(material_1.ListItemSecondaryAction, null,
                React.createElement(material_1.Typography, { variant: "body2", color: "textSecondary" },
                    "last activity",
                    ' ',
                    (0, date_fns_1.formatDistance)(new Date(contact.last_seen), now),
                    ' ',
                    "ago ",
                    React.createElement(Status_1.Status, { status: contact.status })))));
    })));
};
var useActionStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    createButton: {
        marginLeft: theme.spacing(2),
    },
}); });
var ContactListActions = function () {
    var classes = useActionStyles();
    return (React.createElement(layout_1.TopToolbar, null,
        React.createElement(app_1.SortButton, { fields: ['last_name', 'first_name', 'last_seen'] }),
        React.createElement(app_1.ExportButton, null),
        React.createElement(app_1.CreateButton, { basePath: "/contacts", variant: "contained", label: "New Contact", className: classes.createButton })));
};
var ContactList = function (props) {
    var identity = (0, app_1.useGetIdentity)().identity;
    return identity ? (React.createElement(app_1.List, __assign({}, props, { actions: React.createElement(ContactListActions, null), aside: React.createElement(ContactListFilter_1.ContactListFilter, null), perPage: 25, pagination: React.createElement(app_1.Pagination, { rowsPerPageOptions: [10, 25, 50, 100] }), filterDefaultValues: { sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, sort: { field: 'last_seen', order: 'DESC' } }),
        React.createElement(ContactListContent, null))) : null;
};
exports.ContactList = ContactList;
