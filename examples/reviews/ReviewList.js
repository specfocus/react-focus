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
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var app_1 = require("../../app");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var BulkAcceptButton_1 = __importDefault(require("./BulkAcceptButton"));
var BulkRejectButton_1 = __importDefault(require("./BulkRejectButton"));
var ReviewListMobile_1 = __importDefault(require("./ReviewListMobile"));
var ReviewListDesktop_1 = __importDefault(require("./ReviewListDesktop"));
var reviewFilters_1 = __importDefault(require("./reviewFilters"));
var ReviewEdit_1 = __importDefault(require("./ReviewEdit"));
var PREFIX = 'ReviewList';
var classes = {
    root: "".concat(PREFIX, "-root"),
    list: "".concat(PREFIX, "-list"),
    listWithDrawer: "".concat(PREFIX, "-listWithDrawer"),
    drawerPaper: "".concat(PREFIX, "-drawerPaper"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.root)] = {
            display: 'flex',
        },
        _b["& .".concat(classes.list)] = {
            flexGrow: 1,
            transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        },
        _b["& .".concat(classes.listWithDrawer)] = {
            marginRight: 400,
        },
        _b["& .".concat(classes.drawerPaper)] = {
            zIndex: 100,
        },
        _b);
});
var ReviewsBulkActionButtons = function (props) { return (React.createElement(react_1.Fragment, null,
    React.createElement(BulkAcceptButton_1.default, __assign({}, props)),
    React.createElement(BulkRejectButton_1.default, __assign({}, props)),
    React.createElement(app_1.BulkDeleteButton, __assign({}, props)))); };
var ReviewList = function (props) {
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var history = (0, react_router_dom_1.useHistory)();
    var handleClose = (0, react_1.useCallback)(function () {
        history.push('/reviews');
    }, [history]);
    return (React.createElement(Root, { className: classes.root },
        React.createElement(react_router_dom_1.Route, { path: "/reviews/:id" }, function (_a) {
            var _b;
            var match = _a.match;
            var isMatch = !!(match &&
                match.params &&
                match.params.id !== 'create');
            return (React.createElement(react_1.Fragment, null,
                React.createElement(app_1.List, __assign({}, props, { className: (0, classnames_1.default)(classes.list, (_b = {},
                        _b[classes.listWithDrawer] = isMatch,
                        _b)), bulkActionButtons: React.createElement(ReviewsBulkActionButtons, null), filters: reviewFilters_1.default, perPage: 25, sort: { field: 'date', order: 'DESC' } }), isXSmall ? (React.createElement(ReviewListMobile_1.default, null)) : (React.createElement(ReviewListDesktop_1.default, { selectedRow: isMatch
                        ? parseInt(match.params.id, 10)
                        : undefined }))),
                React.createElement(material_1.Drawer, { variant: "persistent", open: isMatch, anchor: "right", onClose: handleClose, classes: {
                        paper: classes.drawerPaper,
                    } }, isMatch ? (React.createElement(ReviewEdit_1.default, { id: match.params.id, onCancel: handleClose, resource: props.resource, basePath: props.basePath })) : null)));
        })));
};
exports.default = ReviewList;
