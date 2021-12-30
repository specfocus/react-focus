import { ObjectSchema } from '../../../lib/ObjectSchema';
import { ServiceOrder } from '../../types/service-order/ServiceOrder';
export declare const yupSchema: import("yup/lib/object").OptionalObjectSchema<{
    serviceId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    operatorSerivceId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    createdBy: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    category: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    networkType: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    serviceType: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    serviceName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    createdDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    acceptanceDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    invoiceStartDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    invoiceEndDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    modifiedDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        country: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        stateOrProvice: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        city: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        locality: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        postalCode: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetNumber: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        coverage: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        country: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        stateOrProvice: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        city: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        locality: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        postalCode: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetNumber: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        coverage: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
    coordinates: import("yup/lib/object").OptionalObjectSchema<{
        longitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
        latitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        longitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
        latitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>;
    polygon: import("yup/lib/object").OptionalObjectSchema<{
        polygonAlias: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        polygonAlias: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    serviceId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    operatorSerivceId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    createdBy: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    category: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    networkType: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    serviceType: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    serviceName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    createdDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    acceptanceDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    invoiceStartDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    invoiceEndDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    modifiedDate: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    address: import("yup/lib/object").OptionalObjectSchema<{
        country: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        stateOrProvice: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        city: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        locality: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        postalCode: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetNumber: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        coverage: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        country: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        stateOrProvice: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        city: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        locality: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        postalCode: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        streetNumber: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        coverage: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
    coordinates: import("yup/lib/object").OptionalObjectSchema<{
        longitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
        latitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        longitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
        latitude: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>;
    polygon: import("yup/lib/object").OptionalObjectSchema<{
        polygonAlias: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        polygonAlias: import("yup/lib/number").RequiredNumberSchema<number | undefined, Record<string, any>>;
    }>>;
}>>;
declare const schema: ObjectSchema<ServiceOrder>;
export default schema;
