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
exports.ContactList = void 0;
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@mui/styles");
var useStyles = (0, styles_1.makeStyles)({
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
var ContactList = function () {
    var _a = (0, app_1.useListContext)(), ids = _a.ids, data = _a.data, loaded = _a.loaded;
    var classes = useStyles();
    if (!loaded)
        return React.createElement("div", { style: { height: '2em' } });
    return (React.createElement("ul", { className: classes.ul }, ids.map(function (id) { return (React.createElement("li", { key: id, className: classes.li },
        React.createElement(material_1.Link, { component: react_router_dom_1.Link, to: "/contacts/".concat(id), variant: "subtitle1" },
            data[id].first_name,
            " ",
            data[id].last_name))); })));
};
exports.ContactList = ContactList;
