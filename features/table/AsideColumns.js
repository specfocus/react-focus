"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsideColumns = exports.ToolColumnsButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const ViewColumn_1 = __importDefault(require("@mui/icons-material/ViewColumn"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const Widget_1 = __importDefault(require("../../containers/Layout/Widget"));
const ToolColumnsButton = (props) => ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Column Selection" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, props, { children: (0, jsx_runtime_1.jsx)(ViewColumn_1.default, {}, void 0) }), void 0) }), "table-column-selection-button"));
exports.ToolColumnsButton = ToolColumnsButton;
const AsideColumns = ({ onClose }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'CLOSE':
                onClose();
                break;
        }
        return state;
    };
    return ((0, jsx_runtime_1.jsx)(Widget_1.default, Object.assign({ actions: {
            close: {
                action: { type: 'CLOSE' },
                icon: Close_1.default,
                label: 'Close',
            }
        }, icon: ViewColumn_1.default, maxWidth: "lg", reducer: reducer, title: "Column Selection" }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ component: "h4", variant: "h6" }, { children: "Column Selection" }), void 0) }), void 0));
};
exports.AsideColumns = AsideColumns;
function useColumnSelection() {
    return {};
}
exports.default = useColumnSelection;
