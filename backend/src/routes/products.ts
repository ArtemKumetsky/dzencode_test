import { getProducts, deleteProduct } from "../controllers/products.controller"
import { Router } from "express"

export default (router: Router): void => {
  // @ts-ignore
  router.get(`/products`, getProducts)
  // @ts-ignore
  router.delete(`/products/:id`, deleteProduct)
}
