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
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var classnames_1 = __importDefault(require("classnames"));
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../core");
var Button_1 = __importStar(require("./Button"));
var PREFIX = 'RaCreateButton';
var classes = {
    floating: "".concat(PREFIX, "-floating"),
};
var StyledFab = (0, styles_1.styled)(material_1.Fab)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.floating)] = {
            color: theme.palette.getContrastText(theme.palette.primary.main),
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 60,
            left: 'auto',
            position: 'fixed',
            zIndex: 1000,
        },
        _b);
});
/**
 * Opens the Create view of a given resource
 *
 * Renders as a regular button on desktop, and a Floating Action Button
 * on mobile.
 *
 * @example // basic usage
 * import { CreateButton } from '../../app';
 *
 * const CommentCreateButton = () => (
 *     <CreateButton basePath="/comments" label="Create comment" />
 * );
 */
var CreateButton = function (props) {
    var _a = props.basePath, basePath = _a === void 0 ? '' : _a, className = props.className, classesOverride = props.classes, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, _c = props.label, label = _c === void 0 ? 'ra.action.create' : _c, _d = props.scrollToTop, scrollToTop = _d === void 0 ? true : _d, variant = props.variant, rest = __rest(props, ["basePath", "className", "classes", "icon", "label", "scrollToTop", "variant"]);
    var translate = (0, core_1.useTranslate)();
    var isSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('md');
    });
    var resource = (0, core_1.useResourceContext)();
    var location = (0, react_1.useMemo)(function () { return ({
        pathname: basePath ? "".concat(basePath, "/create") : "/".concat(resource, "/create"),
        state: { _scrollToTop: scrollToTop },
    }); }, [basePath, resource, scrollToTop]);
    return isSmall ? (React.createElement(StyledFab, __assign({ component: react_router_dom_1.Link, color: "primary", className: (0, classnames_1.default)(classes.floating, className), to: location, "aria-label": label && translate(label) }, (0, Button_1.sanitizeButtonRestProps)(rest)), icon)) : (React.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: location, className: className, label: label, variant: variant }, rest), icon));
};
var defaultIcon = React.createElement(Add_1.default, null);
CreateButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
};
exports.default = (0, react_1.memo)(CreateButton, function (prevProps, nextProps) {
    return (prevProps.basePath === nextProps.basePath &&
        prevProps.label === nextProps.label &&
        prevProps.translate === nextProps.translate &&
        prevProps.to === nextProps.to &&
        prevProps.disabled === nextProps.disabled);
});
