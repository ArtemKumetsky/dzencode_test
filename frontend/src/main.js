import "./assets/main.css"
import storage from "@/storage.js"
import router from "@/router.js"
import { i18n } from "./translation.js"

// import Bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js" // bundle включає Popper

import { createApp } from "vue"
import App from "./App.vue"
import { useI18n } from "vue-i18n"

createApp(App, {
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
  .use(storage)
  .use(i18n)
  .use(router)
  .mount("#app")
