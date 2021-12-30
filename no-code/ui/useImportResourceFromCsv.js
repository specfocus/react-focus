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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImportResourceFromCsv = void 0;
var react_1 = require("react");
var papaparse_1 = require("papaparse");
var core_1 = require("../../core");
var set_1 = __importDefault(require("lodash/set"));
var ResourceConfiguration_1 = require("../ResourceConfiguration");
/**
 * This hooks returns a tuple with its first element being a boolean indicating whether an import is ongoing, and the second element a function to call with a resource name and a file to import.
 *
 * @param onImportCompleted A function called once the import is completed. Receive an object containing the resource imported and the resourceAlreadyExists boolean.
 * @returns {[boolean, ImportResource]}
 */
var useImportResourceFromCsv = function () {
    var _a = (0, react_1.useState)(false), parsing = _a[0], setParsing = _a[1];
    var dataProvider = (0, core_1.useDataProvider)();
    var _b = (0, ResourceConfiguration_1.useResourcesConfiguration)(), resources = _b[0], addResource = _b[1].addResource;
    var importResource = function (resource, file) { return __awaiter(void 0, void 0, void 0, function () {
        var resourceAlreadyExists, _a, data, meta, records, fields;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setParsing(true);
                    resourceAlreadyExists = !!resources[resource];
                    return [4 /*yield*/, parseCSV(file)];
                case 1:
                    _a = _b.sent(), data = _a.data, meta = _a.meta;
                    records = sanitizeRecords(data.filter(function (record) { return !!record.id; }), meta);
                    return [4 /*yield*/, Promise.all(records.map(function (record) {
                            return dataProvider
                                .create(resource, {
                                data: record,
                            })
                                .catch(function (error) {
                                // Ignore errors while adding a single record
                                console.error("Error while importing record ".concat(JSON.stringify(record, null, 4)));
                            });
                        }))];
                case 2:
                    _b.sent();
                    setParsing(false);
                    fields = (0, ResourceConfiguration_1.getFieldDefinitionsFromRecords)(records);
                    addResource({ name: resource, fields: fields });
                    return [2 /*return*/, { resource: resource, resourceAlreadyExists: resourceAlreadyExists }];
            }
        });
    }); };
    return [parsing, importResource];
};
exports.useImportResourceFromCsv = useImportResourceFromCsv;
var parseCSV = function (file) {
    return new Promise(function (resolve, reject) {
        (0, papaparse_1.parse)(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (_a) {
                var data = _a.data, meta = _a.meta;
                return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        resolve({ data: data, meta: meta });
                        return [2 /*return*/];
                    });
                });
            },
            error: function (error) {
                reject(error);
            },
        });
    });
};
var sanitizeRecords = function (records, _a) {
    var fields = _a.fields;
    var values = (0, core_1.getValuesFromRecords)(records);
    return fields.reduce(function (newRecords, field) { return sanitizeRecord(newRecords, values, field); }, __spreadArray([], records, true));
};
var sanitizeRecord = function (records, values, field) {
    if (field.split('.').length > 1) {
        return records.map(function (record) {
            var _a = record, _b = field, pathField = _a[_b], newRecord = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return (0, set_1.default)(newRecord, field, record[field]);
        });
    }
    var fieldValues = values[field];
    if (fieldValues.some(function (value) {
        return ['false', 'true'].includes(value.toString().toLowerCase());
    })) {
        return records.map(function (record) {
            return (0, set_1.default)(record, field, Boolean(record[field]));
        });
    }
    return records;
};
