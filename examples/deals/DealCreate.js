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
exports.DealCreate = void 0;
var React = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var stages_1 = require("./stages");
var types_1 = require("./types");
var useStyles = (0, styles_1.makeStyles)({
    root: {
        width: 500,
    },
});
var DealCreate = function (_a) {
    var open = _a.open;
    var classes = useStyles();
    var redirect = (0, app_1.useRedirect)();
    var dataProvider = (0, app_1.useDataProvider)();
    var handleClose = function () {
        redirect('/deals');
    };
    var onSuccess = function (_a) {
        var deal = _a.data;
        redirect('/deals');
        // increase the index of all deals in the same stage as the new deal
        dataProvider
            .getList('deals', {
            pagination: { page: 1, perPage: 50 },
            sort: { field: 'id', order: 'ASC' },
            filter: { stage: deal.stage },
        })
            .then(function (_a) {
            var deals = _a.data;
            return Promise.all(deals
                .filter(function (oldDeal) { return oldDeal.id !== deal.id; })
                .map(function (oldDeal) {
                return dataProvider.update('deals', {
                    id: oldDeal.id,
                    data: { index: oldDeal.index + 1 },
                    previousData: oldDeal,
                });
            }));
        });
    };
    return (React.createElement(material_1.Dialog, { open: open, onClose: handleClose },
        React.createElement(app_1.Create, { resource: "deals", basePath: "/deals", className: classes.root, onSuccess: onSuccess },
            React.createElement(app_1.SimpleForm, { initialValues: { index: 0 } },
                React.createElement(app_1.TextInput, { source: "name", label: "Deal name", fullWidth: true, validate: [(0, app_1.required)()] }),
                React.createElement(app_1.TextInput, { source: "description", multiline: true, rows: 3, fullWidth: true }),
                React.createElement(app_1.ReferenceInput, { source: "company_id", reference: "companies", fullWidth: true, validate: [(0, app_1.required)()] },
                    React.createElement(app_1.AutocompleteInput, { optionText: "name" })),
                React.createElement(app_1.SelectInput, { source: "stage", choices: stages_1.stageChoices, fullWidth: true, validate: [(0, app_1.required)()], defaultValue: "opportunity" }),
                React.createElement(app_1.SelectInput, { source: "type", choices: types_1.typeChoices, fullWidth: true }),
                React.createElement(app_1.NumberInput, { source: "amount", fullWidth: true, defaultValue: 0 })))));
};
exports.DealCreate = DealCreate;
