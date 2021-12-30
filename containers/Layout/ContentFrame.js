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
var react_1 = __importDefault(require("react"));
var Copyright_1 = __importDefault(require("./Copyright"));
var Frame_1 = __importDefault(require("./Frame"));
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    container: {
        display: 'block',
        height: '100%',
        overflowY: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    }
}); });
function ContentFrame(_a) {
    var children = _a.children, maxWidth = _a.maxWidth, props = __rest(_a, ["children", "maxWidth"]);
    var classes = (0, exports.useStyles)();
    return (react_1.default.createElement(Frame_1.default, __assign({}, props),
        react_1.default.createElement("div", { className: classes.container },
            react_1.default.createElement(Container_1.default, { maxWidth: maxWidth },
                children,
                react_1.default.createElement(Box_1.default, { pt: 4 },
                    react_1.default.createElement(Copyright_1.default, null))))));
}
exports.default = ContentFrame;
