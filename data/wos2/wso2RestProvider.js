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
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = require("query-string");
var fetch_1 = require("./fetch");
exports.default = (function (apiUrl, httpClient, countHeader) {
    if (httpClient === void 0) { httpClient = fetch_1.fetchJson; }
    if (countHeader === void 0) { countHeader = 'X-Total-Count'; }
    return ({
        getList: function (resource, params) {
            var _a = params.pagination, page = _a.page, perPage = _a.perPage;
            var _b = params.sort, field = _b.field, order = _b.order;
            var rangeStart = (page - 1) * perPage;
            var rangeEnd = page * perPage - 1;
            var query = {
                pageNumber: page,
                rowsPerPage: perPage,
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([rangeStart, rangeEnd]),
                filter: JSON.stringify(params.filter),
            };
            var url = "".concat(apiUrl, "/").concat(resource, "?").concat((0, query_string_1.stringify)(query));
            var options = countHeader === 'Content-Range'
                ? {
                    // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
                    headers: new Headers({
                        Range: "".concat(resource, "=").concat(rangeStart, "-").concat(rangeEnd),
                    }),
                }
                : {};
            return httpClient(url, options).then(function (response) {
                var _a;
                if (!response) {
                    return {};
                }
                var headers = response.headers, json = response.json;
                var total = 0;
                var err;
                try {
                    throw new Error('', { cause: null });
                }
                catch (e) {
                    err = e;
                }
                if (!headers.has(countHeader)) {
                    total = Array.isArray(json) ? json.length : ((_a = json.data) === null || _a === void 0 ? void 0 : _a.length) || 1;
                    /*
                    throw new Error(
                        `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
                    );
                    */
                }
                else if (countHeader === 'Content-Range') {
                    total = parseInt(headers.get('content-range').split('/').pop(), 10);
                }
                else {
                    total = parseInt(headers.get(countHeader.toLowerCase()));
                }
                return {
                    data: json,
                    total: 1000
                };
            });
        },
        getOne: function (resource, params) {
            return httpClient("".concat(apiUrl, "/").concat(resource, "/").concat(params.id)).then(function (_a) {
                var json = _a.json;
                return ({
                    data: json,
                });
            });
        },
        getMany: function (resource, params) {
            var query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            var url = "".concat(apiUrl, "/").concat(resource, "?").concat((0, query_string_1.stringify)(query));
            return httpClient(url).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        getManyReference: function (resource, params) {
            var _a;
            var _b = params.pagination, page = _b.page, perPage = _b.perPage;
            var _c = params.sort, field = _c.field, order = _c.order;
            var rangeStart = (page - 1) * perPage;
            var rangeEnd = page * perPage - 1;
            var query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
                filter: JSON.stringify(__assign(__assign({}, params.filter), (_a = {}, _a[params.target] = params.id, _a))),
            };
            var url = "".concat(apiUrl, "/").concat(resource, "?").concat((0, query_string_1.stringify)(query));
            var options = countHeader === 'Content-Range'
                ? {
                    // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
                    headers: new Headers({
                        Range: "".concat(resource, "=").concat(rangeStart, "-").concat(rangeEnd),
                    }),
                }
                : {};
            return httpClient(url, options).then(function (_a) {
                var headers = _a.headers, json = _a.json;
                if (!headers.has(countHeader)) {
                    throw new Error("The ".concat(countHeader, " header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ").concat(countHeader, " in the Access-Control-Expose-Headers header?"));
                }
                return {
                    data: json,
                    total: countHeader === 'Content-Range'
                        ? parseInt(headers.get('content-range').split('/').pop(), 10)
                        : parseInt(headers.get(countHeader.toLowerCase())),
                };
            });
        },
        update: function (resource, params) {
            return httpClient("".concat(apiUrl, "/").concat(resource, "/").concat(params.id), {
                method: 'PUT',
                body: JSON.stringify(params.data),
            }).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
        updateMany: function (resource, params) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient("".concat(apiUrl, "/").concat(resource, "/").concat(id), {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                });
            })).then(function (responses) { return ({ data: responses.map(function (_a) {
                    var json = _a.json;
                    return json.id;
                }) }); });
        },
        create: function (resource, params) {
            return httpClient("".concat(apiUrl, "/").concat(resource), {
                method: 'POST',
                body: JSON.stringify(params.data),
            }).then(function (_a) {
                var json = _a.json;
                return ({
                    data: __assign(__assign({}, params.data), { id: json.id }),
                });
            });
        },
        delete: function (resource, params) {
            return httpClient("".concat(apiUrl, "/").concat(resource, "/").concat(params.id), {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'text/plain',
                }),
            }).then(function (_a) {
                var json = _a.json;
                return ({ data: json });
            });
        },
        // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
        deleteMany: function (resource, params) {
            return Promise.all(params.ids.map(function (id) {
                return httpClient("".concat(apiUrl, "/").concat(resource, "/").concat(id), {
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'text/plain',
                    }),
                });
            })).then(function (responses) { return ({
                data: responses.map(function (_a) {
                    var json = _a.json;
                    return json.id;
                }),
            }); });
        }
    });
});
