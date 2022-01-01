"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFilterWidget = exports.DataFilterButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const FilterList_1 = __importDefault(require("@mui/icons-material/FilterList"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const react_1 = require("react");
const TranslatedTooltip_1 = __importDefault(require("../../components/TranslatedTooltip"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const Widget_1 = __importDefault(require("../../containers/Layout/Widget"));
const controller_1 = require("../../core/controller");
const DataFilterButton = (props) => ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Filter" }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, props, { children: (0, jsx_runtime_1.jsx)(FilterList_1.default, {}, void 0) }), void 0) }), "data-filter-button"));
exports.DataFilterButton = DataFilterButton;
const DataFilterWidget = ({ onClose }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'CLOSE':
                onClose();
                break;
        }
        return state;
    };
    const list = (0, controller_1.useListContext)();
    const filterContext = (0, controller_1.useListFilterContext)();
    const { displayedFilters, filterValues, hideFilter, setFilters, showFilter, resource, } = filterContext || list || {};
    (0, react_1.useEffect)(() => {
        if (typeof showFilter === 'function') {
            showFilter('cucu', {});
        }
        return () => {
        };
    }, [showFilter]);
    return ((0, jsx_runtime_1.jsxs)(Widget_1.default, Object.assign({ actions: {
            close: {
                action: { type: 'CLOSE' },
                icon: Close_1.default,
                label: 'Close',
            }
        }, icon: FilterList_1.default, maxWidth: "lg", reducer: reducer, title: "Filter" }, { children: [(0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ component: "h4", variant: "h6" }, { children: "Filter" }), void 0), JSON.stringify({
                displayedFilters,
                filterValues,
                // hideFilter,
                // setFilters,
                // showFilter,
                resource,
                list: Object.keys(list || {})
            }, null, 2)] }), void 0));
};
exports.DataFilterWidget = DataFilterWidget;
function useRowFilter() {
    return {};
}
exports.default = useRowFilter;
