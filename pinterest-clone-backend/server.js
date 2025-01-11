const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Image = require('./models/Image');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Routes

// Add image
app.post('/api/images', async (req, res) => {
  const { title, description, url, tags } = req.body;

  // Check if any required field is missing
  if (!title || !description || !url) {
    return res.status(400).json({ message: 'Title, description, and URL are required fields.' });
  }

  try {
    // Create new image document
    const newImage = new Image({
      title,
      description,
      url,
      tags,
    });

    // Save image to MongoDB
    const savedImage = await newImage.save();
    res.status(201).json(savedImage); // Return the saved image data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving image' });
  }
});

// Get all images
app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find(); // Fetch all images
    if (!images.length) {
      return res.status(200).json([]); // Return an empty array if no images found
    }
    res.status(200).json(images); // Return the images as a response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching images' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
