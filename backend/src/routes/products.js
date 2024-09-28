import { getProducts } from "../controllers/products.controller.js"

export default (router) => {
  router.get(`/products`, getProducts)
}
