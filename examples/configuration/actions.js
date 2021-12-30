"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTheme = exports.CHANGE_THEME = void 0;
exports.CHANGE_THEME = 'CHANGE_THEME';
var changeTheme = function (theme) { return ({
    type: exports.CHANGE_THEME,
    payload: theme,
}); };
exports.changeTheme = changeTheme;
