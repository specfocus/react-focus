"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
exports.ALL_TYPES = exports.MUTATION_TYPES = exports.QUERY_TYPES = void 0;
const merge_1 = __importDefault(require("lodash/merge"));
const get_1 = __importDefault(require("lodash/get"));
const pluralize_1 = __importDefault(require("pluralize"));
const core_1 = require("../../../features/core");
const buildApolloClient_1 = __importDefault(require("./buildApolloClient"));
const constants_1 = require("./constants");
const introspection_1 = require("./introspection");
__exportStar(require("./introspection"), exports);
exports.QUERY_TYPES = constants_1.QUERY_TYPES;
exports.MUTATION_TYPES = constants_1.MUTATION_TYPES;
exports.ALL_TYPES = constants_1.ALL_TYPES;
const RaFetchMethodMap = {
    getList: core_1.GET_LIST,
    getMany: core_1.GET_MANY,
    getManyReference: core_1.GET_MANY_REFERENCE,
    getOne: core_1.GET_ONE,
    create: core_1.CREATE,
    delete: core_1.DELETE,
    deleteMany: core_1.DELETE_MANY,
    update: core_1.UPDATE,
    updateMany: core_1.UPDATE_MANY,
};
const defaultOptions = {
    resolveIntrospection: introspection_1.introspectSchema,
    introspection: {
        operationNames: {
            [core_1.GET_LIST]: resource => `all${(0, pluralize_1.default)(resource.name)}`,
            [core_1.GET_ONE]: resource => `${resource.name}`,
            [core_1.GET_MANY]: resource => `all${(0, pluralize_1.default)(resource.name)}`,
            [core_1.GET_MANY_REFERENCE]: resource => `all${(0, pluralize_1.default)(resource.name)}`,
            [core_1.CREATE]: resource => `create${resource.name}`,
            [core_1.UPDATE]: resource => `update${resource.name}`,
            [core_1.DELETE]: resource => `delete${resource.name}`,
        },
        exclude: undefined,
        include: undefined,
    },
};
const getOptions = (options, raFetchMethod, resource) => {
    if (typeof options === 'function') {
        return options(resource, raFetchMethod);
    }
    return options;
};
exports.default = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = (0, merge_1.default)({}, defaultOptions, options), { client: clientObject, clientOptions, introspection, resolveIntrospection, buildQuery: buildQueryFactory, override = {} } = _a, otherOptions = __rest(_a, ["client", "clientOptions", "introspection", "resolveIntrospection", "buildQuery", "override"]);
    if (override && process.env.NODE_ENV === 'production') {
        console.warn(
        // eslint-disable-line
        'The override option is deprecated. You should instead wrap the buildQuery function provided by the dataProvider you use.');
    }
    const client = clientObject || (0, buildApolloClient_1.default)(clientOptions);
    let introspectionResults;
    const raDataProvider = new Proxy(defaultDataProvider, {
        get: (target, name) => {
            if (typeof name === 'symbol' || name === 'then') {
                return;
            }
            const raFetchMethod = RaFetchMethodMap[name];
            return (resource, params) => __awaiter(void 0, void 0, void 0, function* () {
                if (introspection) {
                    introspectionResults = yield resolveIntrospection(client, introspection);
                }
                const buildQuery = buildQueryFactory(introspectionResults);
                const overriddenBuildQuery = (0, get_1.default)(override, `${resource}.${raFetchMethod}`);
                try {
                    const _a = overriddenBuildQuery
                        ? Object.assign(Object.assign({}, buildQuery(raFetchMethod, resource, params)), overriddenBuildQuery(params)) : buildQuery(raFetchMethod, resource, params), { parseResponse } = _a, query = __rest(_a, ["parseResponse"]);
                    const operation = getQueryOperation(query.query);
                    if (operation === 'query') {
                        const apolloQuery = Object.assign(Object.assign(Object.assign({}, query), { fetchPolicy: 'network-only' }), getOptions(otherOptions.query, raFetchMethod, resource));
                        return (client
                            // @ts-ignore
                            .query(apolloQuery)
                            .then(response => parseResponse(response)));
                    }
                    const apolloQuery = Object.assign({ mutation: query.query, variables: query.variables }, getOptions(otherOptions.mutation, raFetchMethod, resource));
                    return (client
                        // @ts-ignore
                        .mutate(apolloQuery)
                        .then(parseResponse));
                }
                catch (e) {
                    return Promise.reject(e);
                }
            });
        },
    });
    return raDataProvider;
});
const getQueryOperation = query => {
    if (query && query.definitions && query.definitions.length > 0) {
        return query.definitions[0].operation;
    }
    throw new Error('Unable to determine the query operation');
};
// Only used to initialize proxy
const defaultDataProvider = {
    create: () => Promise.resolve({ data: null }),
    delete: () => Promise.resolve({ data: null }),
    deleteMany: () => Promise.resolve({ data: [] }),
    getList: () => Promise.resolve({ data: [], total: 0 }),
    getMany: () => Promise.resolve({ data: [] }),
    getManyReference: () => Promise.resolve({ data: [], total: 0 }),
    getOne: () => Promise.resolve({ data: null }),
    update: () => Promise.resolve({ data: null }),
    updateMany: () => Promise.resolve({ data: [] }), // avoids adding a context in tests
};
