"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.deleteOrder = void 0;
const orders_scheme_1 = require("../scheme/orders_scheme");
const orders_scheme_2 = __importDefault(require("../scheme/orders_scheme"));
const deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await orders_scheme_2.default.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.json({ message: "Order successfully deleted!", Order: deletedOrder });
    }
    catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({ message: "Server error", error });
    }
};
exports.deleteOrder = deleteOrder;
const getOrders = async (req, res) => {
    try {
        const result = await (0, orders_scheme_1.findAllOrders)();
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({ message: "Server error", error });
    }
};
exports.getOrders = getOrders;
