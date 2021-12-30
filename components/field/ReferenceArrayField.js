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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceArrayFieldView = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var core_1 = require("../../core");
var types_1 = require("./types");
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var layout_1 = require("../layout");
var PREFIX = 'RaReferenceArrayField';
var classes = {
    progress: "".concat(PREFIX, "-progress"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.progress)] = { marginTop: theme.spacing(2) },
        _b);
});
/**
 * A container component that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * // order = {
 * //   id: 123,
 * //   product_ids: [456, 457, 458],
 * // }
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categories of the current product as a list of chips
 * // product = {
 * //   id: 456,
 * //   category_ids: [11, 22, 33],
 * // }
 * <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 * By default, restricts the displayed values to 1000. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayField perPage={10} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * By default, the field displays the results in the order in which they are referenced
 * (i.e. in the order of the list of ids). You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayField sort={{ field: 'name', order: 'ASC' }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * Also, you can filter the results to display only a subset of values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayField filter={{ is_published: true }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 */
var ReferenceArrayField = function (props) {
    var basePath = props.basePath, children = props.children, filter = props.filter, _a = props.page, page = _a === void 0 ? 1 : _a, perPage = props.perPage, reference = props.reference, resource = props.resource, sort = props.sort, source = props.source;
    var record = (0, core_1.useRecordContext)(props);
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceArrayField> only accepts a single child (like <Datagrid>)');
    }
    var isReferenceDeclared = (0, react_redux_1.useSelector)(function (state) { return typeof state.admin.resources[props.reference] !== 'undefined'; });
    if (!isReferenceDeclared) {
        throw new Error("You must declare a <Resource name=\"".concat(props.reference, "\"> in order to use a <ReferenceArrayField reference=\"").concat(props.reference, "\">"));
    }
    var controllerProps = (0, core_1.useReferenceArrayFieldController)({
        basePath: basePath,
        filter: filter,
        page: page,
        perPage: perPage,
        record: record,
        reference: reference,
        resource: resource,
        sort: sort,
        source: source,
    });
    return (React.createElement(core_1.ResourceContextProvider, { value: reference },
        React.createElement(core_1.ListContextProvider, { value: controllerProps },
            React.createElement(PureReferenceArrayFieldView, __assign({}, props, controllerProps)))));
};
ReferenceArrayField.propTypes = __assign(__assign({}, types_1.fieldPropTypes), { addLabel: prop_types_1.default.bool, basePath: prop_types_1.default.string, className: prop_types_1.default.string, children: prop_types_1.default.element.isRequired, label: prop_types_1.default.string, record: prop_types_1.default.any, reference: prop_types_1.default.string.isRequired, resource: prop_types_1.default.string, sortBy: prop_types_1.default.string, sortByOrder: types_1.fieldPropTypes.sortByOrder, source: prop_types_1.default.string.isRequired });
ReferenceArrayField.defaultProps = {
    addLabel: true,
};
var ReferenceArrayFieldView = function (props) {
    var children = props.children, pagination = props.pagination, className = props.className, resource = props.resource, reference = props.reference, rest = __rest(props, ["children", "pagination", "className", "resource", "reference"]);
    var loaded = (0, core_1.useListContext)(props).loaded;
    return (React.createElement(Root, null, !loaded ? (React.createElement(layout_1.LinearProgress, { className: classes.progress })) : (React.createElement(React.Fragment, null,
        (0, react_1.cloneElement)(react_1.Children.only(children), __assign(__assign({}, (0, sanitizeFieldRestProps_1.default)(rest)), { className: className, resource: resource })),
        pagination &&
            props.total !== undefined &&
            (0, react_1.cloneElement)(pagination, (0, sanitizeFieldRestProps_1.default)(rest))))));
};
exports.ReferenceArrayFieldView = ReferenceArrayFieldView;
exports.ReferenceArrayFieldView.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    data: prop_types_1.default.any,
    ids: prop_types_1.default.array,
    loaded: prop_types_1.default.bool,
    children: prop_types_1.default.element.isRequired,
    reference: prop_types_1.default.string.isRequired,
};
var PureReferenceArrayFieldView = (0, react_1.memo)(exports.ReferenceArrayFieldView);
exports.default = ReferenceArrayField;