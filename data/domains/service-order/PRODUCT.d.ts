import { EnumDomain } from '../../../lib/EnumDomain';
import { StringDomain } from '../../../lib/StringDomain';
export declare const PRODUCT_FIBER_ACCESS = "FIBER_ACCESS";
export declare const PRODUCT_RESPONSE_ACCESS = "RESPONSE_ACCESS";
export declare const PRODUCT_AUDIO = "AUDIO";
export declare const PRODUCT_DATA = "DATA";
export declare const PRODUCT_VIDEO = "VIDEO";
export declare const PRODUCT_CODES: readonly ["FIBER_ACCESS", "RESPONSE_ACCESS", "AUDIO", "DATA", "VIDEO"];
declare type ProductCodeType = typeof PRODUCT_CODES[number];
export declare const PRODUCT_CODE: StringDomain;
export interface ProductInfo {
    code: ProductCodeType;
    label: string;
}
export declare const PRODUCT: EnumDomain<ProductCodeType, ProductInfo>;
export {};
