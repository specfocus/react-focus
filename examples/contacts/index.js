"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-anonymous-default-export */
const ContactShow_1 = require("./ContactShow");
const ContactList_1 = require("./ContactList");
const ContactEdit_1 = require("./ContactEdit");
const ContactCreate_1 = require("./ContactCreate");
exports.default = {
    list: ContactList_1.ContactList,
    show: ContactShow_1.ContactShow,
    edit: ContactEdit_1.ContactEdit,
    create: ContactCreate_1.ContactCreate,
};
