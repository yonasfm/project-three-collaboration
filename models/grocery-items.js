const mongoose = require('mongoose')

const groceryItemSchema = new mongoose.Schema ({
    groceryItem: String, 
    groceryType: String
})

// Creates model in MongoDB
const groceryChoice = mongoose.model("Groceryitem", groceryItemSchema )

module.exports = groceryChoice
