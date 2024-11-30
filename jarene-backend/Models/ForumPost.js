const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

const ForumPost = mongoose.model('ForumPost', forumPostSchema);
module.exports = ForumPost;
