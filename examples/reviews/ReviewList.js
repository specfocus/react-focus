"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// @ts-nocheck
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("../../app");
const BulkAcceptButton_1 = __importDefault(require("./BulkAcceptButton"));
const BulkRejectButton_1 = __importDefault(require("./BulkRejectButton"));
const ReviewEdit_1 = __importDefault(require("./ReviewEdit"));
const reviewFilters_1 = __importDefault(require("./reviewFilters"));
const ReviewListDesktop_1 = __importDefault(require("./ReviewListDesktop"));
const ReviewListMobile_1 = __importDefault(require("./ReviewListMobile"));
const PREFIX = 'ReviewList';
const classes = {
    root: `${PREFIX}-root`,
    list: `${PREFIX}-list`,
    listWithDrawer: `${PREFIX}-listWithDrawer`,
    drawerPaper: `${PREFIX}-drawerPaper`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: 'flex',
    },
    [`& .${classes.list}`]: {
        flexGrow: 1,
        transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    [`& .${classes.listWithDrawer}`]: {
        marginRight: 400,
    },
    [`& .${classes.drawerPaper}`]: {
        zIndex: 100,
    },
}));
const ReviewsBulkActionButtons = (props) => ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(BulkAcceptButton_1.default, Object.assign({}, props), void 0), (0, jsx_runtime_1.jsx)(BulkRejectButton_1.default, Object.assign({}, props), void 0), (0, jsx_runtime_1.jsx)(app_1.BulkDeleteButton, Object.assign({}, props), void 0)] }, void 0));
const ReviewList = (props) => {
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClose = (0, react_1.useCallback)(() => {
        navigate('/reviews');
    }, [history]);
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ path: "/reviews/:id" }, { children: ({ match }) => {
                const isMatch = !!(match &&
                    match.params &&
                    match.params.id !== 'create');
                return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(app_1.List, Object.assign({}, props, { className: (0, classnames_1.default)(classes.list, {
                                [classes.listWithDrawer]: isMatch,
                            }), bulkActionButtons: (0, jsx_runtime_1.jsx)(ReviewsBulkActionButtons, {}, void 0), filters: reviewFilters_1.default, perPage: 25, sort: { field: 'date', order: 'DESC' } }, { children: isXSmall ? ((0, jsx_runtime_1.jsx)(ReviewListMobile_1.default, {}, void 0)) : ((0, jsx_runtime_1.jsx)(ReviewListDesktop_1.default, { selectedRow: isMatch
                                    ? parseInt(match.params.id, 10)
                                    : undefined }, void 0)) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Drawer, Object.assign({ variant: "persistent", open: isMatch, anchor: "right", onClose: handleClose, classes: {
                                paper: classes.drawerPaper,
                            } }, { children: isMatch ? ((0, jsx_runtime_1.jsx)(ReviewEdit_1.default, { id: match.params.id, onCancel: handleClose, resource: props.resource, basePath: props.basePath }, void 0)) : null }), void 0)] }, void 0));
            } }), void 0) }), void 0));
};
exports.default = ReviewList;
