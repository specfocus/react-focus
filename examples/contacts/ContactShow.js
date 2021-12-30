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
exports.ContactShow = void 0;
var material_1 = require("@mui/material");
var React = __importStar(require("react"));
var app_1 = require("../../app");
var LogoField_1 = require("../companies/LogoField");
var notes_1 = require("../notes");
var Avatar_1 = require("./Avatar");
var ContactAside_1 = require("./ContactAside");
var ContactShow = function (props) { return (React.createElement(app_1.ShowBase, __assign({}, props),
    React.createElement(ContactShowContent, null))); };
exports.ContactShow = ContactShow;
var ContactShowContent = function () {
    var _a = (0, app_1.useShowContext)(), record = _a.record, loaded = _a.loaded;
    if (!loaded || !record)
        return null;
    return (React.createElement(material_1.Box, { mt: 2, display: "flex" },
        React.createElement(material_1.Box, { flex: "1" },
            React.createElement(material_1.Card, null,
                React.createElement(material_1.CardContent, null,
                    React.createElement(material_1.Box, { display: "flex" },
                        React.createElement(Avatar_1.Avatar, { record: record }),
                        React.createElement(material_1.Box, { ml: 2, flex: "1" },
                            React.createElement(material_1.Typography, { variant: "h5" },
                                record.first_name,
                                " ",
                                record.last_name),
                            React.createElement(material_1.Typography, { variant: "body2" },
                                record.title,
                                " at",
                                ' ',
                                React.createElement(app_1.ReferenceField, { source: "company_id", reference: "companies", link: "show" },
                                    React.createElement(app_1.TextField, { source: "name" })))),
                        React.createElement(material_1.Box, null,
                            React.createElement(app_1.ReferenceField, { source: "company_id", reference: "companies", link: "show" },
                                React.createElement(LogoField_1.LogoField, null)))),
                    React.createElement(app_1.ReferenceManyField, { target: "contact_id", reference: "contactNotes", sort: { field: 'date', order: 'DESC' } },
                        React.createElement(notes_1.NotesIterator, { showStatus: true, reference: "contacts" }))))),
        React.createElement(ContactAside_1.ContactAside, { record: record })));
};
