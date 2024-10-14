import "./assets/main.css";
import store from "./store";
import router from "./router";
import { i18n } from "./translation";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { createApp } from "vue";
import App from "@/App.vue";
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
const app = createApp(App);
app.use(store).use(i18n).use(router);
app.mount("#app");
