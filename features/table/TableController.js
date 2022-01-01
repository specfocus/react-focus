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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const recoil_1 = require("recoil");
const AppStack_1 = require("../../app/AppStack");
const AppState_1 = require("../../app/AppState");
const FilterWidget_1 = __importStar(require("./FilterWidget"));
const SortOrderWidget_1 = require("./SortOrderWidget");
const AsideColumns_1 = require("./AsideColumns");
const RowDensityMenu_1 = __importStar(require("./RowDensityMenu"));
const AsideExport_1 = require("./AsideExport");
const TABLE_CONTROLLER = 'TABLE_CONTROLLER';
const TableController = () => {
    const appFrameStack = (0, AppStack_1.useAppStack)();
    const [widget, setWidget] = (0, recoil_1.useRecoilState)(AppState_1.atomWidget);
    const { rowDensity, rowDensityAnchorEl, rowDensityChange, rowDensityClick, rowDensityOpen, rowDensityToggle } = (0, RowDensityMenu_1.default)();
    const {} = (0, FilterWidget_1.default)();
    const density = (0, react_1.useCallback)(() => ((0, jsx_runtime_1.jsx)(RowDensityMenu_1.RowDensityButton, { toggle: rowDensityClick, value: rowDensity }, void 0)), [rowDensity, rowDensityClick]);
    (0, react_1.useEffect)(() => {
        appFrameStack.push(TABLE_CONTROLLER, {
            tools: Object.values({
            // columns: () => <ToolColumnsButton disabled={widget === 'columns'} onClick={() => setWidget('columns')} />,
            // density,
            // filter: () => <DataFilterButton disabled={widget === 'filter'} onClick={() => setWidget('filter')} />,
            // sort: () => <DataSortOrderButton disabled={widget === 'sort'} onClick={() => setWidget('sort')} />,
            // export: () => <DataExportButton disabled={widget === 'export'} onClick={() => setWidget('export')} />
            }),
            widgets: {
                columns: AsideColumns_1.AsideColumns,
                filter: FilterWidget_1.DataFilterWidget,
                sort: SortOrderWidget_1.DataSortOrderWidget,
                export: AsideExport_1.DataExportWidget
            }
        });
        return () => { appFrameStack.pop(TABLE_CONTROLLER); };
    }, [appFrameStack]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: rowDensityAnchorEl && ((0, jsx_runtime_1.jsx)(RowDensityMenu_1.RowDensityMenu, { anchorEl: rowDensityAnchorEl, change: rowDensityChange, close: rowDensityToggle, open: rowDensityOpen, value: rowDensity }, void 0)) }, void 0));
};
exports.default = TableController;
