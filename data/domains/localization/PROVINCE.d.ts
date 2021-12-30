import { EnumDomain } from '../../../lib/EnumDomain';
import { ObjectSchema } from '../../../lib/ObjectSchema';
import { CountryCode } from './COUNTRY';
export interface ProvinceInfo {
    country: CountryCode;
    name: string;
    short?: string;
    alt?: string;
    english?: string;
    region?: string;
}
export declare const ProvinceInfoSchema: ObjectSchema;
export declare const PROVINCE: EnumDomain<CountryCode, ProvinceInfo>;
