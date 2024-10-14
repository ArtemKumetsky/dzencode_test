"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_controller_1 = require("../controllers/products.controller");
exports.default = (router) => {
    // @ts-ignore
    router.get(`/products`, products_controller_1.getProducts);
    // @ts-ignore
    router.delete(`/products/:id`, products_controller_1.deleteProduct);
};
