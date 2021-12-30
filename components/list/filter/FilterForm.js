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
exports.mergeInitialValuesWithDefaultValues = exports.FilterForm = void 0;
var styles_1 = require("@mui/material/styles");
var classnames_1 = __importDefault(require("classnames"));
var final_form_arrays_1 = __importDefault(require("final-form-arrays"));
var get_1 = __importDefault(require("lodash/get"));
var set_1 = __importDefault(require("lodash/set"));
var prop_types_1 = __importDefault(require("prop-types"));
var React = __importStar(require("react"));
var react_1 = require("react");
var react_final_form_1 = require("react-final-form");
var core_1 = require("../../../core");
var FilterContext_1 = require("../FilterContext");
var FilterFormInput_1 = __importDefault(require("./FilterFormInput"));
var PREFIX = 'RaFilterForm';
var classes = {
    form: "".concat(PREFIX, "-form"),
    clearFix: "".concat(PREFIX, "-clearFix"),
};
var StyledForm = (0, styles_1.styled)('form')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.form)] = {
            marginTop: -theme.spacing(2),
            paddingTop: 0,
            display: 'flex',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            minHeight: theme.spacing(10),
            pointerEvents: 'none',
        },
        _b["& .".concat(classes.clearFix)] = { clear: 'right' },
        _b);
});
var FilterForm = function (props) {
    var className = props.className, margin = props.margin, filters = props.filters, variant = props.variant, initialValues = props.initialValues, rest = __rest(props, ["className", "margin", "filters", "variant", "initialValues"]);
    var resource = (0, core_1.useResourceContext)(props);
    var _a = (0, core_1.useListContext)(props), _b = _a.displayedFilters, displayedFilters = _b === void 0 ? {} : _b, hideFilter = _a.hideFilter;
    (0, react_1.useEffect)(function () {
        filters.forEach(function (filter) {
            if (filter.props.alwaysOn && filter.props.defaultValue) {
                throw new Error('Cannot use alwaysOn and defaultValue on a filter input. Please set the filterDefaultValues props on the <List> element instead.');
            }
        });
    }, [filters]);
    var getShownFilters = function () {
        return filters.filter(function (filterElement) {
            return filterElement.props.alwaysOn ||
                displayedFilters[filterElement.props.source] ||
                typeof (0, get_1.default)(initialValues, filterElement.props.source) !==
                    'undefined';
        });
    };
    var handleHide = (0, react_1.useCallback)(function (event) { return hideFilter(event.currentTarget.dataset.key); }, [hideFilter]);
    return (React.createElement(StyledForm, __assign({ className: (0, classnames_1.default)(className, classes.form) }, sanitizeRestProps(rest), { onSubmit: handleSubmit }),
        getShownFilters().map(function (filterElement) { return (React.createElement(FilterFormInput_1.default, { key: filterElement.props.source, filterElement: filterElement, handleHide: handleHide, resource: resource, variant: filterElement.props.variant || variant, margin: filterElement.props.margin || margin })); }),
        React.createElement("div", { className: classes.clearFix })));
};
exports.FilterForm = FilterForm;
var handleSubmit = function (event) {
    event.preventDefault();
    return false;
};
exports.FilterForm.propTypes = {
    resource: prop_types_1.default.string,
    filters: prop_types_1.default.arrayOf(prop_types_1.default.node).isRequired,
    displayedFilters: prop_types_1.default.object,
    hideFilter: prop_types_1.default.func,
    initialValues: prop_types_1.default.object,
    className: prop_types_1.default.string,
};
var sanitizeRestProps = function (_a) {
    var active = _a.active, dirty = _a.dirty, dirtyFields = _a.dirtyFields, dirtyFieldsSinceLastSubmit = _a.dirtyFieldsSinceLastSubmit, dirtySinceLastSubmit = _a.dirtySinceLastSubmit, displayedFilters = _a.displayedFilters, error = _a.error, errors = _a.errors, filterValues = _a.filterValues, form = _a.form, handleSubmit = _a.handleSubmit, hasSubmitErrors = _a.hasSubmitErrors, hasValidationErrors = _a.hasValidationErrors, hideFilter = _a.hideFilter, invalid = _a.invalid, modified = _a.modified, modifiedSinceLastSubmit = _a.modifiedSinceLastSubmit, pristine = _a.pristine, resource = _a.resource, setFilters = _a.setFilters, submitError = _a.submitError, submitErrors = _a.submitErrors, submitFailed = _a.submitFailed, submitSucceeded = _a.submitSucceeded, submitting = _a.submitting, touched = _a.touched, valid = _a.valid, validating = _a.validating, values = _a.values, visited = _a.visited, props = __rest(_a, ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "displayedFilters", "error", "errors", "filterValues", "form", "handleSubmit", "hasSubmitErrors", "hasValidationErrors", "hideFilter", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "resource", "setFilters", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
    return props;
};
var mergeInitialValuesWithDefaultValues = function (initialValues, filters) { return (__assign(__assign({}, filters
    .filter(function (filterElement) {
    return filterElement.props.alwaysOn && filterElement.props.defaultValue;
})
    .reduce(function (acc, filterElement) {
    return (0, set_1.default)(__assign({}, acc), filterElement.props.source, filterElement.props.defaultValue);
}, {})), initialValues)); };
exports.mergeInitialValuesWithDefaultValues = mergeInitialValuesWithDefaultValues;
var EnhancedFilterForm = function (props) {
    var classesOverride = props.classes, filtersProps = props.filters, initialValues = props.initialValues, rest = __rest(props, ["classes", "filters", "initialValues"]);
    var _a = (0, core_1.useListContext)(props), setFilters = _a.setFilters, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues;
    var filters = (0, react_1.useContext)(FilterContext_1.FilterContext) || filtersProps;
    var mergedInitialValuesWithDefaultValues = (0, exports.mergeInitialValuesWithDefaultValues)(initialValues || filterValues, filters);
    return (React.createElement(react_final_form_1.Form, { onSubmit: handleFinalFormSubmit, initialValues: mergedInitialValuesWithDefaultValues, mutators: __assign({}, final_form_arrays_1.default), render: function (formProps) { return (React.createElement(React.Fragment, null,
            React.createElement(react_final_form_1.FormSpy, { subscription: FormSpySubscription, onChange: function (_a) {
                    var pristine = _a.pristine, values = _a.values, invalid = _a.invalid;
                    if (pristine || invalid) {
                        return;
                    }
                    setFilters(values, displayedFilters);
                } }),
            React.createElement(exports.FilterForm, __assign({}, formProps, rest, { filters: filters })))); } }));
};
var handleFinalFormSubmit = function () { };
// Options to instruct the FormSpy that it should only listen to the values and pristine changes
var FormSpySubscription = { values: true, pristine: true, invalid: true };
exports.default = EnhancedFilterForm;
