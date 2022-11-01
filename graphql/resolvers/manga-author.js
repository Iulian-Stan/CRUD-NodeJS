const { MangaAuthor } = require('../../models');
const { toUnique, union } = require('./util');

const getMangaAuthors = async () => {
  try {
    return await MangaAuthor.find();
  } catch(err) {
    throw err;
  }
};

const findMangaAuthors = async ids => {
  try {
    return await MangaAuthor.find({ _id: { $in: ids }});
  } catch(err) {
    throw err;
  }
};

const upsertMangaAuthor = async name => {
  try {
    let author = await MangaAuthor.findOne({ name });
    if (author === null) {
      author = await MangaAuthor.create({ name });
    }
    return author;
  } catch(err) {
    throw err;
  }
};

const upsertMangaAuthors = async names => {
  try {
    return await Promise.all(toUnique(names).map(async name => await upsertMangaAuthor(name)));
  } catch(err) {
    throw err;
  }
};

const deleteMangaAuthor = async name => {
  try {
    return await MangaAuthor.deleteOne({ name });
  } catch(err) {
    throw err;
  }
};

module.exports = {
  getMangaAuthors,
  findMangaAuthors,
  upsertMangaAuthor,
  upsertMangaAuthors,
  deleteMangaAuthor
};