import { Router } from "express"
import { getOrders, deleteOrder } from "../controllers/orders.controller"

export default (router: Router): void => {
  router.get(`/orders`, getOrders)
  router.delete(`/orders/:id`, deleteOrder)
}
