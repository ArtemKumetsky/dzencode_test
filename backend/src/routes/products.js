import { getProducts, deleteProduct } from "../controllers/products.controller.js"

export default (router) => {
  router.get(`/products`, getProducts)

  router.delete(`/products/:id`, deleteProduct)
}
