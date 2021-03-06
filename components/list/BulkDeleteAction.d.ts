import PropTypes from 'prop-types';
/**
 *@deprecated use BulkDeleteButton instead
 */
declare const BulkDeleteAction: {
    (props: any): any;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        onExit: PropTypes.Validator<(...args: any[]) => any>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Validator<any[]>;
        translate: PropTypes.Validator<(...args: any[]) => any>;
        undoable: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        label: string;
        undoable: boolean;
    };
};
export default BulkDeleteAction;
