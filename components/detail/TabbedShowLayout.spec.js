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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var expect_1 = __importDefault(require("expect"));
var react_1 = require("@testing-library/react");
var history_1 = require("history");
var react_router_dom_1 = require("react-router-dom");
var TabbedShowLayout_1 = require("./TabbedShowLayout");
var Tab_1 = require("./Tab");
var TextField_1 = __importDefault(require("../field/TextField"));
describe('<TabbedShowLayout />', function () {
    var renderWithRouter = function (children) {
        var history = (0, history_1.createMemoryHistory)();
        return __assign({ history: history }, (0, react_1.render)(React.createElement(react_router_dom_1.Router, { history: history }, children)));
    };
    it('should display the first Tab component and its content', function () {
        var queryByText = renderWithRouter(React.createElement(TabbedShowLayout_1.TabbedShowLayout, { basePath: "/", record: { id: 123 }, resource: "foo" },
            React.createElement(Tab_1.Tab, { label: "Tab1" },
                React.createElement(TextField_1.default, { label: "Field On Tab1", source: "field1" })),
            React.createElement(Tab_1.Tab, { label: "Tab2" },
                React.createElement(TextField_1.default, { label: "Field On Tab2", source: "field2" })))).queryByText;
        (0, expect_1.default)(queryByText('Tab1')).not.toBeNull();
        (0, expect_1.default)(queryByText('Field On Tab1')).not.toBeNull();
    });
    it('should display the first valid Tab component and its content', function () {
        var queryByText = renderWithRouter(React.createElement(TabbedShowLayout_1.TabbedShowLayout, { basePath: "/", record: { id: 123 }, resource: "foo" },
            null,
            React.createElement(Tab_1.Tab, { label: "Tab1" },
                React.createElement(TextField_1.default, { label: "Field On Tab1", source: "field1" })),
            React.createElement(Tab_1.Tab, { label: "Tab2" },
                React.createElement(TextField_1.default, { label: "Field On Tab2", source: "field2" })))).queryByText;
        (0, expect_1.default)(queryByText('Tab1')).not.toBeNull();
        (0, expect_1.default)(queryByText('Field On Tab1')).not.toBeNull();
    });
    it('should sync tabs with location by default', function () {
        var history = (0, history_1.createMemoryHistory)({ initialEntries: ['/'] });
        var _a = renderWithRouter(React.createElement(react_router_dom_1.Router, { history: history },
            React.createElement(TabbedShowLayout_1.TabbedShowLayout, { basePath: "/", record: { id: 123 }, resource: "foo" },
                null,
                React.createElement(Tab_1.Tab, { label: "Tab1" },
                    React.createElement(TextField_1.default, { label: "Field On Tab1", source: "field1" })),
                React.createElement(Tab_1.Tab, { label: "Tab2" },
                    React.createElement(TextField_1.default, { label: "Field On Tab2", source: "field2" }))))), getAllByRole = _a.getAllByRole, queryByText = _a.queryByText;
        var tabs = getAllByRole('tab');
        react_1.fireEvent.click(tabs[1]);
        (0, expect_1.default)(history.location.pathname).toEqual('/1');
        (0, expect_1.default)(queryByText('Field On Tab2')).not.toBeNull();
        (0, expect_1.default)(queryByText('Field On Tab1')).toBeNull();
        react_1.fireEvent.click(tabs[0]);
        (0, expect_1.default)(history.location.pathname).toEqual('/');
        (0, expect_1.default)(queryByText('Field On Tab1')).not.toBeNull();
        (0, expect_1.default)(queryByText('Field On Tab2')).toBeNull();
    });
    it('should not sync tabs with location if syncWithLocation is false', function () {
        var history = (0, history_1.createMemoryHistory)({ initialEntries: ['/'] });
        var _a = renderWithRouter(React.createElement(react_router_dom_1.Router, { history: history },
            React.createElement(TabbedShowLayout_1.TabbedShowLayout, { basePath: "/", record: { id: 123 }, resource: "foo", syncWithLocation: false },
                null,
                React.createElement(Tab_1.Tab, { label: "Tab1" },
                    React.createElement(TextField_1.default, { label: "Field On Tab1", source: "field1" })),
                React.createElement(Tab_1.Tab, { label: "Tab2" },
                    React.createElement(TextField_1.default, { label: "Field On Tab2", source: "field2" }))))), getAllByRole = _a.getAllByRole, queryByText = _a.queryByText;
        var tabs = getAllByRole('tab');
        react_1.fireEvent.click(tabs[1]);
        (0, expect_1.default)(history.location.pathname).toEqual('/');
        (0, expect_1.default)(queryByText('Field On Tab2')).not.toBeNull();
        (0, expect_1.default)(queryByText('Field On Tab1')).toBeNull();
        react_1.fireEvent.click(tabs[0]);
        (0, expect_1.default)(history.location.pathname).toEqual('/');
        (0, expect_1.default)(queryByText('Field On Tab1')).not.toBeNull();
        (0, expect_1.default)(queryByText('Field On Tab2')).toBeNull();
    });
});
