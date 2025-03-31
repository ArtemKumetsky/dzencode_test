import { getProducts, deleteProduct, addProduct } from "../controllers/products.controller"
import { Router } from "express"

export default (router: Router): void => {
  router.get(`/products`, getProducts)
  router.delete(`/products/:id`, deleteProduct)
  router.post('/products', addProduct)
}
