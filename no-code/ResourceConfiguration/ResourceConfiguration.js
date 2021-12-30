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
exports.ResourceConfigurationPage = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var MoreVert_1 = __importDefault(require("@mui/icons-material/MoreVert"));
var core_1 = require("../../core");
var components_1 = require("../../components");
var useResourceConfiguration_1 = require("./useResourceConfiguration");
var FieldConfigurationFormSection_1 = require("./FieldConfigurationFormSection");
var FieldConfigurationTab_1 = require("./FieldConfigurationTab");
var ResourceConfigurationPage = function (_a) {
    var resource = _a.resource;
    var _b = (0, useResourceConfiguration_1.useResourceConfiguration)(resource), resourceConfiguration = _b[0], actions = _b[1];
    var _c = (0, react_1.useState)(), activeField = _c[0], setActiveField = _c[1];
    var classes = useStyles();
    var save = function (values) {
        actions.update(values);
    };
    var saveContext = {
        save: save,
        setOnFailure: function () { },
        setOnSuccess: function () { },
    };
    var handleTabChange = function (event, newValue) {
        var newField = resourceConfiguration.fields.find(function (f) { return f.props.source === newValue; });
        setActiveField(newField);
    };
    (0, react_1.useEffect)(function () {
        if (resourceConfiguration && resourceConfiguration.fields) {
            setActiveField(resourceConfiguration.fields[0]);
        }
    }, [resourceConfiguration]);
    if (!resourceConfiguration || !activeField) {
        return null;
    }
    return (React.createElement(core_1.RecordContextProvider, { value: resourceConfiguration },
        React.createElement(core_1.SaveContextProvider, { value: saveContext },
            React.createElement(core_1.FormWithRedirect, { save: save, initialValues: resourceConfiguration, render: function (_a) {
                    var handleSubmitWithRedirect = _a.handleSubmitWithRedirect;
                    return (React.createElement(material_1.Card, null,
                        React.createElement(material_1.CardHeader, { avatar: React.createElement(material_1.Avatar, null, 
                            // TODO: Add an icon selector
                            (resourceConfiguration.label ||
                                resourceConfiguration.name).substr(0, 1)), action: 
                            // TODO: Add a menu with resource related actions (delete, etc.)
                            React.createElement(material_1.IconButton, { "aria-label": "settings" },
                                React.createElement(MoreVert_1.default, null)), title: "Configuration of ".concat(resourceConfiguration.label ||
                                resourceConfiguration.name) }),
                        React.createElement(material_1.CardContent, null,
                            React.createElement(components_1.TextInput, { source: "label", initialValue: resourceConfiguration.label ||
                                    resourceConfiguration.name })),
                        React.createElement(material_1.Divider, null),
                        React.createElement("div", { className: classes.fields },
                            React.createElement(material_1.Tabs, { orientation: "vertical", value: activeField.props.source, onChange: handleTabChange, className: classes.fieldList }, resourceConfiguration.fields.map(function (field) { return (React.createElement(FieldConfigurationTab_1.FieldConfigurationTab, { key: "".concat(field.props.source, "_tab"), field: field, value: field.props.source, resource: resource })); })),
                            resourceConfiguration.fields.map(function (field, index) { return (React.createElement("div", { key: "".concat(field.props.source, "_panel"), role: "tabpanel", hidden: activeField.props.source !==
                                    field.props.source, id: "nav-tabpanel-".concat(field.props.source), "aria-labelledby": "nav-tab-".concat(field.props.source) }, activeField.props.source ===
                                field.props.source ? (React.createElement(FieldConfigurationFormSection_1.FieldConfigurationFormSection, { key: field.props.source, field: field, sourcePrefix: "fields[".concat(index, "]"), className: classes.fieldPanel, resource: resource })) : null)); })),
                        React.createElement(material_1.CardActions, { className: classes.actions },
                            React.createElement(components_1.SaveButton, { handleSubmitWithRedirect: handleSubmitWithRedirect }))));
                } }))));
};
exports.ResourceConfigurationPage = ResourceConfigurationPage;
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    fields: {
        display: 'flex',
    },
    fieldList: {
        backgroundColor: theme.palette.background.default,
    },
    fieldTitle: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        textTransform: 'none',
        minHeight: 0,
    },
    fieldPanel: {
        flexGrow: 1,
    },
    actions: {
        backgroundColor: theme.palette.background.default,
    },
}); });
