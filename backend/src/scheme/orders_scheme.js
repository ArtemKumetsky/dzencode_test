"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllOrders = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    subdate: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    productIds: { type: [Number], required: true },
    name: { type: String, required: true },
});
const Order = (0, mongoose_1.model)("Order", orderSchema);
const findAllOrders = async () => await Order.find({});
exports.findAllOrders = findAllOrders;
exports.default = Order;
