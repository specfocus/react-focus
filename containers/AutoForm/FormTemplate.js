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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importStar(require("react"));
var react_final_form_1 = require("react-final-form");
var Autocomplete_1 = require("../../components/final-form/Autocomplete");
var Checkboxes_1 = require("../../components/final-form/Checkboxes");
var DatePicker_1 = require("../../components/final-form/DatePicker");
var Radios_1 = require("../../components/final-form/Radios");
var Select_1 = require("../../components/final-form/Select");
var TextField_1 = require("../../components/final-form/TextField");
var TimePicker_1 = require("../../components/final-form/TimePicker");
var Validation_1 = require("../../components/final-form/Validation");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    centerItem: {
        height: '100px',
        textAlign: 'center'
    }
}); });
function FormTemplate(_a) {
    var _this = this;
    var data = _a.data, handleSubmit = _a.handleSubmit, validationSchema = _a.validationSchema, initialValues = _a.initialValues, handleCancel = _a.handleCancel, cancel = _a.cancel, submitButtonLabel = _a.submitButtonLabel, cancelButtonLabel = _a.cancelButtonLabel, cancelDisabled = _a.cancelDisabled;
    var classes = useStyles();
    var getMultiColFormComponent = function (formComponentData) {
        var length = formComponentData.length;
        return formComponentData.map(function (elem, index) {
            return (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, sm: Math.ceil(12 / length), className: classes.centerItem, key: index }, getFormComponentHelper(elem)));
        });
    };
    var getFormComponentHelper = function (formComponentData) {
        var label = formComponentData.label, name = formComponentData.name, type = formComponentData.type, options = formComponentData.options, optionLabelKey = formComponentData.optionLabelKey, optionValueKey = formComponentData.optionValueKey, style = formComponentData.style;
        var valueKey = optionValueKey || optionLabelKey;
        switch (type) {
            case 'text':
            case 'password':
                return (react_1.default.createElement(TextField_1.TextField, { label: label, name: name, variant: 'outlined', type: type, style: style }));
            case 'select':
                return (react_1.default.createElement(Select_1.Select, { name: name, label: label, variant: 'outlined', style: style }, options.map(function (option, index) {
                    return (react_1.default.createElement(material_1.MenuItem, { value: option[valueKey], key: "".concat(option[optionLabelKey], "-").concat(index) }, option[optionLabelKey]));
                })));
            case 'time':
                return (react_1.default.createElement(TimePicker_1.TimePicker, { name: name, label: label, dateFunsUtils: date_fns_1.default, inputVariant: 'outlined' }));
            case 'date':
                return (react_1.default.createElement(DatePicker_1.DatePicker, { name: name, label: label, dateFunsUtils: date_fns_1.default, inputVariant: 'outlined' }));
            case 'autocomplete':
                return (react_1.default.createElement(Autocomplete_1.Autocomplete, { label: label, name: name, options: options, getOptionValue: function (option) { return option[valueKey]; }, getOptionLabel: function (option) { return option[optionLabelKey]; }, textFieldProps: { variant: 'outlined', label: label }, multiple: formComponentData.multiple ? formComponentData.multiple : false }));
            case 'checkbox':
                return (react_1.default.createElement(Checkboxes_1.Checkboxes, { name: name, formGroupProps: { row: true }, data: options }));
            case 'radio':
                return (react_1.default.createElement(Radios_1.Radios, { label: label, name: name, radioGroupProps: { row: true }, data: options }));
            default:
                return null;
        }
    };
    var getFormComponent = function (formComponentData) {
        return Array.isArray(formComponentData) ? (react_1.default.createElement(material_1.Grid, { item: true, container: true, direction: 'row', justify: 'space-between', alignItems: 'center', spacing: 2 }, getMultiColFormComponent(formComponentData))) : (react_1.default.createElement(material_1.Grid, { item: true, xs: 12, className: classes.centerItem }, getFormComponentHelper(formComponentData)));
    };
    var sleep = function () { return new Promise(function (resolve) { return setTimeout(resolve, 100); }); };
    return (react_1.default.createElement(react_final_form_1.Form, { onSubmit: function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sleep()];
                    case 1:
                        _a.sent();
                        handleSubmit(data);
                        return [2 /*return*/];
                }
            });
        }); }, initialValues: initialValues, validate: (0, Validation_1.makeValidate)(validationSchema), render: function (_a) {
            var handleSubmit = _a.handleSubmit, form = _a.form, submitting = _a.submitting, pristine = _a.pristine, values = _a.values;
            return (react_1.default.createElement("form", { onSubmit: handleSubmit, noValidate: true },
                react_1.default.createElement(material_1.Grid, { container: true, direction: 'row', justify: 'center', alignItems: 'center' },
                    data.map(function (formComponentData, index) {
                        var name = formComponentData.name;
                        return (react_1.default.createElement(react_1.Fragment, { key: "".concat(name, " ").concat(index) }, getFormComponent(formComponentData)));
                    }),
                    react_1.default.createElement(material_1.Grid, { item: true, container: true, direction: 'row', justify: 'center', alignItems: 'center', spacing: 2 },
                        react_1.default.createElement(react_1.Fragment, null,
                            cancel && (react_1.default.createElement(material_1.Grid, { item: true },
                                react_1.default.createElement(material_1.Button, { variant: 'contained', color: 'secondary', onClick: handleCancel || form.reset, disabled: submitting || cancelDisabled }, cancelButtonLabel || 'Cancel'))),
                            react_1.default.createElement(material_1.Grid, { item: true },
                                submitting && react_1.default.createElement(material_1.LinearProgress, null),
                                react_1.default.createElement(material_1.Button, { disabled: submitting, type: 'submit', color: 'primary', variant: 'contained' }, submitButtonLabel || 'Submit')))))));
        } }));
}
exports.default = FormTemplate;
FormTemplate.propTypes = {
    data: prop_types_1.default.array.isRequired,
    validationSchema: prop_types_1.default.any.isRequired,
    handleSubmit: prop_types_1.default.func.isRequired,
    initialValues: prop_types_1.default.any.isRequired,
    handleCancel: prop_types_1.default.func
};
FormTemplate.defaultProps = {
    cancel: true
};
