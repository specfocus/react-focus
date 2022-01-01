"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const ThumbDown_1 = __importDefault(require("@mui/icons-material/ThumbDown"));
const app_1 = require("../../app");
const noSelection = [];
const BulkRejectButton = (props) => {
    const { selectedIds = noSelection } = props;
    const notify = (0, app_1.useNotify)();
    const refresh = (0, app_1.useRefresh)();
    const unselectAll = (0, app_1.useUnselectAll)('reviews');
    const [reject, { loading }] = (0, app_1.useUpdateMany)('reviews', selectedIds, { status: 'rejected' }, {
        action: app_1.CRUD_UPDATE_MANY,
        undoable: true,
        onSuccess: () => {
            notify('resources.reviews.notification.approved_success', 'info', {}, true);
            refresh();
            unselectAll();
        },
        onFailure: () => {
            notify('resources.reviews.notification.approved_error', 'warning');
        },
    });
    return ((0, jsx_runtime_1.jsx)(app_1.Button, Object.assign({ label: "resources.reviews.action.reject", onClick: reject, disabled: loading }, { children: (0, jsx_runtime_1.jsx)(ThumbDown_1.default, {}, void 0) }), void 0));
};
BulkRejectButton.propTypes = {
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
};
exports.default = BulkRejectButton;
