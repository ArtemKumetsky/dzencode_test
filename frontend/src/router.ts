import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    name: "Orders",
    path: "/orders",
    component: () => import("./pages/orders/v-orders.vue"),
  },
  {
    name: "Products",
    path: "/products",
    component: () => import("./pages/products/v-products.vue"),
  },
  {
    name: "Not found",
    path: "/:pathMatch(.*)*",
    component: () => import("./pages/404/v-404.vue"),
  },
  {
    name: "Default",
    path: "",
    component: () => import("./pages/orders/v-orders.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
