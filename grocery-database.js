import mongoose from "mongoose";
import dotenv from "dotenv";
import GroceryItem from "./models/grocery-items.js"; // updated import

dotenv.config();

const groceryChoices = [
  { groceryItem: "Apples", groceryType: "Fruit" },
  { groceryItem: "Bananas", groceryType: "Fruit" },
  { groceryItem: "Pears", groceryType: "Fruit" },
  { groceryItem: "Pineapple", groceryType: "Fruit" },
  { groceryItem: "Strawberries", groceryType: "Fruit" },
  { groceryItem: "Oranges", groceryType: "Fruit" },
  { groceryItem: "Blackberries", groceryType: "Fruit" },
  { groceryItem: "Broccoli", groceryType: "Vegetables" },
  { groceryItem: "Carrots", groceryType: "Vegetables" },
  { groceryItem: "Lettuce", groceryType: "Vegetables" },
  { groceryItem: "Cauliflower", groceryType: "Vegetables" },
  { groceryItem: "Cucumber", groceryType: "Vegetables" },
  { groceryItem: "Whole Wheat Cereal", groceryType: "Wheat and Grains" },
  { groceryItem: "Breads", groceryType: "Wheat and Grains" },
  { groceryItem: "Potatoes", groceryType: "Wheat and Grains" },
  { groceryItem: "Whole Milk", groceryType: "Dairy" },
  { groceryItem: "Greek Yoghurt", groceryType: "Dairy" },
  { groceryItem: "Cheese", groceryType: "Dairy" },
  { groceryItem: "Lean Ground Beef", groceryType: "Meat and Poultry" },
  { groceryItem: "Fish", groceryType: "Meat and Poultry" },
  { groceryItem: "Eggs", groceryType: "Meat and Poultry" },
  { groceryItem: "Beans and Nuts", groceryType: "Meat and Poultry" },
  { groceryItem: "Chicken", groceryType: "Meat and Poultry" },
  { groceryItem: "Chips", groceryType: "Fats" },
  { groceryItem: "Butter", groceryType: "Fats" },
  { groceryItem: "Soda", groceryType: "Fats" },
  { groceryItem: "Cake", groceryType: "Fats" },
  { groceryItem: "Cookies and Brownies", groceryType: "Fats" },
  { groceryItem: "Candy", groceryType: "Fats" },
  { groceryItem: "Chocolate", groceryType: "Fats" },
];

async function seedDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);

  await GroceryItem.deleteMany(); // clear
  await GroceryItem.insertMany(groceryChoices); // seed

  console.log(`Database seeded!`);
  await mongoose.connection.close();
  console.log(`Database connection closed.`);
}

seedDatabase().catch((error) => console.error("Error:", error.message));
