"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var dataProvider_1 = require("../../dataProvider");
var actions_1 = require("../../actions");
var sideEffect_1 = require("../../sideEffect");
var core_1 = require("../../core");
/**
 * Prepare callback for a Delete button with undo support
 *
 * @example
 *
 * import React from 'react';
 * import ActionDelete from '@mui/icons-material/Delete';
 * import { Button, useDeleteWithUndoController } from '../app';
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     basePath,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const { loading, handleDelete } = useDeleteWithUndoController({
 *         resource,
 *         record,
 *         basePath,
 *         redirect,
 *         onClick,
 *     });
 *
 *     return (
 *         <Button
 *             onClick={handleDelete}
 *             disabled={loading}
 *             label="ra.action.delete"
 *             {...rest}
 *         >
 *             <ActionDelete />
 *         </Button>
 *     );
 * };
 */
var useDeleteWithUndoController = function (props) {
    var record = props.record, basePath = props.basePath, _a = props.redirect, redirectTo = _a === void 0 ? 'list' : _a, onClick = props.onClick, onSuccess = props.onSuccess, onFailure = props.onFailure;
    var resource = (0, core_1.useResourceContext)(props);
    var notify = (0, sideEffect_1.useNotify)();
    var redirect = (0, sideEffect_1.useRedirect)();
    var refresh = (0, sideEffect_1.useRefresh)();
    var _b = (0, dataProvider_1.useDelete)(resource, null, null, {
        action: actions_1.CRUD_DELETE,
        onSuccess: onSuccess !== undefined
            ? onSuccess
            : function () {
                notify('ra.notification.deleted', 'info', { smart_count: 1 }, true);
                redirect(redirectTo, basePath || "/".concat(resource));
                refresh();
            },
        onFailure: onFailure !== undefined
            ? onFailure
            : function (error) {
                notify(typeof error === 'string'
                    ? error
                    : error.message || 'ra.notification.http_error', 'warning', {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                });
                refresh();
            },
        mutationMode: 'undoable',
    }), deleteOne = _b[0], loading = _b[1].loading;
    var handleDelete = (0, react_1.useCallback)(function (event) {
        event.stopPropagation();
        deleteOne({
            payload: { id: record.id, previousData: record },
        });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [deleteOne, onClick, record]);
    return { loading: loading, handleDelete: handleDelete };
};
exports.default = useDeleteWithUndoController;