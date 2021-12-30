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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ThumbDown_1 = __importDefault(require("@mui/icons-material/ThumbDown"));
var app_1 = require("../../app");
var noSelection = [];
var BulkRejectButton = function (props) {
    var _a = props.selectedIds, selectedIds = _a === void 0 ? noSelection : _a;
    var notify = (0, app_1.useNotify)();
    var refresh = (0, app_1.useRefresh)();
    var unselectAll = (0, app_1.useUnselectAll)('reviews');
    var _b = (0, app_1.useUpdateMany)('reviews', selectedIds, { status: 'rejected' }, {
        action: app_1.CRUD_UPDATE_MANY,
        undoable: true,
        onSuccess: function () {
            notify('resources.reviews.notification.approved_success', 'info', {}, true);
            refresh();
            unselectAll();
        },
        onFailure: function () {
            notify('resources.reviews.notification.approved_error', 'warning');
        },
    }), reject = _b[0], loading = _b[1].loading;
    return (React.createElement(app_1.Button, { label: "resources.reviews.action.reject", onClick: reject, disabled: loading },
        React.createElement(ThumbDown_1.default, null)));
};
BulkRejectButton.propTypes = {
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
};
exports.default = BulkRejectButton;
