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
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var react_dropzone_1 = require("react-dropzone");
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("../../core");
var Labeled_1 = __importDefault(require("./Labeled"));
var FileInputPreview_1 = __importDefault(require("./FileInputPreview"));
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var PREFIX = 'RaFileInput';
var classes = {
    dropZone: "".concat(PREFIX, "-dropZone"),
    preview: "".concat(PREFIX, "-preview"),
    removeButton: "".concat(PREFIX, "-removeButton"),
    root: "".concat(PREFIX, "-root"),
};
var StyledLabeled = (0, styles_1.styled)(Labeled_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.dropZone)] = {
            background: theme.palette.background.default,
            cursor: 'pointer',
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.getContrastText(theme.palette.background.default),
        },
        _b["& .".concat(classes.preview)] = {},
        _b["& .".concat(classes.removeButton)] = {},
        _b["&.".concat(classes.root)] = { width: '100%' },
        _b);
});
var FileInput = function (props) {
    var accept = props.accept, children = props.children, className = props.className, format = props.format, helperText = props.helperText, label = props.label, _a = props.labelMultiple, labelMultiple = _a === void 0 ? 'ra.input.file.upload_several' : _a, _b = props.labelSingle, labelSingle = _b === void 0 ? 'ra.input.file.upload_single' : _b, maxSize = props.maxSize, minSize = props.minSize, _c = props.multiple, multiple = _c === void 0 ? false : _c, _d = props.options, _e = _d === void 0 ? {} : _d, inputPropsOptions = _e.inputProps, options = __rest(_e, ["inputProps"]), parse = props.parse, placeholder = props.placeholder, resource = props.resource, source = props.source, validate = props.validate, rest = __rest(props, ["accept", "children", "className", "format", "helperText", "label", "labelMultiple", "labelSingle", "maxSize", "minSize", "multiple", "options", "parse", "placeholder", "resource", "source", "validate"]);
    var translate = (0, core_1.useTranslate)();
    // turn a browser dropped file structure into expected structure
    var transformFile = function (file) {
        var _a;
        if (!(file instanceof File)) {
            return file;
        }
        var _b = react_1.Children.only(children).props, source = _b.source, title = _b.title;
        var preview = URL.createObjectURL(file);
        var transformedFile = (_a = {
                rawFile: file
            },
            _a[source] = preview,
            _a);
        if (title) {
            transformedFile[title] = file.name;
        }
        return transformedFile;
    };
    var transformFiles = function (files) {
        if (!files) {
            return multiple ? [] : null;
        }
        if (Array.isArray(files)) {
            return files.map(transformFile);
        }
        return transformFile(files);
    };
    var _f = (0, core_1.useInput)(__assign({ format: format || transformFiles, parse: parse || transformFiles, source: source, type: 'file', validate: validate }, rest)), id = _f.id, _g = _f.input, onChange = _g.onChange, value = _g.value, inputProps = __rest(_g, ["onChange", "value"]), meta = _f.meta, isRequired = _f.isRequired;
    var touched = meta.touched, error = meta.error, submitError = meta.submitError;
    var files = value ? (Array.isArray(value) ? value : [value]) : [];
    var onDrop = function (newFiles, rejectedFiles, event) {
        var updatedFiles = multiple ? __spreadArray(__spreadArray([], files, true), newFiles, true) : __spreadArray([], newFiles, true);
        if (multiple) {
            onChange(updatedFiles);
        }
        else {
            onChange(updatedFiles[0]);
        }
        if (options.onDrop) {
            options.onDrop(newFiles, rejectedFiles, event);
        }
    };
    var onRemove = function (file) { return function () {
        if (multiple) {
            var filteredFiles = files.filter(function (stateFile) { return !(0, react_redux_1.shallowEqual)(stateFile, file); });
            onChange(filteredFiles);
        }
        else {
            onChange(null);
        }
        if (options.onRemove) {
            options.onRemove(file);
        }
    }; };
    var childrenElement = children && (0, react_1.isValidElement)(react_1.Children.only(children))
        ? react_1.Children.only(children)
        : undefined;
    var _h = (0, react_dropzone_1.useDropzone)(__assign(__assign({}, options), { accept: accept, maxSize: maxSize, minSize: minSize, multiple: multiple, onDrop: onDrop })), getRootProps = _h.getRootProps, getInputProps = _h.getInputProps;
    return (react_1.default.createElement(StyledLabeled, __assign({ id: id, label: label, className: (0, classnames_1.default)(classes.root, className), source: source, resource: resource, isRequired: isRequired, meta: meta }, (0, sanitizeInputRestProps_1.default)(rest)),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", __assign({ "data-testid": "dropzone", className: classes.dropZone }, getRootProps()),
                react_1.default.createElement("input", __assign({ id: id }, getInputProps(__assign(__assign({}, inputProps), inputPropsOptions)))),
                placeholder ? (placeholder) : multiple ? (react_1.default.createElement("p", null, translate(labelMultiple))) : (react_1.default.createElement("p", null, translate(labelSingle)))),
            react_1.default.createElement(FormHelperText_1.default, null,
                react_1.default.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText })),
            children && (react_1.default.createElement("div", { className: "previews" }, files.map(function (file, index) { return (react_1.default.createElement(FileInputPreview_1.default, { key: index, file: file, onRemove: onRemove(file), className: classes.removeButton }, (0, react_1.cloneElement)(childrenElement, {
                record: file,
                className: classes.preview,
            }))); }))))));
};
FileInput.propTypes = {
    accept: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    id: prop_types_1.default.string,
    isRequired: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    labelMultiple: prop_types_1.default.string,
    labelSingle: prop_types_1.default.string,
    maxSize: prop_types_1.default.number,
    minSize: prop_types_1.default.number,
    multiple: prop_types_1.default.bool,
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    placeholder: prop_types_1.default.node,
};
exports.default = FileInput;