"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_controller_1 = require("../controllers/orders.controller");
exports.default = (router) => {
    // @ts-ignore
    router.get(`/orders`, orders_controller_1.getOrders);
    // @ts-ignore
    router.delete(`/orders/:id`, orders_controller_1.deleteOrder);
};
