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
exports.ToolButton = exports.useStyles = void 0;
var Box_1 = __importDefault(require("@mui/material/Box"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var styles_1 = require("@mui/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var AppState_1 = require("../../app/AppState");
var core_1 = require("../../core");
var ListContextProvider_1 = __importDefault(require("../../core/controller/ListContextProvider"));
var useListController_1 = __importDefault(require("../../core/controller/useListController"));
var Copyright_1 = __importDefault(require("./Copyright"));
var Frame_1 = __importDefault(require("./Frame"));
var AddCircle_1 = __importDefault(require("@mui/icons-material/AddCircle"));
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
var toolButtons = {
    create: {
        Icon: AddCircle_1.default,
    },
    destroy: {
        Icon: Delete_1.default,
    },
    update: {
        Icon: Edit_1.default,
    }
};
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    container: {
        display: 'block',
        overflow: 'auto',
        height: "calc(100% - ".concat(theme.spacing(14), ")")
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        bottom: 0,
        height: theme.spacing(6),
        left: 0,
        position: 'fixed',
        right: 0
    }
}); });
var ToolButton = function (_a) {
    var name = _a.name, title = _a.title, props = __rest(_a, ["name", "title"]);
    return (react_1.default.createElement(Tooltip_1.default, { key: "data-".concat(name, "-button"), title: title },
        react_1.default.createElement(IconButton_1.default, __assign({ color: "inherit" }, props))));
};
exports.ToolButton = ToolButton;
function DataFrame(props) {
    (0, core_1.useCheckMinimumRequiredProps)('DataFrame', ['children'], props);
    var children = props.children, footer = props.footer, title = props.title, widgets = props.widgets, otherProps = __rest(props, ["children", "footer", "title", "widgets"]);
    var classes = (0, exports.useStyles)();
    var _a = (0, recoil_1.useRecoilState)(AppState_1.appWidget), widget = _a[0], setWidget = _a[1];
    var tools = (0, react_1.useMemo)(function () {
        var triggers = Object.keys(widgets).reduce(function (acc, name) {
            var _a;
            var button = toolButtons[name];
            if (!button) {
                return acc;
            }
            var Icon = button.Icon, title = button.title;
            var props = { disabled: widget === name, name: name, onClick: function () { return setWidget(name); }, title: title };
            return Object.assign(acc, (_a = {},
                _a[name] = function () { return (react_1.default.createElement(exports.ToolButton, __assign({}, props),
                    react_1.default.createElement(Icon, null))); },
                _a));
        }, {});
        Object.assign(triggers, { divider1: null });
        return triggers;
    }, [widget, widgets, setWidget]);
    var controllerProps = (0, useListController_1.default)(props);
    console.log('DataFrame render', controllerProps);
    return (react_1.default.createElement(Frame_1.default, __assign({}, otherProps, { title: title, tools: Object.values(tools), widgets: widgets }),
        react_1.default.createElement(ListContextProvider_1.default, { value: controllerProps },
            react_1.default.createElement("div", { className: classes.container },
                children,
                react_1.default.createElement("footer", { className: classes.footer }, footer || (react_1.default.createElement(Box_1.default, { pt: 2 },
                    react_1.default.createElement(Copyright_1.default, null))))))));
}
exports.default = DataFrame;
DataFrame.propTypes = {
    // the props you can change
    // @ts-ignore-line
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    aside: prop_types_1.default.element,
    // @ts-ignore-line
    bulkActionButtons: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    filter: prop_types_1.default.object,
    filterDefaultValues: prop_types_1.default.object,
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    // @ts-ignore-line
    pagination: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    perPage: prop_types_1.default.number.isRequired,
    //@ts-ignore-line
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    title: prop_types_1.default.string,
    subtitle: prop_types_1.default.string,
    // the props managed by ../../app
    authProvider: prop_types_1.default.func,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    location: prop_types_1.default.any,
    match: prop_types_1.default.any,
    path: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    syncWithLocation: prop_types_1.default.bool,
};
DataFrame.defaultProps = {
    filter: {},
    perPage: 10,
};
