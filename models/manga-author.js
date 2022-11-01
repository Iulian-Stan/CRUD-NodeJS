const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mangaAuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('MangaAuthor', mangaAuthorSchema);