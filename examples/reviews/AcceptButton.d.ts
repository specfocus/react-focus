/// <reference types="react" />
import PropTypes from 'prop-types';
import { Review } from '../db/types';
/**
 * This custom button demonstrate using useUpdate to update data
 */
declare const AcceptButton: {
    ({ record }: {
        record: Review;
    }): JSX.Element;
    propTypes: {
        record: PropTypes.Requireable<any>;
    };
};
export default AcceptButton;
