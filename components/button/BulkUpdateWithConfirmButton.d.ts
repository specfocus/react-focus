import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { MutationMode } from '../../features/core';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
declare const BulkUpdateWithConfirmButton: {
    (props: BulkUpdateWithConfirmButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        confirmTitle: PropTypes.Requireable<string>;
        confirmContent: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        data: PropTypes.Validator<any>;
        mutationMode: PropTypes.Requireable<string>;
    };
    defaultProps: {
        label: string;
        mutationMode: string;
    };
};
export interface BulkUpdateWithConfirmButtonProps extends BulkActionProps, ButtonProps {
    confirmContent?: React.ReactNode;
    confirmTitle?: string;
    icon?: ReactElement;
    data: any;
    onSuccess?: () => void;
    onFailure?: (error: any) => void;
    mutationMode?: MutationMode;
}
export default BulkUpdateWithConfirmButton;
