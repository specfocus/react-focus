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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var core_1 = require("../../core");
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var CheckboxGroupInputItem_1 = __importDefault(require("./CheckboxGroupInputItem"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var classnames_1 = __importDefault(require("classnames"));
var Labeled_1 = __importDefault(require("./Labeled"));
var layout_1 = require("../layout");
var PREFIX = 'RaCheckboxGroupInput';
var classes = {
    root: "".concat(PREFIX, "-root"),
    label: "".concat(PREFIX, "-label"),
};
var StyledFormControl = (0, styles_1.styled)(FormControl_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {},
        _b["& .".concat(classes.label)] = {
            transform: 'translate(0, 8px) scale(0.75)',
            transformOrigin: "top ".concat(theme.direction === 'ltr' ? 'left' : 'right'),
        },
        _b);
});
/**
 * An Input component for a checkbox group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * The expected input must be an array of identifiers (e.g. [12, 31]) which correspond to
 * the 'optionValue' of 'choices' attribute objects.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *     { id: 12, name: 'Ray Hakt' },
 *     { id: 31, name: 'Ann Gullar' },
 *     { id: 42, name: 'Sean Phonee' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi' },
 *    { _id: 456, full_name: 'Jane Austen' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.category.programming' },
 *    { id: 'lifestyle', name: 'myroot.category.lifestyle' },
 *    { id: 'photography', name: 'myroot.category.photography' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceArrayInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <CheckboxGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <Checkbox> components
 */
var CheckboxGroupInput = function (props) {
    var _a = props.choices, choices = _a === void 0 ? [] : _a, className = props.className, classesOverride = props.classes, format = props.format, helperText = props.helperText, label = props.label, loaded = props.loaded, loading = props.loading, _b = props.margin, margin = _b === void 0 ? 'dense' : _b, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, optionText = props.optionText, optionValue = props.optionValue, options = props.options, parse = props.parse, resource = props.resource, row = props.row, source = props.source, translate = props.translate, translateChoice = props.translateChoice, validate = props.validate, rest = __rest(props, ["choices", "className", "classes", "format", "helperText", "label", "loaded", "loading", "margin", "onBlur", "onChange", "onFocus", "optionText", "optionValue", "options", "parse", "resource", "row", "source", "translate", "translateChoice", "validate"]);
    (0, core_1.warning)(source === undefined, "If you're not wrapping the CheckboxGroupInput inside a ReferenceArrayInput, you must provide the source prop");
    (0, core_1.warning)(choices === undefined, "If you're not wrapping the CheckboxGroupInput inside a ReferenceArrayInput, you must provide the choices prop");
    var _c = (0, core_1.useInput)(__assign({ format: format, onBlur: onBlur, onChange: onChange, onFocus: onFocus, parse: parse, resource: resource, source: source, validate: validate }, rest)), id = _c.id, _d = _c.input, finalFormOnChange = _d.onChange, finalFormOnBlur = _d.onBlur, value = _d.value, isRequired = _c.isRequired, _e = _c.meta, error = _e.error, submitError = _e.submitError, touched = _e.touched;
    var handleCheck = (0, react_1.useCallback)(function (event, isChecked) {
        var newValue;
        try {
            // try to convert string value to number, e.g. '123'
            newValue = JSON.parse(event.target.value);
        }
        catch (e) {
            // impossible to convert value, e.g. 'abc'
            newValue = event.target.value;
        }
        if (isChecked) {
            finalFormOnChange(__spreadArray(__spreadArray([], (value || []), true), [newValue], false));
        }
        else {
            finalFormOnChange(value.filter(function (v) { return v != newValue; })); // eslint-disable-line eqeqeq
        }
        finalFormOnBlur(); // HACK: See https://github.com/final-form/react-final-form/issues/365#issuecomment-515045503
    }, [finalFormOnChange, finalFormOnBlur, value]);
    if (loading) {
        return (React.createElement(Labeled_1.default, { label: label, source: source, resource: resource, className: className, isRequired: isRequired, margin: margin },
            React.createElement(layout_1.LinearProgress, null)));
    }
    return (React.createElement(StyledFormControl, __assign({ component: "fieldset", margin: margin, error: touched && !!(error || submitError), className: (0, classnames_1.default)(classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(FormLabel_1.default, { component: "legend", className: classes.label },
            React.createElement(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
        React.createElement(FormGroup_1.default, { row: row }, choices.map(function (choice) { return (React.createElement(CheckboxGroupInputItem_1.default, { key: (0, get_1.default)(choice, optionValue), choice: choice, id: id, onChange: handleCheck, options: options, optionText: optionText, optionValue: optionValue, translateChoice: translateChoice, value: value })); })),
        React.createElement(FormHelperText_1.default, null,
            React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }))));
};
var sanitizeRestProps = function (_a) {
    var refetch = _a.refetch, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, loaded = _a.loaded, touched = _a.touched, rest = __rest(_a, ["refetch", "setFilter", "setPagination", "setSort", "loaded", "touched"]);
    return (0, sanitizeInputRestProps_1.default)(rest);
};
CheckboxGroupInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
    className: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    source: prop_types_1.default.string,
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]),
    optionValue: prop_types_1.default.string,
    row: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
CheckboxGroupInput.defaultProps = {
    options: {},
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
    fullWidth: true,
    row: true,
};
exports.default = CheckboxGroupInput;