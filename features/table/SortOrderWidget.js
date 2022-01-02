"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSortOrderWidget = exports.DataSortOrderButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const Sort_1 = __importDefault(require("@mui/icons-material/Sort"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const Widget_1 = __importDefault(require("../../containers/Layout/Widget"));
const core_1 = require("../core");
const DataSortOrderButton = (props) => ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Sort" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, props, { children: (0, jsx_runtime_1.jsx)(Sort_1.default, {}, void 0) }), void 0) }), "data-sort-order-button"));
exports.DataSortOrderButton = DataSortOrderButton;
const DataSortOrderWidget = ({ onClose }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'CLOSE':
                onClose();
                break;
        }
        return state;
    };
    const {} = (0, core_1.useListSortContext)();
    return ((0, jsx_runtime_1.jsx)(Widget_1.default, Object.assign({ actions: {
            close: {
                action: { type: 'CLOSE' },
                icon: Close_1.default,
                label: 'Close',
            }
        }, icon: Sort_1.default, maxWidth: "lg", reducer: reducer, title: "Sort Order" }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ component: "h4", variant: "h6" }, { children: "Sort Order" }), void 0) }), void 0));
};
exports.DataSortOrderWidget = DataSortOrderWidget;
function useDataSortSort() {
    return {};
}
exports.default = useDataSortSort;
