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
var react_1 = require("react");
var inflection_1 = __importDefault(require("inflection"));
var core_1 = require("../../core");
var EditView_1 = require("./EditView");
var editFieldTypes_1 = __importDefault(require("./editFieldTypes"));
var EditViewGuesser = function (props) {
    var resource = (0, core_1.useResourceContext)(props);
    var record = (0, core_1.useEditContext)().record;
    var _a = (0, react_1.useState)(null), inferredChild = _a[0], setInferredChild = _a[1];
    (0, react_1.useEffect)(function () {
        if (record && !inferredChild) {
            var inferredElements = (0, core_1.getElementsFromRecords)([record], editFieldTypes_1.default);
            var inferredChild_1 = new core_1.InferredElement(editFieldTypes_1.default.form, null, inferredElements);
            process.env.NODE_ENV !== 'production' &&
                // eslint-disable-next-line no-console
                console.log("Guessed Edit:\n\nexport const ".concat(inflection_1.default.capitalize(inflection_1.default.singularize(resource)), "Edit = props => (\n    <Edit {...props}>\n").concat(inferredChild_1.getRepresentation(), "\n    </Edit>\n);"));
            setInferredChild(inferredChild_1.getElement());
        }
    }, [record, inferredChild, resource]);
    return React.createElement(EditView_1.EditView, __assign({}, props), inferredChild);
};
EditViewGuesser.propTypes = EditView_1.EditView.propTypes;
var EditGuesser = function (props) {
    var controllerProps = (0, core_1.useEditController)(props);
    return (React.createElement(core_1.EditContextProvider, { value: controllerProps },
        React.createElement(EditViewGuesser, __assign({}, props))));
};
exports.default = EditGuesser;
