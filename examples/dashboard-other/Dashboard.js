"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Welcome_1 = require("./Welcome");
const DealsChart_1 = require("./DealsChart");
const HotContacts_1 = require("./HotContacts");
const LatestNotes_1 = require("./LatestNotes");
const DealsPipeline_1 = require("./DealsPipeline");
const Dashboard = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mt: "2em" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "3", mr: "1em" }, { children: (0, jsx_runtime_1.jsx)(DealsChart_1.DealsChart, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "1" }, { children: (0, jsx_runtime_1.jsx)(Welcome_1.Welcome, {}, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ display: "flex", mt: "2em" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "1", mr: "1em" }, { children: (0, jsx_runtime_1.jsx)(LatestNotes_1.LatestNotes, {}, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ flex: "1", display: "flex" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "1", mr: "1em" }, { children: (0, jsx_runtime_1.jsx)(HotContacts_1.HotContacts, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ flex: "1" }, { children: (0, jsx_runtime_1.jsx)(DealsPipeline_1.DealsPipeline, {}, void 0) }), void 0)] }), void 0)] }), void 0)] }, void 0));
};
exports.Dashboard = Dashboard;
