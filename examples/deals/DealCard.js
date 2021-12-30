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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealCard = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var React = __importStar(require("react"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var app_1 = require("../../app");
var LogoField_1 = require("../companies/LogoField");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(1),
    },
    cardContent: {
        padding: theme.spacing(1),
        display: 'flex',
    },
    cardText: {
        marginLeft: theme.spacing(1),
    },
}); });
var DealCard = function (_a) {
    var deal = _a.deal, index = _a.index;
    var classes = useStyles();
    var redirect = (0, app_1.useRedirect)();
    if (!deal)
        return null;
    var handleClick = function () {
        redirect("/deals/".concat(deal.id, "/show"));
    };
    return (React.createElement(react_beautiful_dnd_1.Draggable, { draggableId: String(deal.id), index: index }, function (provided, snapshot) { return (React.createElement("div", __assign({ className: classes.root }, provided.draggableProps, provided.dragHandleProps, { ref: provided.innerRef, onClick: handleClick }),
        React.createElement(material_1.Card, { style: {
                opacity: snapshot.isDragging ? 0.9 : 1,
                transform: snapshot.isDragging
                    ? 'rotate(-2deg)'
                    : '',
            }, elevation: snapshot.isDragging ? 3 : 1 },
            React.createElement("div", { className: classes.cardContent },
                React.createElement(app_1.ReferenceField, { source: "company_id", record: deal, reference: "companies", resource: "deals", basePath: "/deals" },
                    React.createElement(LogoField_1.LogoField, { size: "small" })),
                React.createElement("div", { className: classes.cardText },
                    React.createElement(material_1.Typography, { variant: "body2", gutterBottom: true }, deal.name),
                    React.createElement(material_1.Typography, { variant: "caption", color: "textSecondary" },
                        deal.amount.toLocaleString('en-US', {
                            notation: 'compact',
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'narrowSymbol',
                            minimumSignificantDigits: 3,
                        }),
                        ", ",
                        deal.type)))))); }));
};
exports.DealCard = DealCard;
