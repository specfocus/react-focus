import { PackageTypeCodeType } from '../../domains/service-order/PACKAGE_TYPE';
export interface ServiceOrderPackageOption {
    code: string;
    label: string;
    type: PackageTypeCodeType;
}
