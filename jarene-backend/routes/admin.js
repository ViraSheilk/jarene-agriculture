const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const User = require('../Models/User');
const router = express.Router();

// Generate Reports
router.get('/report', [authMiddleware, adminMiddleware], async (req, res) => {
  // Report generation logic
  res.send('Report generated successfully');
});

// Manage Users
router.get('/users', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
