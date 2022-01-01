"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const recoil_1 = require("recoil");
const AppStack_1 = require("../../app/AppStack");
const SearchState_1 = require("./SearchState");
const SearchWidget_1 = require("./SearchWidget");
const SearchController = () => {
    const [searching, setSearching] = (0, react_1.useState)({});
    const history = (0, recoil_1.useRecoilValue)(SearchState_1.appSearchHistory);
    const appStack = (0, AppStack_1.useAppStack)();
    (0, react_1.useEffect)(() => {
        appStack.push(SearchWidget_1.SEARCH_WIDGET, {
            tools: [SearchWidget_1.SearchControl],
            widgets: {
                [SearchWidget_1.SEARCH_WIDGET]: SearchWidget_1.SearchWidget
            }
        });
        return () => { appStack.pop(SearchWidget_1.SEARCH_WIDGET); };
    }, [appStack]);
    const startSearching = (0, react_1.useCallback)((term) => {
        const promise = new Promise((resolve, reject) => {
        });
    }, [appStack]);
    const stopSearching = (0, react_1.useCallback)((term) => {
    }, []);
    const stopSearchingAll = (0, react_1.useCallback)(() => {
    }, []);
    (0, react_1.useEffect)(() => {
        const [top] = history;
        const active = searching[top];
        if (!active) {
            startSearching(top);
        }
        return stopSearchingAll;
    }, [history, searching, setSearching, startSearching, stopSearching]);
    return null;
};
exports.default = SearchController;
