import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Record } from '../../features/core';
import { ButtonProps } from './Button';
interface Props {
    basePath?: string;
    icon?: ReactElement;
    label?: string;
    record?: Record;
    scrollToTop?: boolean;
}
export declare type ShowButtonProps = Props & ButtonProps;
declare const PureShowButton: React.MemoExoticComponent<{
    (props: ShowButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        scrollToTop: PropTypes.Requireable<boolean>;
    };
}>;
export default PureShowButton;
