"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const app_1 = require("../../app");
const AppBar_1 = __importDefault(require("./AppBar"));
const Menu_1 = __importDefault(require("./Menu"));
const themes_1 = require("./themes");
exports.default = (props) => {
    const theme = (0, react_redux_1.useSelector)((state) => state.theme === 'dark' ? themes_1.darkTheme : themes_1.lightTheme);
    return (0, jsx_runtime_1.jsx)(app_1.Layout, Object.assign({}, props, { appBar: AppBar_1.default, menu: Menu_1.default, theme: theme }), void 0);
};
