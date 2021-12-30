"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContactNotes = void 0;
var en_US_1 = require("faker/locale/en_US");
var utils_1 = require("./utils");
var type = ['Email', 'Call', 'Call', 'Call', 'Call', 'Meeting', 'Reminder'];
var status = ['cold', 'cold', 'cold', 'warm', 'warm', 'hot', 'in-contract'];
var generateContactNotes = function (db) {
    return Array.from(Array(1200).keys()).map(function (id) {
        var contact = en_US_1.random.arrayElement(db.contacts);
        var date = (0, utils_1.randomDate)(new Date(contact.first_seen)).toISOString();
        contact.nb_notes++;
        contact.last_seen = date > contact.last_seen ? date : contact.last_seen;
        return {
            id: id,
            contact_id: contact.id,
            type: en_US_1.random.arrayElement(type),
            text: en_US_1.lorem.paragraphs(en_US_1.datatype.number({ min: 1, max: 4 })),
            date: date,
            sales_id: contact.sales_id,
            status: en_US_1.random.arrayElement(status),
        };
    });
};
exports.generateContactNotes = generateContactNotes;
