import { getOrders } from "../controllers/orders.controller.js"

export default (router) => {
  console.log("1")
  router.get(`/orders`, getOrders)
}
