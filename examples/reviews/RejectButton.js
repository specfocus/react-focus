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
var Button_1 = __importDefault(require("@mui/material/Button"));
var ThumbDown_1 = __importDefault(require("@mui/icons-material/ThumbDown"));
var app_1 = require("../../app");
/**
 * This custom button demonstrate using a custom action to update data
 */
var RejectButton = function (_a) {
    var record = _a.record;
    var translate = (0, app_1.useTranslate)();
    var notify = (0, app_1.useNotify)();
    var redirectTo = (0, app_1.useRedirect)();
    var _b = (0, app_1.useUpdate)('reviews', record.id, { status: 'rejected' }, record, {
        undoable: true,
        onSuccess: function () {
            notify('resources.reviews.notification.rejected_success', 'info', {}, true);
            redirectTo('/reviews');
        },
        onFailure: function () {
            notify('resources.reviews.notification.rejected_error', 'warning');
        },
    }), reject = _b[0], loading = _b[1].loading;
    return record && record.status === 'pending' ? (React.createElement(Button_1.default, { variant: "outlined", color: "primary", size: "small", onClick: reject, disabled: loading },
        React.createElement(ThumbDown_1.default, { color: "primary", style: { paddingRight: '0.5em', color: 'red' } }),
        translate('resources.reviews.action.reject'))) : (React.createElement("span", null));
};
RejectButton.propTypes = {
    record: prop_types_1.default.any,
};
exports.default = RejectButton;
