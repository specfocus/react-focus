"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Step_1 = __importDefault(require("@mui/material/Step"));
var StepLabel_1 = __importDefault(require("@mui/material/StepLabel"));
var Stepper_1 = __importDefault(require("@mui/material/Stepper"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var FormTemplate_1 = __importDefault(require("./FormTemplate"));
var PagedFormTemplate = /** @class */ (function (_super) {
    __extends(PagedFormTemplate, _super);
    function PagedFormTemplate(props) {
        var _this = _super.call(this, props) || this;
        _this.next = function (values) {
            console.log(values);
            _this.setState(function (state) { return ({
                currPage: Math.min(state.currPage + 1, state.size),
                values: __assign(__assign({}, state.values), values)
            }); });
        };
        _this.previous = function () {
            return _this.setState(function (state) { return ({
                currPage: Math.max(state.currPage - 1, 0)
            }); });
        };
        _this.submitHelper = function (values) {
            var handleSubmit = _this.props.handleSubmit;
            var _a = _this.state, currPage = _a.currPage, size = _a.size;
            var isLastPage = currPage === size;
            if (isLastPage) {
                return handleSubmit(__assign(__assign({}, _this.state.values), values));
            }
            else {
                _this.next(values);
            }
        };
        _this.isSubset = function (values, initialValues) {
            if (!initialValues) {
                return false;
            }
            var keys = Object.keys(initialValues);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (!values[key]) {
                    return false;
                }
            }
            return true;
        };
        _this.getStepContent = function (index) {
            var _a = _this.props, data = _a.data, validationSchema = _a.validationSchema, initialValues = _a.initialValues;
            var _b = _this.state, size = _b.size, values = _b.values;
            var hasValues = _this.isSubset(values, initialValues[index]);
            return (react_1.default.createElement(FormTemplate_1.default, { data: data[index], validationSchema: validationSchema[index], initialValues: hasValues ? values : initialValues[index], handleSubmit: _this.submitHelper, submitButtonLabel: index === size ? 'Finish' : 'Next >>', handleCancel: _this.previous, cancelButtonLabel: '<< Back', cancelDisabled: index === 0 }));
        };
        var data = _this.props.data;
        _this.state = {
            currPage: 0,
            values: {},
            size: data ? data.length - 1 : 0
        };
        return _this;
    }
    Object.defineProperty(PagedFormTemplate, "propTypes", {
        get: function () {
            return {
                data: prop_types_1.default.array.isRequired,
                validationSchema: prop_types_1.default.any.isRequired,
                handleSubmit: prop_types_1.default.func.isRequired,
                initialValues: prop_types_1.default.any.isRequired,
                labels: prop_types_1.default.array
            };
        },
        enumerable: false,
        configurable: true
    });
    PagedFormTemplate.prototype.render = function () {
        var labels = this.props.labels;
        var _a = this.state, currPage = _a.currPage, size = _a.size;
        var actualLabels = labels || new Array(size + 1).fill('');
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Stepper_1.default, { activeStep: currPage, alternativeLabel: true }, actualLabels.map(function (label, index) {
                return (react_1.default.createElement(Step_1.default, { key: index },
                    react_1.default.createElement(StepLabel_1.default, null, label)));
            })),
            this.getStepContent(currPage)));
    };
    return PagedFormTemplate;
}(react_1.default.Component));
exports.default = PagedFormTemplate;
