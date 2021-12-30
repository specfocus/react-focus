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
exports.CompanyListFilter = void 0;
/* eslint-disable import/no-anonymous-default-export */
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var Business_1 = __importDefault(require("@mui/icons-material/Business"));
var LocalShipping_1 = __importDefault(require("@mui/icons-material/LocalShipping"));
var SupervisorAccount_1 = __importDefault(require("@mui/icons-material/SupervisorAccount"));
var sizes_1 = require("./sizes");
var sectors_1 = require("./sectors");
var CompanyListFilter = function () {
    var identity = (0, app_1.useGetIdentity)().identity;
    return (React.createElement(material_1.Box, { width: "15em", order: "-1", marginRight: "1em" },
        React.createElement(app_1.FilterLiveSearch, null),
        React.createElement(app_1.FilterList, { label: "Size", icon: React.createElement(Business_1.default, null) }, sizes_1.sizes.map(function (size) { return (React.createElement(app_1.FilterListItem, { key: size.id, label: size.name, value: { size: size.id } })); })),
        React.createElement(app_1.FilterList, { label: "Sector", icon: React.createElement(LocalShipping_1.default, null) }, sectors_1.sectors.map(function (sector) { return (React.createElement(app_1.FilterListItem, { key: sector.id, label: sector.name, value: { sector: sector.id } })); })),
        React.createElement(app_1.FilterList, { label: "Account manager", icon: React.createElement(SupervisorAccount_1.default, null) },
            React.createElement(app_1.FilterListItem, { label: "Me", value: {
                    sales_id: identity && identity.id,
                } }))));
};
exports.CompanyListFilter = CompanyListFilter;
