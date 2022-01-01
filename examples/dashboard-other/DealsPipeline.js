"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealsPipeline = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const MonetizationOn_1 = __importDefault(require("@mui/icons-material/MonetizationOn"));
const app_1 = require("../../app");
const CompanyAvatar_1 = require("../companies/CompanyAvatar");
const stages_1 = require("../deals/stages");
const DealsPipeline = () => {
    const { identity } = (0, app_1.useGetIdentity)();
    const { data, ids: unorderedIds, total, loaded } = (0, app_1.useGetList)('deals', { page: 1, perPage: 10 }, { field: 'last_seen', order: 'DESC' }, { stage_neq: 'lost', sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) });
    const [ids, setIds] = (0, react_1.useState)(unorderedIds);
    (0, react_1.useEffect)(() => {
        const deals = unorderedIds.map(id => data[id]);
        const orderedIds = [];
        stages_1.stages
            .filter(stage => stage !== 'won')
            .forEach(stage => deals
            .filter(deal => deal.stage === stage)
            .forEach(deal => orderedIds.push(deal.id)));
        setIds(orderedIds);
    }, [unorderedIds, data]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", alignItems: "center", marginBottom: "1em" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ ml: 2, mr: 2, display: "flex" }, { children: (0, jsx_runtime_1.jsx)(MonetizationOn_1.default, { color: "disabled", fontSize: "large" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ underline: "none", variant: "h5", color: "textSecondary", component: react_router_dom_1.Link, to: "/deals" }, { children: "Deals Pipeline" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Card, { children: (0, jsx_runtime_1.jsx)(app_1.SimpleList, { basePath: "/deals", linkType: "show", ids: ids, data: data, total: total, loaded: loaded, primaryText: deal => deal.name, secondaryText: deal => `${deal.amount.toLocaleString('en-US', {
                        notation: 'compact',
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'narrowSymbol',
                        minimumSignificantDigits: 3,
                        // @ts-ignore
                    })} , ${stages_1.stageNames[deal.stage]}`, leftAvatar: deal => ((0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "company_id", record: deal, reference: "companies", resource: "deals", basePath: "/deals", link: false }, { children: (0, jsx_runtime_1.jsx)(CompanyAvatar_1.CompanyAvatar, { size: "small" }, void 0) }), void 0)) }, void 0) }, void 0)] }, void 0));
};
exports.DealsPipeline = DealsPipeline;
