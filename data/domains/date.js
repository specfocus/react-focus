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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE_WEEKEND = exports.DATE_WEEKDAY = exports.DATE_WEDNESDAY = exports.DATE_TUESDAY = exports.DATE_SUNDAY = exports.DATE_SATURDAY = exports.DATE_MONDAY = exports.DATE_FRIDAY = exports.DATE_BACKWARD = exports.DATE_FORWARD = exports.DATE_ISO = void 0;
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
var date_fns_2 = require("date-fns");
var StringSchema_1 = require("../../lib/StringSchema");
exports.DATE_ISO = {
    format: 'date',
    mask: 'yyyy-MM-dd',
    dateFunsUtils: date_fns_1.default,
    label: 'Date',
    type: StringSchema_1.STRING_TYPE,
};
exports.DATE_FORWARD = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isPast)(date); } });
exports.DATE_BACKWARD = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isFuture)(date); } });
exports.DATE_FRIDAY = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isFriday)(date); }, label: 'Friday' });
exports.DATE_MONDAY = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isMonday)(date); }, label: 'Monday' });
exports.DATE_SATURDAY = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isSaturday)(date); }, label: 'Saturday' });
exports.DATE_SUNDAY = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isSunday)(date); }, label: 'Sunday' });
exports.DATE_TUESDAY = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isTuesday)(date); }, label: 'Tuesday' });
exports.DATE_WEDNESDAY = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isWednesday)(date); }, label: 'Wednesday' });
exports.DATE_WEEKDAY = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: date_fns_2.isWeekend, label: 'Weekday' });
exports.DATE_WEEKEND = __assign(__assign({}, exports.DATE_ISO), { shouldDisableDate: function (date) { return !(0, date_fns_2.isWeekend)(date); }, label: 'Weekend' });
