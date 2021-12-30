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
exports.useStyles = exports.panelProps = void 0;
var Container_1 = __importDefault(require("@mui/material/Container"));
var styles_1 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var SpeedDial_1 = __importDefault(require("@mui/lab/SpeedDial"));
var SpeedDialAction_1 = __importDefault(require("@mui/lab/SpeedDialAction"));
var TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
var Step_1 = __importDefault(require("@mui/material/Step"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var TranslatedStepLabel_1 = __importDefault(require("../../components/TranslatedStepLabel"));
var Tabs_1 = __importDefault(require("@mui/material/Tabs"));
var TranslatedTab_1 = __importDefault(require("../../components/TranslatedTab"));
var react_final_form_1 = require("react-final-form");
var ObjectSchema_1 = require("../../lib/ObjectSchema");
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
        key: "panel-".concat(index),
        id: "panel-".concat(index),
        'aria-labelledby': "tab-".concat(index),
    };
}
exports.panelProps = panelProps;
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
    container: {
        flexGrow: 1,
        overflowY: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
        '&[hidden]': {
            display: 'none'
        }
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
    toolbar: {
        display: 'block',
        flexGrow: 0,
        height: theme.spacing(8),
        justifyContent: 'stretch'
    }
}); });
function FormPanel(_a) {
    var activeIndex = _a.activeIndex, activeChange = _a.activeChange, actions = _a.actions, children = _a.children, _b = _a.formProps, renderForm = _b.render, formProps = __rest(_b, ["render"]), Icon = _a.icon, maxWidth = _a.maxWidth, reducer = _a.reducer, sections = _a.sections, subtitle = _a.subtitle, title = _a.title, variant = _a.variant, props = __rest(_a, ["activeIndex", "activeChange", "actions", "children", "formProps", "icon", "maxWidth", "reducer", "sections", "subtitle", "title", "variant"]);
    var classes = (0, exports.useStyles)();
    var _c = (0, react_1.useReducer)(reducer, { index: 0, canNext: true }), state = _c[0], dispatch = _c[1];
    var _d = (0, react_1.useState)(false), openSpeedDial = _d[0], setOpenSpeedDial = _d[1];
    var handleSpeedDialClose = function () {
        setOpenSpeedDial(false);
    };
    var handleSpeedDialOpen = function () {
        setOpenSpeedDial(true);
    };
    // filter here what the end user can see
    var steps = Object.values(sections);
    var handleTabChange = function (event, newValue) {
        activeChange(newValue);
    };
    var Strip = (0, react_1.useCallback)(function () {
        switch (variant) {
            case 'stepper':
                return (react_1.default.createElement(Stepper_1.default, { activeStep: activeIndex, className: classes.stepper }, steps.map(function (_a, index) {
                    var title = _a.title;
                    return (react_1.default.createElement(Step_1.default, __assign({}, tabProps(index)),
                        react_1.default.createElement(TranslatedStepLabel_1.default, null, title)));
                })));
            case 'scroller':
                return (react_1.default.createElement(Stepper_1.default, { activeStep: activeIndex, className: classes.stepper }, steps.map(function (_a, index) {
                    var title = _a.title;
                    return (react_1.default.createElement(Step_1.default, __assign({}, tabProps(index), { onClick: function () { return activeChange(index); } }),
                        react_1.default.createElement(TranslatedStepLabel_1.default, null, title)));
                })));
            case 'tabs':
                return (react_1.default.createElement(Tabs_1.default, __assign({ value: activeIndex, onChange: handleTabChange, "aria-label": "tabs" }, props), steps.map(function (_a, index) {
                    var title = _a.title;
                    return (react_1.default.createElement(TranslatedTab_1.default, __assign({ label: title }, tabProps(index))));
                })));
            default:
                return null;
        }
    }, [classes, activeIndex, variant]);
    var renderContent = function (props) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Toolbar_1.default, { className: classes.toolbar },
                react_1.default.createElement(TranslatedTypography_1.default, { className: classes.title, color: "inherit", component: "h3", i18nKey: title, variant: "h6", noWrap: true }, title),
                react_1.default.createElement(SpeedDial_1.default, { ariaLabel: "SpeedDial example", className: classes.speedDial, FabProps: { className: classes.speedDialFav }, hidden: false, icon: react_1.default.createElement(Icon, { className: classes.icon }), onClose: handleSpeedDialClose, onOpen: handleSpeedDialOpen, open: openSpeedDial, direction: 'down' }, Object.entries(actions).map(function (_a) {
                    var name = _a[0], _b = _a[1], action = _b.action, Icon = _b.icon, label = _b.label;
                    return (react_1.default.createElement(SpeedDialAction_1.default, { key: name, icon: react_1.default.createElement(Icon, null), tooltipTitle: label, onClick: function () { return dispatch(action); } }));
                })),
                react_1.default.createElement(Strip, null)),
            react_1.default.createElement(Container_1.default, { className: classes.container, maxWidth: maxWidth }, renderForm(props))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_final_form_1.Form, __assign({}, formProps, { render: function (props) {
                if (props.values) {
                    return renderContent(__assign(__assign({}, props), { values: Object.assign((0, ObjectSchema_1.flatten)(props.values), { activeIndex: activeIndex }) }));
                }
                return (react_1.default.createElement(react_final_form_1.FormSpy, { subscription: { values: true } }, function (_a) {
                    var values = _a.values;
                    return renderContent(__assign(__assign({}, props), { values: Object.assign((0, ObjectSchema_1.flatten)(values), { activeIndex: activeIndex }) }));
                }));
            } })),
        react_1.Children.toArray(children).map(function (Child, index) { return (react_1.default.createElement(Container_1.default, __assign({ className: classes.container, hidden: state.index !== index + 4, maxWidth: maxWidth }, panelProps(index)), state.index === index + 4 && Child)); })));
}
exports.default = FormPanel;
;
