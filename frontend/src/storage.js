import { createStore } from "vuex"
import { fetchOrders, fetchProducts } from "./api.js"

const storage = createStore({
  state() {
    return {
      Products: [],
      Orders: [],
    }
  },
  mutations: {
    setOrders(state, orders) {
      state.Orders = orders
    },
    setProducts(state, products) {
      state.Products = products
    },
  },
  actions: {
    async loadOrders({ commit }) {
      const orders = await fetchOrders()
      commit("setOrders", orders)
    },
    async loadProducts({ commit }) {
      const products = await fetchProducts()
      commit("setProducts", products)
    },
  },
  getters: {
    Products: (state) => state.Products,
    Orders: (state) => state.Orders,

    // Getter for receiving products in order
    getProductsByOrder: (state) => (productIds) => {
      return state.Products.filter((product) => productIds.includes(product.id))
    },

    // Function for correct declension of product counters ( 1 продукт, 2 продукта, 5 продуктов, ...)
    productCounterOutput: () => (productsCounter) => {
      if (productsCounter % 100 >= 11 && productsCounter % 100 <= 14) {
        return "Продуктов" // 11...19 case
      } else if (productsCounter % 10 === 1) {
        return "Продукт"
      } else if (productsCounter % 10 >= 2 && productsCounter % 10 <= 4) {
        return "Продукта"
      } else {
        return "Продуктов"
      }
    },
  },
})

export default storage
