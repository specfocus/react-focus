import { FiberAccessAddress } from './FiberAccessAddress';
import { FiberAccessCoordinates } from './FiberAccessCoordinates';
import { FiberAccessPolygon } from './FiberAccessPolygon';
import { ServiceOrderPackages } from './ServiceOrderPackages';
import { ServiceOrderProducts } from './ServiceOrderProducts';
export declare interface ServiceOrder {
    id: string;
    externalId: string;
    orderType: string;
    region: string;
    operator: string;
    description: string;
    orderDate: string;
    requestedStartDate: string;
    startDate?: string;
    completionDate?: string;
    cancellationDate?: string;
    address: FiberAccessAddress;
    coordinates: FiberAccessCoordinates;
    polygon: FiberAccessPolygon;
    packages: ServiceOrderPackages;
    products: ServiceOrderProducts;
}
