import { Request, Response } from "express"
import { findAllOrders } from "../scheme/orders_scheme"
import Order from "../scheme/orders_scheme"

export const deleteOrder = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" })
    }
    return res.json({ message: "Order successfully deleted!", Order: deletedOrder })
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ message: "Server error", error })
  }
}

export const getOrders = async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await findAllOrders()
    return res.status(200).json(result)
  } catch (error) {
    console.error("Server error:", error)
    return res.status(500).json({ message: "Server error", error })
  }
}
