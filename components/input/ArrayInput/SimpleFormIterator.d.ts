import PropTypes from 'prop-types';
import { ReactElement, ReactNode } from 'react';
import { FieldArrayRenderProps } from 'react-final-form-arrays';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { Record } from '../../../features/core';
import { DisableRemoveFunction } from './SimpleFormIteratorItem';
export declare const SimpleFormIterator: {
    (props: SimpleFormIteratorProps): JSX.Element;
    defaultProps: {
        disableAdd: boolean;
        disableRemove: boolean;
    };
    propTypes: {
        defaultValue: PropTypes.Requireable<any>;
        addButton: PropTypes.Requireable<PropTypes.ReactElementLike>;
        removeButton: PropTypes.Requireable<PropTypes.ReactElementLike>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        fields: PropTypes.Requireable<object>;
        meta: PropTypes.Requireable<object>;
        record: PropTypes.Requireable<object>;
        source: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        translate: PropTypes.Requireable<(...args: any[]) => any>;
        disableAdd: PropTypes.Requireable<boolean>;
        disableRemove: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
        TransitionProps: PropTypes.Requireable<PropTypes.InferProps<{}>>;
    };
};
export interface SimpleFormIteratorProps extends Partial<Omit<FieldArrayRenderProps<any, HTMLElement>, 'meta'>> {
    addButton?: ReactElement;
    basePath?: string;
    children?: ReactNode;
    className?: string;
    defaultValue?: any;
    disabled?: boolean;
    disableAdd?: boolean;
    disableRemove?: boolean | DisableRemoveFunction;
    disableReordering?: boolean;
    getItemLabel?: (index: number) => string;
    margin?: 'none' | 'normal' | 'dense';
    meta?: {
        error?: any;
        submitFailed?: boolean;
    };
    record?: Record;
    removeButton?: ReactElement;
    reOrderButtons?: ReactElement;
    resource?: string;
    source?: string;
    TransitionProps?: CSSTransitionProps;
    variant?: 'standard' | 'outlined' | 'filled';
}
