"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemAvatar_1 = __importDefault(require("@mui/material/ListItemAvatar"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const AvatarField_1 = __importDefault(require("../visitors/AvatarField"));
const PREFIX = 'ReviewListMobile';
const classes = {
    root: `${PREFIX}-root`,
    link: `${PREFIX}-link`,
    inline: `${PREFIX}-inline`,
};
const StyledList = (0, styles_1.styled)(List_1.default)({
    [`&.${classes.root}`]: {
        width: '100vw',
    },
    [`& .${classes.link}`]: {
        textDecoration: 'none',
        color: 'inherit',
    },
    [`& .${classes.inline}`]: {
        display: 'inline',
    },
});
const ReviewListMobile = () => {
    const { basePath, data, ids, loaded, total } = (0, app_1.useListContext)();
    return loaded || Number(total) > 0 ? ((0, jsx_runtime_1.jsx)(StyledList, Object.assign({ className: classes.root }, { children: ids.map(id => {
            const item = data[id];
            if (!item)
                return null;
            return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: (0, app_1.linkToRecord)(basePath, id), className: classes.link }, { children: (0, jsx_runtime_1.jsxs)(ListItem_1.default, Object.assign({ button: true }, { children: [(0, jsx_runtime_1.jsx)(ListItemAvatar_1.default, { children: (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ record: item, source: "customer_id", reference: "customers", basePath: basePath, link: false }, { children: (0, jsx_runtime_1.jsx)(AvatarField_1.default, { size: "40" }, void 0) }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: (0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ record: item, source: "customer_id", reference: "customers", basePath: basePath, link: false }, { children: (0, jsx_runtime_1.jsx)(app_1.FunctionField, { render: (record) => record
                                                ? `${record
                                                    .first_name} ${record
                                                    .last_name}`
                                                : '', variant: "subtitle1", className: classes.inline }, void 0) }), void 0), ' ', "on", ' ', (0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ record: item, source: "product_id", reference: "products", basePath: basePath, link: false }, { children: (0, jsx_runtime_1.jsx)(app_1.TextField, { source: "reference", variant: "subtitle1", className: classes.inline }, void 0) }), void 0)] }, void 0), secondary: item.comment, secondaryTypographyProps: { noWrap: true } }, void 0)] }), void 0) }), id));
        }) }), void 0)) : null;
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
