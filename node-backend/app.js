// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./data/items'); // Make sure this file exists

const app = express();

// Middleware
app.use(bodyParser.json());

// CORS headers to allow frontend calls from any domain
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes

// Get all items
app.get('/items', async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    res.json({ items: storedItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get items' });
  }
});

// Get a single item by id
app.get('/items/:id', async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get item' });
  }
});

// Add a new item
app.post('/items', async (req, res) => {
  try {
    const existingItems = await getStoredItems();
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({ message: 'Stored new item', item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to store item' });
  }
});

// Listen on dynamic port for cloud deployment
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
