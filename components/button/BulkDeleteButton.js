"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var BulkDeleteWithConfirmButton_1 = __importDefault(require("./BulkDeleteWithConfirmButton"));
var BulkDeleteWithUndoButton_1 = __importDefault(require("./BulkDeleteWithUndoButton"));
/**
 * Deletes the selected rows.
 *
 * To be used inside the <List bulkActionButtons> prop (where it's enabled by default).
 *
 * @example // basic usage
 * import * as React from 'react';
 * import { Fragment } from 'react';
 * import { BulkDeleteButton, BulkExportButton } from '../../app';
 *
 * const PostBulkActionButtons = ({ basePath }) => (
 *     <Fragment>
 *         <BulkExportButton />
 *         <BulkDeleteButton basePath={basePath} />
 *     </Fragment>
 * );
 *
 * export const PostList = (props) => (
 *     <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
 *         ...
 *     </List>
 * );
 */
var BulkDeleteButton = function (props) {
    return props.undoable ? (React.createElement(BulkDeleteWithUndoButton_1.default, __assign({}, props))) : (React.createElement(BulkDeleteWithConfirmButton_1.default, __assign({}, props)));
};
BulkDeleteButton.propTypes = {
    basePath: prop_types_1.default.string,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    undoable: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
};
BulkDeleteButton.defaultProps = {
    undoable: true,
};
exports.default = BulkDeleteButton;