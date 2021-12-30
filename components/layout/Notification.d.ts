/// <reference types="react" />
import PropTypes from 'prop-types';
import { SnackbarProps } from '@mui/material';
export interface NotificationProps {
    type?: string;
}
declare const Notification: {
    (props: NotificationProps & Omit<SnackbarProps, 'open'>): JSX.Element;
    propTypes: {
        type: PropTypes.Requireable<string>;
    };
    defaultProps: {
        type: string;
        autoHideDuration: number;
    };
};
export default Notification;
