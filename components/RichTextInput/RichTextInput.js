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
var debounce_1 = __importDefault(require("lodash/debounce"));
var react_1 = __importStar(require("react"));
var quill_1 = __importDefault(require("quill"));
var core_1 = require("../../core");
var __1 = require("..");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var styles_2 = __importDefault(require("./styles"));
var useStyles = (0, styles_1.makeStyles)(styles_2.default, { name: 'RaRichTextInput' });
var RichTextInput = function (props) {
    var _a = props.options, options = _a === void 0 ? {} : _a, // Quill editor options
    _b = props.toolbar, // Quill editor options
    toolbar = _b === void 0 ? true : _b, _c = props.fullWidth, fullWidth = _c === void 0 ? true : _c, classesOverride = props.classes, configureQuill = props.configureQuill, helperText = props.helperText, label = props.label, source = props.source, resource = props.resource, variant = props.variant, _d = props.margin, margin = _d === void 0 ? 'dense' : _d, rest = __rest(props, ["options", "toolbar", "fullWidth", "classes", "configureQuill", "helperText", "label", "source", "resource", "variant", "margin"]);
    var classes = useStyles(props);
    var quillInstance = (0, react_1.useRef)();
    var divRef = (0, react_1.useRef)();
    var editor = (0, react_1.useRef)();
    var _e = (0, core_1.useInput)(__assign({ source: source }, rest)), id = _e.id, isRequired = _e.isRequired, _f = _e.input, value = _f.value, onChange = _f.onChange, _g = _e.meta, touched = _g.touched, error = _g.error;
    var lastValueChange = (0, react_1.useRef)(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var onTextChange = (0, react_1.useCallback)((0, debounce_1.default)(function () {
        var value = editor.current.innerHTML === '<p><br></p>'
            ? ''
            : editor.current.innerHTML;
        if (lastValueChange.current !== value) {
            lastValueChange.current = value;
            onChange(value);
        }
    }, 500), [onChange]);
    (0, react_1.useEffect)(function () {
        quillInstance.current = new quill_1.default(divRef.current, __assign({ modules: { toolbar: toolbar, clipboard: { matchVisual: false } }, theme: 'snow' }, options));
        if (configureQuill) {
            configureQuill(quillInstance.current);
        }
        quillInstance.current.setContents(quillInstance.current.clipboard.convert(value));
        editor.current = divRef.current.querySelector('.ql-editor');
        quillInstance.current.on('text-change', onTextChange);
        return function () {
            quillInstance.current.off('text-change', onTextChange);
            if (onTextChange.cancel) {
                onTextChange.cancel();
            }
            quillInstance.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, react_1.useEffect)(function () {
        if (lastValueChange.current !== value) {
            var selection = quillInstance.current.getSelection();
            quillInstance.current.setContents(quillInstance.current.clipboard.convert(value));
            if (selection && quillInstance.current.hasFocus()) {
                quillInstance.current.setSelection(selection);
            }
        }
    }, [value]);
    return (react_1.default.createElement(material_1.FormControl, { error: !!(touched && error), fullWidth: fullWidth, className: "ra-rich-text-input", margin: margin },
        react_1.default.createElement(material_1.InputLabel, { shrink: true, htmlFor: id, className: classes.label },
            react_1.default.createElement(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
        react_1.default.createElement("div", { "data-testid": "quill", ref: divRef, className: variant }),
        react_1.default.createElement(material_1.FormHelperText, { error: !!error, className: !!error ? 'ra-rich-text-input-error' : '' },
            react_1.default.createElement(__1.InputHelperText, { error: error, helperText: helperText, touched: touched }))));
};
RichTextInput.propTypes = {
    // @ts-ignore
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    source: prop_types_1.default.string,
    fullWidth: prop_types_1.default.bool,
    configureQuill: prop_types_1.default.func,
};
exports.default = RichTextInput;
