"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
exports.default = (options) => {
    if (!options) {
        return new client_1.ApolloClient({
            cache: new client_1.InMemoryCache().restore({}),
        });
    }
    const { cache = new client_1.InMemoryCache().restore({}), uri, link = !!uri ? new client_1.HttpLink({ uri }) : undefined } = options, otherOptions = __rest(options, ["cache", "uri", "link"]);
    return new client_1.ApolloClient(Object.assign({ link,
        cache }, otherOptions));
};
