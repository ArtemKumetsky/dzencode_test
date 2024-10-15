import { Request, Response } from "express"
import { findAllProducts } from "../scheme/products_scheme"
import Product from "../scheme/products_scheme"

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found" })
    }
    res.json({ message: "Product successfully deleted!", product: deletedProduct })
  } catch (error) {
    console.error("Server error:", error)
    res.status(500).json({ message: "Server error", error })
  }
}

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const result = await findAllProducts()
    res.status(200).send(result)
  } catch (error) {
    console.error("Server error:", error)
    res.status(500).json({ message: "Server error", error })
  }
}
