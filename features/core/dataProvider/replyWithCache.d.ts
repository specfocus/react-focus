import { GetOneResult, GetManyResult } from '../types';
export declare const canReplyWithCache: (type: any, payload: any, resourceState: any) => boolean;
export declare const getResultFromCache: (type: any, payload: any, resourceState: any) => GetManyResult<import("../types").Record> | GetOneResult<import("../types").Record>;
