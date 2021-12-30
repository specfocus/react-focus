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
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var classnames_1 = __importDefault(require("classnames"));
var button_1 = require("../button");
var PREFIX = 'RaToolbar';
var classes = {
    toolbar: "".concat(PREFIX, "-toolbar"),
    desktopToolbar: "".concat(PREFIX, "-desktopToolbar"),
    mobileToolbar: "".concat(PREFIX, "-mobileToolbar"),
    defaultToolbar: "".concat(PREFIX, "-defaultToolbar"),
    spacer: "".concat(PREFIX, "-spacer"),
};
var StyledToolbar = (0, styles_1.styled)(material_1.Toolbar)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.toolbar)] = {
            backgroundColor: theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        },
        _b["&.".concat(classes.desktopToolbar)] = {
            marginTop: theme.spacing(2),
        },
        _b["&.".concat(classes.mobileToolbar)] = {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px',
            width: '100%',
            boxSizing: 'border-box',
            flexShrink: 0,
            zIndex: 2,
        },
        _b["&.".concat(classes.defaultToolbar)] = {
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
        },
        _b);
});
var valueOrDefault = function (value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
};
/**
 * The Toolbar displayed at the bottom of forms.
 *
 * @example Always enable the <SaveButton />
 *
 * import * as React from 'react';
 * import {
 *     Create,
 *     DateInput,
 *     TextInput,
 *     SimpleForm,
 *     Toolbar,
 *     required,
 * } from '../../app';
 *
 * const now = new Date();
 * const defaultSort = { field: 'title', order: 'ASC' };
 *
 * const CommentCreate = props => (
 *     <Create {...props}>
 *         <SimpleForm redirect={false} toolbar={<Toolbar alwaysEnableSaveButton={true} />}>
 *             <TextInput
 *                 source="author.name"
 *                 fullWidth
 *             />
 *             <DateInput source="created_at" defaultValue={now} />
 *             <TextInput source="body" fullWidth={true} multiline={true} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <SimpleForm>)
 * @prop {boolean} alwaysEnableSaveButton Force enabling the <SaveButton>. If it's not defined, the <SaveButton> will be enabled using the `pristine` and `validating` props (disabled if pristine or validating, enabled otherwise).
 * @prop {ReactElement[]} children Customize the buttons you want to display in the <Toolbar>.
 * @prop {string} width Apply to the mobile or desktop classes depending on its value. Pass `xs` to display the mobile version.
 *
 */
var Toolbar = function (props) {
    var _a;
    var alwaysEnableSaveButton = props.alwaysEnableSaveButton, basePath = props.basePath, children = props.children, className = props.className, handleSubmit = props.handleSubmit, handleSubmitWithRedirect = props.handleSubmitWithRedirect, invalid = props.invalid, pristine = props.pristine, record = props.record, redirect = props.redirect, resource = props.resource, saving = props.saving, submitOnEnter = props.submitOnEnter, undoable = props.undoable, mutationMode = props.mutationMode, validating = props.validating, rest = __rest(props, ["alwaysEnableSaveButton", "basePath", "children", "className", "handleSubmit", "handleSubmitWithRedirect", "invalid", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "undoable", "mutationMode", "validating"]);
    var isXs = (0, material_1.useMediaQuery)(function (theme) { return theme.breakpoints.down('sm'); });
    // Use form pristine and validating to enable or disable the save button
    // if alwaysEnableSaveButton is undefined
    var disabled = !valueOrDefault(alwaysEnableSaveButton, !pristine && !validating);
    return (React.createElement(StyledToolbar, __assign({ className: (0, classnames_1.default)(classes.toolbar, (_a = {},
            _a[classes.mobileToolbar] = isXs,
            _a[classes.desktopToolbar] = !isXs,
            _a), className), role: "toolbar" }, rest), react_1.Children.count(children) === 0 ? (React.createElement("div", { className: classes.defaultToolbar },
        React.createElement(button_1.SaveButton, { handleSubmitWithRedirect: handleSubmitWithRedirect || handleSubmit, disabled: disabled, invalid: invalid, redirect: redirect, saving: saving || validating, submitOnEnter: submitOnEnter }),
        record && typeof record.id !== 'undefined' && (React.createElement(button_1.DeleteButton, { basePath: basePath, record: record, resource: resource, undoable: undoable, mutationMode: mutationMode })))) : (react_1.Children.map(children, function (button) {
        return button && (0, react_1.isValidElement)(button)
            ? React.cloneElement(button, {
                basePath: valueOrDefault(button.props.basePath, basePath),
                handleSubmit: valueOrDefault(button.props.handleSubmit, handleSubmit),
                handleSubmitWithRedirect: valueOrDefault(button.props.handleSubmitWithRedirect, handleSubmitWithRedirect),
                onSave: button.props.onSave,
                invalid: invalid,
                pristine: pristine,
                record: valueOrDefault(button.props.record, record),
                resource: valueOrDefault(button.props.resource, resource),
                saving: saving,
                submitOnEnter: valueOrDefault(button.props.submitOnEnter, submitOnEnter),
                undoable: valueOrDefault(button.props.undoable, undoable),
            })
            : null;
    }))));
};
Toolbar.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    handleSubmit: prop_types_1.default.func,
    handleSubmitWithRedirect: prop_types_1.default.func,
    invalid: prop_types_1.default.bool,
    pristine: prop_types_1.default.bool,
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    undoable: prop_types_1.default.bool,
    validating: prop_types_1.default.bool,
};
Toolbar.defaultProps = {
    submitOnEnter: true,
};
exports.default = Toolbar;
