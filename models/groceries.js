// models/grocery-items.js
import mongoose from "mongoose";

const groceryItemSchema = new mongoose.Schema({
  groceryItem: String,
  groceryType: String,
});

const GroceryItem = mongoose.model("GroceryItem", groceryItemSchema);

export default GroceryItem;
