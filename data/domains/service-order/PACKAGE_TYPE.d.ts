import { EnumDomain } from '../../../lib/EnumDomain';
import { StringDomain } from '../../../lib/StringDomain';
import { ServiceOrderPackageTypeOption } from '../../types/service-order/ServiceOrderPackageTypeOption';
export declare const PACKAGE_TYPE_CODES: readonly ["CONNECTIVITY", "REMOTE_HANDS", "OTHER"];
export declare type PackageTypeCodeType = typeof PACKAGE_TYPE_CODES[number];
export declare const PACKAGE_TYPE_CODE: StringDomain;
export declare const PACKAGE_TYPE: EnumDomain<ServiceOrderPackageTypeOption>;
