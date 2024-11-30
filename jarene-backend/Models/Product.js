const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
