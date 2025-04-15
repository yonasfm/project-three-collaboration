const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
  foodItem: String,
  isReadyToBuy: Boolean,
});

const Grocery = mongoose.model("Grocery", grocerySchema); 

module.exports = Grocery;