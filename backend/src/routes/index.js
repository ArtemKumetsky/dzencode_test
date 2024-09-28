import { Router, raw } from "express"
import orders from "./orders.js"
import products from "./products.js"

const router = new Router()

export default () => {
  orders(router)
  products(router)

  return router
}
