import express, { Router } from "express"
import orders from "./orders"
import products from "./products"

const router = express.Router()

export default (): Router => {
  orders(router)
  products(router)

  return router
}
