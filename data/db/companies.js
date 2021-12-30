"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCompanies = void 0;
var en_US_1 = require("faker/locale/en_US");
var utils_1 = require("./utils");
var sectors = [
    'Communication Services',
    'Consumer Discretionary',
    'Consumer Staples',
    'Energy',
    'Financials',
    'Health Care',
    'Industrials',
    'Information Technology',
    'Materials',
    'Real Estate',
    'Utilities',
];
var sizes = [1, 10, 50, 250, 500];
var regex = /\W+/;
var generateCompanies = function (db) {
    return Array.from(Array(55).keys()).map(function (id) {
        var name = en_US_1.company.companyName();
        return {
            id: id,
            name: name,
            logo: "/logos/".concat(id, ".png"),
            sector: en_US_1.random.arrayElement(sectors),
            size: en_US_1.random.arrayElement(sizes),
            linkedIn: "https://www.linkedin.com/company/".concat(name
                .toLowerCase()
                .replace(regex, '_')),
            website: en_US_1.internet.url(),
            phone_number: en_US_1.phone.phoneNumber(),
            address: en_US_1.address.streetAddress(),
            zipcode: en_US_1.address.zipCode(),
            city: en_US_1.address.city(),
            stateAbbr: en_US_1.address.stateAbbr(),
            nb_contacts: 0,
            nb_deals: 0,
            // at least 1/3rd of companies for Jane Doe
            sales_id: en_US_1.datatype.number(2) === 0 ? 0 : en_US_1.random.arrayElement(db.sales).id,
            created_at: (0, utils_1.randomDate)().toISOString(),
        };
    });
};
exports.generateCompanies = generateCompanies;
