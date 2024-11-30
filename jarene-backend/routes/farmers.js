const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const Product = require('../Models/Product');

// Add endpoints for farmers

// Example: Get all products for a specific farmer
router.get('/products', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find({ farmer: req.user.userId });
    res.json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
