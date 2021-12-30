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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("../../core");
var SimpleListLoading_1 = __importDefault(require("./SimpleListLoading"));
var PREFIX = 'RaSimpleList';
var classes = {
    tertiary: "".concat(PREFIX, "-tertiary"),
};
var Root = (0, styles_1.styled)(material_1.List)((_a = {},
    _a["& .".concat(classes.tertiary)] = { float: 'right', opacity: 0.541176 },
    _a));
/**
 * The <SimpleList> component renders a list of records as a material-ui <List>.
 * It is usually used as a child of ../../app's <List> and <ReferenceManyField> components.
 *
 * Also widely used on Mobile.
 *
 * Props:
 * - primaryText: function returning a React element (or some text) based on the record
 * - secondaryText: same
 * - tertiaryText: same
 * - leftAvatar: function returning a React element based on the record
 * - leftIcon: same
 * - rightAvatar: same
 * - rightIcon: same
 * - linkType: 'edit' or 'show', or a function returning 'edit' or 'show' based on the record
 * - rowStyle: function returning a style object based on (record, index)
 *
 * @example // Display all posts as a List
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <SimpleList
 *             primaryText={record => record.title}
 *             secondaryText={record => `${record.views} views`}
 *             tertiaryText={record =>
 *                 new Date(record.published_at).toLocaleDateString()
 *             }
 *             rowStyle={postRowStyle}
 *          />
 *     </List>
 * );
 */
var SimpleList = function (props) {
    var className = props.className, hasBulkActions = props.hasBulkActions, leftAvatar = props.leftAvatar, leftIcon = props.leftIcon, _a = props.linkType, linkType = _a === void 0 ? 'edit' : _a, primaryText = props.primaryText, rightAvatar = props.rightAvatar, rightIcon = props.rightIcon, secondaryText = props.secondaryText, tertiaryText = props.tertiaryText, rowStyle = props.rowStyle, rest = __rest(props, ["className", "hasBulkActions", "leftAvatar", "leftIcon", "linkType", "primaryText", "rightAvatar", "rightIcon", "secondaryText", "tertiaryText", "rowStyle"]);
    var _b = (0, core_1.useListContext)(props), basePath = _b.basePath, data = _b.data, ids = _b.ids, loaded = _b.loaded, total = _b.total;
    if (loaded === false) {
        return (React.createElement(SimpleListLoading_1.default, { className: className, hasLeftAvatarOrIcon: !!leftIcon || !!leftAvatar, hasRightAvatarOrIcon: !!rightIcon || !!rightAvatar, hasSecondaryText: !!secondaryText, hasTertiaryText: !!tertiaryText }));
    }
    var renderAvatar = function (id, avatarCallback) {
        var avatarValue = avatarCallback(data[id], id);
        if (typeof avatarValue === 'string' &&
            (avatarValue.startsWith('http') || avatarValue.startsWith('data:'))) {
            return React.createElement(material_1.Avatar, { src: avatarValue });
        }
        else {
            return React.createElement(material_1.Avatar, null, avatarValue);
        }
    };
    return total > 0 ? (React.createElement(Root, __assign({ className: className }, (0, core_1.sanitizeListRestProps)(rest)), ids.map(function (id, rowIndex) { return (React.createElement(core_1.RecordContextProvider, { key: id, value: data[id] },
        React.createElement(material_1.ListItem, null,
            React.createElement(LinkOrNot, { linkType: linkType, basePath: basePath, id: id, record: data[id], style: rowStyle
                    ? rowStyle(data[id], rowIndex)
                    : undefined },
                leftIcon && (React.createElement(material_1.ListItemIcon, null, leftIcon(data[id], id))),
                leftAvatar && (React.createElement(material_1.ListItemAvatar, null, renderAvatar(id, leftAvatar))),
                React.createElement(material_1.ListItemText, { primary: React.createElement("div", null,
                        (0, react_1.isValidElement)(primaryText)
                            ? primaryText
                            : primaryText(data[id], id),
                        !!tertiaryText &&
                            ((0, react_1.isValidElement)(tertiaryText) ? (tertiaryText) : (React.createElement("span", { className: classes.tertiary }, tertiaryText(data[id], id))))), secondary: !!secondaryText &&
                        ((0, react_1.isValidElement)(secondaryText)
                            ? secondaryText
                            : secondaryText(data[id], id)) }),
                (rightAvatar || rightIcon) && (React.createElement(material_1.ListItemSecondaryAction, null,
                    rightAvatar && (React.createElement(material_1.Avatar, null, renderAvatar(id, rightAvatar))),
                    rightIcon && (React.createElement(material_1.ListItemIcon, null, rightIcon(data[id], id))))))))); }))) : null;
};
SimpleList.propTypes = {
    className: prop_types_1.default.string,
    leftAvatar: prop_types_1.default.func,
    leftIcon: prop_types_1.default.func,
    linkType: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    primaryText: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.element]),
    rightAvatar: prop_types_1.default.func,
    rightIcon: prop_types_1.default.func,
    secondaryText: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.element]),
    tertiaryText: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.element]),
    rowStyle: prop_types_1.default.func,
};
var LinkOrNot = function (props) {
    var classesOverride = props.classes, linkType = props.linkType, basePath = props.basePath, id = props.id, children = props.children, record = props.record, rest = __rest(props, ["classes", "linkType", "basePath", "id", "children", "record"]);
    var link = typeof linkType === 'function' ? linkType(record, id) : linkType;
    return link === 'edit' || link === true ? (
    // @ts-ignore
    React.createElement(material_1.ListItemButton, __assign({ component: react_router_dom_1.Link, to: (0, core_1.linkToRecord)(basePath, id) }, rest), children)) : link === 'show' ? (
    // @ts-ignore
    React.createElement(material_1.ListItemButton, __assign({ component: react_router_dom_1.Link, to: "".concat((0, core_1.linkToRecord)(basePath, id), "/show") }, rest), children)) : link !== false ? (
    // @ts-ignore
    React.createElement(material_1.ListItemButton, __assign({ component: react_router_dom_1.Link, to: link }, rest), children)) : (React.createElement(material_1.ListItemText
    // @ts-ignore
    , __assign({ 
        // @ts-ignore
        component: "div" }, rest), children));
};
exports.default = SimpleList;