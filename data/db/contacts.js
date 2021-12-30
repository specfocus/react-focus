"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContacts = void 0;
var en_US_1 = require("faker/locale/en_US");
var utils_1 = require("./utils");
var genders = ['male', 'female'];
var status = ['cold', 'cold', 'cold', 'warm', 'warm', 'hot', 'in-contract'];
var maxContacts = {
    1: 1,
    10: 4,
    50: 12,
    250: 25,
    500: 50,
};
var generateContacts = function (db) {
    var nbAvailblePictures = 223;
    var numberOfContacts = 0;
    return Array.from(Array(500).keys()).map(function (id) {
        var has_avatar = (0, utils_1.weightedBoolean)(25) && numberOfContacts < nbAvailblePictures;
        var gender = en_US_1.random.arrayElement(genders);
        var first_name = en_US_1.name.firstName(gender);
        var last_name = en_US_1.name.lastName();
        var email = en_US_1.internet.email(first_name, last_name);
        var avatar = has_avatar
            ? 'https://marmelab.com/posters/avatar-' +
                (223 - numberOfContacts) +
                '.jpeg'
            : undefined;
        var title = en_US_1.company.bsAdjective();
        if (has_avatar) {
            numberOfContacts++;
        }
        // choose company with people left to know
        var company;
        do {
            company = en_US_1.random.arrayElement(db.companies);
        } while (company.nb_contacts >= maxContacts[company.size]);
        company.nb_contacts++;
        var first_seen = (0, utils_1.randomDate)(new Date(company.created_at)).toISOString();
        var last_seen = first_seen;
        return {
            id: id,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            title: title.charAt(0).toUpperCase() + title.substr(1),
            company_id: company.id,
            email: email,
            phone_number1: en_US_1.phone.phoneNumber(),
            phone_number2: en_US_1.phone.phoneNumber(),
            background: en_US_1.lorem.sentence(),
            acquisition: en_US_1.random.arrayElement(['inbound', 'outbound']),
            avatar: avatar,
            first_seen: first_seen,
            last_seen: last_seen,
            has_newsletter: (0, utils_1.weightedBoolean)(30),
            status: en_US_1.random.arrayElement(status),
            tags: en_US_1.random
                .arrayElements(db.tags, en_US_1.random.arrayElement([0, 0, 0, 1, 1, 2]))
                .map(function (tag) { return tag.id; }),
            sales_id: company.sales_id,
            nb_notes: 0,
        };
    });
};
exports.generateContacts = generateContacts;
