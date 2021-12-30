import { EnumDomain } from '../../../lib/EnumDomain';
import { StringDomain } from '../../../lib/StringDomain';
export declare const SERVICE_CATEGORY_CODES: readonly ["RES_PON_ACCESS", "RES_HSD", "RES_VIDEO"];
declare type ServiceCategoryCodeType = typeof SERVICE_CATEGORY_CODES[number];
export declare const SERVICE_CATEGORY_CODE: StringDomain;
export interface ServiceCategoryInfo {
    code: string;
    label: string;
}
export declare const SERVICE_CATEGORY: EnumDomain<ServiceCategoryCodeType, ServiceCategoryInfo>;
export {};
