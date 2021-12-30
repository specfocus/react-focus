import { EnumDomain } from '../../../lib/EnumDomain';
import { StringDomain } from '../../../lib/StringDomain';
export declare const SERVICE_ORDER_TYPE_WITHHOLD = "WITHHOLD";
export declare const SERVICE_ORDER_TYPE_QUERY_PORT = "QUERY_PORT";
export declare const SERVICE_ORDER_TYPE_CONFIRMATION = "CONFIRMATION";
export declare const SERVICE_ORDER_TYPE_CANCELATION = "CANCELATION";
export declare const SERVICE_ORDER_TYPE_RELEASE = "RELEASE";
export declare const SERVICE_ORDER_TYPE_MODIFY_PORT = "MODIFY_PORT";
export declare const SERVICE_ORDER_TYPE_CODES: readonly ["WITHHOLD", "QUERY_PORT", "CONFIRMATION", "CANCELATION", "RELEASE", "MODIFY_PORT"];
declare type ServiceOrderTypeCodeType = typeof SERVICE_ORDER_TYPE_CODES[number];
export declare const SERVICE_ORDER_TYPE_CODE: StringDomain;
export interface ServiceOrderTypeInfo {
    code: string;
    label: string;
}
export declare const SERVICE_ORDER_TYPE: EnumDomain<ServiceOrderTypeCodeType, ServiceOrderTypeInfo>;
export {};
