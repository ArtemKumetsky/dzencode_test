import orders_repo from "../repository/orders.js"

export const getOrders = async (req, res) => {
  console.log(req)
  return res.status(200).json(orders_repo).end()
}
