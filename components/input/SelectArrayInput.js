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
var material_1 = require("@mui/material");
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var Labeled_1 = __importDefault(require("./Labeled"));
var layout_1 = require("../layout");
var useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
var PREFIX = 'RaSelectArrayInput';
var classes = {
    root: "".concat(PREFIX, "-root"),
    chips: "".concat(PREFIX, "-chips"),
    chip: "".concat(PREFIX, "-chip"),
};
var StyledFormControl = (0, styles_1.styled)(material_1.FormControl)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {},
        _b["& .".concat(classes.chips)] = {
            display: 'flex',
            flexWrap: 'wrap',
        },
        _b["& .".concat(classes.chip)] = {
            margin: theme.spacing(1 / 4),
        },
        _b);
});
/**
 * An Input component for a select box allowing multiple selections, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'programming', name: 'Programming' },
 *    { id: 'lifestyle', name: 'Lifestyle' },
 *    { id: 'photography', name: 'Photography' },
 * ];
 * <SelectArrayInput source="tags" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectArrayInput source="authors" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectArrayInput source="authors" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectArrayInput source="authors" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.tags.programming' },
 *    { id: 'lifestyle', name: 'myroot.tags.lifestyle' },
 *    { id: 'photography', name: 'myroot.tags.photography' },
 * ];
 */
var SelectArrayInput = function (props) {
    var _a = props.choices, choices = _a === void 0 ? [] : _a, className = props.className, create = props.create, createLabel = props.createLabel, createValue = props.createValue, disableValue = props.disableValue, format = props.format, helperText = props.helperText, label = props.label, loaded = props.loaded, loading = props.loading, _b = props.margin, margin = _b === void 0 ? 'dense' : _b, onBlur = props.onBlur, onChange = props.onChange, onCreate = props.onCreate, onFocus = props.onFocus, options = props.options, optionText = props.optionText, optionValue = props.optionValue, parse = props.parse, resource = props.resource, source = props.source, translateChoice = props.translateChoice, validate = props.validate, _c = props.variant, variant = _c === void 0 ? 'filled' : _c, rest = __rest(props, ["choices", "className", "create", "createLabel", "createValue", "disableValue", "format", "helperText", "label", "loaded", "loading", "margin", "onBlur", "onChange", "onCreate", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "source", "translateChoice", "validate", "variant"]);
    var inputLabel = (0, react_1.useRef)(null);
    var _d = (0, core_1.useChoices)({
        optionText: optionText,
        optionValue: optionValue,
        disableValue: disableValue,
        translateChoice: translateChoice,
    }), getChoiceText = _d.getChoiceText, getChoiceValue = _d.getChoiceValue, getDisableValue = _d.getDisableValue;
    var _e = (0, core_1.useInput)(__assign({ format: format, onBlur: onBlur, onChange: onChange, onFocus: onFocus, parse: parse, resource: resource, source: source, validate: validate }, rest)), input = _e.input, isRequired = _e.isRequired, _f = _e.meta, error = _f.error, submitError = _f.submitError, touched = _f.touched;
    var handleChange = (0, react_1.useCallback)(function (event, newItem) {
        if (newItem) {
            input.onChange(__spreadArray(__spreadArray([], input.value, true), [getChoiceValue(newItem)], false));
            return;
        }
        input.onChange(event);
    }, [input, getChoiceValue]);
    var _g = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create: create,
        createLabel: createLabel,
        createValue: createValue,
        handleChange: handleChange,
        onCreate: onCreate,
        optionText: optionText,
    }), getCreateItem = _g.getCreateItem, handleChangeWithCreateSupport = _g.handleChange, createElement = _g.createElement;
    var createItem = create || onCreate ? getCreateItem() : null;
    var finalChoices = create || onCreate ? __spreadArray(__spreadArray([], choices, true), [createItem], false) : choices;
    var renderMenuItemOption = (0, react_1.useCallback)(function (choice) { return getChoiceText(choice); }, [
        getChoiceText,
    ]);
    var renderMenuItem = (0, react_1.useCallback)(function (choice) {
        return choice ? (React.createElement(material_1.MenuItem, { key: getChoiceValue(choice), value: getChoiceValue(choice), disabled: getDisableValue(choice) }, !!createItem && (choice === null || choice === void 0 ? void 0 : choice.id) === createItem.id
            ? createItem.name
            : renderMenuItemOption(choice))) : null;
    }, [getChoiceValue, getDisableValue, renderMenuItemOption, createItem]);
    if (loading) {
        return (React.createElement(Labeled_1.default, { label: label, source: source, resource: resource, className: className, isRequired: isRequired, margin: margin },
            React.createElement(layout_1.LinearProgress, null)));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledFormControl, __assign({ margin: margin, className: (0, classnames_1.default)(classes.root, className), error: touched && !!(error || submitError), variant: variant }, sanitizeRestProps(rest)),
            React.createElement(material_1.InputLabel, { ref: inputLabel, id: "".concat(label, "-outlined-label"), error: touched && !!(error || submitError) },
                React.createElement(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
            React.createElement(material_1.Select, __assign({ autoWidth: true, labelId: "".concat(label, "-outlined-label"), multiple: true, error: !!(touched && (error || submitError)), renderValue: function (selected) { return (React.createElement("div", { className: classes.chips }, selected
                    .map(function (item) {
                    return choices.find(function (choice) {
                        return getChoiceValue(choice) === item;
                    });
                })
                    .filter(function (item) { return !!item; })
                    .map(function (item) { return (React.createElement(material_1.Chip, { key: getChoiceValue(item), label: renderMenuItemOption(item), className: classes.chip })); }))); }, "data-testid": "selectArray" }, input, { onChange: handleChangeWithCreateSupport, value: input.value || [] }, options), finalChoices.map(renderMenuItem)),
            React.createElement(material_1.FormHelperText, { error: touched && !!(error || submitError) },
                React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }))),
        createElement));
};
SelectArrayInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]).isRequired,
    optionValue: prop_types_1.default.string.isRequired,
    disableValue: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
