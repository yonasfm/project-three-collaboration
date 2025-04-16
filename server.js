const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const cors = require("cors");
const Grocery = require("./models/groceries.js");

const app = express(); //

// Middleware
app.use(cors()); // ✅ now works
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(morgan("dev"));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

// EJS setup
app.set("view engine", "ejs");

// ROUTES

// Render the form to create a new grocery
app.get("/groceries/new", (req, res) => {
  res.render("groceries/new.ejs");
});

// Create a new grocery item
app.post("/groceries", async (req, res) => {
  req.body.isReadyToBuy = req.body.isReadyToBuy === "on";
  await Grocery.create(req.body);
  res.redirect("/groceries");
});

// Show one grocery item
app.get("/groceries/:itemId", async (req, res) => {
  const foundItem = await Grocery.findById(req.params.itemId);
  res.render("groceries/show.ejs", { Grocery: foundItem });
});

// Delete a grocery item
app.delete("/groceries/:itemId", async (req, res) => {
  await Grocery.findByIdAndDelete(req.params.itemId);
  res.redirect("/groceries");
});

// Edit form
app.get("/groceries/:itemId/edit", async (req, res) => {
  const foundItem = await Grocery.findById(req.params.itemId);
  res.render("groceries/edit.ejs", { Grocery: foundItem });
});

// Update item
app.put("/groceries/:itemId", async (req, res) => {
  req.body.isReadyToBuy = req.body.isReadyToBuy === "on";
  await Grocery.findByIdAndUpdate(req.params.itemId, req.body);
  res.redirect(`/groceries/${req.params.itemId}`);
});

// Server listening
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
