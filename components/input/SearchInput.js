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
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var material_1 = require("@mui/material");
var core_1 = require("../../core");
var TextInput_1 = __importDefault(require("./TextInput"));
var PREFIX = 'RaSearchInput';
var classes = {
    input: "".concat(PREFIX, "-input"),
};
var StyledTextInput = (0, styles_1.styled)(TextInput_1.default)((_a = {},
    _a["&.".concat(classes.input)] = {
        marginTop: 32,
    },
    _a));
var SearchInput = function (props) {
    var translate = (0, core_1.useTranslate)();
    if (props.label) {
        throw new Error("<SearchInput> isn't designed to be used with a label prop. Use <TextInput> if you need a label.");
    }
    return (React.createElement(StyledTextInput, __assign({ hiddenLabel: true, label: "", resettable: true, placeholder: translate('ra.action.search'), InputProps: {
            endAdornment: (React.createElement(material_1.InputAdornment, { position: "end" },
                React.createElement(Search_1.default, { color: "disabled" }))),
        }, className: classes.input }, props)));
};
exports.default = SearchInput;
