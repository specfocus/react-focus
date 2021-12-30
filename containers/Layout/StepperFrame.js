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
exports.useStyles = exports.STEPPER_NEXT = exports.STEPPER_BACK = void 0;
var Box_1 = __importDefault(require("@mui/material/Box"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var Step_1 = __importDefault(require("@mui/material/Step"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var styles_1 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var TranslatedButton_1 = __importDefault(require("../../components/TranslatedButton"));
var TranslatedStepLabel_1 = __importDefault(require("../../components/TranslatedStepLabel"));
var Copyright_1 = __importDefault(require("./Copyright"));
var Frame_1 = __importDefault(require("./Frame"));
exports.STEPPER_BACK = 'STEPPER_BACK';
exports.STEPPER_NEXT = 'STEPPER_NEXT';
function stepProps(index) {
    return {
        key: "step-".concat(index),
        id: "step-".concat(index),
        'aria-controls': "steppanel-".concat(index),
    };
}
function panelProps(index) {
    return {
        role: 'steppanel',
        key: "steppanel-".concat(index),
        id: "steppanel-".concat(index),
        'aria-labelledby': "step-".concat(index),
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
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    }
}); });
function StepperFrame(_a) {
    var children = _a.children, maxWidth = _a.maxWidth, reducer = _a.reducer, sections = _a.sections, props = __rest(_a, ["children", "maxWidth", "reducer", "sections"]);
    var classes = (0, exports.useStyles)();
    var stepperReducer = (0, react_1.useCallback)(function (state, action) {
        var type = action.type, values = __rest(action, ["type"]);
        switch (type) {
            case exports.STEPPER_BACK:
                if (!!state.canBack) {
                    return __assign(__assign({}, state), { activeStep: state.activeStep - 1 });
                }
                break;
            case exports.STEPPER_NEXT:
                if (!!state.canNext) {
                    return __assign(__assign({}, state), { activeStep: state.activeStep + 1 });
                }
                break;
            default:
                return state;
        }
        return state;
    }, [reducer]);
    var _b = (0, react_1.useReducer)(stepperReducer, { activeStep: 0, canNext: true }), state = _b[0], dispatch = _b[1];
    var activeStep = state.activeStep, canBack = state.canBack, canNext = state.canNext;
    // useEffect(() => { setTimeout(() => setActiveStep(0), 500); }, [setActiveStep]);
    var handleBack = (0, react_1.useCallback)(function () {
        if (canBack) {
            dispatch({ type: exports.STEPPER_BACK });
        }
    }, [dispatch]);
    var handleNext = (0, react_1.useCallback)(function () {
        if (canNext) {
            dispatch({ type: exports.STEPPER_NEXT });
        }
    }, [dispatch]);
    // filter here what the end user can see
    var steps = Object.values(sections);
    return (react_1.default.createElement(Frame_1.default, __assign({}, props),
        react_1.default.createElement(Container_1.default, { className: classes.header, maxWidth: maxWidth },
            react_1.default.createElement(Stepper_1.default, { activeStep: activeStep, className: classes.stepper }, steps.map(function (_a, index) {
                var title = _a.title;
                return (react_1.default.createElement(Step_1.default, __assign({}, stepProps(index)),
                    react_1.default.createElement(TranslatedStepLabel_1.default, null, title)));
            }))),
        react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(Container_1.default, { className: classes.content, maxWidth: maxWidth },
                react_1.Children.toArray(children).map(function (Child, index) { return (react_1.default.createElement("div", __assign({ hidden: activeStep !== index }, panelProps(index)), activeStep === index && Child)); }),
                react_1.default.createElement("div", { className: classes.buttons },
                    activeStep !== 0 && (react_1.default.createElement(TranslatedButton_1.default, { disabled: !canBack, onClick: handleBack, className: classes.button }, "Back")),
                    react_1.default.createElement(TranslatedButton_1.default, { disabled: !canNext, variant: "contained", color: "primary", onClick: handleNext, className: classes.button }, activeStep === steps.length - 1 ? 'Place order' : 'Next')),
                react_1.default.createElement(Box_1.default, { pt: 4 },
                    react_1.default.createElement(Copyright_1.default, null))))));
}
exports.default = StepperFrame;
