const { MangaCategory } = require('../../models');
const { toUnique, union } = require('./util');

const getMangaCategories = async () => {
  try {
    return await MangaCategory.find();
  } catch(err) {
    throw err;
  }
};

const findMangaCategories = async ids => {
  try {
    return await MangaCategory.find({ _id: { $in: ids }});
  } catch(err) {
    throw err;
  }
};

const upsertMangaCategory = async name => {
  try {
    let category = await MangaCategory.findOne({ name });
    if (category === null) {
      category = await MangaCategory.create({ name });
    }
    return category;
  } catch(err) {
    throw err;
  }
};

const upsertMangaCategories = async names => {
  try {
    return await Promise.all(toUnique(names).map(async name => await upsertMangaCategory(name)));
  } catch(err) {
    throw err;
  }
};

const deleteMangaCategory = async name => {
  try {
    return await MangaCategory.deleteOne({ name });
  } catch(err) {
    throw err;
  }
};

module.exports = {
  getMangaCategories,
  findMangaCategories,
  upsertMangaCategory,
  upsertMangaCategories,
  deleteMangaCategory
};