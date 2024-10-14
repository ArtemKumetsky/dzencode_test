import { createStore } from "vuex";
import { fetchOrders, fetchProducts } from "./api";
import axios from "axios";
const store = createStore({
    state() {
        return {
            Products: [],
            Orders: [],
        };
    },
    mutations: {
        setOrders(state, orders) {
            state.Orders = orders;
        },
        setProducts(state, products) {
            state.Products = products;
        },
        removeProduct(state, targetId) {
            state.Products = state.Products.filter((product) => product._id !== targetId);
        },
        removeOrder(state, targetId) {
            state.Orders = state.Orders.filter((order) => order._id !== targetId);
        },
    },
    actions: {
        async loadOrders({ commit }) {
            const orders = await fetchOrders();
            commit("setOrders", orders);
        },
        async loadProducts({ commit }) {
            const products = await fetchProducts();
            commit("setProducts", products);
        },
        async deleteProduct({ commit }, targetId) {
            try {
                await axios.delete(`http://localhost:3000/products/${targetId}`);
                commit("removeProduct", targetId);
            }
            catch (error) {
                console.error("Error deleting product:", error);
            }
        },
        async deleteOrder({ commit, dispatch, getters }, targetItem) {
            try {
                // converting IDs from array to Mongo unique IDs
                const mongoIds = getters.getProductsByOrder(targetItem.productIds);
                for (const productId of mongoIds) {
                    await dispatch("deleteProduct", productId._id);
                }
                await axios.delete(`http://localhost:3000/orders/${targetItem._id}`);
                commit("removeOrder", targetItem._id);
            }
            catch (error) {
                console.error("Error deleting order:", error);
            }
        },
    },
    getters: {
        Products: (state) => state.Products,
        Orders: (state) => state.Orders,
        // Getter for receiving products in order
        getProductsByOrder: (state) => (productIds) => {
            return state.Products.filter((product) => productIds.includes(product.id));
        },
        // Function for correct declension of product counters ( 1 продукт, 2 продукта, 5 продуктов, ...)
        productCounterOutput: () => (productsCounter) => {
            if (productsCounter % 100 >= 11 && productsCounter % 100 <= 14) {
                return "Продуктов"; // 11...19 case
            }
            else if (productsCounter % 10 === 1) {
                return "Продукт";
            }
            else if (productsCounter % 10 >= 2 && productsCounter % 10 <= 4) {
                return "Продукта";
            }
            else {
                return "Продуктов";
            }
        },
    },
});
export default store;
