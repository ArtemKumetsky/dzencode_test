import './assets/main.css'
import store from "@/store.js";

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js' // bundle включає Popper

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(store).mount('#app')