"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import "./assets/main.css"
const store_1 = __importDefault(require("./store"));
const router_1 = __importDefault(require("./router"));
const translation_1 = import("./translation")
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
const vue_1 = require("vue");
// createApp(App, {
//   setup() {
//     const { t } = useI18n()
//     return { t }
//   },
// })
//   .use(store)
//   .use(i18n)
//   .use(router)
//   .mount("#app")
const app = (0, vue_1.createApp)({});
app.use(store_1.default).use(translation_1.i18n).use(router_1.default);
app.mount("#app");
