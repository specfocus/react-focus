import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
interface Props {
    basePath?: string;
    icon?: ReactElement;
    scrollToTop?: boolean;
}
export declare type CreateButtonProps = Props & ButtonProps;
declare const _default: React.MemoExoticComponent<{
    (props: CreateButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
    };
}>;
export default _default;
