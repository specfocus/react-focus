import * as React from 'react';
import PropTypes from 'prop-types';
declare function HideOnScroll(props: HideOnScrollProps): JSX.Element;
declare namespace HideOnScroll {
    var propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
}
export interface HideOnScrollProps {
    children: React.ReactElement;
}
export default HideOnScroll;
