"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopOptimisticMode = exports.STOP_OPTIMISTIC_MODE = exports.startOptimisticMode = exports.START_OPTIMISTIC_MODE = exports.complete = exports.COMPLETE = exports.undo = exports.UNDO = exports.startUndoable = exports.UNDOABLE = void 0;
exports.UNDOABLE = 'UNDOABLE';
var startUndoable = function (action) { return ({
    type: exports.UNDOABLE,
    payload: { action: action },
}); };
exports.startUndoable = startUndoable;
exports.UNDO = 'UNDO';
var undo = function () { return ({
    type: exports.UNDO,
}); };
exports.undo = undo;
exports.COMPLETE = 'COMPLETE';
var complete = function () { return ({
    type: exports.COMPLETE,
}); };
exports.complete = complete;
exports.START_OPTIMISTIC_MODE = 'START_OPTIMISTIC_MODE';
var startOptimisticMode = function () { return ({
    type: exports.START_OPTIMISTIC_MODE,
}); };
exports.startOptimisticMode = startOptimisticMode;
exports.STOP_OPTIMISTIC_MODE = 'STOP_OPTIMISTIC_MODE';
var stopOptimisticMode = function () { return ({
    type: exports.STOP_OPTIMISTIC_MODE,
}); };
exports.stopOptimisticMode = stopOptimisticMode;