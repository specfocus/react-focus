import PropTypes from 'prop-types';
import { LinkProps as RRLinkProps } from 'react-router-dom';
import { ClassNameMap } from '@mui/styles';
declare type LinkClassKey = 'link';
export interface LinkProps extends RRLinkProps {
    classes?: Partial<ClassNameMap<LinkClassKey>>;
    className?: string;
}
declare const Link: {
    (props: LinkProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        to: PropTypes.Requireable<string | object>;
    };
};
export default Link;
