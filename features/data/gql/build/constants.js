"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_TYPES = exports.MUTATION_TYPES = exports.QUERY_TYPES = void 0;
const core_1 = require("../../../core");
exports.QUERY_TYPES = [core_1.GET_LIST, core_1.GET_MANY, core_1.GET_MANY_REFERENCE, core_1.GET_ONE];
exports.MUTATION_TYPES = [
    core_1.CREATE,
    core_1.UPDATE,
    core_1.DELETE,
    core_1.UPDATE_MANY,
    core_1.DELETE_MANY,
];
exports.ALL_TYPES = exports.QUERY_TYPES.concat(exports.MUTATION_TYPES);
