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
var React = __importStar(require("react"));
var app_1 = require("../../app");
var reviewFilters = [
    React.createElement(app_1.SearchInput, { source: "q", alwaysOn: true }),
    React.createElement(app_1.SelectInput, { source: "status", choices: [
            { id: 'accepted', name: 'Accepted' },
            { id: 'pending', name: 'Pending' },
            { id: 'rejected', name: 'Rejected' },
        ] }),
    React.createElement(app_1.ReferenceInput, { source: "customer_id", reference: "customers" },
        React.createElement(app_1.AutocompleteInput, { optionText: function (choice) {
                return (choice === null || choice === void 0 ? void 0 : choice.id // the empty choice is { id: '' }
                )
                    ? "".concat(choice.first_name, " ").concat(choice.last_name)
                    : '';
            } })),
    React.createElement(app_1.ReferenceInput, { source: "product_id", reference: "products" },
        React.createElement(app_1.AutocompleteInput, { optionText: "reference" })),
    React.createElement(app_1.DateInput, { source: "date_gte" }),
    React.createElement(app_1.DateInput, { source: "date_lte" }),
];
exports.default = reviewFilters;
