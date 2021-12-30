/// <reference types="react" />
import PropTypes from 'prop-types';
import { BulkActionProps } from '../../app';
declare const BulkAcceptButton: {
    (props: BulkActionProps): JSX.Element;
    propTypes: {
        selectedIds: PropTypes.Validator<any[]>;
    };
};
export default BulkAcceptButton;
