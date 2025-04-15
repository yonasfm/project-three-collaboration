const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;
