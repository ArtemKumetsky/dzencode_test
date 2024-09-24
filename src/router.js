import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        name: 'Arrivals',
        path: '/',
        component: () => import ('./components/v-orders.vue')
    },
    {
        name: 'Products',
        path: '/products',
        component: () => import( './components/v-products.vue'),
    },
    {
        name: 'Groups',
        path: '/groups',
        component: () => import( './components/404.vue'),
    },
    {
        name: 'Users',
        path: '/users',
        component: () => import( './components/404.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router