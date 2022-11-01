const { Manga } = require('../../models');
const { union } = require('./util');

const { upsertMangaTitles } = require('./manga-title');
const { upsertMangaAuthors } = require('./manga-author');
const { upsertMangaCategories } = require('./manga-category');

const getMangas = async () => {
  try {
    return await Manga.find();
  } catch(err) {
      throw err;
  }
};

const upsertManga = async ({ titles, authors, categories, update }) => {
  try {
    let titlesIds = (await upsertMangaTitles(titles)).map(title => title.id);
    let authorsIds = (await upsertMangaAuthors(authors)).map(author => author.id);
    let categoriesIds = (await upsertMangaCategories(categories)).map(category => category.id);
    let manga = await Manga.findOne({ titles: { $in: titlesIds }});
    if (manga === null) {
      manga = new Manga({});
    }
    manga.titles = union(manga.titles.map(title => title._id.toString()), titlesIds);
    manga.authors = union(manga.authors.map(author => author._id.toString()), authorsIds);
    manga.categories = union(manga.categories.map(category => category._id.toString()), categoriesIds);
    manga.update = update;
    return await manga.save();
  } catch(err) {
    throw err;
  } 
};

module.exports = {
  getMangas,
  upsertManga
};