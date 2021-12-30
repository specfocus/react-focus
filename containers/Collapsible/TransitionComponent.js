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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var react_spring_1 = require("react-spring");
function TransitionComponent(props) {
    var style = (0, react_spring_1.useSpring)({
        from: {
            opacity: 0,
            transform: 'translate3d(20px,0,0)',
        },
        to: {
            opacity: props.in ? 1 : 0,
            transform: "translate3d(".concat(props.in ? 0 : 20, "px,0,0)"),
        },
    });
    return (react_1.default.createElement(react_spring_1.animated.div, { style: style },
        react_1.default.createElement(Collapse_1.default, __assign({}, props))));
}
TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: prop_types_1.default.bool,
};
exports.default = TransitionComponent;
