"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var AvatarField_1 = __importDefault(require("./AvatarField"));
var PREFIX = 'FullNameField';
var classes = {
    root: "".concat(PREFIX, "-root"),
    avatar: "".concat(PREFIX, "-avatar"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.root)] = {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
        },
        _b["& .".concat(classes.avatar)] = {
            marginRight: theme.spacing(1),
            marginTop: -theme.spacing(0.5),
            marginBottom: -theme.spacing(0.5),
        },
        _b);
});
var FullNameField = function (props) {
    var record = props.record, size = props.size;
    return record ? (React.createElement(Root, { className: classes.root },
        React.createElement(AvatarField_1.default, { className: classes.avatar, record: record, size: size }),
        record.first_name,
        " ",
        record.last_name)) : null;
};
FullNameField.defaultProps = {
    source: 'last_name',
    label: 'resources.customers.fields.name',
};
exports.default = (0, react_1.memo)(FullNameField);
