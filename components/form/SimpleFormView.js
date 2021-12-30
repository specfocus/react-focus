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
exports.SimpleFormView = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var FormInput_1 = __importDefault(require("./FormInput"));
var prop_types_1 = __importDefault(require("prop-types"));
var Toolbar_1 = __importDefault(require("./Toolbar"));
var CardContentInner_1 = __importDefault(require("../layout/CardContentInner"));
var SimpleFormView = function (_a) {
    var basePath = _a.basePath, children = _a.children, className = _a.className, Component = _a.component, handleSubmit = _a.handleSubmit, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, invalid = _a.invalid, margin = _a.margin, mutationMode = _a.mutationMode, pristine = _a.pristine, record = _a.record, redirect = _a.redirect, resource = _a.resource, saving = _a.saving, submitOnEnter = _a.submitOnEnter, toolbar = _a.toolbar, undoable = _a.undoable, variant = _a.variant, validating = _a.validating, rest = __rest(_a, ["basePath", "children", "className", "component", "handleSubmit", "handleSubmitWithRedirect", "invalid", "margin", "mutationMode", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "toolbar", "undoable", "variant", "validating"]);
    return (React.createElement("form", __assign({ className: (0, classnames_1.default)('simple-form', className) }, sanitizeRestProps(rest)),
        React.createElement(Component, null, react_1.Children.map(children, function (input) {
            return input && (React.createElement(FormInput_1.default, { basePath: basePath, input: input, record: record, resource: resource, variant: input.props.variant || variant, margin: input.props.margin || margin }));
        })),
        toolbar &&
            React.cloneElement(toolbar, {
                basePath: basePath,
                handleSubmitWithRedirect: handleSubmitWithRedirect,
                handleSubmit: handleSubmit,
                invalid: invalid,
                mutationMode: mutationMode,
                pristine: pristine,
                record: record,
                redirect: redirect,
                resource: resource,
                saving: saving,
                submitOnEnter: submitOnEnter,
                validating: validating,
                undoable: undoable,
            })));
};
exports.SimpleFormView = SimpleFormView;
exports.SimpleFormView.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    handleSubmit: prop_types_1.default.func,
    invalid: prop_types_1.default.bool,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    pristine: prop_types_1.default.bool,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    save: prop_types_1.default.func,
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    toolbar: prop_types_1.default.element,
    undoable: prop_types_1.default.bool,
    validate: prop_types_1.default.func,
};
exports.SimpleFormView.defaultProps = {
    submitOnEnter: true,
    toolbar: React.createElement(Toolbar_1.default, null),
    component: CardContentInner_1.default,
};
var sanitizeRestProps = function (_a) {
    var active = _a.active, dirty = _a.dirty, dirtyFields = _a.dirtyFields, dirtyFieldsSinceLastSubmit = _a.dirtyFieldsSinceLastSubmit, dirtySinceLastSubmit = _a.dirtySinceLastSubmit, error = _a.error, errors = _a.errors, form = _a.form, hasSubmitErrors = _a.hasSubmitErrors, hasValidationErrors = _a.hasValidationErrors, initialValues = _a.initialValues, _b = _a.modified, modified = _b === void 0 ? null : _b, modifiedSinceLastSubmit = _a.modifiedSinceLastSubmit, _c = _a.save, save = _c === void 0 ? null : _c, submitError = _a.submitError, submitErrors = _a.submitErrors, submitFailed = _a.submitFailed, submitSucceeded = _a.submitSucceeded, submitting = _a.submitting, _d = _a.touched, touched = _d === void 0 ? null : _d, valid = _a.valid, values = _a.values, _e = _a.visited, visited = _e === void 0 ? null : _e, _f = _a.__versions, __versions = _f === void 0 ? null : _f, props = __rest(_a, ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "form", "hasSubmitErrors", "hasValidationErrors", "initialValues", "modified", "modifiedSinceLastSubmit", "save", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "values", "visited", "__versions"]);
    return props;
};
