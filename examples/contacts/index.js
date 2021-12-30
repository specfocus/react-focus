"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-anonymous-default-export */
var ContactShow_1 = require("./ContactShow");
var ContactList_1 = require("./ContactList");
var ContactEdit_1 = require("./ContactEdit");
var ContactCreate_1 = require("./ContactCreate");
exports.default = {
    list: ContactList_1.ContactList,
    show: ContactShow_1.ContactShow,
    edit: ContactEdit_1.ContactEdit,
    create: ContactCreate_1.ContactCreate,
};
