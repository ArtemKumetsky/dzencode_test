import { Document, Schema, model } from "mongoose"

export interface IOrder extends Document {
  id: number
  title: string
  subdate: string
  date: string
  description: string
  productIds: number[]
  name: string
}

const orderSchema = new Schema<IOrder>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  subdate: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  productIds: { type: [Number], required: true },
  name: { type: String, required: true },
})

const Order = model<IOrder>("Order", orderSchema)

export const findAllOrders = async (): Promise<IOrder[]> => await Order.find({})

export default Order
