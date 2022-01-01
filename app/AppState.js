"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWidgetValue = exports.useWidgetState = exports.useThemetValue = exports.useThemetState = exports.useSidebarValue = exports.useSidebarState = exports.useSetWidgetState = exports.useSetThemeState = exports.useSetSidebarState = exports.atomWidget = exports.atomTheme = exports.atomSidebar = void 0;
const recoil_1 = require("recoil");
const isNight = (time) => time.getHours() > 18 || time.getHours() < 6;
// Sidebar collapsed/expanded state
exports.atomSidebar = (0, recoil_1.atom)({
    key: 'atomSidebar',
    default: 'expanded', // default value (aka initial value)
});
// Active theme
exports.atomTheme = (0, recoil_1.atom)({
    key: 'atomTheme',
    default: isNight(new Date()) ? 'dark' : 'light', // default value (aka initial value)
});
// Active widget if any
exports.atomWidget = (0, recoil_1.atom)({
    key: 'atomWidget',
    default: undefined, // default value (aka initial value)
});
const useSetSidebarState = () => (0, recoil_1.useSetRecoilState)(exports.atomSidebar);
exports.useSetSidebarState = useSetSidebarState;
const useSetThemeState = () => (0, recoil_1.useSetRecoilState)(exports.atomTheme);
exports.useSetThemeState = useSetThemeState;
const useSetWidgetState = () => (0, recoil_1.useSetRecoilState)(exports.atomWidget);
exports.useSetWidgetState = useSetWidgetState;
const useSidebarState = () => (0, recoil_1.useRecoilState)(exports.atomSidebar);
exports.useSidebarState = useSidebarState;
const useSidebarValue = () => (0, recoil_1.useRecoilValue)(exports.atomSidebar);
exports.useSidebarValue = useSidebarValue;
const useThemetState = () => (0, recoil_1.useRecoilState)(exports.atomTheme);
exports.useThemetState = useThemetState;
const useThemetValue = () => (0, recoil_1.useRecoilValue)(exports.atomTheme);
exports.useThemetValue = useThemetValue;
const useWidgetState = () => (0, recoil_1.useRecoilState)(exports.atomWidget);
exports.useWidgetState = useWidgetState;
const useWidgetValue = () => (0, recoil_1.useRecoilValue)(exports.atomWidget);
exports.useWidgetValue = useWidgetValue;
