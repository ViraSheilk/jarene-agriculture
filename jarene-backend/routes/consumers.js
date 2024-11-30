const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');

// Add endpoints for consumers

// Example: Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
