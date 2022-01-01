/// <reference types="react" />
import { Identifier, RecordMap } from '../../app';
import { Deal } from '../db/types';
export declare const DealColumn: ({ stage, dealIds, data, }: {
    stage: string;
    dealIds: Identifier[];
    data: RecordMap<Deal>;
}) => JSX.Element;
