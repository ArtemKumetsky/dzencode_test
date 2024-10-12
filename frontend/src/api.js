import axios from "axios"

export function fetchOrders() {
  return axios.get("http://localhost:3000/orders").then((res) => res.data)
}

export function fetchProducts() {
  return axios.get("http://localhost:3000/products").then((res) => res.data)
}
