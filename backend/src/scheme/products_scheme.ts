import { Document, Schema, model } from "mongoose"

interface IProduct extends Document {
  id: number
  serialNumber: number
  newness: boolean
  photo: string
  status: string
  title: string
  type: string
  specification: string
  guarantee: Number
  price: Number
  date: string
  groupTitle: string
  clientName: string
  order: string
  name: string
}

const productSchema = new Schema<IProduct>({
  id: { type: Number, required: true },
  serialNumber: { type: Number, required: true },
  newness: { type: Boolean, required: true },
  photo: { type: String, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  specification: { type: String, required: true },
  guarantee: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: String, required: true },
  clientName: { type: String, required: true },
  name: { type: String, required: true },
})

const Product = model<IProduct>("Product", productSchema)

export const findAllProducts = async (): Promise<IProduct[]> => Product.find({})

export default Product
