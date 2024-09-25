import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        name: 'Orders',
        path: '/Orders',
        component: () => import ('./components/v-orders.vue')
    },
    {
        name: 'Products',
        path: '/products',
        component: () => import( './components/v-products.vue'),
    },
    {
        name: 'Not found',
        path: '/:pathMatch(.*)*',
        component: () => import( './components/404.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router