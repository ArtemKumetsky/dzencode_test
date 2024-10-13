import { getOrders, deleteOrder } from "../controllers/orders.controller.js"

export default (router) => {
  router.get(`/orders`, getOrders)
  router.delete(`/orders/:id`, deleteOrder)
}
