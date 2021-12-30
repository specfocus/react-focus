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
exports.useStyles = exports.PATCH = exports.FOREWARD = exports.BACKWARD = void 0;
var SpeedDial_1 = __importDefault(require("@mui/lab/SpeedDial"));
var SpeedDialAction_1 = __importDefault(require("@mui/lab/SpeedDialAction"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Step_1 = __importDefault(require("@mui/material/Step"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var Tabs_1 = __importDefault(require("@mui/material/Tabs"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var styles_1 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var TranslatedStepLabel_1 = __importDefault(require("../../components/TranslatedStepLabel"));
var TranslatedTab_1 = __importDefault(require("../../components/TranslatedTab"));
var TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
exports.BACKWARD = 'BACKWARD';
exports.FOREWARD = 'FOREWARD';
exports.PATCH = 'NAV_TO';
function tabProps(index) {
    return {
        key: "tab-".concat(index),
        id: "tab-".concat(index),
        'aria-controls': "tabpanel-".concat(index),
    };
}
function panelProps(index) {
    return {
        role: 'tabpanel',
        key: "tabpanel-".concat(index),
        id: "tabpanel-".concat(index),
        'aria-labelledby': "tab-".concat(index),
    };
}
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    divider: {
        margin: theme.spacing(4, 0, 2, 0)
    },
    header: {
        display: 'block',
        justifyContent: 'stretch',
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
    },
    icon: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    },
    speedDial: {
        position: 'fixed',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(.5),
            right: theme.spacing(.5),
        },
    },
    speedDialFav: {
        opacity: .5,
        transition: 'opacity .5s ease-out',
        /*
        '-moz-transition': 'opacity .5s ease-out',
        '-webkit-transition': 'opacity .5s ease-out',
        '-o-transition': 'opacity .5s ease-out',
        `*/
        '&[aria-expanded=true]': {
            opacity: 1
        },
    },
    stepper: {
        padding: theme.spacing(1, 0, 0),
    },
    strip: {
        flexGrow: 1,
        margin: 0,
        padding: 0
    },
    title: {
        flexGrow: 0,
        textAlign: 'center'
    },
    toolbar: {}
}); });
function Widget(_a) {
    var actions = _a.actions, children = _a.children, Icon = _a.icon, maxWidth = _a.maxWidth, reducer = _a.reducer, sections = _a.sections, subtitle = _a.subtitle, title = _a.title, variant = _a.variant, props = __rest(_a, ["actions", "children", "icon", "maxWidth", "reducer", "sections", "subtitle", "title", "variant"]);
    var classes = (0, exports.useStyles)();
    var _b = (0, react_1.useState)(false), openSpeedDial = _b[0], setOpenSpeedDial = _b[1];
    var handleSpeedDialClose = function () {
        setOpenSpeedDial(false);
    };
    var handleSpeedDialOpen = function () {
        setOpenSpeedDial(true);
    };
    var widgetReducer = (0, react_1.useCallback)(function (state, action) {
        if (reducer) {
            var next = reducer(state, action);
            if (next !== state) {
                return next;
            }
        }
        var type = action.type, values = __rest(action, ["type"]);
        switch (type) {
            case exports.BACKWARD:
                if (!!state.canBack) {
                    return __assign(__assign({}, state), { index: state.index - 1 });
                }
                break;
            case exports.FOREWARD:
                if (!!state.canNext) {
                    return __assign(__assign({}, state), { index: state.index + 1 });
                }
                break;
            case exports.PATCH:
                return __assign(__assign({}, state), values);
            default:
                return state;
        }
        return state;
    }, [reducer]);
    // filter here what the end user can see
    var steps = Object.values(sections);
    var _c = (0, react_1.useReducer)(widgetReducer, { index: 0, canNext: true }), state = _c[0], dispatch = _c[1];
    var handleTabChange = function (event, newValue) {
        console.log('tab', newValue);
        dispatch({ type: exports.PATCH, index: newValue });
    };
    var Strip = (0, react_1.useCallback)(function () {
        switch (variant) {
            case 'stepper':
                return (react_1.default.createElement(Stepper_1.default, { activeStep: state.index, className: classes.stepper }, steps.map(function (_a, index) {
                    var title = _a.title;
                    return (react_1.default.createElement(Step_1.default, __assign({}, tabProps(index)),
                        react_1.default.createElement(TranslatedStepLabel_1.default, null, title)));
                })));
            case 'scroller':
                return (react_1.default.createElement(Stepper_1.default, { activeStep: state.index, className: classes.stepper }, steps.map(function (_a, index) {
                    var title = _a.title;
                    return (react_1.default.createElement(Step_1.default, __assign({}, tabProps(index)),
                        react_1.default.createElement(TranslatedStepLabel_1.default, null, title)));
                })));
            case 'tabs':
                return (react_1.default.createElement(Tabs_1.default, __assign({ value: state.index, onChange: handleTabChange, "aria-label": "tabs" }, props), steps.map(function (_a, index) {
                    var title = _a.title;
                    return (react_1.default.createElement(TranslatedTab_1.default, __assign({ label: title }, tabProps(index))));
                })));
            default:
                return null;
        }
    }, [classes, state, variant]);
    var handleBack = function () { dispatch({ type: exports.BACKWARD }); };
    var handleNext = function () { dispatch({ type: exports.FOREWARD }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Toolbar_1.default, { className: classes.header },
            react_1.default.createElement(TranslatedTypography_1.default, { className: classes.title, color: "inherit", component: "h3", i18nKey: title, variant: "h6", noWrap: true }, title),
            react_1.default.createElement(SpeedDial_1.default, { ariaLabel: "SpeedDial example", className: classes.speedDial, FabProps: { className: classes.speedDialFav }, hidden: false, icon: react_1.default.createElement(Icon, { className: classes.icon }), onClose: handleSpeedDialClose, onOpen: handleSpeedDialOpen, open: openSpeedDial, direction: 'down' }, Object.entries(actions).map(function (_a) {
                var name = _a[0], _b = _a[1], action = _b.action, Icon = _b.icon, label = _b.label;
                return (react_1.default.createElement(SpeedDialAction_1.default, { key: name, icon: react_1.default.createElement(Icon, null), title: label, onClick: function () { return dispatch(action); } }));
            })),
            react_1.default.createElement(Strip, null)),
        !variant || variant === 'scroller' ? (react_1.default.createElement(Container_1.default, { className: classes.container, maxWidth: maxWidth }, react_1.Children.toArray(children).map(function (Child, index) { return (react_1.default.createElement(react_1.default.Fragment, null,
            index > 0 && (react_1.default.createElement(Divider_1.default, { className: classes.divider })),
            Child)); }))) : (react_1.default.createElement(react_1.default.Fragment, null, react_1.Children.toArray(children).map(function (Child, index) { return (react_1.default.createElement(Container_1.default, __assign({ className: classes.container, hidden: state.index !== index, maxWidth: maxWidth }, panelProps(index)), state.index === index && Child)); })))));
}
exports.default = Widget;
