import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        name: 'Arrivals',
        path: '/',
        component: () => import ('./components/v-arrival.vue')
    },
    {
        name: 'Products',
        path: '/products',
        component: () => import( './components/v-products.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router