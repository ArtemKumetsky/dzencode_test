import { createStore } from "vuex"

const storage = createStore({
  state() {
    return {
      Products: [],
      Orders: [],
    }
  },
  mutations: {
    SET_ORDERS(state, payload) {
      state.Orders = payload
    },
    SET_PRODUCTS(state, payload) {
      state.Products = payload
    },
  },
  actions: {
    fetchOrders({ commit }) {
      fetch("http://localhost:3000/orders")
        .then(async (response) => {
          const data = await response.json()
          commit("SET_ORDERS", data)
          return data
        })
        .catch((error) => {
          console.log(error)
        })
    },

    fetchProducts({ commit }) {
      fetch("http://localhost:3000/products")
        .then(async (response) => {
          const data = await response.json()
          commit("SET_PRODUCTS", data)
          return data
        })
        .catch((error) => {
          console.log(error)
        })
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
