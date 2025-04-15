const mongoose = require('mongoose')
const dotenv = require('dotenv')
const groceryChoice = i require('./models/grocery-items.js')
dotenv.config()


const groceryChoices = [
    { groceryItem: "Apples", groceryType: "Fruit"},
    { groceryItem: "Bananas", groceryType: "Fruit"},
    { groceryItem: "Pears", groceryType: "Fruit"},
    { groceryItem: "Pineapple", groceryType: "Fruit"},
    { groceryItem: "Strawberries", groceryType: "Fruit"},
    { groceryItem: "Oranges", groceryType: "Fruit"},
    { groceryItem: "Blackberries", groceryType: "Fruit"},
    { groceryItem: "Broccoli", groceryType: "Vegetables"},
    { groceryItem: "Carrots", groceryType: "Vegetables"},
    { groceryItem: "Lettuce", groceryType: "Vegetables"},
    { groceryItem: "Cauliflower", groceryType: "Vegetables"},
    { groceryItem: "Cucumber", groceryType: "Vegetables"},
    { groceryItem: "Whole Wheat Cereal", groceryType: "Wheat and Grains"},
    { groceryItem: "Breads", groceryType: "Wheat and Grains"},
    { groceryItem: "Potatoes", groceryType: "Wheat and Grains"},
    { groceryItem: "Whole Milk", groceryType: "Dairy"},
    { groceryItem: "Greek Yoghurt", groceryType: "Dairy"},
    { groceryItem: "Cheese", groceryType: "Dairy"},
    { groceryItem: "Lean Ground Beef", groceryType: "Meat and Poultry"},
    { groceryItem: "Fish", groceryType: "Meat and Poultry"},
    { groceryItem: "Eggs", groceryType: "Meat and Poultry"},
    { groceryItem: "Beans and Nuts", groceryType: "Meat and Poultry"},
    { groceryItem: "Chicken", groceryType: "Meat and Poultry"},
    { groceryItem: "Chips", groceryType: "Fats"},
    { groceryItem: "Butter", groceryType: "Fats"},
    { groceryItem: "Soda", groceryType: "Fats"},
    { groceryItem: "Cake", groceryType: "Fats"},
    { groceryItem: "Cookies and Brownies", groceryType: "Fats"},
    { groceryItem: "Candy", groceryType: "Fats"},
    { groceryItem: "Chocolate", groceryType: "Fats"},

]


async function seedDatabase() {
    mongoose.connect(process.env.MONGODB_URI)
    await groceryChoice.deleteMany() // Clears previous database data before inserting new data
    await groceryChoice.insertMany(groceryChoices) // Inserts Game and Console data array
    console.log(`Database reached!`)
    await mongoose.connection.close() // Closes connection 
    console.log(`Database closed.`)
}

seedDatabase().catch(error => console.error('Error:', error.message))

