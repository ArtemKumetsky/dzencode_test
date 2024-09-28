import { getOrders } from "../controllers/orders.controller.js"

export default (router) => {
  router.get(`/orders`, getOrders)
}
