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
var parse_1 = __importDefault(require("autosuggest-highlight/parse"));
var match_1 = __importDefault(require("autosuggest-highlight/match"));
var material_1 = require("@mui/material");
var classnames_1 = __importDefault(require("classnames"));
var PREFIX = 'RaAutocompleteSuggestionItem';
var classes = {
    root: "".concat(PREFIX, "-root"),
    selected: "".concat(PREFIX, "-selected"),
    suggestion: "".concat(PREFIX, "-suggestion"),
    suggestionText: "".concat(PREFIX, "-suggestionText"),
    highlightedSuggestionText: "".concat(PREFIX, "-highlightedSuggestionText"),
};
var StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            fontWeight: 400,
        },
        _b["&.".concat(classes.selected)] = {
            fontWeight: 500,
        },
        _b["& .".concat(classes.suggestion)] = {
            display: 'block',
            fontFamily: theme.typography.fontFamily,
            minHeight: 24,
        },
        _b["& .".concat(classes.suggestionText)] = { fontWeight: 300 },
        _b["& .".concat(classes.highlightedSuggestionText)] = { fontWeight: 500 },
        _b);
});
var AutocompleteSuggestionItem = function (props) {
    var _a;
    var createValue = props.createValue, suggestion = props.suggestion, index = props.index, highlightedIndex = props.highlightedIndex, isSelected = props.isSelected, filterValue = props.filterValue, classesOverride = props.classes, getSuggestionText = props.getSuggestionText, rest = __rest(props, ["createValue", "suggestion", "index", "highlightedIndex", "isSelected", "filterValue", "classes", "getSuggestionText"]);
    var isHighlighted = highlightedIndex === index;
    var suggestionText = 'id' in suggestion && suggestion.id === createValue
        ? suggestion.name
        : getSuggestionText(suggestion);
    var matches;
    var parts;
    if (!(0, react_1.isValidElement)(suggestionText)) {
        matches = (0, match_1.default)(suggestionText, filterValue);
        parts = (0, parse_1.default)(suggestionText, matches);
    }
    return (React.createElement(StyledMenuItem, __assign({ key: suggestionText, selected: isHighlighted, className: (0, classnames_1.default)(classes.root, (_a = {},
            _a[classes.selected] = isSelected,
            _a)) }, rest), (0, react_1.isValidElement)(suggestionText) ? ((0, react_1.cloneElement)(suggestionText, { filterValue: filterValue })) : (React.createElement("div", { className: classes.suggestion }, parts.map(function (part, index) {
        return part.highlight ? (React.createElement("span", { key: index, className: classes.highlightedSuggestionText }, part.text)) : (React.createElement("strong", { key: index, className: classes.suggestionText }, part.text));
    })))));
};
exports.default = AutocompleteSuggestionItem;