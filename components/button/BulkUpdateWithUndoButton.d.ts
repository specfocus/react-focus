import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
declare const BulkUpdateWithUndoButton: {
    (props: BulkUpdateWithUndoButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        data: PropTypes.Validator<any>;
    };
};
export interface BulkUpdateWithUndoButtonProps extends BulkActionProps, ButtonProps {
    icon?: ReactElement;
    data: any;
    onSuccess?: () => void;
    onFailure?: (error: any) => void;
}
export default BulkUpdateWithUndoButton;
