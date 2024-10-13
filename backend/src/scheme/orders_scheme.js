import mongoose from "mongoose"

const order_scheme = new mongoose.Schema({
  id: Number,
  title: String,
  subdate: String,
  date: String,
  description: String,
  productIds: [Number],
  name: String,
})
const Order = mongoose.model("orders", order_scheme)

export const findAllOrders = async () => Order.find({})
export default Order
