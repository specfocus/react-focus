"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const app_1 = require("../../app");
const data_1 = __importDefault(require("../segments/data"));
const StyledSelectInput = (0, styles_1.styled)(app_1.SelectInput)({
    '&': { width: 150 },
});
const SegmentInput = (props) => {
    const translate = (0, app_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(StyledSelectInput, Object.assign({}, props, { choices: data_1.default.map(segment => ({
            id: segment.id,
            name: translate(segment.name),
        })) }), void 0));
};
SegmentInput.defaultProps = {
    source: 'groups',
};
exports.default = SegmentInput;
