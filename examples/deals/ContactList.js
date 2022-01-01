"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)({
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'inline-block',
    },
    li: {
        display: 'inline',
        '&:after': {
            content: '", "',
        },
        '&:last-child:after': {
            content: '""',
        },
    },
});
const ContactList = () => {
    const { ids, data, loaded } = (0, app_1.useListContext)();
    const classes = useStyles();
    if (!loaded)
        return (0, jsx_runtime_1.jsx)("div", { style: { height: '2em' } }, void 0);
    return ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: classes.ul }, { children: ids.map(id => ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: classes.li }, { children: (0, jsx_runtime_1.jsxs)(material_1.Link, Object.assign({ component: react_router_dom_1.Link, to: `/contacts/${id}`, variant: "subtitle1" }, { children: [data[id].first_name, " ", data[id].last_name] }), void 0) }), id))) }), void 0));
};
exports.ContactList = ContactList;
