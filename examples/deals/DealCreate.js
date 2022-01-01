"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealCreate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const stages_1 = require("./stages");
const types_1 = require("./types");
const useStyles = (0, styles_1.makeStyles)({
    root: {
        width: 500,
    },
});
const DealCreate = ({ open }) => {
    const classes = useStyles();
    const redirect = (0, app_1.useRedirect)();
    const dataProvider = (0, app_1.useDataProvider)();
    const handleClose = () => {
        redirect('/deals');
    };
    const onSuccess = ({ data: deal }) => {
        redirect('/deals');
        // increase the index of all deals in the same stage as the new deal
        dataProvider
            .getList('deals', {
            pagination: { page: 1, perPage: 50 },
            sort: { field: 'id', order: 'ASC' },
            filter: { stage: deal.stage },
        })
            .then(({ data: deals }) => Promise.all(deals
            .filter(oldDeal => oldDeal.id !== deal.id)
            .map(oldDeal => dataProvider.update('deals', {
            id: oldDeal.id,
            data: { index: oldDeal.index + 1 },
            previousData: oldDeal,
        }))));
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Dialog, Object.assign({ open: open, onClose: handleClose }, { children: (0, jsx_runtime_1.jsx)(app_1.Create, Object.assign({ resource: "deals", basePath: "/deals", className: classes.root, onSuccess: onSuccess }, { children: (0, jsx_runtime_1.jsxs)(app_1.SimpleForm, Object.assign({ initialValues: { index: 0 } }, { children: [(0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "name", label: "Deal name", fullWidth: true, validate: [(0, app_1.required)()] }, void 0), (0, jsx_runtime_1.jsx)(app_1.TextInput, { source: "description", multiline: true, rows: 3, fullWidth: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.ReferenceInput, Object.assign({ source: "company_id", reference: "companies", fullWidth: true, validate: [(0, app_1.required)()] }, { children: (0, jsx_runtime_1.jsx)(app_1.AutocompleteInput, { optionText: "name" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "stage", choices: stages_1.stageChoices, fullWidth: true, validate: [(0, app_1.required)()], defaultValue: "opportunity" }, void 0), (0, jsx_runtime_1.jsx)(app_1.SelectInput, { source: "type", choices: types_1.typeChoices, fullWidth: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.NumberInput, { source: "amount", fullWidth: true, defaultValue: 0 }, void 0)] }), void 0) }), void 0) }), void 0));
};
exports.DealCreate = DealCreate;
