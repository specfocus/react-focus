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
exports.DealListContent = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var DealColumn_1 = require("./DealColumn");
var stages_1 = require("./stages");
var initialDeals = stages_1.stages.reduce(function (obj, stage) {
    var _a;
    return (__assign(__assign({}, obj), (_a = {}, _a[stage] = [], _a)));
}, {});
var getDealsByColumn = function (ids, data) {
    // group deals by column
    var columns = ids.reduce(function (acc, id) {
        acc[data[id].stage].push(id);
        return acc;
    }, stages_1.stages.reduce(function (obj, stage) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[stage] = [], _a)));
    }, {}));
    // order each column by index
    stages_1.stages.forEach(function (stage) {
        columns[stage] = columns[stage].sort(function (a, b) { return data[a].index - data[b].index; });
    });
    return columns;
};
var DealListContent = function () {
    var _a = (0, app_1.useListContext)(), data = _a.data, ids = _a.ids, loaded = _a.loaded, page = _a.page, perPage = _a.perPage, currentSort = _a.currentSort, filterValues = _a.filterValues;
    var _b = (0, react_1.useState)(loaded ? getDealsByColumn(ids, data) : initialDeals), deals = _b[0], setDeals = _b[1];
    // we use the raw dataProvider to avoid too many updates to the Redux store after updates (which would create jank)
    var dataProvider = (0, react_1.useContext)(app_1.DataProviderContext);
    // FIXME: use refetch when available
    var refresh = (0, app_1.useMutation)({
        resource: 'deals',
        type: 'getList',
        payload: {
            pagination: { page: page, perPage: perPage },
            sort: currentSort,
            filter: filterValues,
        },
    })[0];
    // update deals by columns when the dataProvider response updates
    (0, react_1.useEffect)(function () {
        if (!loaded)
            return;
        var newDeals = getDealsByColumn(ids, data);
        if ((0, isEqual_1.default)(deals, newDeals)) {
            return;
        }
        setDeals(newDeals);
    }, [data, ids, loaded]); // eslint-disable-line react-hooks/exhaustive-deps
    if (!loaded)
        return null;
    var onDragEnd = function (result) { return __awaiter(void 0, void 0, void 0, function () {
        var destination, source, draggableId, column, sourceDeal_1, destinationDeal_1, columnDeals, sourceColumn, destinationColumn, sourceDeal_2, destinationDeal_2, _a, sourceDeals, destinationDeals;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    destination = result.destination, source = result.source, draggableId = result.draggableId;
                    if (!destination) {
                        return [2 /*return*/];
                    }
                    if (destination.droppableId === source.droppableId &&
                        destination.index === source.index) {
                        return [2 /*return*/];
                    }
                    if (!(source.droppableId === destination.droppableId)) return [3 /*break*/, 6];
                    column = Array.from(deals[source.droppableId]);
                    sourceDeal_1 = data[column[source.index]];
                    destinationDeal_1 = data[column[destination.index]];
                    // update local state
                    // remove source deal from column
                    column.splice(source.index, 1);
                    // readd source deal at destination
                    column.splice(destination.index, 0, Number(draggableId));
                    setDeals(__assign(__assign({}, deals), (_b = {}, _b[source.droppableId] = column, _b)));
                    return [4 /*yield*/, dataProvider.getList('deals', {
                            sort: { field: 'index', order: 'ASC' },
                            pagination: { page: 1, perPage: 100 },
                            filter: { stage: source.droppableId },
                        })];
                case 1:
                    columnDeals = (_d.sent()).data;
                    if (!(source.index > destination.index)) return [3 /*break*/, 3];
                    // deal moved up, eg
                    // dest   src
                    //  <------
                    // [4, 7, 23, 5]
                    return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], columnDeals
                            .filter(function (deal) {
                            return deal.index >= destinationDeal_1.index &&
                                deal.index < sourceDeal_1.index;
                        })
                            .map(function (deal) {
                            return dataProvider.update('deals', {
                                id: deal.id,
                                data: { index: deal.index + 1 },
                                previousData: deal,
                            });
                        }), true), [
                            // for the deal that was moved, update its index
                            dataProvider.update('deals', {
                                id: sourceDeal_1.id,
                                data: { index: destinationDeal_1.index },
                                previousData: sourceDeal_1,
                            }),
                        ], false))];
                case 2:
                    // deal moved up, eg
                    // dest   src
                    //  <------
                    // [4, 7, 23, 5]
                    _d.sent();
                    refresh();
                    return [3 /*break*/, 5];
                case 3: 
                // deal moved down, e.g
                // src   dest
                //  ------>
                // [4, 7, 23, 5]
                return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], columnDeals
                        .filter(function (deal) {
                        return deal.index <= destinationDeal_1.index &&
                            deal.index > sourceDeal_1.index;
                    })
                        .map(function (deal) {
                        return dataProvider.update('deals', {
                            id: deal.id,
                            data: { index: deal.index - 1 },
                            previousData: deal,
                        });
                    }), true), [
                        // for the deal that was moved, update its index
                        dataProvider.update('deals', {
                            id: sourceDeal_1.id,
                            data: { index: destinationDeal_1.index },
                            previousData: sourceDeal_1,
                        }),
                    ], false))];
                case 4:
                    // deal moved down, e.g
                    // src   dest
                    //  ------>
                    // [4, 7, 23, 5]
                    _d.sent();
                    refresh();
                    _d.label = 5;
                case 5: return [3 /*break*/, 9];
                case 6:
                    sourceColumn = Array.from(deals[source.droppableId]);
                    destinationColumn = Array.from(deals[destination.droppableId]);
                    sourceDeal_2 = data[sourceColumn[source.index]];
                    destinationDeal_2 = data[destinationColumn[destination.index]];
                    // update local state
                    sourceColumn.splice(source.index, 1);
                    destinationColumn.splice(destination.index, 0, draggableId);
                    setDeals(__assign(__assign({}, deals), (_c = {}, _c[source.droppableId] = sourceColumn, _c[destination.droppableId] = destinationColumn, _c)));
                    return [4 /*yield*/, Promise.all([
                            dataProvider.getList('deals', {
                                sort: { field: 'index', order: 'ASC' },
                                pagination: { page: 1, perPage: 100 },
                                filter: { stage: source.droppableId },
                            }),
                            dataProvider.getList('deals', {
                                sort: { field: 'index', order: 'ASC' },
                                pagination: { page: 1, perPage: 100 },
                                filter: { stage: destination.droppableId },
                            }),
                        ])];
                case 7:
                    _a = _d.sent(), sourceDeals = _a[0].data, destinationDeals = _a[1].data;
                    return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray(__spreadArray([], sourceDeals
                            .filter(function (deal) { return deal.index > sourceDeal_2.index; })
                            .map(function (deal) {
                            return dataProvider.update('deals', {
                                id: deal.id,
                                data: { index: deal.index - 1 },
                                previousData: deal,
                            });
                        }), true), destinationDeals
                            .filter(function (deal) {
                            return destinationDeal_2
                                ? deal.index >= destinationDeal_2.index
                                : false;
                        })
                            .map(function (deal) {
                            return dataProvider.update('deals', {
                                id: deal.id,
                                data: { index: deal.index + 1 },
                                previousData: deal,
                            });
                        }), true), [
                            // change the dragged deal to take the destination index and column
                            dataProvider.update('deals', {
                                id: sourceDeal_2.id,
                                data: {
                                    index: destinationDeal_2
                                        ? destinationDeal_2.index
                                        : destinationDeals.pop().index + 1,
                                    stage: destination.droppableId,
                                },
                                previousData: sourceDeal_2,
                            }),
                        ], false))];
                case 8:
                    _d.sent();
                    refresh();
                    _d.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: onDragEnd },
        React.createElement(material_1.Box, { display: "flex" }, stages_1.stages.map(function (stage) { return (React.createElement(DealColumn_1.DealColumn, { stage: stage, dealIds: deals[stage], data: data, key: stage })); }))));
};
exports.DealListContent = DealListContent;
