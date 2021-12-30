"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotification = void 0;
var notificationActions_1 = require("../../actions/notificationActions");
var undoActions_1 = require("../../actions/undoActions");
var recoil_1 = require("recoil");
var admin = (0, recoil_1.atom)({
    key: 'admin',
    default: { notifiations: [] }
});
var initialState = [];
var notificationsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    switch (action.type) {
        case notificationActions_1.SHOW_NOTIFICATION:
            return previousState.concat(action.payload);
        case notificationActions_1.HIDE_NOTIFICATION:
        case undoActions_1.UNDO:
            return previousState.slice(1);
        case notificationActions_1.RESET_NOTIFICATION:
            return initialState;
        default:
            return previousState;
    }
};
exports.default = notificationsReducer;
/**
 * Returns the first available notification to show
 * @param {Object} state - Redux state
 */
exports.getNotification = (0, recoil_1.selector)({
    key: 'firstNotification',
    get: function (_a) {
        var get = _a.get;
        var notifiations = get(admin).notifiations;
        return notifiations[0];
    }
});
