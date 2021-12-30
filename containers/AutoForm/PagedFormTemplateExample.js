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
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var react_1 = __importStar(require("react"));
var paged_form_template_example_1 = require("./forms/paged-form-template-example");
var PagedFormTemplate_1 = __importDefault(require("./PagedFormTemplate"));
var PagedFormTemplateExample = /** @class */ (function (_super) {
    __extends(PagedFormTemplateExample, _super);
    function PagedFormTemplateExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (data) {
            console.log(data);
        };
        _this.onSubmit = function (data) {
            console.log(data);
        };
        return _this;
    }
    PagedFormTemplateExample.prototype.render = function () {
        return (react_1.default.createElement(Grid_1.default, { container: true, justify: 'center' },
            react_1.default.createElement(Paper_1.default, { style: { padding: 16, width: '50%' } },
                react_1.default.createElement(PagedFormTemplate_1.default, { handleSubmit: this.handleSubmit, data: paged_form_template_example_1.data, validationSchema: paged_form_template_example_1.validationSchema, initialValues: paged_form_template_example_1.initialValues }))));
    };
    return PagedFormTemplateExample;
}(react_1.Component));
exports.default = PagedFormTemplateExample;
