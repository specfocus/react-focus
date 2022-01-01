"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataExportWidget = exports.DataExportButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const Export_1 = __importDefault(require("../../icons/Export"));
const Widget_1 = __importDefault(require("../../containers/Layout/Widget"));
const DataExportButton = (props) => ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Export" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, props, { children: (0, jsx_runtime_1.jsx)(Export_1.default, {}, void 0) }), void 0) }), "data-export-button"));
exports.DataExportButton = DataExportButton;
const DataExportWidget = ({ onClose }) => {
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
        }, icon: Export_1.default, maxWidth: "lg", reducer: reducer, title: "Export" }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ component: "h4", variant: "h6" }, { children: "Export" }), void 0) }), void 0));
};
exports.DataExportWidget = DataExportWidget;
function useDataExport() {
    return {};
}
exports.default = useDataExport;
