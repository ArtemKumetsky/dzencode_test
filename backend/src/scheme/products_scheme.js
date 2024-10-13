import mongoose from "mongoose"

const guaranteeSchema = new mongoose.Schema({
  start: String,
  end: String,
})
const priceSchema = new mongoose.Schema({
  value: Number,
  Symbol: String,
})
const products_scheme = new mongoose.Schema({
  id: Number,
  serialNumber: Number,
  newness: Boolean,
  photo: String,
  status: String,
  title: String,
  type: String,
  specification: String,
  guarantee: guaranteeSchema,
  price: [priceSchema],
  subdate: String,
  date: String,
  groupTitle: String,
  clientName: String,
  order: String,
  name: String,
})
const Product = mongoose.model("products", products_scheme)

export const findAllProducts = async () => Product.find({})
export default Product