SelectArrayInput.defaultProps = {
    options: {},
    optionText: 'name',
    optionValue: 'id',
    disableValue: 'disabled',
    translateChoice: true,
};
var sanitizeRestProps = function (_a) {
    var addLabel = _a.addLabel, allowEmpty = _a.allowEmpty, alwaysOn = _a.alwaysOn, basePath = _a.basePath, choices = _a.choices, classNamInputWithOptionsPropse = _a.classNamInputWithOptionsPropse, componenInputWithOptionsPropst = _a.componenInputWithOptionsPropst, crudGetMInputWithOptionsPropsatching = _a.crudGetMInputWithOptionsPropsatching, crudGetOInputWithOptionsPropsne = _a.crudGetOInputWithOptionsPropsne, defaultValue = _a.defaultValue, disableValue = _a.disableValue, filter = _a.filter, filterToQuery = _a.filterToQuery, formClassName = _a.formClassName, initializeForm = _a.initializeForm, input = _a.input, isRequired = _a.isRequired, label = _a.label, limitChoicesToValue = _a.limitChoicesToValue, loaded = _a.loaded, locale = _a.locale, meta = _a.meta, onChange = _a.onChange, options = _a.options, optionValue = _a.optionValue, optionText = _a.optionText, perPage = _a.perPage, record = _a.record, reference = _a.reference, resource = _a.resource, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, sort = _a.sort, source = _a.source, textAlign = _a.textAlign, translate = _a.translate, translateChoice = _a.translateChoice, validation = _a.validation, rest = __rest(_a, ["addLabel", "allowEmpty", "alwaysOn", "basePath", "choices", "classNamInputWithOptionsPropse", "componenInputWithOptionsPropst", "crudGetMInputWithOptionsPropsatching", "crudGetOInputWithOptionsPropsne", "defaultValue", "disableValue", "filter", "filterToQuery", "formClassName", "initializeForm", "input", "isRequired", "label", "limitChoicesToValue", "loaded", "locale", "meta", "onChange", "options", "optionValue", "optionText", "perPage", "record", "reference", "resource", "setFilter", "setPagination", "setSort", "sort", "source", "textAlign", "translate", "translateChoice", "validation"]);
    return rest;
};
exports.default = SelectArrayInput;