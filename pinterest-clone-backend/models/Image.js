const mongoose = require('mongoose');

// Image Schema
const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
  },
  tags: {
    type: [String],
  },
}, {
  timestamps: true, // To keep track of when the image was uploaded
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
