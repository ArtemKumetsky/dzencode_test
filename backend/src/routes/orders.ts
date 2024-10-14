import { Router } from "express"
import { getOrders, deleteOrder } from "../controllers/orders.controller"

export default (router: Router): void => {
  // @ts-ignore
  router.get(`/orders`, getOrders)
  // @ts-ignore
  router.delete(`/orders/:id`, deleteOrder)
}
