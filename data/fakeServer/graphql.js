"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var json_graphql_server_1 = __importDefault(require("json-graphql-server"));
var db_1 = __importDefault(require("../../data/db"));
var fetch_mock_1 = __importDefault(require("fetch-mock"));
exports.default = (function () {
    var data = (0, db_1.default)({ serializeDate: false });
    var restServer = (0, json_graphql_server_1.default)({ data: data });
    var handler = restServer.getHandler();
    var handlerWithLogs = function (url, opts) {
        return handler(url, opts).then(function (res) {
            var req = JSON.parse(opts.body);
            var parsedRes = JSON.parse(res.body);
            console.groupCollapsed("GraphQL ".concat(req.operationName));
            console.group('request');
            console.log('operationName', req.operationName);
            console.log(req.query);
            console.log('variables', req.variables);
            console.groupEnd();
            console.group('response');
            console.log('data', parsedRes.data);
            console.log('errors', parsedRes.errors);
            console.groupEnd();
            console.groupEnd();
            return res;
        });
    };
    fetch_mock_1.default.mock('begin:http://localhost:4000', handlerWithLogs);
    return function () { return fetch_mock_1.default.restore(); };
});
