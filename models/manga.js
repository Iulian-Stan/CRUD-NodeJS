const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mangaSchema = new Schema({
  titles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MangaTitle',
      required: true
    }
  ],
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MangaAuthor'
    }
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MangaCategory'
    }
  ],
  update: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Manga', mangaSchema);