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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsListEdit = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var ControlPoint_1 = __importDefault(require("@mui/icons-material/ControlPoint"));
var Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
var colors_1 = require("../tags/colors");
var TagsListEdit = function (_a) {
    var record = _a.record;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(''), newTagName = _c[0], setNewTagName = _c[1];
    var _d = (0, react_1.useState)(colors_1.colors[0]), newTagColor = _d[0], setNewTagColor = _d[1];
    var _e = (0, react_1.useState)(null), anchorEl = _e[0], setAnchorEl = _e[1];
    var _f = (0, react_1.useState)(0), version = _f[0], setVersion = _f[1]; // used to force the refresh of useGetList without refreshing the whole page
    var _g = (0, react_1.useState)(false), disabled = _g[0], setDisabled = _g[1];
    var _h = (0, app_1.useGetList)('tags', { page: 1, perPage: 10 }, { field: 'name', order: 'ASC' }, {}, { version: version } // FIXME UseDataProviderOptions don't allow [key: string]: any
    ), allTags = _h.data, ids = _h.ids;
    var _j = (0, app_1.useGetMany)('tags', record.tags, {
        enabled: record.tags && record.tags.length > 0,
    }), tags = _j.data, loaded = _j.loaded;
    var update = (0, app_1.useUpdate)()[0];
    var create = (0, app_1.useCreate)()[0];
    var unselectedTagIds = ids && ids.filter(function (id) { return !record.tags.includes(id); });
    var handleOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleDeleteTag = function (id) {
        var tags = record.tags.filter(function (tagId) { return tagId !== id; });
        update('contacts', record.id, { tags: tags }, record);
    };
    var handleAddTag = function (id) {
        var tags = __spreadArray(__spreadArray([], record.tags, true), [id], false);
        update('contacts', record.id, { tags: tags }, record);
        setAnchorEl(null);
    };
    var handleOpenCreateDialog = function () {
        setOpen(true);
        setAnchorEl(null);
        setDisabled(false);
    };
    var handleNewTagNameChange = function (event) {
        setNewTagName(event.target.value);
    };
    var handleCreateTag = function (event) {
        event.preventDefault();
        setDisabled(true);
        create('tags', { name: newTagName, color: newTagColor }, {
            onSuccess: function (_a) {
                var data = _a.data;
                update('contacts', record.id, { tags: __spreadArray(__spreadArray([], record.tags, true), [data.id], false) }, record, {
                    onSuccess: function () {
                        setNewTagName('');
                        setNewTagColor(colors_1.colors[0]);
                        setOpen(false);
                        setVersion(function (v) { return v + 1; });
                    },
                });
            },
        });
    };
    if (!loaded || !tags)
        return null;
    return (React.createElement(React.Fragment, null,
        tags.map(function (tag) { return (React.createElement(material_1.Box, { mt: 1, mb: 1, key: tag.id },
            React.createElement(material_1.Chip, { size: "small", variant: "outlined", onDelete: function () { return handleDeleteTag(tag.id); }, label: tag.name, style: { backgroundColor: tag.color, border: 0 } }))); }),
        React.createElement(material_1.Box, { mt: 1 },
            React.createElement(material_1.Chip, { icon: React.createElement(ControlPoint_1.default, null), size: "small", variant: "outlined", onClick: handleOpen, label: "Add tag", color: "primary" })),
        React.createElement(material_1.Menu, { open: Boolean(anchorEl), onClose: handleClose, anchorEl: anchorEl }, unselectedTagIds === null || unselectedTagIds === void 0 ? void 0 :
            unselectedTagIds.map(function (id) { return (React.createElement(material_1.MenuItem, { key: id, onClick: function () { return handleAddTag(id); } },
                React.createElement(material_1.Chip, { size: "small", variant: "outlined", label: allTags && allTags[id].name, style: {
                        backgroundColor: allTags && allTags[id].color,
                        border: 0,
                    }, onClick: function () { return handleAddTag(id); } }))); }),
            React.createElement(material_1.MenuItem, { onClick: handleOpenCreateDialog },
                React.createElement(material_1.Chip, { icon: React.createElement(Edit_1.default, null), size: "small", variant: "outlined", onClick: handleOpenCreateDialog, color: "primary", label: "Create new tag" }))),
        React.createElement(material_1.Dialog, { open: open, onClose: function () { return setOpen(false); }, "aria-labelledby": "form-dialog-title" },
            React.createElement("form", { onSubmit: handleCreateTag },
                React.createElement(material_1.DialogTitle, { id: "form-dialog-title" }, "Create a new tag"),
                React.createElement(material_1.DialogContent, null,
                    React.createElement(material_1.TextField, { autoFocus: true, label: "Tag name", fullWidth: true, value: newTagName, onChange: handleNewTagNameChange }),
                    React.createElement(material_1.Box, { display: "flex", flexWrap: "wrap", width: 230, mt: 2 }, colors_1.colors.map(function (color) { return (React.createElement(RoundButton, { key: color, color: color, selected: color === newTagColor, handleClick: function () {
                            setNewTagColor(color);
                        } })); }))),
                React.createElement(material_1.DialogActions, null,
                    React.createElement(material_1.Button, { onClick: function () { return setOpen(false); }, color: "primary" }, "Cancel"),
                    React.createElement(material_1.Button, { type: "submit", color: "primary", disabled: disabled }, "Add tag"))))));
};
exports.TagsListEdit = TagsListEdit;
var useStyles = (0, styles_1.makeStyles)({
    root: {
        width: 30,
        height: 30,
        borderRadius: 15,
        display: 'inline-block',
        margin: 8,
    },
});
var RoundButton = function (_a) {
    var color = _a.color, handleClick = _a.handleClick, selected = _a.selected;
    var classes = useStyles();
    return (React.createElement("button", { type: "button", className: classes.root, style: {
            backgroundColor: color,
            border: selected ? '2px solid grey' : 'none',
        }, onClick: handleClick }));
};
