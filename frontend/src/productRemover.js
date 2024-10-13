// server/routes/products.js
const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

// Видалення продукту за його ID
router.delete("/products/:id", async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id)
    if (result) {
      res.status(200).json({ message: "Product deleted successfully" })
    } else {
      res.status(404).json({ message: "Product not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})

module.exports = router
