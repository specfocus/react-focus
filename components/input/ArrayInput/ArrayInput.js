"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayInputError = exports.ArrayInput = void 0;
var material_1 = require("@mui/material");
var prop_types_1 = __importDefault(require("prop-types"));
var React = __importStar(require("react"));
var react_1 = require("react");
var react_final_form_arrays_1 = require("react-final-form-arrays");
var core_1 = require("../../../core");
var layout_1 = require("../../layout");
var InputHelperText_1 = __importDefault(require("../InputHelperText"));
var Labeled_1 = __importDefault(require("../Labeled"));
var sanitizeInputRestProps_1 = __importDefault(require("../sanitizeInputRestProps"));
var ArrayInputContext_1 = require("./ArrayInputContext");
/**
 * To edit arrays of data embedded inside a record, <ArrayInput> creates a list of sub-forms.
 *
 *  @example
 *
 *      import { ArrayInput, SimpleFormIterator, DateInput, TextInput } from '../../app';
 *
 *      <ArrayInput source="backlinks">
 *          <SimpleFormIterator>
 *              <DateInput source="date" />
 *              <TextInput source="url" />
 *          </SimpleFormIterator>
 *      </ArrayInput>
 *
 * <ArrayInput> allows the edition of embedded arrays, like the backlinks field
 * in the following post record:
 *
 * {
 *   id: 123
 *   backlinks: [
 *         {
 *             date: '2012-08-10T00:00:00.000Z',
 *             url: 'http://example.com/foo/bar.html',
 *         },
 *         {
 *             date: '2012-08-14T00:00:00.000Z',
 *             url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 *         }
 *    ]
 * }
 *
 * <ArrayInput> expects a single child, which must be a *form iterator* component.
 * A form iterator is a component accepting a fields object as passed by
 * react-final-form-arrays's useFieldArray() hook, and defining a layout for
 * an array of fields. For instance, the <SimpleFormIterator> component
 * displays an array of fields in an unordered list (<ul>), one sub-form by
 * list item (<li>). It also provides controls for adding and removing
 * a sub-record (a backlink in this example).
 *
 * @see https://github.com/final-form/react-final-form-arrays
 */
var ArrayInput = function (_a) {
    var className = _a.className, defaultValue = _a.defaultValue, label = _a.label, loaded = _a.loaded, loading = _a.loading, children = _a.children, helperText = _a.helperText, record = _a.record, resource = _a.resource, source = _a.source, validate = _a.validate, variant = _a.variant, disabled = _a.disabled, _b = _a.margin, margin = _b === void 0 ? 'dense' : _b, rest = __rest(_a, ["className", "defaultValue", "label", "loaded", "loading", "children", "helperText", "record", "resource", "source", "validate", "variant", "disabled", "margin"]);
    var sanitizedValidate = Array.isArray(validate)
        ? (0, core_1.composeSyncValidators)(validate)
        : validate;
    var fieldProps = (0, react_final_form_arrays_1.useFieldArray)(source, __assign({ initialValue: defaultValue, validate: sanitizedValidate }, rest));
    if (loading) {
        return (React.createElement(Labeled_1.default, { label: label, source: source, resource: resource, className: className, margin: margin },
            React.createElement(layout_1.LinearProgress, null)));
    }
    var _c = fieldProps.meta, error = _c.error, submitError = _c.submitError, touched = _c.touched, dirty = _c.dirty;
    var arrayInputError = (0, exports.getArrayInputError)(error || submitError);
    return (React.createElement(material_1.FormControl, __assign({ fullWidth: true, margin: "normal", className: className, error: (touched || dirty) && !!arrayInputError }, (0, sanitizeInputRestProps_1.default)(rest)),
        React.createElement(material_1.InputLabel, { htmlFor: source, shrink: true, error: (touched || dirty) && !!arrayInputError },
            React.createElement(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: (0, core_1.isRequired)(validate) })),
        React.createElement(ArrayInputContext_1.ArrayInputContext.Provider, { value: fieldProps }, (0, react_1.cloneElement)(react_1.Children.only(children), __assign(__assign({}, fieldProps), { record: record, resource: resource, source: source, variant: variant, margin: margin, disabled: disabled }))),
        !!((touched || dirty) && arrayInputError) || helperText ? (React.createElement(material_1.FormHelperText, { error: (touched || dirty) && !!arrayInputError },
            React.createElement(InputHelperText_1.default, { touched: touched || dirty, error: arrayInputError, helperText: helperText }))) : null));
};
exports.ArrayInput = ArrayInput;
exports.ArrayInput.propTypes = {
    // @ts-ignore
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    defaultValue: prop_types_1.default.any,
    isRequired: prop_types_1.default.bool,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    helperText: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    record: prop_types_1.default.object,
    options: prop_types_1.default.object,
    validate: prop_types_1.default.oneOfType([
        prop_types_1.default.func,
        prop_types_1.default.arrayOf(prop_types_1.default.func),
    ]),
};
exports.ArrayInput.defaultProps = {
    options: {},
    fullWidth: true,
};
var getArrayInputError = function (error) {
    if (Array.isArray(error)) {
        return undefined;
    }
    return error;
};
exports.getArrayInputError = getArrayInputError;