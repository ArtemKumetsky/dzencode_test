"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.deleteProduct = void 0;
const products_scheme_1 = require("../scheme/products_scheme");
const products_scheme_2 = __importDefault(require("../scheme/products_scheme"));
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await products_scheme_2.default.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.json({ message: "Product successfully deleted!", product: deletedProduct });
    }
    catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({ message: "Server error", error });
    }
};
exports.deleteProduct = deleteProduct;
const getProducts = async (req, res) => {
    try {
        const result = await (0, products_scheme_1.findAllProducts)();
        return res.status(200).send(result);
    }
    catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({ message: "Server error", error });
    }
};
exports.getProducts = getProducts;
