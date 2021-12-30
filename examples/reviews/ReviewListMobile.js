"use strict";
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var List_1 = __importDefault(require("@mui/material/List"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var react_router_dom_1 = require("react-router-dom");
var app_1 = require("../../app");
var AvatarField_1 = __importDefault(require("../visitors/AvatarField"));
var PREFIX = 'ReviewListMobile';
var classes = {
    root: "".concat(PREFIX, "-root"),
    link: "".concat(PREFIX, "-link"),
    inline: "".concat(PREFIX, "-inline"),
};
var StyledList = (0, styles_1.styled)(List_1.default)((_a = {},
    _a["&.".concat(classes.root)] = {
        width: '100vw',
    },
    _a["& .".concat(classes.link)] = {
        textDecoration: 'none',
        color: 'inherit',
    },
    _a["& .".concat(classes.inline)] = {
        display: 'inline',
    },
    _a));
var ReviewListMobile = function () {
    var _a = (0, app_1.useListContext)(), basePath = _a.basePath, data = _a.data, ids = _a.ids, loaded = _a.loaded, total = _a.total;
    return loaded || Number(total) > 0 ? (React.createElement(StyledList, { className: classes.root }, ids.map(function (id) {
        var item = data[id];
        if (!item)
            return null;
        return (React.createElement(react_router_dom_1.Link, { to: (0, app_1.linkToRecord)(basePath, id), className: classes.link, key: id },
            React.createElement(ListItem_1.default, { button: true },
                React.createElement(ListItemAvatar_1.default, null,
                    React.createElement(app_1.ReferenceField, { record: item, source: "customer_id", reference: "customers", basePath: basePath, link: false },
                        React.createElement(AvatarField_1.default, { size: "40" }))),
                React.createElement(ListItemText_1.default, { primary: React.createElement(react_1.Fragment, null,
                        React.createElement(app_1.ReferenceField, { record: item, source: "customer_id", reference: "customers", basePath: basePath, link: false },
                            React.createElement(app_1.FunctionField, { render: function (record) {
                                    return record
                                        ? "".concat(record
                                            .first_name, " ").concat(record
                                            .last_name)
                                        : '';
                                }, variant: "subtitle1", className: classes.inline })),
                        ' ',
                        "on",
                        ' ',
                        React.createElement(app_1.ReferenceField, { record: item, source: "product_id", reference: "products", basePath: basePath, link: false },
                            React.createElement(app_1.TextField, { source: "reference", variant: "subtitle1", className: classes.inline }))), secondary: item.comment, secondaryTypographyProps: { noWrap: true } }))));
    }))) : null;
};
ReviewListMobile.propTypes = {
    basePath: prop_types_1.default.string,
    data: prop_types_1.default.any,
    hasBulkActions: prop_types_1.default.bool.isRequired,
    ids: prop_types_1.default.array,
    onToggleItem: prop_types_1.default.func,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
};
ReviewListMobile.defaultProps = {
    hasBulkActions: false,
    selectedIds: [],
};
exports.default = ReviewListMobile;
