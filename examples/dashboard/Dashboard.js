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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var app_1 = require("../../app");
var material_1 = require("@mui/material");
var date_fns_1 = require("date-fns");
var Welcome_1 = __importDefault(require("./Welcome"));
var MonthlyRevenue_1 = __importDefault(require("./MonthlyRevenue"));
var NbNewOrders_1 = __importDefault(require("./NbNewOrders"));
var PendingOrders_1 = __importDefault(require("./PendingOrders"));
var PendingReviews_1 = __importDefault(require("./PendingReviews"));
var NewCustomers_1 = __importDefault(require("./NewCustomers"));
var OrderChart_1 = __importDefault(require("./OrderChart"));
var styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};
var Spacer = function () { return react_1.default.createElement("span", { style: { width: '1em' } }); };
var VerticalSpacer = function () { return react_1.default.createElement("span", { style: { height: '1em' } }); };
var Dashboard = function () {
    var _a = (0, react_1.useState)({}), state = _a[0], setState = _a[1];
    var version = (0, app_1.useVersion)();
    var dataProvider = (0, app_1.useDataProvider)();
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var isSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('lg');
    });
    var fetchOrders = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var aMonthAgo, recentOrders, aggregations, customers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    aMonthAgo = (0, date_fns_1.subDays)(new Date(), 30);
                    return [4 /*yield*/, dataProvider.getList('commands', {
                            filter: { date_gte: aMonthAgo.toISOString() },
                            sort: { field: 'date', order: 'DESC' },
                            pagination: { page: 1, perPage: 50 },
                        })];
                case 1:
                    recentOrders = (_a.sent()).data;
                    aggregations = recentOrders
                        .filter(function (order) { return order.status !== 'cancelled'; })
                        .reduce(function (stats, order) {
                        if (order.status !== 'cancelled') {
                            stats.revenue += order.total;
                            stats.nbNewOrders++;
                        }
                        if (order.status === 'ordered') {
                            stats.pendingOrders.push(order);
                        }
                        return stats;
                    }, {
                        revenue: 0,
                        nbNewOrders: 0,
                        pendingOrders: [],
                    });
                    setState(function (state) { return (__assign(__assign({}, state), { recentOrders: recentOrders, revenue: aggregations.revenue.toLocaleString(undefined, {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }), nbNewOrders: aggregations.nbNewOrders, pendingOrders: aggregations.pendingOrders })); });
                    return [4 /*yield*/, dataProvider.getMany('customers', {
                            ids: aggregations.pendingOrders.map(function (order) { return order.customer_id; }),
                        })];
                case 2:
                    customers = (_a.sent()).data;
                    setState(function (state) { return (__assign(__assign({}, state), { pendingOrdersCustomers: customers.reduce(function (prev, customer) {
                            prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                            return prev;
                        }, {}) })); });
                    return [2 /*return*/];
            }
        });
    }); }, [dataProvider]);
    var fetchReviews = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var reviews, nbPendingReviews, pendingReviews, customers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dataProvider.getList('reviews', {
                        filter: { status: 'pending' },
                        sort: { field: 'date', order: 'DESC' },
                        pagination: { page: 1, perPage: 100 },
                    })];
                case 1:
                    reviews = (_a.sent()).data;
                    nbPendingReviews = reviews.reduce(function (nb) { return ++nb; }, 0);
                    pendingReviews = reviews.slice(0, Math.min(10, reviews.length));
                    setState(function (state) { return (__assign(__assign({}, state), { pendingReviews: pendingReviews, nbPendingReviews: nbPendingReviews })); });
                    return [4 /*yield*/, dataProvider.getMany('customers', {
                            ids: pendingReviews.map(function (review) { return review.customer_id; }),
                        })];
                case 2:
                    customers = (_a.sent()).data;
                    setState(function (state) { return (__assign(__assign({}, state), { pendingReviewsCustomers: customers.reduce(function (prev, customer) {
                            prev[customer.id] = customer; // eslint-disable-line no-param-reassign
                            return prev;
                        }, {}) })); });
                    return [2 /*return*/];
            }
        });
    }); }, [dataProvider]);
    (0, react_1.useEffect)(function () {
        fetchOrders();
        fetchReviews();
    }, [version]); // eslint-disable-line react-hooks/exhaustive-deps
    var nbNewOrders = state.nbNewOrders, nbPendingReviews = state.nbPendingReviews, pendingOrders = state.pendingOrders, pendingOrdersCustomers = state.pendingOrdersCustomers, pendingReviews = state.pendingReviews, pendingReviewsCustomers = state.pendingReviewsCustomers, revenue = state.revenue, recentOrders = state.recentOrders;
    return isXSmall ? (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: styles.flexColumn },
            react_1.default.createElement(Welcome_1.default, null),
            react_1.default.createElement(MonthlyRevenue_1.default, { value: revenue }),
            react_1.default.createElement(VerticalSpacer, null),
            react_1.default.createElement(NbNewOrders_1.default, { value: nbNewOrders }),
            react_1.default.createElement(VerticalSpacer, null),
            react_1.default.createElement(PendingOrders_1.default, { orders: pendingOrders, customers: pendingOrdersCustomers })))) : isSmall ? (react_1.default.createElement("div", { style: styles.flexColumn },
        react_1.default.createElement("div", { style: styles.singleCol },
            react_1.default.createElement(Welcome_1.default, null)),
        react_1.default.createElement("div", { style: styles.flex },
            react_1.default.createElement(MonthlyRevenue_1.default, { value: revenue }),
            react_1.default.createElement(Spacer, null),
            react_1.default.createElement(NbNewOrders_1.default, { value: nbNewOrders })),
        react_1.default.createElement("div", { style: styles.singleCol },
            react_1.default.createElement(OrderChart_1.default, { orders: recentOrders })),
        react_1.default.createElement("div", { style: styles.singleCol },
            react_1.default.createElement(PendingOrders_1.default, { orders: pendingOrders, customers: pendingOrdersCustomers })))) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Welcome_1.default, null),
        react_1.default.createElement("div", { style: styles.flex },
            react_1.default.createElement("div", { style: styles.leftCol },
                react_1.default.createElement("div", { style: styles.flex },
                    react_1.default.createElement(MonthlyRevenue_1.default, { value: revenue }),
                    react_1.default.createElement(Spacer, null),
                    react_1.default.createElement(NbNewOrders_1.default, { value: nbNewOrders })),
                react_1.default.createElement("div", { style: styles.singleCol },
                    react_1.default.createElement(OrderChart_1.default, { orders: recentOrders })),
                react_1.default.createElement("div", { style: styles.singleCol },
                    react_1.default.createElement(PendingOrders_1.default, { orders: pendingOrders, customers: pendingOrdersCustomers }))),
            react_1.default.createElement("div", { style: styles.rightCol },
                react_1.default.createElement("div", { style: styles.flex },
                    react_1.default.createElement(PendingReviews_1.default, { nb: nbPendingReviews, reviews: pendingReviews, customers: pendingReviewsCustomers }),
                    react_1.default.createElement(Spacer, null),
                    react_1.default.createElement(NewCustomers_1.default, null))))));
};
exports.default = Dashboard;
