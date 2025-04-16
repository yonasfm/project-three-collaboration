import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import GroceryItem from './models/groceries.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());  // Allow requests from React frontend
app.use(express.json());  // Parse JSON requests
app.use(methodOverride('_method'));  // Handle PUT and DELETE requests
app.use(morgan('dev'));  // Log requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(`Connected to MongoDB: ${mongoose.connection.name}`))
  .catch((err) => console.error('MongoDB connection error:', err));

// API Routes (only JSON responses for frontend)
app.get('/api/groceries', async (req, res) => {
  try {
    const groceries = await GroceryItem.find();  // Fetch all grocery items from DB
    res.json(groceries);  // Send the data as JSON
  } catch (err) {
    console.error('Error fetching groceries:', err);
    res.status(500).json({ error: 'Failed to load groceries.' });
  }
});

app.get('/api/groceries/:id', async (req, res) => {
  try {
    const groceryItem = await GroceryItem.findById(req.params.id);
    if (!groceryItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(groceryItem);  // Send the grocery item as JSON
  } catch (err) {
    res.status(500).json({ error: 'Failed to load grocery item.' });
  }
});

app.post('/api/groceries', async (req, res) => {
  try {
    const { groceryItem, groceryType } = req.body;
    const newGrocery = new GroceryItem({ groceryItem, groceryType });
    await newGrocery.save();
    res.status(201).json(newGrocery);  // Respond with the created grocery item
  } catch (err) {
    res.status(400).json({ error: 'Failed to create grocery item.' });
  }
});

app.put('/api/groceries/:id', async (req, res) => {
  try {
    const { groceryItem, groceryType } = req.body;
    const updatedGrocery = await GroceryItem.findByIdAndUpdate(
      req.params.id,
      { groceryItem, groceryType },
      { new: true }
    );
    if (!updatedGrocery) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedGrocery);  // Respond with the updated grocery item
  } catch (err) {
    res.status(400).json({ error: 'Failed to update grocery item.' });
  }
});

app.delete('/api/groceries/:id', async (req, res) => {
  try {
    const deletedGrocery = await GroceryItem.findByIdAndDelete(req.params.id);
    if (!deletedGrocery) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Grocery item deleted successfully' });  // Respond with success message
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete grocery item.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
