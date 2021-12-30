/// <reference types="react" />
import PropTypes from 'prop-types';
import { Review } from '../types';
/**
 * This custom button demonstrate using a custom action to update data
 */
declare const RejectButton: {
    ({ record }: {
        record: Review;
    }): JSX.Element;
    propTypes: {
        record: PropTypes.Requireable<any>;
    };
};
export default RejectButton;
