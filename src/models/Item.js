// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  // Other item-related fields
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;