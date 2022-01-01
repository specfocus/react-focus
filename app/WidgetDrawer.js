"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const react_1 = require("react");
const recoil_1 = require("recoil");
const AppStack_1 = require("./AppStack");
const AppState_1 = require("./AppState");
const WidgetDrawer = () => {
    const active = (0, recoil_1.useRecoilValue)(AppState_1.atomWidget);
    const handleClose = (0, recoil_1.useResetRecoilState)(AppState_1.atomWidget);
    const stack = (0, recoil_1.useRecoilValue)(AppStack_1.appStack);
    const Widget = (0, react_1.useMemo)(() => {
        let widget = () => ((0, jsx_runtime_1.jsx)("div", {}, void 0));
        if (active) {
            for (const frame of Object.values(stack)) {
                const val = (frame === null || frame === void 0 ? void 0 : frame.widgets) && frame.widgets[active];
                if (typeof val === 'function') {
                    widget = val;
                    break;
                }
            }
        }
        return widget;
    }, [active, stack]);
    return ((0, jsx_runtime_1.jsx)(Drawer_1.default, Object.assign({ anchor: "right", open: Boolean(active), onClose: handleClose, sx: { overflowY: 'hidden' } }, { children: (0, jsx_runtime_1.jsx)(Widget, { onClose: handleClose }, void 0) }), void 0));
};
exports.default = WidgetDrawer;
