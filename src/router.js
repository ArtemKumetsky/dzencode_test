import { createRouter, createWebHistory } from 'vue-router'
import ArrivalComponent from './components/v-arrival.vue'

const routes = [{
    name: 'Arrivals',
    path: '/',
    component: ArrivalComponent
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router