const { MangaTitle } = require('../../models');
const { toUnique, union } = require('./util');

const getMangaTitles = async () => {
  try {
    return await MangaTitle.find();
  } catch(err) {
    throw err;
  }
};

const findMangaTitles = async ids => {
  try {
    return await MangaTitle.find({ _id: { $in: ids }});
  } catch(err) {
    throw err;
  }
};

const upsertMangaTitle = async name => {
  try {
    let title = await MangaTitle.findOne({ name });
    if (title === null) {
      title = await MangaTitle.create({ name });
    }
    return title;
  } catch(err) {
    throw err;
  }
};

const upsertMangaTitles = async names => {
  try {
    return await Promise.all(toUnique(names).map(async name => upsertMangaTitle(name)));
  } catch(err) {
    throw err;
  }
};

const deleteMangaTitle = async name => {
  try {
    return await MangaTitle.deleteOne({ name });
  } catch(err) {
    throw err;
  }
};

module.exports = {
  getMangaTitles,
  findMangaTitles,
  upsertMangaTitle,
  upsertMangaTitles,
  deleteMangaTitle
};