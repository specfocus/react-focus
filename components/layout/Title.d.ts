import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Record } from '../../features/core';
export interface TitleProps {
    className?: string;
    defaultTitle?: string;
    record?: Record;
    title?: string | ReactElement;
}
declare const Title: FC<TitleProps>;
export declare const TitlePropType: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
export default Title;
