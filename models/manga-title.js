const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mangaTitleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('MangaTitle', mangaTitleSchema);