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
var ThumbUp_1 = __importDefault(require("@mui/icons-material/ThumbUp"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var prop_types_1 = __importDefault(require("prop-types"));
var React = __importStar(require("react"));
var app_1 = require("../../app");
/**
 * This custom button demonstrate using useUpdate to update data
 */
var AcceptButton = function (_a) {
    var record = _a.record;
    var translate = (0, app_1.useTranslate)();
    var notify = (0, app_1.useNotify)();
    var redirectTo = (0, app_1.useRedirect)();
    var _b = (0, app_1.useUpdate)('reviews', record.id, { status: 'accepted' }, record, {
        undoable: true,
        onSuccess: function () {
            notify('resources.reviews.notification.approved_success', 'info', {}, true);
            redirectTo('/reviews');
        },
        onFailure: function () {
            notify('resources.reviews.notification.approved_error', 'warning');
        },
    }), approve = _b[0], loading = _b[1].loading;
    return record && record.status === 'pending' ? (React.createElement(Button_1.default, { variant: "outlined", color: "primary", size: "small", onClick: approve, disabled: loading },
        React.createElement(ThumbUp_1.default, { color: "primary", style: { paddingRight: '0.5em', color: 'green' } }),
        translate('resources.reviews.action.accept'))) : (React.createElement("span", null));
};
AcceptButton.propTypes = {
    record: prop_types_1.default.any,
};
exports.default = AcceptButton;
