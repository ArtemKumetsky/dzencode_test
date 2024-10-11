export function fetchOrders() {
  return fetch("http://localhost:3000/orders").then((res) => res.json())
}

export function fetchProducts() {
  return fetch("http://localhost:3000/products").then((res) => res.json())
}
