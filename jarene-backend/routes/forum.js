const express = require('express');
const ForumPost = require('../models/ForumPost');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

// Add Forum Post
router.post('/', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const forumPost = new ForumPost({ title, content, author: req.user.userId });
  try {
    await forumPost.save();
    res.status(201).send('Forum post added successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get All Forum Posts
router.get('/', async (req, res) => {
  try {
    const forumPosts = await ForumPost.find().populate('author', 'name');
    res.json(forumPosts);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
