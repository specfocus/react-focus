"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResourceExcluded = exports.isResourceIncluded = exports.introspectSchema = void 0;
const graphql_1 = require("graphql");
const client_1 = require("@apollo/client");
const constants_1 = require("./constants");
let introspectionPromise;
/**
 * @param {ApolloClient} client The Apollo client
 * @param {Object} options The introspection options
 */
const introspectSchema = (client, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (introspectionPromise) {
        return introspectionPromise;
    }
    introspectionPromise = runSchemaIntrospection(client, options);
    return introspectionPromise;
});
exports.introspectSchema = introspectSchema;
const runSchemaIntrospection = (client, options) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = options.schema ? options.schema : yield fetchSchema(client);
    const queries = getQueriesFromSchema(schema);
    const types = getTypesFromSchema(schema);
    const resources = getResources(types, queries, options);
    return {
        types,
        queries,
        resources,
        schema,
    };
});
const fetchSchema = (client) => {
    return client
        .query({
        fetchPolicy: 'network-only',
        query: (0, client_1.gql) `
                ${(0, graphql_1.getIntrospectionQuery)()}
            `,
    })
        .then(({ data: { __schema } }) => __schema);
};
const getQueriesFromSchema = (schema) => {
    return schema.types.reduce((acc, type) => {
        var _a, _b;
        if (type.name !== ((_a = schema.queryType) === null || _a === void 0 ? void 0 : _a.name) &&
            type.name !== ((_b = schema.mutationType) === null || _b === void 0 ? void 0 : _b.name) &&
            type.fields) {
            return acc;
        }
        return [...acc, ...(type.fields || [])];
    }, []);
};
const getTypesFromSchema = (schema) => {
    return schema.types.filter(type => type.name !== (schema.queryType && schema.queryType.name) &&
        type.name !== (schema.mutationType && schema.mutationType.name));
};
const getResources = (types, queries, options) => {
    const filteredResources = types.filter(type => isResource(type, queries, options));
    return filteredResources.map(type => buildResource(type, queries, options));
};
const isResource = (type, queries, options) => {
    if ((0, exports.isResourceIncluded)(type, options))
        return true;
    if ((0, exports.isResourceExcluded)(type, options))
        return false;
    const operations = Object.keys(options.operationNames).map(operation => options.operationNames[operation](type));
    const hasAtLeastOneOperation = operations.some(operation => queries.find(({ name }) => name === operation));
    return hasAtLeastOneOperation;
};
const isResourceIncluded = (type, { include } = {}) => {
    if (Array.isArray(include)) {
        return include.includes(type.name);
    }
    if (typeof include === 'function') {
        return include(type);
    }
    return false;
};
exports.isResourceIncluded = isResourceIncluded;
const isResourceExcluded = (type, { exclude } = {}) => {
    if (Array.isArray(exclude)) {
        return exclude.includes(type.name);
    }
    if (typeof exclude === 'function') {
        return exclude(type);
    }
    return false;
};
exports.isResourceExcluded = isResourceExcluded;
const buildResource = (type, queries, options) => {
    return constants_1.ALL_TYPES.reduce((acc, raFetchMethod) => {
        const query = queries.find(({ name }) => options.operationNames[raFetchMethod] &&
            name === options.operationNames[raFetchMethod](type));
        if (!query)
            return acc;
        return Object.assign(Object.assign({}, acc), { [raFetchMethod]: query });
    }, { type });
};
