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
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var AppStack_1 = require("./AppStack");
var AppState_1 = require("./AppState");
var WidgetDrawer = function () {
    var active = (0, recoil_1.useRecoilValue)(AppState_1.appWidget);
    var handleClose = (0, recoil_1.useResetRecoilState)(AppState_1.appWidget);
    var stack = (0, recoil_1.useRecoilValue)(AppStack_1.appStack);
    var Widget = (0, react_1.useMemo)(function () {
        var widget = function () { return (react_1.default.createElement("div", null)); };
        if (active) {
            for (var _i = 0, _a = Object.values(stack); _i < _a.length; _i++) {
                var frame = _a[_i];
                var val = (frame === null || frame === void 0 ? void 0 : frame.widgets) && frame.widgets[active];
                if (typeof val === 'function') {
                    widget = val;
                    break;
                }
            }
        }
        return widget;
    }, [active, stack]);
    return (react_1.default.createElement(Drawer_1.default, { anchor: "right", open: Boolean(active), onClose: handleClose, sx: { overflowY: 'hidden' } },
        react_1.default.createElement(Widget, { onClose: handleClose })));
};
exports.default = WidgetDrawer;
