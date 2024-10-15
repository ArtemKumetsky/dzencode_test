import { Request, Response } from "express"
import { findAllOrders } from "../scheme/orders_scheme"
import Order from "../scheme/orders_scheme"

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    if (!deletedOrder) {
      res.status(404).json({ message: "Order not found" })
    }
    res.json({ message: "Order successfully deleted!", Order: deletedOrder })
  } catch (error) {
    console.error("Server error:", error)
    res.status(500).json({ message: "Server error", error })
  }
}

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const result = await findAllOrders()
    res.status(200).json(result)
  } catch (error) {
    console.error("Server error:", error)
    res.status(500).json({ message: "Server error", error })
  }
}
