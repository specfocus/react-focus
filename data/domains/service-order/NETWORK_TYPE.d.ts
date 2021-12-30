import { EnumDomain } from '../../../lib/EnumDomain';
import { StringDomain } from '../../../lib/StringDomain';
export declare const NETWORK_TYPE_CODES: readonly ["RES_PON_ACCESS", "RES_HSD", "RES_VIDEO"];
declare type NetworkTypeCodeType = typeof NETWORK_TYPE_CODES[number];
export declare const NETWORK_TYPE_CODE: StringDomain;
export interface NetworkTypeInfo {
    code: string;
    label: string;
}
export declare const NETWORK_TYPE: EnumDomain<NetworkTypeCodeType, NetworkTypeInfo>;
export {};
