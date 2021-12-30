"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fakerest_1 = __importDefault(require("fakerest"));
var fetch_mock_1 = __importDefault(require("fetch-mock"));
var db_1 = __importDefault(require("../../data/db"));
exports.default = (function () {
    var data = (0, db_1.default)({ serializeDate: true });
    var restServer = new fakerest_1.default.FetchServer('http://localhost:4000');
    if (window) {
        window.restServer = restServer; // give way to update data in the console
    }
    restServer.init(data);
    restServer.toggleLogging(); // logging is off by default, enable it
    fetch_mock_1.default.mock('begin:http://localhost:4000', restServer.getHandler());
    return function () { return fetch_mock_1.default.restore(); };
});
