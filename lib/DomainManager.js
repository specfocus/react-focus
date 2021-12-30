"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticDomainManager = void 0;
var ArraySchema_1 = require("./ArraySchema");
var BooleanSchema_1 = require("./BooleanSchema");
var NumberSchema_1 = require("./NumberSchema");
var ObjectSchema_1 = require("./ObjectSchema");
var StringSchema_1 = require("./StringSchema");
var StaticDomainManager = /** @class */ (function () {
    function StaticDomainManager(domains) {
        this.domains = domains;
    }
    StaticDomainManager.prototype.query = function (schema) {
        var domain = null;
        switch (schema.type) {
            case ArraySchema_1.ARRAY_TYPE:
                if (schema.items.domain) {
                    domain = this.domains[schema.items.domain] || null;
                }
                break;
            case BooleanSchema_1.BOOLEAN_TYPE:
                break;
            case NumberSchema_1.NUMBER_TYPE:
                if (schema.domain) {
                    domain = this.domains[schema.domain] || null;
                }
                break;
            case StringSchema_1.STRING_TYPE:
                if (schema.domain) {
                    domain = this.domains[schema.domain] || null;
                }
                break;
            case ObjectSchema_1.OBJECT_TYPE:
                if (schema.domain) {
                    domain = this.domains[schema.domain] || null;
                }
                break;
            default:
                break;
        }
        return domain;
    };
    StaticDomainManager.prototype.store = function (name, domain) {
        this.domains[name] = domain;
    };
    StaticDomainManager.instance = new StaticDomainManager({});
    return StaticDomainManager;
}());
exports.StaticDomainManager = StaticDomainManager;
