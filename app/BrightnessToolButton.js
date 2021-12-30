"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrightnessToolButton = void 0;
var Brightness4_1 = __importDefault(require("@mui/icons-material/Brightness4"));
var Brightness7_1 = __importDefault(require("@mui/icons-material/Brightness7"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var react_1 = __importDefault(require("react"));
var recoil_1 = require("recoil");
var TranslatedTooltip_1 = __importDefault(require("../components/TranslatedTooltip"));
var AppState_1 = require("./AppState");
var BrightnessToolButton = function (_a) {
    var toggle = _a.toggle, value = _a.value;
    return (react_1.default.createElement(TranslatedTooltip_1.default, { title: "Brightness" },
        react_1.default.createElement(IconButton_1.default, { color: "inherit", onClick: toggle },
            value === 'dark' && (react_1.default.createElement(Brightness7_1.default, null)),
            value !== 'dark' && (react_1.default.createElement(Brightness4_1.default, null)))));
};
exports.BrightnessToolButton = BrightnessToolButton;
function default_1() {
    var _a = (0, recoil_1.useRecoilState)(AppState_1.appTheme), theme = _a[0], setTheme = _a[1];
    var toggleTheme = function () { return setTheme(theme === 'dark' ? 'light' : 'dark'); };
    return (react_1.default.createElement(exports.BrightnessToolButton, { key: "app-brightness-button", toggle: toggleTheme, value: theme }));
}
exports.default = default_1;
