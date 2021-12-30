/// <reference types="react" />
import PropTypes from 'prop-types';
import { BulkActionProps } from '../../app';
declare const BulkRejectButton: {
    (props: BulkActionProps): JSX.Element;
    propTypes: {
        selectedIds: PropTypes.Validator<any[]>;
    };
};
export default BulkRejectButton;
