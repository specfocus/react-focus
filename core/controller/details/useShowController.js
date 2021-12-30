"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShowController = void 0;
var useVersion_1 = __importDefault(require("../useVersion"));
var checkMinimumRequiredProps_1 = require("../checkMinimumRequiredProps");
var dataProvider_1 = require("../../dataProvider");
var i18n_1 = require("../../i18n");
var sideEffect_1 = require("../../sideEffect");
var actions_1 = require("../../actions");
var core_1 = require("../../core");
/**
 * Prepare data for the Show view
 *
 * @param {Object} props The props passed to the Show component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Show view
 *
 * @example
 *
 * import { useShowController } from '../app';
 * import ShowView from './ShowView';
 *
 * const MyShow = props => {
 *     const controllerProps = useShowController(props);
 *     return <ShowView {...controllerProps} {...props} />;
 * }
 */
var useShowController = function (props) {
    (0, checkMinimumRequiredProps_1.useCheckMinimumRequiredProps)('Show', ['basePath', 'resource'], props);
    var basePath = props.basePath, hasCreate = props.hasCreate, hasEdit = props.hasEdit, hasList = props.hasList, hasShow = props.hasShow, id = props.id;
    var resource = (0, core_1.useResourceContext)(props);
    var translate = (0, i18n_1.useTranslate)();
    var notify = (0, sideEffect_1.useNotify)();
    var redirect = (0, sideEffect_1.useRedirect)();
    var refresh = (0, sideEffect_1.useRefresh)();
    var version = (0, useVersion_1.default)();
    var _a = (0, dataProvider_1.useGetOne)(resource, id, {
        action: actions_1.CRUD_GET_ONE,
        onFailure: function () {
            notify('ra.notification.item_doesnt_exist', 'warning');
            redirect('list', basePath);
            refresh();
        },
    }), record = _a.data, loading = _a.loading, loaded = _a.loaded, refetch = _a.refetch;
    var getResourceLabel = (0, core_1.useGetResourceLabel)();
    var defaultTitle = translate('ra.page.show', {
        name: getResourceLabel(resource, 1),
        id: id,
        record: record,
    });
    return {
        loading: loading,
        loaded: loaded,
        defaultTitle: defaultTitle,
        resource: resource,
        basePath: basePath,
        record: record,
        refetch: refetch,
        hasCreate: hasCreate,
        hasEdit: hasEdit,
        hasList: hasList,
        hasShow: hasShow,
        version: version,
    };
};
exports.useShowController = useShowController;