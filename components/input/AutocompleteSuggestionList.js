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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var classnames_1 = __importDefault(require("classnames"));
var material_1 = require("@mui/material");
var PREFIX = 'RaAutocompleteSuggestionList';
var classes = {
    suggestionsContainer: "".concat(PREFIX, "-suggestionsContainer"),
    suggestionsPaper: "".concat(PREFIX, "-suggestionsPaper"),
};
var StyledPopper = (0, styles_1.styled)(material_1.Popper)((_a = {},
    _a["&.".concat(classes.suggestionsContainer)] = {
        zIndex: 2,
    },
    _a["& .".concat(classes.suggestionsPaper)] = {
        maxHeight: '50vh',
        overflowY: 'auto',
    },
    _a));
var PopperModifiers = [];
var AutocompleteSuggestionList = function (props) {
    var children = props.children, className = props.className, isOpen = props.isOpen, menuProps = props.menuProps, inputEl = props.inputEl, suggestionsContainerProps = props.suggestionsContainerProps;
    return (React.createElement(StyledPopper, __assign({ open: isOpen, anchorEl: inputEl, className: (0, classnames_1.default)(classes.suggestionsContainer, className), modifiers: PopperModifiers }, suggestionsContainerProps),
        React.createElement("div", __assign({}, (isOpen ? menuProps : {})),
            React.createElement(material_1.Paper, { square: true, style: {
                    marginTop: 8,
                    minWidth: inputEl ? inputEl.clientWidth : null,
                }, className: classes.suggestionsPaper }, children))));
};
exports.default = AutocompleteSuggestionList;
