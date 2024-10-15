import { Document, Schema, model } from "mongoose"

interface IGuarantee {
  start: string
  end: string
}

interface IPrice {
  value: number
  Symbol: string
}

interface IProduct extends Document {
  id: number
  serialNumber: number
  newness: boolean
  photo: string
  status: string
  title: string
  type: string
  specification: string
  guarantee: IGuarantee
  price: IPrice[]
  subdate: string
  date: string
  groupTitle: string
  clientName: string
  order: string
  name: string
}

const guaranteeSchema = new Schema<IGuarantee>({
  start: { type: String, required: true },
  end: { type: String, required: true },
})

const priceSchema = new Schema<IPrice>({
  value: { type: Number, required: true },
  Symbol: { type: String, required: true },
})

const productSchema = new Schema<IProduct>({
  id: { type: Number, required: true },
  serialNumber: { type: Number, required: true },
  newness: { type: Boolean, required: true },
  photo: { type: String, required: true },
  status: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  specification: { type: String, required: true },
  guarantee: { type: guaranteeSchema, required: true },
  price: { type: [priceSchema], required: true },
  subdate: { type: String, required: true },
  date: { type: String, required: true },
  groupTitle: { type: String, required: true },
  clientName: { type: String, required: true },
  order: { type: String, required: true },
  name: { type: String, required: true },
})

const Product = model<IProduct>("Product", productSchema)

export const findAllProducts = async (): Promise<IProduct[]> => Product.find({})

export default Product
