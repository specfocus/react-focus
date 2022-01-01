/// <reference types="react" />
import { Identifier } from '../../app';
import { Customer } from '../db/types';
interface Props {
    ids?: Identifier[];
    data?: {
        [key: string]: Customer;
    };
    basePath?: string;
}
declare const MobileGrid: {
    ({ ids, data, basePath }: Props): JSX.Element;
    defaultProps: {
        data: {};
        ids: any[];
    };
};
export default MobileGrid;
