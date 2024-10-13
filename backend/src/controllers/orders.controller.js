import { findAllOrders } from "../scheme/orders_scheme.js"
import Order from "../scheme/orders_scheme.js"

export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" })
    }
    res.json({ message: "Order successfully deleted!", Order: deletedOrder })
  } catch (error) {
    console.error("Server error:", error)
    res.status(500).json({ message: "Server error", error })
  }
}
export const getOrders = async (req, res) => {
  const result = await findAllOrders()
  return res.status(200).json(result).end()
}
