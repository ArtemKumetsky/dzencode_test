import { Request, Response } from "express"
import { findAllProducts } from "../scheme/products_scheme"
import Product from "../scheme/products_scheme"

export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }
    return res.json({ message: "Product successfully deleted!", product: deletedProduct })
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ message: "Server error", error })
  }
}

export const getProducts = async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await findAllProducts()
    return res.status(200).send(result)
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ message: "Server error", error })
  }
}
