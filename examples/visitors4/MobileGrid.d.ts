/// <reference types="react" />
import { Identifier } from '../../app';
import { Customer } from '../../data/db/types';
interface Props {
    ids?: Identifier[];
    data?: {
        [key: string]: Customer;
    };
    basePath?: string;
}
declare const MobileGrid: {
    ({ ids, data, basePath }: Props): JSX.Element | null;
    defaultProps: {
        data: {};
        ids: never[];
    };
};
export default MobileGrid;
