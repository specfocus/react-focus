"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsListEdit = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const ControlPoint_1 = __importDefault(require("@mui/icons-material/ControlPoint"));
const Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
const colors_1 = require("../tags/colors");
const TagsListEdit = ({ record }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [newTagName, setNewTagName] = (0, react_1.useState)('');
    const [newTagColor, setNewTagColor] = (0, react_1.useState)(colors_1.colors[0]);
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const [version, setVersion] = (0, react_1.useState)(0); // used to force the refresh of useGetList without refreshing the whole page
    const [disabled, setDisabled] = (0, react_1.useState)(false);
    const { data: allTags, ids } = (0, app_1.useGetList)('tags', { page: 1, perPage: 10 }, { field: 'name', order: 'ASC' }, {}, { version } // FIXME UseDataProviderOptions don't allow [key: string]: any
    );
    const { data: tags, loaded } = (0, app_1.useGetMany)('tags', record.tags, {
        enabled: record.tags && record.tags.length > 0,
    });
    const [update] = (0, app_1.useUpdate)();
    const [create] = (0, app_1.useCreate)();
    const unselectedTagIds = ids && ids.filter(id => !record.tags.includes(id));
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTag = (id) => {
        const tags = record.tags.filter((tagId) => tagId !== id);
        update('contacts', record.id, { tags }, record);
    };
    const handleAddTag = (id) => {
        const tags = [...record.tags, id];
        update('contacts', record.id, { tags }, record);
        setAnchorEl(null);
    };
    const handleOpenCreateDialog = () => {
        setOpen(true);
        setAnchorEl(null);
        setDisabled(false);
    };
    const handleNewTagNameChange = (event) => {
        setNewTagName(event.target.value);
    };
    const handleCreateTag = (event) => {
        event.preventDefault();
        setDisabled(true);
        create('tags', { name: newTagName, color: newTagColor }, {
            onSuccess: ({ data }) => {
                update('contacts', record.id, { tags: [...record.tags, data.id] }, record, {
                    onSuccess: () => {
                        setNewTagName('');
                        setNewTagColor(colors_1.colors[0]);
                        setOpen(false);
                        setVersion(v => v + 1);
                    },
                });
            },
        });
    };
    if (!loaded || !tags)
        return null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [tags.map(tag => ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 1, mb: 1 }, { children: (0, jsx_runtime_1.jsx)(material_1.Chip, { size: "small", variant: "outlined", onDelete: () => handleDeleteTag(tag.id), label: tag.name, style: { backgroundColor: tag.color, border: 0 } }, void 0) }), tag.id))), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mt: 1 }, { children: (0, jsx_runtime_1.jsx)(material_1.Chip, { icon: (0, jsx_runtime_1.jsx)(ControlPoint_1.default, {}, void 0), size: "small", variant: "outlined", onClick: handleOpen, label: "Add tag", color: "primary" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Menu, Object.assign({ open: Boolean(anchorEl), onClose: handleClose, anchorEl: anchorEl }, { children: [unselectedTagIds === null || unselectedTagIds === void 0 ? void 0 : unselectedTagIds.map(id => ((0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ onClick: () => handleAddTag(id) }, { children: (0, jsx_runtime_1.jsx)(material_1.Chip, { size: "small", variant: "outlined", label: allTags && allTags[id].name, style: {
                                backgroundColor: allTags && allTags[id].color,
                                border: 0,
                            }, onClick: () => handleAddTag(id) }, void 0) }), id))), (0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ onClick: handleOpenCreateDialog }, { children: (0, jsx_runtime_1.jsx)(material_1.Chip, { icon: (0, jsx_runtime_1.jsx)(Edit_1.default, {}, void 0), size: "small", variant: "outlined", onClick: handleOpenCreateDialog, color: "primary", label: "Create new tag" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Dialog, Object.assign({ open: open, onClose: () => setOpen(false), "aria-labelledby": "form-dialog-title" }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleCreateTag }, { children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, Object.assign({ id: "form-dialog-title" }, { children: "Create a new tag" }), void 0), (0, jsx_runtime_1.jsxs)(material_1.DialogContent, { children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { autoFocus: true, label: "Tag name", fullWidth: true, value: newTagName, onChange: handleNewTagNameChange }, void 0), (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ display: "flex", flexWrap: "wrap", width: 230, mt: 2 }, { children: colors_1.colors.map(color => ((0, jsx_runtime_1.jsx)(RoundButton, { color: color, selected: color === newTagColor, handleClick: () => {
                                            setNewTagColor(color);
                                        } }, color))) }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ onClick: () => setOpen(false), color: "primary" }, { children: "Cancel" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ type: "submit", color: "primary", disabled: disabled }, { children: "Add tag" }), void 0)] }, void 0)] }), void 0) }), void 0)] }, void 0));
};
exports.TagsListEdit = TagsListEdit;
const useStyles = (0, styles_1.makeStyles)({
    root: {
        width: 30,
        height: 30,
        borderRadius: 15,
        display: 'inline-block',
        margin: 8,
    },
});
const RoundButton = ({ color, handleClick, selected }) => {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", className: classes.root, style: {
            backgroundColor: color,
            border: selected ? '2px solid grey' : 'none',
        }, onClick: handleClick }, void 0));
};
