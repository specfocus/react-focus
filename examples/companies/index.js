"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-anonymous-default-export */
const CompanyList_1 = require("./CompanyList");
const CompanyCreate_1 = require("./CompanyCreate");
const CompanyShow_1 = require("./CompanyShow");
const CompanyEdit_1 = require("./CompanyEdit");
exports.default = {
    list: CompanyList_1.CompanyList,
    create: CompanyCreate_1.CompanyCreate,
    edit: CompanyEdit_1.CompanyEdit,
    show: CompanyShow_1.CompanyShow,
};
