"use strict";
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
var react_1 = require("@testing-library/react");
var SimpleShowLayout_1 = __importDefault(require("./SimpleShowLayout"));
var TextField_1 = __importDefault(require("../field/TextField"));
describe('<SimpleShowLayout />', function () {
    it('should display children inputs of SimpleShowLayout', function () {
        var queryByText = (0, react_1.render)(React.createElement(SimpleShowLayout_1.default, { record: { foo: 'foo', bar: 'bar' } },
            React.createElement(TextField_1.default, { source: "foo" }),
            React.createElement(TextField_1.default, { source: "bar" }))).queryByText;
        expect(queryByText('foo')).not.toBeNull();
        expect(queryByText('bar')).not.toBeNull();
    });
});
