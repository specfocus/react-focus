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
exports.SearchWidget = exports.SearchMenu = exports.SearchControl = exports.SearchButton = exports.SearchBox = exports.SEARCH_WIDGET = void 0;
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
// import Divider from '@mui/material/Divider';
var Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
var ClearAll_1 = __importDefault(require("@mui/icons-material/ClearAll"));
// import DirectionsIcon from '@mui/icons-material/Directions';
var material_1 = require("@mui/material");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var InputBase_1 = __importDefault(require("@mui/material/InputBase"));
var Menu_2 = __importDefault(require("@mui/material/Menu"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("@mui/styles");
var react_1 = __importStar(require("react"));
var recoil_1 = require("recoil");
var AppState_1 = require("../app/AppState");
var TranslatedTooltip_1 = __importDefault(require("../components/TranslatedTooltip"));
var Widget_1 = __importDefault(require("../containers/Layout/Widget"));
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Grid_1 = __importDefault(require("@mui/material/Grid"));
var Accordion_1 = __importDefault(require("@mui/material/Accordion"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
var AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
exports.SEARCH_WIDGET = 'SEARCH_WIDGET';
function removeAt(source, index) {
    var result = source.slice(0, index);
    Array.prototype.push.apply(result, source.slice(index + 1));
    return result;
}
var useSearch = function () {
    var setHistory = (0, recoil_1.useSetRecoilState)(AppState_1.appSearchHistory);
    return (0, react_1.useCallback)(function (input) {
        setHistory(function (history) {
            var index = history.indexOf(input);
            if (index < 0) {
                return __spreadArray([input], history, true);
            }
            if (index > 0) {
                var next = removeAt(history, index);
                next.unshift(input);
                return next;
            }
            return history;
        });
    }, [setHistory]);
};
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}); });
var SearchBox = function (_a) {
    var onMenuClick = _a.onMenuClick, props = __rest(_a, ["onMenuClick"]);
    var _b = (0, recoil_1.useRecoilState)(AppState_1.appSearchInput), input = _b[0], setInput = _b[1];
    var resetInput = (0, recoil_1.useResetRecoilState)(AppState_1.appSearchInput);
    var handleChange = (0, react_1.useCallback)(function (event) { return setInput(event.target.value); }, [setInput]);
    var search = useSearch();
    var handleSearch = (0, react_1.useCallback)(function () {
        search(input);
        resetInput();
    }, [input, resetInput, search]);
    var handleKeyPress = (0, react_1.useCallback)(function (event) {
        if (event.code === 'Enter') {
            search(input);
            resetInput();
        }
    }, [input, resetInput, search]);
    var classes = useStyles();
    return (react_1.default.createElement(Paper_1.default, { className: classes.root },
        onMenuClick && (react_1.default.createElement(IconButton_1.default, { className: classes.iconButton, 
            // disabled={!history.length}
            onClick: onMenuClick, "aria-label": "menu" },
            react_1.default.createElement(Menu_1.default, null))),
        react_1.default.createElement(InputBase_1.default, __assign({}, props, { className: classes.input, placeholder: "Search", inputProps: { 'aria-label': 'search' }, onChange: handleChange, onKeyPress: handleKeyPress, value: input })),
        react_1.default.createElement(IconButton_1.default, { className: classes.iconButton, disabled: !input, onClick: handleSearch, "aria-label": "search" },
            react_1.default.createElement(Search_1.default, null))));
};
exports.SearchBox = SearchBox;
var SearchButton = function (props) {
    return (react_1.default.createElement(TranslatedTooltip_1.default, { key: "data-search-button", title: "Search" },
        react_1.default.createElement(IconButton_1.default, __assign({ color: "inherit" }, props, { "aria-label": "search" }),
            react_1.default.createElement(Search_1.default, null))));
};
exports.SearchButton = SearchButton;
var SearchControl = function () {
    var _a = (0, recoil_1.useRecoilState)(AppState_1.appWidget), widget = _a[0], setWidget = _a[1];
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleMenu = (0, react_1.useCallback)(function (event) { return setAnchorEl(event.currentTarget); }, [setAnchorEl]);
    var handleClose = (0, react_1.useCallback)(function () { return setAnchorEl(null); }, [setAnchorEl]);
    var handleWidget = (0, react_1.useCallback)(function () {
        setAnchorEl(null);
        setWidget(exports.SEARCH_WIDGET);
    }, [setAnchorEl, setWidget]);
    var isSmall = (0, material_1.useMediaQuery)(function (theme) { return theme.breakpoints.down('md'); });
    (0, react_1.useEffect)(function () {
        if (isSmall) {
            handleClose();
        }
    }, [isSmall]);
    if (isSmall || widget === exports.SEARCH_WIDGET) {
        return (react_1.default.createElement(exports.SearchButton, { disabled: widget === exports.SEARCH_WIDGET, onClick: handleWidget }));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(exports.SearchBox, { onMenuClick: handleMenu }),
        react_1.default.createElement(exports.SearchMenu, { anchorEl: anchorEl, onBlur: handleClose, onClose: handleClose, onWidget: handleWidget, open: Boolean(anchorEl) })));
};
exports.SearchControl = SearchControl;
var SearchMenu = function (_a) {
    var onClose = _a.onClose, onWidget = _a.onWidget, props = __rest(_a, ["onClose", "onWidget"]);
    var history = (0, recoil_1.useRecoilValue)(AppState_1.appSearchHistory);
    var _b = (0, recoil_1.useRecoilState)(AppState_1.appSearchInput), input = _b[0], setInput = _b[1];
    return (react_1.default.createElement(Menu_2.default, __assign({ key: "table-row-density-menu", id: "density-menu", variant: "selectedMenu", anchorEl: null, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        }, keepMounted: true }, props),
        react_1.default.createElement(MenuItem_1.default, { key: "search-widget", onClick: function (event) {
                onWidget();
            } },
            react_1.default.createElement(Typography_1.default, { variant: "caption", sx: { flexGrow: 1 } }, "Expand"),
            react_1.default.createElement(ChevronRight_1.default, { sx: { flexGrow: 0 } })),
        react_1.default.createElement(Divider_1.default, null),
        history.map(function (text, index) { return (react_1.default.createElement(MenuItem_1.default, { key: "search-history-".concat(index), onClick: function (event) {
                setInput(text);
                onClose(event, "escapeKeyDown");
            }, selected: text === input },
            react_1.default.createElement(Typography_1.default, { variant: "inherit" }, text))); })));
};
exports.SearchMenu = SearchMenu;
var SearchWidget = function (_a) {
    var onClose = _a.onClose;
    var resetHistory = (0, recoil_1.useResetRecoilState)(AppState_1.appSearchHistory);
    var resetInput = (0, recoil_1.useResetRecoilState)(AppState_1.appSearchInput);
    var reducer = function (state, action) {
        switch (action.type) {
            case 'CLEAR_ALL':
                resetInput();
                resetHistory();
                break;
            case 'CLOSE':
                onClose();
                break;
        }
        return state;
    };
    var _b = (0, recoil_1.useRecoilState)(AppState_1.appSearchHistory), history = _b[0], setHistory = _b[1];
    var search = useSearch();
    var handleDelete = (0, react_1.useCallback)(function (index) {
        console.log('delete', index);
        setHistory(removeAt(history, index));
    }, [history, removeAt, setHistory]);
    var _c = react_1.default.useState(), expanded = _c[0], setExpanded = _c[1];
    var handleExpand = function (panel) { return function (event, isExpanded) {
        setExpanded(isExpanded ? panel : false);
    }; };
    var searchResults = (0, recoil_1.useRecoilValue)(AppState_1.appSearchResults);
    var active = history[0];
    var results = searchResults[active === null || active === void 0 ? void 0 : active.toLowerCase()] || [];
    return (react_1.default.createElement(Widget_1.default, { actions: {
            clearAll: {
                action: { type: 'CLEAR_ALL' },
                icon: ClearAll_1.default,
                label: 'Clear All'
            },
            close: {
                action: { type: 'CLOSE' },
                icon: Close_1.default,
                label: 'Close',
            }
        }, icon: Search_1.default, maxWidth: "sm", reducer: reducer, title: "Search" },
        react_1.default.createElement(Stack_1.default, { spacing: 1, sx: { flexGrow: 1, overflowY: 'hidden' } },
            react_1.default.createElement(exports.SearchBox, null),
            react_1.default.createElement(Grid_1.default, { container: true, direction: "row", spacing: 1 }, history.map(function (text, idx) { return (react_1.default.createElement(Grid_1.default, { item: true, key: String(idx) },
                react_1.default.createElement(Chip_1.default, { color: !idx ? 'primary' : 'default', label: text, onClick: function (event) {
                        search(text);
                    }, onDelete: function (event) {
                        console.log('delete');
                        handleDelete(idx);
                    }, 
                    // size="small"
                    variant: !idx ? 'filled' : 'outlined', clickable: true }))); })),
            react_1.default.createElement(Divider_1.default, null),
            react_1.default.createElement(Stack_1.default, { sx: { flexGrow: 1, overflowY: 'auto' } },
                results.map(function (result, index) { return (react_1.default.createElement(Accordion_1.default, { expanded: expanded === "panel-".concat(index), onChange: handleExpand("panel-".concat(index)) },
                    react_1.default.createElement(AccordionSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null), "aria-controls": "panel".concat(index, "bh-content"), id: "panel".concat(index, "bh-header") },
                        react_1.default.createElement(Typography_1.default, { sx: { width: '33%', flexShrink: 0 } }, result.primary),
                        react_1.default.createElement(Typography_1.default, { sx: { color: 'text.secondary' } }, result.secondary)),
                    react_1.default.createElement(AccordionDetails_1.default, null, typeof result.details === 'string' ? (react_1.default.createElement(Typography_1.default, { variant: "caption" }, result.details)) : typeof result.details === 'function' ? (result.details()) : (result.details)))); }),
                react_1.default.createElement(Divider_1.default, null)))));
};
exports.SearchWidget = SearchWidget;
