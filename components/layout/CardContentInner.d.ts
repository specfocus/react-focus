import { ReactNode } from 'react';
import PropTypes from 'prop-types';
/**
 * Overrides material-ui CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
declare const CardContentInner: {
    (props: CardContentInnerProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export interface CardContentInnerProps {
    className?: string;
    children: ReactNode;
}
export default CardContentInner;
