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
exports.generateSystemProps = exports.WIDTH = exports.HEIGHT = exports.WIDE = exports.TIGHT = exports.TALL = exports.SHORT = void 0;
exports.SHORT = 'short';
exports.TALL = 'tall';
exports.TIGHT = 'tight';
exports.WIDE = 'wide';
exports.HEIGHT = [0, 1, 2, 3];
exports.WIDTH = [0, 1, 2, 3];
var PRESETS = [
    [
        [3, [2, 3], [1, 1], [1, 1], [1, 1]],
        [
            [0, 0, 1],
            [0, 0, 2],
            [0, 0, 3]
        ]
    ],
    [
        [3, [2, 2], [1, 1], [1, 1]],
        [
            [0, 0, 1],
            [0, 0, 2]
        ]
    ],
    [
        [2, [1, 3], [1, 1], [1, 1], [1, 1]],
        [
            [0, 1],
            [0, 2],
            [0, 3],
        ]
    ],
    [
        [2, [1, 2], [1, 1], [1, 1]],
        [
            [0, 1],
            [0, 2]
        ]
    ],
    [
        [1, [1, 3], [1, 1], [1, 1], [1, 1]],
        [
            [0],
            [1],
            [2],
            [3]
        ]
    ],
    [
        [1, [1, 2], [1, 1], [1, 1]],
        [
            [0],
            [1],
            [2]
        ],
    ],
    [
        [3, [1, 1], [1, 1], [1, 1]],
        [
            [0, 1, 2]
        ]
    ],
    [
        [4, [1, 1], [1, 1], [1, 1]],
        [
            [0, 0, 1, 1],
            [3, 3, 2, 2]
        ]
    ],
    [
        [5, [2, 1], [2, 1], [1, 1]],
        [
            [0, 0, 1, 1, 2]
        ]
    ]
];
var AREA_PRESET_MAP = PRESETS.reduce(function (acc, _a) {
    var _b;
    var key = _a[0], areas = _a[1];
    return Object.assign(acc, (_b = {}, _b[JSON.stringify(key)] = areas.map(function (row) { return row.map(function (cell) { return "{".concat(cell, "}"); }).join(' '); }), _b));
}, {});
var MAX_BLOCK = 4;
var format = function (s, start, prefix) {
    if (prefix === void 0) { prefix = 'a'; }
    return s.replace(/{(\d+)}/g, function (match, index) { return "".concat(prefix).concat(start + Number(index)); });
};
var generateSystemProps = function (_a) {
    var width = _a[0], sizes = _a.slice(1);
    var rows = [];
    var _loop_1 = function (start) {
        if (sizes[start][0] === 0) {
            start++;
            return out_start_1 = start, "continue";
        }
        if (sizes[start][1] === 0) {
            rows.push(['auto', format("{".concat(start, "} ").repeat(width).trimEnd(), 0)]);
            start++;
            return out_start_1 = start, "continue";
        }
        var _loop_2 = function (len) {
            if (len === 0) {
                throw new Error("Could not find preset for ".concat(JSON.stringify([width, sizes])));
            }
            var slice = sizes.slice(start, start + len);
            var presetKey = JSON.stringify(__spreadArray([width], slice, true));
            var preset = AREA_PRESET_MAP[presetKey];
            if (preset) {
                Array.prototype.push.apply(rows, preset.map(function (row, i) { return [i === preset.length - 1 ? '1fr' : 'auto', format(row, start)]; }));
                start += len;
                return "break";
            }
        };
        for (var len = MAX_BLOCK;; len--) {
            var state_1 = _loop_2(len);
            if (state_1 === "break")
                break;
        }
        out_start_1 = start;
    };
    var out_start_1;
    for (var start = 0; start < sizes.length;) {
        _loop_1(start);
        start = out_start_1;
    }
    var gridTemplateAreas = rows.map(function (_a) {
        var h = _a[0], t = _a[1];
        return "\"".concat(t, "\"");
    }).join('\n');
    var gridTemplateRows = rows.map(function (_a) {
        var h = _a[0], t = _a[1];
        return h;
    }).join(' ');
    var gridTemplateColumns = "repeat(".concat(width, ", minmax(0, 1fr))");
    return ({
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateAreas: gridTemplateAreas,
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
    });
};
exports.generateSystemProps = generateSystemProps;
