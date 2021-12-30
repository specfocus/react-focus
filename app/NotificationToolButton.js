"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationToolButton = void 0;
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
var react_1 = __importDefault(require("react"));
var TranslatedTooltip_1 = __importDefault(require("../components/TranslatedTooltip"));
var NotificationToolButton = function () { return (react_1.default.createElement(TranslatedTooltip_1.default, { title: "Notifications" },
    react_1.default.createElement(IconButton_1.default, { color: "inherit" },
        react_1.default.createElement(Badge_1.default, { badgeContent: 4, color: "secondary" },
            react_1.default.createElement(Notifications_1.default, null))))); };
exports.NotificationToolButton = NotificationToolButton;
function default_1() {
    return (react_1.default.createElement(exports.NotificationToolButton, null));
}
exports.default = default_1;
