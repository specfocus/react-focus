"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const app_1 = require("../../app");
const LogoField_1 = require("../companies/LogoField");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
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
}));
const DealCard = ({ deal, index }) => {
    const classes = useStyles();
    const redirect = (0, app_1.useRedirect)();
    if (!deal)
        return null;
    const handleClick = () => {
        redirect(`/deals/${deal.id}/show`);
    };
    return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.Draggable, Object.assign({ draggableId: String(deal.id), index: index }, { children: (provided, snapshot) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.root }, provided.draggableProps, provided.dragHandleProps, { ref: provided.innerRef, onClick: handleClick }, { children: (0, jsx_runtime_1.jsx)(material_1.Card, Object.assign({ style: {
                    opacity: snapshot.isDragging ? 0.9 : 1,
                    transform: snapshot.isDragging
                        ? 'rotate(-2deg)'
                        : '',
                }, elevation: snapshot.isDragging ? 3 : 1 }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.cardContent }, { children: [(0, jsx_runtime_1.jsx)(app_1.ReferenceField, Object.assign({ source: "company_id", record: deal, reference: "companies", resource: "deals", basePath: "/deals" }, { children: (0, jsx_runtime_1.jsx)(LogoField_1.LogoField, { size: "small" }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.cardText }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body2", gutterBottom: true }, { children: deal.name }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Typography, Object.assign({ variant: "caption", color: "textSecondary" }, { children: [deal.amount.toLocaleString('en-US', {
                                            notation: 'compact',
                                            style: 'currency',
                                            currency: 'USD',
                                            currencyDisplay: 'narrowSymbol',
                                            minimumSignificantDigits: 3,
                                        }), ", ", deal.type] }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0)) }), void 0));
};
exports.DealCard = DealCard;
