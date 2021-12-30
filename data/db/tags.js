"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTags = void 0;
// --champagne-pink: #eddcd2ff;
// --linen: #fff1e6ff;
// --pale-pink: #fde2e4ff;
// --mimi-pink: #fad2e1ff;
// --powder-blue: #c5deddff;
// --mint-cream: #dbe7e4ff;
// --isabelline: #f0efebff;
// --alice-blue: #d6e2e9ff;
// --beau-blue: #bcd4e6ff;
// --pale-cerulean: #99c1deff;
var tags = [
    { id: 0, name: 'football-fan', color: '#eddcd2' },
    { id: 1, name: 'holiday-card', color: '#fff1e6' },
    { id: 2, name: 'influencer', color: '#fde2e4' },
    { id: 3, name: 'manager', color: '#fad2e1' },
    { id: 4, name: 'musician', color: '#c5dedd' },
    { id: 5, name: 'vip', color: '#dbe7e4' },
];
var generateTags = function (db) {
    return __spreadArray([], tags, true);
};
exports.generateTags = generateTags;
