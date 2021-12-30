"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
var ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var styles_1 = require("@mui/material/styles");
var classnames_1 = __importDefault(require("classnames"));
var prop_types_1 = __importDefault(require("prop-types"));
var React = __importStar(require("react"));
var core_1 = require("../../../core");
var PREFIX = 'RaPaginationActions';
var classes = {
    actions: "".concat(PREFIX, "-actions"),
    button: "".concat(PREFIX, "-button"),
    currentPageButton: "".concat(PREFIX, "-currentPageButton"),
    hellip: "".concat(PREFIX, "-hellip"),
};
var Root = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(classes.actions)] = {
            flexShrink: 0,
            color: theme.palette.text.secondary,
            marginLeft: 20,
        },
        _b["& .".concat(classes.button)] = {},
        _b["& .".concat(classes.currentPageButton)] = {},
        _b["& .".concat(classes.hellip)] = { padding: '1.2em' },
        _b);
});
var PaginationActions = function (props) {
    var page = props.page, rowsPerPage = props.rowsPerPage, count = props.count, onPageChange = props.onPageChange, color = props.color, size = props.size;
    var translate = (0, core_1.useTranslate)();
    var theme = (0, styles_1.useTheme)();
    /**
     * Warning: material-ui's page is 0-based
     */
    var range = function () {
        var nbPages = Math.ceil(count / rowsPerPage) || 1;
        if (isNaN(page) || nbPages === 1) {
            return [];
        }
        var input = [];
        // display page links around the current page
        if (page > 1) {
            input.push(1);
        }
        if (page === 3) {
            input.push(2);
        }
        if (page > 3) {
            input.push('.');
        }
        if (page > 0) {
            input.push(page);
        }
        input.push(page + 1);
        if (page < nbPages - 1) {
            input.push(page + 2);
        }
        if (page === nbPages - 4) {
            input.push(nbPages - 1);
        }
        if (page < nbPages - 4) {
            input.push('.');
        }
        if (page < nbPages - 2) {
            input.push(nbPages);
        }
        return input;
    };
    var getNbPages = function () { return Math.ceil(count / rowsPerPage) || 1; };
    var prevPage = function (event) {
        if (page === 0) {
            throw new Error(translate('ra.navigation.page_out_from_begin'));
        }
        onPageChange(event, page - 1);
    };
    var nextPage = function (event) {
        if (page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_from_end'));
        }
        onPageChange(event, page + 1);
    };
    var gotoPage = function (event) {
        var page = parseInt(event.currentTarget.dataset.page, 10);
        if (page < 0 || page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_of_boundaries', {
                page: page + 1,
            }));
        }
        onPageChange(event, page);
    };
    var renderPageNums = function () {
        return range().map(function (pageNum, index) {
            var _a;
            return pageNum === '.' ? (React.createElement("span", { key: "hyphen_".concat(index), className: classes.hellip }, "\u2026")) : (React.createElement(Button_1.default, { size: size, className: (0, classnames_1.default)('page-number', classes.button, (_a = {},
                    _a[classes.currentPageButton] = pageNum === page + 1,
                    _a)), color: color, variant: pageNum === page + 1 ? 'outlined' : 'text', key: pageNum, "data-page": pageNum - 1, onClick: gotoPage }, pageNum));
        });
    };
    var nbPages = getNbPages();
    if (nbPages === 1) {
        return React.createElement(Root, { className: classes.actions });
    }
    return (React.createElement(Root, { className: classes.actions },
        page > 0 && (React.createElement(Button_1.default, { color: color, size: size, key: "prev", onClick: prevPage, className: "previous-page" },
            theme.direction === 'rtl' ? (React.createElement(ChevronRight_1.default, null)) : (React.createElement(ChevronLeft_1.default, null)),
            translate('ra.navigation.prev'))),
        renderPageNums(),
        page !== nbPages - 1 && (React.createElement(Button_1.default, { color: color, size: size, key: "next", onClick: nextPage, className: "next-page" },
            translate('ra.navigation.next'),
            theme.direction === 'rtl' ? (React.createElement(ChevronLeft_1.default, null)) : (React.createElement(ChevronRight_1.default, null))))));
};
/**
 * PaginationActions propTypes are copied over from material-ui’s
 * TablePaginationActions propTypes. See
 * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
 * for reference.
 */
PaginationActions.propTypes = {
    backIconButtonProps: prop_types_1.default.object,
    count: prop_types_1.default.number.isRequired,
    nextIconButtonProps: prop_types_1.default.object,
    onPageChange: prop_types_1.default.func.isRequired,
    page: prop_types_1.default.number.isRequired,
    rowsPerPage: prop_types_1.default.number.isRequired,
    color: prop_types_1.default.oneOf(['primary', 'secondary']),
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
    theme: prop_types_1.default.object,
};
PaginationActions.defaultProps = {
    color: 'primary',
    size: 'small',
};
exports.default = React.memo(PaginationActions);
