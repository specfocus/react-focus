"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const reviewFilters = [
    (0, jsx_runtime_1.jsx)(app_1.SearchInput, { source: "q", alwaysOn: true }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "status", choices: [
            { id: 'accepted', name: 'Accepted' },
            { id: 'pending', name: 'Pending' },
            { id: 'rejected', name: 'Rejected' },
        ] }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "customer_id", reference: "customers" }, { children: (0, jsx_runtime_1.jsx)(app_1.AutocompleteInput, { optionText: (choice) => (choice === null || choice === void 0 ? void 0 : choice.id // the empty choice is { id: '' }
            )
                ? `${choice.first_name} ${choice.last_name}`
                : '' }, void 0) }), void 0),
    (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "product_id", reference: "products" }, { children: (0, jsx_runtime_1.jsx)(app_1.AutocompleteInput, { optionText: "reference" }, void 0) }), void 0),
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_gte" }, void 0),
    (0, jsx_runtime_1.jsx)(app_1.DateInput, { source: "date_lte" }, void 0),
];
exports.default = reviewFilters;
