"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyListFilter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const Business_1 = __importDefault(require("@mui/icons-material/Business"));
const LocalShipping_1 = __importDefault(require("@mui/icons-material/LocalShipping"));
const SupervisorAccount_1 = __importDefault(require("@mui/icons-material/SupervisorAccount"));
const sizes_1 = require("./sizes");
const sectors_1 = require("./sectors");
const CompanyListFilter = () => {
    const { identity } = (0, app_1.useGetIdentity)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ width: "15em", order: "-1", marginRight: "1em" }, { children: [(0, jsx_runtime_1.jsx)(app_1.FilterLiveSearch, {}, void 0), (0, jsx_runtime_1.jsx)(app_1.FilterList, Object.assign({ label: "Size", icon: (0, jsx_runtime_1.jsx)(Business_1.default, {}, void 0) }, { children: sizes_1.sizes.map(size => ((0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: size.name, value: { size: size.id } }, size.id))) }), void 0), (0, jsx_runtime_1.jsx)(app_1.FilterList, Object.assign({ label: "Sector", icon: (0, jsx_runtime_1.jsx)(LocalShipping_1.default, {}, void 0) }, { children: sectors_1.sectors.map(sector => ((0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: sector.name, value: { sector: sector.id } }, sector.id))) }), void 0), (0, jsx_runtime_1.jsx)(app_1.FilterList, Object.assign({ label: "Account manager", icon: (0, jsx_runtime_1.jsx)(SupervisorAccount_1.default, {}, void 0) }, { children: (0, jsx_runtime_1.jsx)(app_1.FilterListItem, { label: "Me", value: {
                        sales_id: identity && identity.id,
                    } }, void 0) }), void 0)] }), void 0));
};
exports.CompanyListFilter = CompanyListFilter;
