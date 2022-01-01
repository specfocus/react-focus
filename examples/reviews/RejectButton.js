"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const ThumbDown_1 = __importDefault(require("@mui/icons-material/ThumbDown"));
const app_1 = require("../../app");
/**
 * This custom button demonstrate using a custom action to update data
 */
const RejectButton = ({ record }) => {
    const translate = (0, app_1.useTranslate)();
    const notify = (0, app_1.useNotify)();
    const redirectTo = (0, app_1.useRedirect)();
    const [reject, { loading }] = (0, app_1.useUpdate)('reviews', record.id, { status: 'rejected' }, record, {
        undoable: true,
        onSuccess: () => {
            notify('resources.reviews.notification.rejected_success', 'info', {}, true);
            redirectTo('/reviews');
        },
        onFailure: () => {
            notify('resources.reviews.notification.rejected_error', 'warning');
        },
    });
    return record && record.status === 'pending' ? ((0, jsx_runtime_1.jsxs)(Button_1.default, Object.assign({ variant: "outlined", color: "primary", size: "small", onClick: reject, disabled: loading }, { children: [(0, jsx_runtime_1.jsx)(ThumbDown_1.default, { color: "primary", style: { paddingRight: '0.5em', color: 'red' } }, void 0), translate('resources.reviews.action.reject')] }), void 0)) : ((0, jsx_runtime_1.jsx)("span", {}, void 0));
};
RejectButton.propTypes = {
    record: prop_types_1.default.any,
};
exports.default = RejectButton;
