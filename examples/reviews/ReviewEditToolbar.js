"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const app_1 = require("../../app");
const AcceptButton_1 = __importDefault(require("./AcceptButton"));
const RejectButton_1 = __importDefault(require("./RejectButton"));
const PREFIX = 'ReviewEditToolbar';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledMuiToolbar = (0, styles_1.styled)(Toolbar_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
const ReviewEditToolbar = (props) => {
    const { basePath, handleSubmitWithRedirect, invalid, record, resource, saving, } = props;
    if (!record)
        return null;
    return ((0, jsx_runtime_1.jsx)(StyledMuiToolbar, Object.assign({ className: classes.root }, { children: record.status === 'pending' ? ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(AcceptButton_1.default, { record: record }, void 0), (0, jsx_runtime_1.jsx)(RejectButton_1.default, { record: record }, void 0)] }, void 0)) : ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(app_1.SaveButton, { handleSubmitWithRedirect: handleSubmitWithRedirect, invalid: invalid, saving: saving, redirect: "list", submitOnEnter: true }, void 0), (0, jsx_runtime_1.jsx)(app_1.DeleteButton, { basePath: basePath, record: record, resource: resource }, void 0)] }, void 0)) }), void 0));
};
exports.default = ReviewEditToolbar;
