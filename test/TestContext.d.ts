import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Store } from 'redux';
import { History } from 'history';
import { ReduxState } from '../core';
export declare const defaultStore: {
    admin: {
        resources: {};
        references: {
            possibleValues: {};
        };
        ui: {
            viewVersion: number;
        };
        notifications: never[];
    };
};
export declare type TextContextChildrenFunction = ({ store, history, }: {
    store: Store<ReduxState>;
    history: History;
}) => ReactNode;
export interface TestContextProps {
    initialState?: object;
    enableReducers?: boolean;
    history?: History;
    customReducers?: object;
    children: ReactNode | TextContextChildrenFunction;
}
/**
 * Simulate a ../../app context in unit tests
 *
 * Pass custom store values as store prop
 *
 * @example
 * // in a react testing-library test
 * const utils = render(
 *     <TestContext initialState={{ admin: { resources: { post: { data: { 1: {id: 1, title: 'foo' } } } } } }}>
 *         <Show {...defaultShowProps} />
 *     </TestContext>
 * );
 *
 * @example
 * // in a react testing-library test, using jest.
 * const utils = render(
 *     <TestContext initialState={{ admin: { resources: { posts: { data: { 1: {id: 1, title: 'foo' } } } } } }}>
 *         {({ store }) => {
 *              dispatchSpy = jest.spyOn(store, 'dispatch');
 *              return <Show {...defaultShowProps} />
 *         }}
 *     </TestContext>
 * );
 */
export declare class TestContext extends Component<TestContextProps> {
    storeWithDefault: null;
    history: History;
    constructor(props: any);
    renderChildren: () => React.ReactNode;
    render(): JSX.Element;
}
export default TestContext;
