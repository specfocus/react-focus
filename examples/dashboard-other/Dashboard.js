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
exports.Dashboard = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var Welcome_1 = require("./Welcome");
var DealsChart_1 = require("./DealsChart");
var HotContacts_1 = require("./HotContacts");
var LatestNotes_1 = require("./LatestNotes");
var DealsPipeline_1 = require("./DealsPipeline");
var Dashboard = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Box, { display: "flex", mt: "2em" },
            React.createElement(material_1.Box, { flex: "3", mr: "1em" },
                React.createElement(DealsChart_1.DealsChart, null)),
            React.createElement(material_1.Box, { flex: "1" },
                React.createElement(Welcome_1.Welcome, null))),
        React.createElement(material_1.Box, { display: "flex", mt: "2em" },
            React.createElement(material_1.Box, { flex: "1", mr: "1em" },
                React.createElement(LatestNotes_1.LatestNotes, null)),
            React.createElement(material_1.Box, { flex: "1", display: "flex" },
                React.createElement(material_1.Box, { flex: "1", mr: "1em" },
                    React.createElement(HotContacts_1.HotContacts, null)),
                React.createElement(material_1.Box, { flex: "1" },
                    React.createElement(DealsPipeline_1.DealsPipeline, null))))));
};
exports.Dashboard = Dashboard;
