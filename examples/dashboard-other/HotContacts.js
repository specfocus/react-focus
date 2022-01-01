"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotContacts = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Contacts_1 = __importDefault(require("@mui/icons-material/Contacts"));
const date_fns_1 = require("date-fns");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const Avatar_1 = require("../contacts/Avatar");
const HotContacts = () => {
    const { identity } = (0, app_1.useGetIdentity)();
    const { data: contactData, ids: contactIds, total: contactTotal, loaded: contactsLoaded, } = (0, app_1.useGetList)('contacts', { page: 1, perPage: 10 }, { field: 'last_seen', order: 'DESC' }, { status: 'hot', sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", alignItems: "center", marginBottom: "1em" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ ml: 2, mr: 2, display: "flex" }, { children: (0, jsx_runtime_1.jsx)(Contacts_1.default, { color: "disabled", fontSize: "large" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ underline: "none", variant: "h5", color: "textSecondary", component: react_router_dom_1.Link, to: "/contacts" }, { children: "Hot contacts" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Card, { children: (0, jsx_runtime_1.jsx)(app_1.SimpleList, { basePath: "/contacts", linkType: "show", ids: contactIds, data: contactData, total: contactTotal, loaded: contactsLoaded, primaryText: contact => `${contact.first_name} ${contact.last_name}`, secondaryText: contact => (0, date_fns_1.formatDistance)(new Date(contact.last_seen), new Date(), {
                        addSuffix: true,
                    }), leftAvatar: contact => (0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { record: contact }, void 0) }, void 0) }, void 0)] }, void 0));
};
exports.HotContacts = HotContacts;
