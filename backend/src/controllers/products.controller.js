import products_repo from "../repository/products.js"

export const getProducts = async (req, res) => {
  return res.status(200).send(products_repo)
}
