import axios from "axios";
const hostURL = "http://localhost:3000";
export function fetchOrders() {
    return axios.get(`${hostURL}/orders`).then((res) => res.data);
}
export function fetchProducts() {
    return axios.get(`${hostURL}/products`).then((res) => res.data);
}
