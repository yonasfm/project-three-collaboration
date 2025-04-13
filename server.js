const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override"); 
const morgan = require("morgan"); 

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Grocery = require("./models/groceries.js");

app.use(express.urlencoded({ extended: false }));

// DB connection code

// Mount it along with our other middleware, ABOVE the routes
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
app.use(morgan("dev")); //new

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// routes below


// GET /groceries/new
app.get("/groceries/new", (req, res) => {
  res.render("groceries/new.ejs");
});

// POST /groceries
app.post("/groceries", async (req, res) => {
  if (req.body.isReadyToBuy === "on") {
    req.body.isReadyToBuy = true;
  } else {
    req.body.isReadyToBuy = false;
  }
  await Grocery.create(req.body);
  res.redirect("/groceries/new");
});

// POST /groceries/update
app.post("/groceries", async (req, res) => {
  if (req.body.isReadyToBuy === "on") {
    req.body.isReadyToBuy = true;
  } else {
    req.body.isReadyToBuy = false;
  }
  await Grocery.create(req.body);
  res.redirect("/groceries"); // redirect to index fruits
});

app.get("/groceries/:itemId", async (req, res) => {
  const foundItem = await Grocery.findById(req.params.itemIdId);
  res.render("groceries/show.ejs", { Grocery: foundItem });
});

app.delete("/groceries/:itemId", async (req, res) => {
  await Grocery.findByIdAndDelete(req.params.itemId);
  res.redirect("/groceries");
});

// GET localhost:3000/groceries/:itemId/edit
app.get("/groceries/:itemId/edit", async (req, res) => {
  const foundItem = await Grocery.findById(req.params.fruitId);
  console.log(foundItem);
  res.render("groceries/edit.ejs", {
    Grocery: foundItem,
  });
});


app.put("/groceries/:itemId", async (req, res) => {
  // Handle the 'isReadyToBuy' checkbox data
  if (req.body.isReadyToBuy === "on") {
    req.body.isReadyToBuy = true;
  } else {
    req.body.isReadyToBuy = false;
  }
  
  await Grocery.findByIdAndUpdate(req.params.itemId, req.body);

  res.redirect(`/groceries/${req.params.itemId}`);
});



