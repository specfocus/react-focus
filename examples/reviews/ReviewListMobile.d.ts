/// <reference types="react" />
import PropTypes from 'prop-types';
declare const ReviewListMobile: {
    (): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        data: PropTypes.Requireable<any>;
        hasBulkActions: PropTypes.Validator<boolean>;
        ids: PropTypes.Requireable<any[]>;
        onToggleItem: PropTypes.Requireable<(...args: any[]) => any>;
        selectedIds: PropTypes.Validator<any[]>;
    };
    defaultProps: {
        hasBulkActions: boolean;
        selectedIds: any[];
    };
};
export default ReviewListMobile;
