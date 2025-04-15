const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require("morgan");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

const Grocery = require("./models/groceries.js");

// GET all groceries
app.get("/api/groceries", async (req, res) => {
  const groceries = await Grocery.find();
  res.json(groceries);
});

// GET one grocery item
app.get("/api/groceries/:id", async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);
    res.json(grocery);
  } catch (err) {
    res.status(404).json({ error: "Grocery not found" });
  }
});

// POST - Create a new grocery
app.post("/api/groceries", async (req, res) => {
  try {
    const newGrocery = await Grocery.create(req.body);
    res.status(201).json(newGrocery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT - Update a grocery
app.put("/api/groceries/:id", async (req, res) => {
  try {
    const updatedGrocery = await Grocery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedGrocery);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Remove a grocery
app.delete("/api/groceries/:id", async (req, res) => {
  try {
    await Grocery.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
