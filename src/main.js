import './assets/main.css'
import storage from "@/storage.js";
import router from "@/router.js";

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js' // bundle включає Popper

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(storage).use(router).mount('#app')