"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var Box_1 = __importDefault(require("@mui/material/Box"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var styles_1 = require("@mui/styles");
var Tabs_1 = __importDefault(require("@mui/material/Tabs"));
var react_1 = __importStar(require("react"));
var TranslatedTab_1 = __importDefault(require("../../components/TranslatedTab"));
var Copyright_1 = __importDefault(require("./Copyright"));
var Frame_1 = __importDefault(require("./Frame"));
function tabProps(index) {
    return {
        key: "tab-".concat(index),
        id: "tab-".concat(index),
        'aria-controls': "tabpanel-".concat(index),
    };
}
function tabpanelProps(index) {
    return {
        role: 'tabpanel',
        key: "tabpanel-".concat(index),
        id: "tabpanel-".concat(index),
        'aria-labelledby': "tab-".concat(index),
    };
}
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    header: {
        height: theme.spacing(6),
        marginBottom: 0
    },
    content: {
        marginTop: 0
    },
    container: {
        display: 'block',
        height: "calc(100% - ".concat(theme.spacing(6), "px)"),
        overflowY: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    }
}); });
function TabsFrame(_a) {
    var children = _a.children, maxWidth = _a.maxWidth, sections = _a.sections, props = __rest(_a, ["children", "maxWidth", "sections"]);
    var classes = (0, exports.useStyles)();
    var _b = react_1.default.useState(-1), tab = _b[0], setTab = _b[1];
    (0, react_1.useEffect)(function () { setTimeout(function () { return setTab(0); }, 500); }, [setTab]);
    var handleTabChange = function (event, newValue) {
        setTab(newValue);
    };
    // filter here what the end user can see
    var view = Object.values(sections);
    return (react_1.default.createElement(Frame_1.default, __assign({}, props),
        react_1.default.createElement(Container_1.default, { className: classes.header, maxWidth: maxWidth },
            react_1.default.createElement(Tabs_1.default, { value: tab, onChange: handleTabChange, "aria-label": "tabs" }, view.map(function (_a, index) {
                var title = _a.title;
                return (react_1.default.createElement(TranslatedTab_1.default, __assign({ label: title }, tabProps(index))));
            }))),
        react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(Container_1.default, { className: classes.content, maxWidth: maxWidth },
                react_1.Children.toArray(children).map(function (Child, index) { return (react_1.default.createElement("div", __assign({ hidden: tab !== index }, tabpanelProps(index)), tab === index && Child)); }),
                react_1.default.createElement(Box_1.default, { pt: 4 },
                    react_1.default.createElement(Copyright_1.default, null))))));
}
exports.default = TabsFrame;
