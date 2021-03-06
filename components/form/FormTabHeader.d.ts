import { ReactElement } from 'react';
import PropTypes from 'prop-types';
export declare const FormTabHeader: {
    ({ label, value, icon, className, syncWithLocation, ...rest }: FormTabHeaderProps): ReactElement;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        contentClassName: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        intent: PropTypes.Requireable<string>;
        hidden: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Validator<string | PropTypes.ReactElementLike>;
        margin: PropTypes.Requireable<string>;
        path: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string | number>;
        variant: PropTypes.Requireable<string>;
    };
};
interface FormTabHeaderProps {
    basePath?: string;
    className?: string;
    hidden?: boolean;
    icon?: ReactElement;
    intent?: 'header' | 'content';
    label: string | ReactElement;
    margin?: 'none' | 'normal' | 'dense';
    path?: string;
    resource?: string;
    syncWithLocation?: boolean;
    value?: string | number;
    variant?: 'standard' | 'outlined' | 'filled';
}
export {};
