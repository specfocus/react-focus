/// <reference types="react" />
import PropTypes from 'prop-types';
import { Record } from '../../app';
interface AsideProps {
    record?: Record;
    basePath?: string;
}
declare const Aside: {
    ({ record, basePath }: AsideProps): JSX.Element;
    propTypes: {
        record: PropTypes.Requireable<any>;
        basePath: PropTypes.Requireable<string>;
    };
};
export default Aside;
