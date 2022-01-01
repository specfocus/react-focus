/// <reference types="react" />
import { RecordMap, Identifier, Record } from '../../app';
interface MobileGridProps {
    ids?: Identifier[];
    data?: RecordMap<Record>;
    basePath?: string;
}
declare const MobileGrid: {
    (props: MobileGridProps): JSX.Element;
    defaultProps: {
        data: {};
        ids: any[];
    };
};
export default MobileGrid;
