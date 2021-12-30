"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yupSchema = void 0;
var Yup = __importStar(require("yup"));
var fiber_access_address_1 = __importDefault(require("./fiber-access-address"));
var fiber_access_coordinates_1 = __importDefault(require("./fiber-access-coordinates"));
var fiber_access_polygon_1 = __importDefault(require("./fiber-access-polygon"));
var service_order_packages_1 = __importDefault(require("./service-order-packages"));
var service_order_products_1 = __importDefault(require("./service-order-products"));
// TODO: make Yup part of the lib
exports.yupSchema = Yup.object({
    serviceId: Yup.string().required(),
    operatorSerivceId: Yup.string().required(),
    createdBy: Yup.string().required(),
    category: Yup.string().required(),
    networkType: Yup.string().required(),
    serviceType: Yup.string().required(),
    serviceName: Yup.string().required(),
    createdDate: Yup.string().required(),
    acceptanceDate: Yup.string().required(),
    invoiceStartDate: Yup.string().required(),
    invoiceEndDate: Yup.string().required(),
    modifiedDate: Yup.string().required(),
    address: Yup.object({
        country: Yup.string().required(),
        stateOrProvice: Yup.string().required(),
        city: Yup.string().required(),
        locality: Yup.string().required(),
        postalCode: Yup.string().required(),
        streetName: Yup.string().required(),
        streetNumber: Yup.string().required(),
        coverage: Yup.string().required(),
    }),
    coordinates: Yup.object({
        longitude: Yup.number().required(),
        latitude: Yup.number().required(),
    }),
    polygon: Yup.object({
        polygonAlias: Yup.number().required(),
    })
});
// console.log('SERVICE ORDER SCHEMA:', JSON.stringify(yupSchema, null, 2));
var schema = {
    domain: 'SERVICE_ORDER_CREATE_PAYLOAD',
    type: 'object',
    required: ['externalId', 'orderType', 'region', 'operator', 'orderDate', 'requestedStartDate'],
    fields: {
        id: {
            domain: 'ID_DECIMAL_SERVICE',
            type: 'string'
        },
        externalId: {
            domain: 'ID_DECIMAL_SERVICE',
            type: 'string'
        },
        orderType: {
            domain: 'SERVICE_ORDER_TYPE',
            type: 'string'
        },
        region: {
            type: 'string'
        },
        operator: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        orderDate: {
            domain: 'DATE',
            type: 'string'
        },
        requestedStartDate: {
            domain: 'DATE',
            type: 'string'
        },
        startDate: {
            domain: 'DATE',
            type: 'string'
        },
        completionDate: {
            domain: 'DATE',
            type: 'string'
        },
        cancellationDate: {
            domain: 'DATE',
            type: 'string'
        },
        /*
        createdBy: {
          domain: 'NAME_USER',
          label: 'Created By',
          placeholder: 'User creator of the service',
          required: true,
          type: 'string'
        },
        category: {
          domain: 'SERVICE_CATEGORY',
          label: 'Category',
          placeholder: 'Service category',
          required: true,
          type: 'string'
        },
        networkType: {
          domain: 'NETWORK_TYPE',
          label: 'Network Type',
          placeholder: 'Type of network',
          required: true,
          type: 'string'
        },
        serviceType: {
          domain: 'SERVICE_ORDER_TYPE',
          label: 'Service Order Type',
          placeholder: 'Type of service order',
          required: true,
          type: 'string'
        },
        serviceName: {
          domain: 'SERVICE_ORDER_TYPE',
          label: 'Service Name',
          placeholder: 'Name of service',
          required: true,
          type: 'string'
        },
        createdDate: {
          // domain: 'DATE_CREATED',
          label: 'Created Date',
          placeholder: 'Date of creation',
          required: true,
          type: 'date'
        },
        acceptanceDate: {
          // domain: 'DATE_ACCEPTED',
          label: 'Accepted Date',
          placeholder: 'Date of acceptance',
          required: true,
          type: 'date'
        },
        invoiceStartDate: {
          // domain: 'DATE_START_INVOICE',
          label: 'Invoice Start Date',
          placeholder: 'Date of commence',
          required: true,
          type: 'date'
        },
        invoiceEndDate: {
          // domain: 'DATE_END_INVOICE',
          label: 'Invoice End Date',
          placeholder: 'Date of discontinuance',
          required: false,
          type: 'date'
        },
        modifiedDate: {
          // domain: 'DATE_MODIFIED',
          label: 'Modified Date',
          placeholder: 'Date of last modification',
          required: false,
          type: 'date'
        },
        */
        packages: service_order_packages_1.default,
        products: service_order_products_1.default,
        address: fiber_access_address_1.default,
        coordinates: fiber_access_coordinates_1.default,
        polygon: fiber_access_polygon_1.default,
    },
};
exports.default = schema;
