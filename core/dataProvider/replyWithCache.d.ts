import { GetOneResult, GetManyResult } from '../types';
export declare const canReplyWithCache: (type: any, payload: any, resourceState: any) => any;
export declare const getResultFromCache: (type: any, payload: any, resourceState: any) => GetOneResult<import("../types").Record> | GetManyResult<import("../types").Record>;
