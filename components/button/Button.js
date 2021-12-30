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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeButtonRestProps = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var PREFIX = 'RaButton';
var classes = {
    button: "".concat(PREFIX, "-button"),
    label: "".concat(PREFIX, "-label"),
    labelRightIcon: "".concat(PREFIX, "-labelRightIcon"),
    smallIcon: "".concat(PREFIX, "-smallIcon"),
    mediumIcon: "".concat(PREFIX, "-mediumIcon"),
    largeIcon: "".concat(PREFIX, "-largeIcon"),
};
var StyledButton = (0, styles_1.styled)(material_1.Button)((_a = {},
    _a["& .".concat(classes.button)] = {
        display: 'inline-flex',
        alignItems: 'center',
    },
    _a["& .".concat(classes.label)] = {
        paddingLeft: '0.5em',
    },
    _a["& .".concat(classes.labelRightIcon)] = {
        paddingRight: '0.5em',
    },
    _a["& .".concat(classes.smallIcon)] = {
        fontSize: 20,
    },
    _a["& .".concat(classes.mediumIcon)] = {
        fontSize: 22,
    },
    _a["& .".concat(classes.largeIcon)] = {
        fontSize: 24,
    },
    _a));
/**
 * A generic Button with side icon. Only the icon is displayed on small screens.
 *
 * The component translates the label. Pass the icon as child.
 * The icon displays on the left side of the button by default. Set alignIcon prop to 'right' to inverse.
 *
 * @example
 *
 * <Button label="Edit" color="secondary" onClick={doEdit}>
 *   <ContentCreate />
 * </Button>
 *
 */
var Button = function (props) {
    var _a;
    var _b = props.alignIcon, alignIcon = _b === void 0 ? 'left' : _b, children = props.children, classesOverride = props.classes, className = props.className, disabled = props.disabled, label = props.label, _c = props.color, color = _c === void 0 ? 'primary' : _c, _d = props.size, size = _d === void 0 ? 'small' : _d, rest = __rest(props, ["alignIcon", "children", "classes", "className", "disabled", "label", "color", "size"]);
    var translate = (0, core_1.useTranslate)();
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var restProps = (0, exports.sanitizeButtonRestProps)(rest);
    return isXSmall ? (label && !disabled ? (React.createElement(material_1.Tooltip, { title: translate(label, { _: label }) },
        React.createElement(material_1.IconButton, __assign({ "aria-label": translate(label, { _: label }), className: className, color: color }, restProps, { size: "large" }), children))) : (React.createElement(material_1.IconButton, __assign({ className: className, color: color, disabled: disabled }, restProps, { size: "large" }), children))) : (React.createElement(StyledButton, __assign({ className: (0, classnames_1.default)(classes.button, className), color: color, size: size, "aria-label": label ? translate(label, { _: label }) : undefined, disabled: disabled }, restProps),
        alignIcon === 'left' &&
            children &&
            React.cloneElement(children, {
                className: classes["".concat(size, "Icon")],
            }),
        label && (React.createElement("span", { className: (0, classnames_1.default)((_a = {},
                _a[classes.label] = alignIcon === 'left',
                _a[classes.labelRightIcon] = alignIcon !== 'left',
                _a)) }, translate(label, { _: label }))),
        alignIcon === 'right' &&
            children &&
            React.cloneElement(children, {
                className: classes["".concat(size, "Icon")],
            })));
};
var sanitizeButtonRestProps = function (_a) {
    var 
    // The next props are injected by Toolbar
    basePath = _a.basePath, handleSubmit = _a.handleSubmit, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, invalid = _a.invalid, onSave = _a.onSave, pristine = _a.pristine, record = _a.record, redirect = _a.redirect, resource = _a.resource, saving = _a.saving, submitOnEnter = _a.submitOnEnter, undoable = _a.undoable, rest = __rest(_a, ["basePath", "handleSubmit", "handleSubmitWithRedirect", "invalid", "onSave", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "undoable"]);
    return rest;
};
exports.sanitizeButtonRestProps = sanitizeButtonRestProps;
Button.propTypes = {
    alignIcon: prop_types_1.default.oneOf(['left', 'right']),
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
};
exports.default = Button;
