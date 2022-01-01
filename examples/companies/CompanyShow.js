"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyShow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const date_fns_1 = require("date-fns");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const Status_1 = require("../../components/misc/Status");
const Avatar_1 = require("../contacts/Avatar");
const TagsList_1 = require("../contacts/TagsList");
const stages_1 = require("../deals/stages");
const CompanyAside_1 = require("./CompanyAside");
const LogoField_1 = require("./LogoField");
const sizes_1 = require("./sizes");
const CompanyShow = (props) => ((0, jsx_runtime_1.jsx)(app_1.ShowBase, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(CompanyShowContent, {}, void 0) }), void 0));
exports.CompanyShow = CompanyShow;
const CompanyShowContent = () => {
    const { record, loaded } = (0, app_1.useShowContext)();
    const [value, setValue] = (0, react_1.useState)(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if (!loaded || !record)
        return null;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 2, display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "1" }, { children: (0, jsx_runtime_1.jsx)(material_1.Card, { children: (0, jsx_runtime_1.jsxs)(material_1.CardContent, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mb: 1 }, { children: [(0, jsx_runtime_1.jsx)(LogoField_1.LogoField, { record: record }, void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ ml: 2, flex: "1" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "h5" }, { children: record.name }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2" }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextField, { source: "sector" }, void 0), ",", ' ', (0, jsx_runtime_1.jsx)(app_1.SelectField, { source: "size", choices: sizes_1.sizes }, void 0)] }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Tabs, Object.assign({ value: value, indicatorColor: "primary", textColor: "primary", onChange: handleChange }, { children: [record.nb_contacts && ((0, jsx_runtime_1.jsx)(material_1.Tab, { label: record.nb_contacts === 1
                                            ? '1 Contact'
                                            : `${record.nb_contacts} Contacts` }, void 0)), record.nb_deals && ((0, jsx_runtime_1.jsx)(material_1.Tab, { label: record.nb_deals === 1
                                            ? '1 deal'
                                            : `${record.nb_deals} Deals` }, void 0))] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)(TabPanel, Object.assign({ value: value, index: 0 }, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceManyField, Object.assign({ reference: "contacts", target: "company_id", sort: { field: 'last_name', order: 'ASC' } }, { children: (0, jsx_runtime_1.jsx)(ContactsIterator, {}, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(TabPanel, Object.assign({ value: value, index: 1 }, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceManyField, Object.assign({ reference: "deals", target: "company_id", sort: { field: 'name', order: 'ASC' } }, { children: (0, jsx_runtime_1.jsx)(DealsIterator, {}, void 0) }), void 0) }), void 0)] }, void 0) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(CompanyAside_1.CompanyAside, { record: record }, void 0)] }), void 0));
};
const TabPanel = (props) => {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ role: "tabpanel", hidden: value !== index, id: `wrapped-tabpanel-${index}`, "aria-labelledby": `wrapped-tab-${index}` }, other, { children: children }), void 0));
};
const ContactsIterator = () => {
    const { data, ids, loaded } = (0, app_1.useListContext)();
    const record = (0, app_1.useRecordContext)();
    const now = Date.now();
    if (!loaded)
        return null;
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.List, { children: ids.map(id => {
                    const contact = data[id];
                    return ((0, jsx_runtime_1.jsxs)(material_1.ListItem, Object.assign({ button: true, component: react_router_dom_1.Link, to: `/contacts/${id}/show` }, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemAvatar, { children: (0, jsx_runtime_1.jsx)(Avatar_1.Avatar, { record: contact }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: `${contact.first_name} ${contact.last_name}`, secondary: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [contact.title, ' ', (0, jsx_runtime_1.jsx)(TagsList_1.TagsList, { record: contact }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemSecondaryAction, { children: (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", component: "span" }, { children: ["last activity", ' ', (0, date_fns_1.formatDistance)(new Date(contact.last_seen), now), ' ', "ago ", (0, jsx_runtime_1.jsx)(Status_1.Status, { status: contact.status }, void 0)] }), void 0) }, void 0)] }), id));
                }) }, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ textAlign: "center", mt: 1 }, { children: (0, jsx_runtime_1.jsx)(CreateRelatedContactButton, { record: record }, void 0) }), void 0)] }, void 0));
};
const CreateRelatedContactButton = ({ record }) => ((0, jsx_runtime_1.jsx)(material_1.Button
/* component={RouterLink}
to={{
  pathname: '/contacts/create',
  state: { record: { company_id: record.id } },
}}
*/
, Object.assign({ 
    /* component={RouterLink}
    to={{
      pathname: '/contacts/create',
      state: { record: { company_id: record.id } },
    }}
    */
    color: "primary", variant: "contained", size: "small" }, { children: "Add contact" }), void 0));
const DealsIterator = () => {
    const { data, ids, loaded } = (0, app_1.useListContext)();
    const now = Date.now();
    if (!loaded)
        return null;
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(material_1.List, { children: ids.map(id => {
                const deal = data[id];
                return ((0, jsx_runtime_1.jsxs)(material_1.ListItem, Object.assign({ button: true, component: react_router_dom_1.Link, to: `/deals/${id}/show` }, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: deal.name, secondary: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [stages_1.stageNames[deal.stage], ",", ' ', deal.amount.toLocaleString('en-US', {
                                        notation: 'compact',
                                        style: 'currency',
                                        currency: 'USD',
                                        currencyDisplay: 'narrowSymbol',
                                        minimumSignificantDigits: 3,
                                    }), ", ", deal.type] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.ListItemSecondaryAction, { children: (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "body2", color: "textSecondary", component: "span" }, { children: ["last activity", ' ', (0, date_fns_1.formatDistance)(new Date(deal.updated_at), now), ' ', "ago", ' '] }), void 0) }, void 0)] }), id));
            }) }, void 0) }, void 0));
};
