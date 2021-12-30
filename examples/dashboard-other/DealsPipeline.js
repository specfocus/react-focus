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
exports.DealsPipeline = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var MonetizationOn_1 = __importDefault(require("@mui/icons-material/MonetizationOn"));
var app_1 = require("../../app");
var CompanyAvatar_1 = require("../companies/CompanyAvatar");
var stages_1 = require("../deals/stages");
var DealsPipeline = function () {
    var identity = (0, app_1.useGetIdentity)().identity;
    var _a = (0, app_1.useGetList)('deals', { page: 1, perPage: 10 }, { field: 'last_seen', order: 'DESC' }, { stage_neq: 'lost', sales_id: identity === null || identity === void 0 ? void 0 : identity.id }, { enabled: Number.isInteger(identity === null || identity === void 0 ? void 0 : identity.id) }), data = _a.data, unorderedIds = _a.ids, total = _a.total, loaded = _a.loaded;
    var _b = (0, react_1.useState)(unorderedIds), ids = _b[0], setIds = _b[1];
    (0, react_1.useEffect)(function () {
        var deals = unorderedIds.map(function (id) { return data[id]; });
        var orderedIds = [];
        stages_1.stages
            .filter(function (stage) { return stage !== 'won'; })
            .forEach(function (stage) {
            return deals
                .filter(function (deal) { return deal.stage === stage; })
                .forEach(function (deal) { return orderedIds.push(deal.id); });
        });
        setIds(orderedIds);
    }, [unorderedIds, data]);
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { display: "flex", alignItems: "center", marginBottom: "1em" },
            React.createElement(material_1.Box, { ml: 2, mr: 2, display: "flex" },
                React.createElement(MonetizationOn_1.default, { color: "disabled", fontSize: "large" })),
            React.createElement(material_1.Link, { underline: "none", variant: "h5", color: "textSecondary", component: react_router_dom_1.Link, to: "/deals" }, "Deals Pipeline")),
        React.createElement(material_1.Card, null,
            React.createElement(app_1.SimpleList, { basePath: "/deals", linkType: "show", ids: ids, data: data, total: total, loaded: loaded, primaryText: function (deal) { return deal.name; }, secondaryText: function (deal) {
                    return "".concat(deal.amount.toLocaleString('en-US', {
                        notation: 'compact',
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'narrowSymbol',
                        minimumSignificantDigits: 3,
                        // @ts-ignore
                    }), " , ").concat(stages_1.stageNames[deal.stage]);
                }, leftAvatar: function (deal) { return (React.createElement(app_1.ReferenceField, { source: "company_id", record: deal, reference: "companies", resource: "deals", basePath: "/deals", link: false },
                    React.createElement(CompanyAvatar_1.CompanyAvatar, { size: "small" }))); } }))));
};
exports.DealsPipeline = DealsPipeline;
