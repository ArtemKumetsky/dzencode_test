import axios from "axios"
import { IOrder, IProduct } from "./interfaces"
const hostURL = "http://localhost:3000"

export function fetchOrders(): Promise<IOrder[]> {
  return axios.get<IOrder[]>(`${hostURL}/orders`).then((res) => res.data)
}

export function fetchProducts(): Promise<IProduct[]> {
  return axios.get<IProduct[]>(`${hostURL}/products`).then((res) => res.data)
}
