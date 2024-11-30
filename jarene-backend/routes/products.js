const express = require('express');
const Product = require('../Models/Product');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

// Add Product
router.post('/', authMiddleware, async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const product = new Product({ name, description, price, quantity, farmer: req.user.userId });
  try {
    await product.save();
    res.status(201).send('Product added successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get All Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('farmer', 'name');
    res.json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
