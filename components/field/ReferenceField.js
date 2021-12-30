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
exports.ReferenceFieldView = exports.NonEmptyReferenceField = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash/get"));
var material_1 = require("@mui/material");
var Error_1 = __importDefault(require("@mui/icons-material/Error"));
var react_redux_1 = require("react-redux");
var core_1 = require("../../core");
var LinearProgress_1 = __importDefault(require("../layout/LinearProgress"));
var Link_1 = __importDefault(require("../Link"));
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var types_1 = require("./types");
var PREFIX = 'RaReferenceField';
var classes = {
    link: "".concat(PREFIX, "-link"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(classes.link)] = {
            color: theme.palette.primary.main,
        },
        _b);
});
/**
 * Fetch reference record, and delegate rendering to child component.
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * By default, includes a link to the <Edit> page of the related record
 * (`/users/:userId` in the previous example).
 *
 * Set the `link` prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link="show">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * You can also prevent `<ReferenceField>` from adding link to children by setting
 * `link` to false.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link={false}>
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * Alternatively, you can also pass a custom function to `link`. It must take reference and record
 * as arguments and return a string
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link={(record, reference) => "/path/to/${reference}/${record}"}>
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * In previous versions of React-Admin, the prop `linkType` was used. It is now deprecated and replaced with `link`. However
 * backward-compatibility is still kept
 */
var ReferenceField = function (props) {
    var source = props.source, emptyText = props.emptyText, rest = __rest(props, ["source", "emptyText"]);
    var record = (0, core_1.useRecordContext)(props);
    var isReferenceDeclared = (0, react_redux_1.useSelector)(function (state) { return typeof state.admin.resources[props.reference] !== 'undefined'; });
    if (!isReferenceDeclared) {
        throw new Error("You must declare a <Resource name=\"".concat(props.reference, "\"> in order to use a <ReferenceField reference=\"").concat(props.reference, "\">"));
    }
    return (0, get_1.default)(record, source) == null ? (emptyText ? (React.createElement(material_1.Typography, { component: "span", variant: "body2" }, emptyText)) : null) : (React.createElement(exports.NonEmptyReferenceField, __assign({}, rest, { record: record, source: source })));
};
ReferenceField.propTypes = {
    addLabel: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    cellClassName: prop_types_1.default.string,
    headerClassName: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element]),
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sortBy: prop_types_1.default.string,
    sortByOrder: types_1.fieldPropTypes.sortByOrder,
    source: prop_types_1.default.string.isRequired,
    translateChoice: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    linkType: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    link: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]).isRequired,
};
ReferenceField.defaultProps = {
    addLabel: true,
    link: 'edit',
};
/**
 * This intermediate component is made necessary by the useReference hook,
 * which cannot be called conditionally when get(record, source) is empty.
 */
var NonEmptyReferenceField = function (_a) {
    var children = _a.children, record = _a.record, source = _a.source, props = __rest(_a, ["children", "record", "source"]);
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceField> only accepts a single child');
    }
    var basePath = props.basePath, resource = props.resource, reference = props.reference;
    var resourceLinkPath = (0, core_1.getResourceLinkPath)(__assign(__assign({}, props), { resource: resource, record: record, source: source, basePath: basePath }));
    return (React.createElement(core_1.ResourceContextProvider, { value: reference },
        React.createElement(PureReferenceFieldView, __assign({}, props, (0, core_1.useReference)({
            reference: reference,
            id: (0, get_1.default)(record, source),
        }), { resourceLinkPath: resourceLinkPath }), children)));
};
exports.NonEmptyReferenceField = NonEmptyReferenceField;
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
var ReferenceFieldView = function (props) {
    var basePath = props.basePath, children = props.children, className = props.className, error = props.error, loaded = props.loaded, loading = props.loading, record = props.record, reference = props.reference, referenceRecord = props.referenceRecord, refetch = props.refetch, resource = props.resource, resourceLinkPath = props.resourceLinkPath, source = props.source, _a = props.translateChoice, translateChoice = _a === void 0 ? false : _a, rest = __rest(props, ["basePath", "children", "className", "error", "loaded", "loading", "record", "reference", "referenceRecord", "refetch", "resource", "resourceLinkPath", "source", "translateChoice"]);
    if (error) {
        return (
        /* eslint-disable jsx-a11y/role-supports-aria-props */
        React.createElement(Error_1.default, { "aria-errormessage": error.message ? error.message : error, role: "presentation", color: "error", fontSize: "small" })
        /* eslint-enable */
        );
    }
    if (!loaded) {
        return React.createElement(LinearProgress_1.default, null);
    }
    if (!referenceRecord) {
        return null;
    }
    if (resourceLinkPath) {
        return (React.createElement(Root, null,
            React.createElement(core_1.RecordContextProvider, { value: referenceRecord },
                React.createElement(Link_1.default, { to: resourceLinkPath, className: className, onClick: stopPropagation }, (0, react_1.cloneElement)(react_1.Children.only(children), __assign({ className: (0, classnames_1.default)(children.props.className, classes.link // force color override for Typography components
                    ), record: referenceRecord, refetch: refetch, resource: reference, basePath: basePath, translateChoice: translateChoice }, (0, sanitizeFieldRestProps_1.default)(rest)))))));
    }
    return (React.createElement(core_1.RecordContextProvider, { value: referenceRecord }, (0, react_1.cloneElement)(react_1.Children.only(children), __assign({ record: referenceRecord, resource: reference, basePath: basePath, translateChoice: translateChoice }, (0, sanitizeFieldRestProps_1.default)(rest)))));
};
exports.ReferenceFieldView = ReferenceFieldView;
exports.ReferenceFieldView.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    loading: prop_types_1.default.bool,
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string,
    referenceRecord: prop_types_1.default.any,
    resource: prop_types_1.default.string,
    resourceLinkPath: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.oneOf([false]),
    ]),
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
var PureReferenceFieldView = (0, react_1.memo)(exports.ReferenceFieldView);
exports.default = ReferenceField;
