import { findAllProducts } from "../scheme/products_scheme.js"
import Product from "../scheme/products_scheme.js"

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.json({ message: "Product successfully deleted!", product: deletedProduct })
  } catch (error) {
    console.error("Server error:", error)
    res.status(500).json({ message: "Server error", error })
  }
}
export const getProducts = async (req, res) => {
  const result = await findAllProducts()
  return res.status(200).send(result)
}
