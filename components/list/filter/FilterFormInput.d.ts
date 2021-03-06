import PropTypes from 'prop-types';
declare const FilterFormInput: {
    (props: any): JSX.Element;
    propTypes: {
        filterElement: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        handleHide: PropTypes.Requireable<(...args: any[]) => any>;
        resource: PropTypes.Requireable<string>;
        margin: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
    };
};
export default FilterFormInput;
