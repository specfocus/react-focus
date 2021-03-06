import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
declare const BulkDeleteWithUndoButton: {
    (props: BulkDeleteWithUndoButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
export interface BulkDeleteWithUndoButtonProps extends BulkActionProps, ButtonProps {
    icon?: ReactElement;
}
export default BulkDeleteWithUndoButton;
