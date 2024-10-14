"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllProducts = void 0;
const mongoose_1 = require("mongoose");
const guaranteeSchema = new mongoose_1.Schema({
    start: { type: String, required: true },
    end: { type: String, required: true },
});
const priceSchema = new mongoose_1.Schema({
    value: { type: Number, required: true },
    Symbol: { type: String, required: true },
});
const productSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    serialNumber: { type: Number, required: true },
    newness: { type: Boolean, required: true },
    photo: { type: String, required: true },
    status: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    specification: { type: String, required: true },
    guarantee: { type: guaranteeSchema, required: true },
    price: { type: [priceSchema], required: true },
    subdate: { type: String, required: true },
    date: { type: String, required: true },
    groupTitle: { type: String, required: true },
    clientName: { type: String, required: true },
    order: { type: String, required: true },
    name: { type: String, required: true },
});
const Product = (0, mongoose_1.model)("Product", productSchema);
const findAllProducts = async () => Product.find({});
exports.findAllProducts = findAllProducts;
exports.default = Product;
