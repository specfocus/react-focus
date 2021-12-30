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
exports.HotContacts = void 0;
var material_1 = require("@mui/material");
var Contacts_1 = __importDefault(require("@mui/icons-material/Contacts"));
var date_fns_1 = require("date-fns");
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var Avatar_1 = require("../contacts/Avatar");
var HotContacts = function () {
    var identity = (0, app_1.useGetIdentity)().identity;
    var _a = (0, app_1.useGetList)('contacts', { page: 1, perPage: 10 }, { field: 'last_seen', order: 'DESC' }, { status: 'hot', sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) }), contactData = _a.data, contactIds = _a.ids, contactTotal = _a.total, contactsLoaded = _a.loaded;
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { display: "flex", alignItems: "center", marginBottom: "1em" },
            React.createElement(material_1.Box, { ml: 2, mr: 2, display: "flex" },
                React.createElement(Contacts_1.default, { color: "disabled", fontSize: "large" })),
            React.createElement(material_1.Link, { underline: "none", variant: "h5", color: "textSecondary", component: react_router_dom_1.Link, to: "/contacts" }, "Hot contacts")),
        React.createElement(material_1.Card, null,
            React.createElement(app_1.SimpleList, { basePath: "/contacts", linkType: "show", ids: contactIds, data: contactData, total: contactTotal, loaded: contactsLoaded, primaryText: function (contact) {
                    return "".concat(contact.first_name, " ").concat(contact.last_name);
                }, secondaryText: function (contact) {
                    return (0, date_fns_1.formatDistance)(new Date(contact.last_seen), new Date(), {
                        addSuffix: true,
                    });
                }, leftAvatar: function (contact) { return React.createElement(Avatar_1.Avatar, { record: contact }); } }))));
};
exports.HotContacts = HotContacts;
