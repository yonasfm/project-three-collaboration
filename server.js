require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const cors = require("cors");
const Grocery = require("./models/groceries.js");

const app = express();

// Middleware
app.use(cors()); // Allow frontend access
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`✅ Connected to MongoDB: ${mongoose.connection.name}`);
});

// --- API Routes ---

// Get all groceries
app.get("/groceries", async (req, res) => {
  try {
    const groceries = await Grocery.find();
    res.json(groceries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single grocery item
app.get("/groceries/:itemId", async (req, res) => {
  try {
    const item = await Grocery.findById(req.params.itemId);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new grocery item
app.post("/groceries", async (req, res) => {
  try {
    const newItem = await Grocery.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a grocery item
app.put("/groceries/:itemId", async (req, res) => {
  try {
    const updatedItem = await Grocery.findByIdAndUpdate(
      req.params.itemId,
      req.body,
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a grocery item
app.delete("/groceries/:itemId", async (req, res) => {
  try {
    await Grocery.findByIdAndDelete(req.params.itemId);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("🚀 Server listening on port 3000");
});
