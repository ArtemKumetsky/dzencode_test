"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18n = void 0;
const vue_i18n_1 = require("vue-i18n");
const en_json_1 = __importDefault(require("./assets/translations/en.json"));
const ru_json_1 = __importDefault(require("./assets/translations/ru.json"));
const messages = {
    en: en_json_1.default,
    ru: ru_json_1.default,
};
exports.i18n = (0, vue_i18n_1.createI18n)({
    legacy: false,
    locale: localStorage.getItem("locale") || "ru",
    messages,
});
