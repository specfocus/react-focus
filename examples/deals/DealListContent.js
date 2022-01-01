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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealListContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const app_1 = require("../../app");
const material_1 = require("@mui/material");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const DealColumn_1 = require("./DealColumn");
const stages_1 = require("./stages");
const initialDeals = stages_1.stages.reduce((obj, stage) => (Object.assign(Object.assign({}, obj), { [stage]: [] })), {});
const getDealsByColumn = (ids, data) => {
    // group deals by column
    const columns = ids.reduce((acc, id) => {
        acc[data[id].stage].push(id);
        return acc;
    }, stages_1.stages.reduce((obj, stage) => (Object.assign(Object.assign({}, obj), { [stage]: [] })), {}));
    // order each column by index
    stages_1.stages.forEach(stage => {
        columns[stage] = columns[stage].sort((a, b) => data[a].index - data[b].index);
    });
    return columns;
};
const DealListContent = () => {
    const { data, ids, loaded, page, perPage, currentSort, filterValues, } = (0, app_1.useListContext)();
    const [deals, setDeals] = (0, react_1.useState)(loaded ? getDealsByColumn(ids, data) : initialDeals);
    // we use the raw dataProvider to avoid too many updates to the Redux store after updates (which would create jank)
    const dataProvider = (0, react_1.useContext)(app_1.DataProviderContext);
    // FIXME: use refetch when available
    const [refresh] = (0, app_1.useMutation)({
        resource: 'deals',
        type: 'getList',
        payload: {
            pagination: { page, perPage },
            sort: currentSort,
            filter: filterValues,
        },
    });
    // update deals by columns when the dataProvider response updates
    (0, react_1.useEffect)(() => {
        if (!loaded)
            return;
        const newDeals = getDealsByColumn(ids, data);
        if ((0, isEqual_1.default)(deals, newDeals)) {
            return;
        }
        setDeals(newDeals);
    }, [data, ids, loaded]); // eslint-disable-line react-hooks/exhaustive-deps
    if (!loaded)
        return null;
    const onDragEnd = (result) => __awaiter(void 0, void 0, void 0, function* () {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            // moving deal inside the same column
            const column = Array.from(deals[source.droppableId]); // [4, 7, 23, 5] array of ids
            const sourceDeal = data[column[source.index]];
            const destinationDeal = data[column[destination.index]];
            // update local state
            // remove source deal from column
            column.splice(source.index, 1);
            // readd source deal at destination
            column.splice(destination.index, 0, Number(draggableId));
            setDeals(Object.assign(Object.assign({}, deals), { [source.droppableId]: column }));
            // update backend
            // Fetch all the deals in this stage (because the list may be filtered, but we need to update even non-filtered deals)
            const { data: columnDeals } = yield dataProvider.getList('deals', {
                sort: { field: 'index', order: 'ASC' },
                pagination: { page: 1, perPage: 100 },
                filter: { stage: source.droppableId },
            });
            if (source.index > destination.index) {
                // deal moved up, eg
                // dest   src
                //  <------
                // [4, 7, 23, 5]
                yield Promise.all([
                    // for all deals between destination.index and source.index, increase the index
                    ...columnDeals
                        .filter(deal => deal.index >= destinationDeal.index &&
                        deal.index < sourceDeal.index)
                        .map(deal => dataProvider.update('deals', {
                        id: deal.id,
                        data: { index: deal.index + 1 },
                        previousData: deal,
                    })),
                    // for the deal that was moved, update its index
                    dataProvider.update('deals', {
                        id: sourceDeal.id,
                        data: { index: destinationDeal.index },
                        previousData: sourceDeal,
                    }),
                ]);
                refresh();
            }
            else {
                // deal moved down, e.g
                // src   dest
                //  ------>
                // [4, 7, 23, 5]
                yield Promise.all([
                    // for all deals between source.index and destination.index, decrease the index
                    ...columnDeals
                        .filter(deal => deal.index <= destinationDeal.index &&
                        deal.index > sourceDeal.index)
                        .map(deal => dataProvider.update('deals', {
                        id: deal.id,
                        data: { index: deal.index - 1 },
                        previousData: deal,
                    })),
                    // for the deal that was moved, update its index
                    dataProvider.update('deals', {
                        id: sourceDeal.id,
                        data: { index: destinationDeal.index },
                        previousData: sourceDeal,
                    }),
                ]);
                refresh();
            }
        }
        else {
            // moving deal across columns
            const sourceColumn = Array.from(deals[source.droppableId]); // [4, 7, 23, 5] array of ids
            const destinationColumn = Array.from(deals[destination.droppableId]); // [4, 7, 23, 5] arrays of ids
            const sourceDeal = data[sourceColumn[source.index]];
            const destinationDeal = data[destinationColumn[destination.index]]; // may be undefined if dropping at the end of a column
            // update local state
            sourceColumn.splice(source.index, 1);
            destinationColumn.splice(destination.index, 0, draggableId);
            setDeals(Object.assign(Object.assign({}, deals), { [source.droppableId]: sourceColumn, [destination.droppableId]: destinationColumn }));
            // update backend
            // Fetch all the deals in both stages (because the list may be filtered, but we need to update even non-filtered deals)
            const [{ data: sourceDeals }, { data: destinationDeals },] = yield Promise.all([
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
            ]);
            yield Promise.all([
                // decrease index on the deals after the source index in the source columns
                ...sourceDeals
                    .filter(deal => deal.index > sourceDeal.index)
                    .map(deal => dataProvider.update('deals', {
                    id: deal.id,
                    data: { index: deal.index - 1 },
                    previousData: deal,
                })),
                // increase index on the deals after the destination index in the destination columns
                ...destinationDeals
                    .filter(deal => destinationDeal
                    ? deal.index >= destinationDeal.index
                    : false)
                    .map(deal => dataProvider.update('deals', {
                    id: deal.id,
                    data: { index: deal.index + 1 },
                    previousData: deal,
                })),
                // change the dragged deal to take the destination index and column
                dataProvider.update('deals', {
                    id: sourceDeal.id,
                    data: {
                        index: destinationDeal
                            ? destinationDeal.index
                            : destinationDeals.pop().index + 1,
                        stage: destination.droppableId,
                    },
                    previousData: sourceDeal,
                }),
            ]);
            refresh();
        }
    });
    return ((0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.DragDropContext, Object.assign({ onDragEnd: onDragEnd }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ display: "flex" }, { children: stages_1.stages.map(stage => ((0, jsx_runtime_1.jsx)(DealColumn_1.DealColumn, { stage: stage, dealIds: deals[stage], data: data }, stage))) }), void 0) }), void 0));
};
exports.DealListContent = DealListContent;
